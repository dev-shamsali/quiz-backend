import QuizAttempt from '../models/QuizAttempt.js';
import Question from '../models/Question.js';
import User from '../models/User.js';
import Settings from '../models/Settings.js';
import { getRandomQuestions, getAnswerMap, calculateResults, SECTION_CONFIG, TOTAL_DURATION_MINUTES } from '../services/quizService.js';
import { gradePSAnswers } from '../services/Geminigrading.js';
import ApiError from '../utils/ApiError.js';
import { sendResponse, asyncHandler } from '../utils/ApiResponse.js';
import ActivityLog from '../models/ActivityLog.js';

const TOTAL_DURATION_SECONDS = TOTAL_DURATION_MINUTES * 60;

// ── startQuiz ─────────────────────────────────────────────────────────────
const startQuiz = asyncHandler(async (req, res, next) => {
  const settings = await Settings.getSingleton();
  if (!settings.quizAllowed) {
    return next(new ApiError('Quiz is not currently open. Please wait for the administrator to open the quiz.', 403));
  }

  // ── Resume in-progress attempt ─────────────────────────────────────────
  const activeAttempt = await QuizAttempt.findOne({
    student: req.user._id,
    status: 'in-progress',
  });

  if (activeAttempt) {
    const questions = await Question.find(
      { _id: { $in: activeAttempt.questions.map((q) => q.question) } },
      { correctAnswer: 0, explanation: 0 }
    ).lean();

    const questionsWithSection = questions.map((q) => {
      const sIdx = SECTION_CONFIG.findIndex((s) => s.categories.includes(q.category));
      return { ...q, _sectionIndex: sIdx === -1 ? 0 : sIdx };
    });

    questionsWithSection.sort((a, b) => a._sectionIndex - b._sectionIndex);

    const elapsedSeconds       = Math.floor((Date.now() - new Date(activeAttempt.startTime).getTime()) / 1000);
    const timeLeftSeconds      = Math.max(0, TOTAL_DURATION_SECONDS - elapsedSeconds);

    let elapsed                = elapsedSeconds;
    let activeSection          = 0;
    let sectionTimeLeftSeconds = SECTION_CONFIG[0].durationMinutes * 60;

    for (let i = 0; i < SECTION_CONFIG.length; i++) {
      const secDur = SECTION_CONFIG[i].durationMinutes * 60;
      if (elapsed <= secDur) {
        activeSection          = i;
        sectionTimeLeftSeconds = secDur - elapsed;
        break;
      }
      elapsed      -= secDur;
      activeSection = i + 1;
    }
    activeSection = Math.min(activeSection, SECTION_CONFIG.length - 1);

    return sendResponse(res, 200, 'Resuming existing quiz', {
      attemptId:             activeAttempt._id,
      questions:             questionsWithSection,
      startTime:             activeAttempt.startTime,
      timeLeftSeconds,
      activeSectionIndex:    activeSection,
      sectionTimeLeftSeconds,
      sectionConfig:         SECTION_CONFIG,
    });
  }

  // ── Fresh attempt ──────────────────────────────────────────────────────
  const student   = await User.findById(req.user._id).select('seenQuestions').lean();
  const seenIds   = (student.seenQuestions || []).map((id) => id.toString());
  const questions = await getRandomQuestions(seenIds);
  const questionIds = questions.map((q) => q._id);

  const attempt = await QuizAttempt.create({
    student: req.user._id,
    questions: questions.map((q) => ({
      question:      q._id,
      correctAnswer: '',
      difficulty:    q.difficulty,
      category:      q.category,
    })),
    startTime: new Date(),
    status: 'in-progress',
  });

  await User.findByIdAndUpdate(req.user._id, {
    $addToSet: { seenQuestions: { $each: questionIds } },
  });

  const sessionId = req.headers['x-session-id'];
  if (sessionId) {
    ActivityLog.pushEvent(sessionId, {
      event:   'quiz_started',
      reason:  'Quiz started',
      attempt: attempt._id,
    }).catch((err) => console.error('ActivityLog pushEvent failed:', err.message));
  }

  sendResponse(res, 201, 'Quiz started', {
    attemptId:              attempt._id,
    questions,
    startTime:              attempt.startTime,
    timeLeftSeconds:        TOTAL_DURATION_SECONDS,
    activeSectionIndex:     0,
    sectionTimeLeftSeconds: SECTION_CONFIG[0].durationMinutes * 60,
    sectionConfig:          SECTION_CONFIG,
  });
});

// ── submitQuiz ────────────────────────────────────────────────────────────
const submitQuiz = asyncHandler(async (req, res, next) => {
  const { attemptId } = req.params;
  const { answers, timeTaken, violation } = req.body;

  if (!answers || !Array.isArray(answers)) {
    return next(new ApiError('Answers array is required', 400));
  }

  const attempt = await QuizAttempt.findOne({
    _id: attemptId,
    student: req.user._id,
    status: 'in-progress',
  });

  if (!attempt) {
    return next(new ApiError('Quiz attempt not found or already submitted', 404));
  }

  const questionIds = attempt.questions.map((q) => q.question);
  const answerMap   = await getAnswerMap(questionIds);

  // Step 1: calculate MCQ results (PS marked false initially)
  let { results, correctAnswers, breakdown, categoryBreakdown } = calculateResults(answers, answerMap);

  // Step 2: Gemini grades PS answers — updates isCorrect for each PS result
  const psResults = results.filter((r) => {
    const qId = r.question.toString();
    return answerMap[qId]?.category === 'Problem Solving';
  });

  if (psResults.length > 0) {
    console.log(`Grading ${psResults.length} PS answer(s) with Gemini...`);
    const { updatedResults, psCorrectCount } = await gradePSAnswers(results, answerMap);
    results        = updatedResults;
    correctAnswers += psCorrectCount;

    // Update breakdown and categoryBreakdown for PS questions that passed
    results.forEach((r) => {
      const qId    = r.question.toString();
      const answer = answerMap[qId];
      if (!answer || answer.category !== 'Problem Solving') return;
      if (!r.isCorrect) return;

      // Update difficulty breakdown
      breakdown[r.difficulty].correct++;

      // Update category breakdown
      const catEntry = categoryBreakdown.find((c) => c.category === 'Problem Solving');
      if (catEntry) catEntry.correct++;
    });

    console.log(`PS grading complete. ${psCorrectCount} PS answer(s) marked correct.`);
  }

  const totalQ     = attempt.questions.length || 300;
  const percentage = Math.round((correctAnswers / totalQ) * 100);

  attempt.questions         = results;
  attempt.correctAnswers    = correctAnswers;
  attempt.score             = correctAnswers;
  attempt.totalQuestions    = totalQ;
  attempt.percentage        = percentage;
  attempt.timeTaken         = timeTaken || 0;
  attempt.endTime           = new Date();
  attempt.status            = violation ? 'abandoned' : 'completed';
  attempt.breakdown         = breakdown;
  attempt.categoryBreakdown = categoryBreakdown;
  attempt.grade             = attempt.calculateGrade();
  attempt.violation         = violation || false;

  await attempt.save();

  if (!violation) {
    const user      = await User.findById(req.user._id);
    const prevTotal = user.totalAttempts;
    const prevAvg   = user.averageScore;
    user.totalAttempts = prevTotal + 1;
    user.averageScore  = Math.round(((prevAvg * prevTotal) + percentage) / (prevTotal + 1));
    await user.save({ validateBeforeSave: false });
  }

  const sessionId = req.headers['x-session-id'];
  if (sessionId) {
    ActivityLog.pushEvent(sessionId, {
      event:   violation ? 'quiz_abandoned' : 'quiz_completed',
      reason:  violation ? 'Auto-submitted due to violation' : 'Student submitted quiz',
      attempt: attempt._id,
    }).catch((err) => console.error('ActivityLog pushEvent failed:', err.message));
  }

  sendResponse(res, 200, violation ? 'Quiz ended due to violation' : 'Quiz submitted successfully', {
    attemptId:        attempt._id,
    score:            correctAnswers,
    totalQuestions:   totalQ,
    percentage,
    grade:            attempt.grade,
    breakdown,
    categoryBreakdown,
    timeTaken:        attempt.timeTaken,
    status:           attempt.status,
  });
});

// ── getAttempts ───────────────────────────────────────────────────────────
const getAttempts = asyncHandler(async (req, res) => {
  const page  = parseInt(req.query.page)  || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip  = (page - 1) * limit;

  const [attempts, total] = await Promise.all([
    QuizAttempt.find({ student: req.user._id, status: { $in: ['completed', 'abandoned'] } })
      .select('-questions')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    QuizAttempt.countDocuments({ student: req.user._id, status: { $in: ['completed', 'abandoned'] } }),
  ]);

  sendResponse(res, 200, 'Attempts retrieved', {
    attempts,
    pagination: { page, limit, total, pages: Math.ceil(total / limit) },
  });
});

// ── getAttemptById ────────────────────────────────────────────────────────
const getAttemptById = asyncHandler(async (req, res, next) => {
  const attempt = await QuizAttempt.findOne({
    _id: req.params.id,
    student: req.user._id,
  }).populate('questions.question', 'question options explanation category technology type codeSnippet');

  if (!attempt) return next(new ApiError('Attempt not found', 404));
  sendResponse(res, 200, 'Attempt retrieved', { attempt });
});

// ── abandonQuiz ───────────────────────────────────────────────────────────
const abandonQuiz = asyncHandler(async (req, res, next) => {
  const attempt = await QuizAttempt.findOneAndUpdate(
    { _id: req.params.id, student: req.user._id, status: 'in-progress' },
    { status: 'abandoned', endTime: new Date() },
    { new: true }
  );
  if (!attempt) return next(new ApiError('Active attempt not found', 404));
  sendResponse(res, 200, 'Quiz abandoned', { attemptId: attempt._id });
});

// ── getDashboard ──────────────────────────────────────────────────────────
const getDashboard = asyncHandler(async (req, res) => {
  const [attempts, user, settings] = await Promise.all([
    QuizAttempt.find({ student: req.user._id, status: { $in: ['completed', 'abandoned'] } })
      .select('percentage grade correctAnswers timeTaken createdAt breakdown categoryBreakdown status reportGenerated')
      .sort({ createdAt: -1 })
      .limit(5)
      .lean(),
    User.findById(req.user._id).select('name email totalAttempts averageScore createdAt').lean(),
    Settings.getSingleton(),
  ]);

  const bestScore = attempts.filter((a) => a.status === 'completed').length > 0
    ? Math.max(...attempts.filter((a) => a.status === 'completed').map((a) => a.percentage))
    : 0;

  sendResponse(res, 200, 'Dashboard data retrieved', {
    totalAttempts:         user.totalAttempts  || 0,
    bestScore,
    averageScore:          user.averageScore   || 0,
    recentAttempts:        attempts,
    profile:               { name: user.name, email: user.email, memberSince: user.createdAt },
    quizAllowed:           settings.quizAllowed,
    quizDateTime:          settings.quizDateTime,
    quizDuration:          TOTAL_DURATION_MINUTES,
    syllabusTitle:         settings.syllabusTitle,
    syllabusContent:       settings.syllabusContent,
    reportDownloadAllowed: settings.reportDownloadAllowed,
    sectionConfig:         SECTION_CONFIG,
  });
});

export { startQuiz, submitQuiz, getAttempts, getAttemptById, abandonQuiz, getDashboard };
import Report from '../models/Report.js';
import QuizAttempt from '../models/QuizAttempt.js';
import { generateQuizReport } from '../services/geminiService.js';
import ApiError from '../utils/ApiError.js';
import { sendResponse, asyncHandler } from '../utils/ApiResponse.js';

const generateReport = asyncHandler(async (req, res, next) => {
  const { attemptId } = req.params;

  const attempt = await QuizAttempt.findOne({
    _id: attemptId,
    student: req.user._id,
    status: { $in: ['completed', 'abandoned'] },
  }).populate('questions.question', 'question category difficulty');

  if (!attempt) {
    return next(new ApiError('Completed attempt not found', 404));
  }

  // Return cached report if exists
  const existingReport = await Report.findOne({ attempt: attemptId });
  if (existingReport) {
    return sendResponse(res, 200, 'Report retrieved', { report: existingReport });
  }

  // Build the list of wrong/unanswered questions for Gemini deep analysis
  const wrongQuestions = attempt.questions
    .filter((q) => !q.isCorrect)
    .map((q) => {
      const isProblemSolving = (q.category || q.question?.category) === 'Problem Solving';
      const writtenAnswer = (q.description || '').trim();

      return {
        question: q.question?.question || 'Unknown question',
        category: q.category || q.question?.category || 'Unknown',
        difficulty: q.difficulty || q.question?.difficulty || 'unknown',

        // For PS: show written answer (or 'unanswered' if blank)
        // For MCQ: show selected answer (or 'unanswered' if null)
        yourAnswer: isProblemSolving
          ? (writtenAnswer || 'unanswered')
          : (q.selectedAnswer || 'unanswered'),

        // For PS: status is 'incorrect' if they wrote something, 'unanswered' if blank
        // For MCQ: status is 'incorrect' if they picked wrong, 'unanswered' if skipped
        answerStatus: isProblemSolving
          ? (writtenAnswer ? 'incorrect' : 'unanswered')
          : (q.selectedAnswer ? 'incorrect' : 'unanswered'),

        correctAnswer: isProblemSolving
          ? q.correctAnswer  // teacher-defined model answer
          : q.correctAnswer,

        // Pass the written description to Gemini so it can give specific feedback
        writtenDescription: isProblemSolving ? writtenAnswer : null,
      };
    });

  const reportData = await generateQuizReport({
    studentName: req.user.name,
    percentage: attempt.percentage,
    correctAnswers: attempt.correctAnswers,
    totalQuestions: attempt.totalQuestions || 25,
    breakdown: attempt.breakdown,
    categoryBreakdown: attempt.categoryBreakdown || [],
    timeTaken: attempt.timeTaken,
    grade: attempt.grade,
    wrongQuestions,
    violation: attempt.status === 'abandoned',
  });

  const report = await Report.create({
    attempt: attemptId,
    student: req.user._id,
    analysis: reportData,
  });

  await QuizAttempt.findByIdAndUpdate(attemptId, { reportGenerated: true });

  sendResponse(res, 201, 'Report generated successfully', { report });
});

const getReport = asyncHandler(async (req, res, next) => {
  const report = await Report.findOne({
    attempt: req.params.attemptId,
    student: req.user._id,
  });

  if (!report) {
    return next(new ApiError('Report not found. Generate it first.', 404));
  }

  sendResponse(res, 200, 'Report retrieved', { report });
});

const getMyReports = asyncHandler(async (req, res) => {
  const reports = await Report.find({ student: req.user._id })
    .populate('attempt', 'percentage grade correctAnswers totalQuestions createdAt timeTaken status')
    .sort({ createdAt: -1 })
    .limit(20)
    .lean();

  sendResponse(res, 200, 'Reports retrieved', { reports });
});

export { generateReport, getReport, getMyReports };
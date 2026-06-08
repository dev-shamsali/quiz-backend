import Question from '../models/Question.js';
import User from '../models/User.js';
import QuizAttempt from '../models/QuizAttempt.js';
import Settings from '../models/Settings.js';
import ApiError from '../utils/ApiError.js';
import { sendResponse, asyncHandler } from '../utils/ApiResponse.js';

// Questions CRUD
const getQuestions = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;
  const { difficulty, category, type, search } = req.query;

  const filter = {};
  if (difficulty) filter.difficulty = difficulty;
  if (category) filter.category = category;
  if (type) filter.type = type;
  if (search) filter.question = { $regex: search, $options: 'i' };

  const [questions, total] = await Promise.all([
    Question.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    Question.countDocuments(filter),
  ]);

  sendResponse(res, 200, 'Questions retrieved', {
    questions,
    pagination: { page, limit, total, pages: Math.ceil(total / limit) },
  });
});

const createQuestion = asyncHandler(async (req, res) => {
  const question = await Question.create(req.body);
  sendResponse(res, 201, 'Question created', { question });
});

const updateQuestion = asyncHandler(async (req, res, next) => {
  const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: 'after', runValidators: true,
  });
  if (!question) return next(new ApiError('Question not found', 404));
  sendResponse(res, 200, 'Question updated', { question });
});

const deleteQuestion = asyncHandler(async (req, res, next) => {
  const question = await Question.findByIdAndUpdate(
    req.params.id, { isActive: false }, { returnDocument: 'after' }
  );
  if (!question) return next(new ApiError('Question not found', 404));
  sendResponse(res, 200, 'Question deactivated');
});

const getQuestionStats = asyncHandler(async (req, res) => {
  const [stats, totals] = await Promise.all([
    Question.aggregate([
      { $group: { _id: { difficulty: '$difficulty', category: '$category' }, count: { $sum: 1 }, active: { $sum: { $cond: ['$isActive', 1, 0] } } } },
      { $sort: { '_id.difficulty': 1 } },
    ]),
    Question.aggregate([
      { $group: { _id: '$difficulty', count: { $sum: 1 }, active: { $sum: { $cond: ['$isActive', 1, 0] } } } },
    ]),
  ]);
  sendResponse(res, 200, 'Stats retrieved', { stats, totals });
});

// Students management
const getStudents = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;

  const [students, total] = await Promise.all([
    User.find({ role: 'student' })
      .select('-password -refreshToken')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    User.countDocuments({ role: 'student' }),
  ]);

  const studentIds = students.map((s) => s._id);
  const activeAttempts = await QuizAttempt.find({
    student: { $in: studentIds },
    status: { $in: ['in-progress', 'suspended'] },
  }).lean();

  const studentsWithAttempt = students.map((student) => {
    const attempt = activeAttempts.find((a) => a.student.toString() === student._id.toString());
    return {
      ...student,
      activeAttempt: attempt
        ? {
            _id: attempt._id,
            status: attempt.status,
            adminAllowedResume: attempt.adminAllowedResume || false,
          }
        : null,
    };
  });

  sendResponse(res, 200, 'Students retrieved', {
    students: studentsWithAttempt,
    pagination: { page, limit, total, pages: Math.ceil(total / limit) },
  });
});

const getStudentDetail = asyncHandler(async (req, res, next) => {
  const student = await User.findOne({ _id: req.params.id, role: 'student' })
    .select('-password -refreshToken')
    .lean();
  if (!student) return next(new ApiError('Student not found', 404));

  const attempts = await QuizAttempt.find({ student: req.params.id, status: 'completed' })
    .select('percentage grade correctAnswers createdAt timeTaken')
    .sort({ createdAt: -1 })
    .limit(10)
    .lean();

  sendResponse(res, 200, 'Student detail', { student, attempts });
});

// Platform analytics
const getAnalytics = asyncHandler(async (req, res) => {
  const [
    totalStudents, totalAttempts, totalQuestions, avgScoreResult,
    recentAttempts, scoreDistribution, topStudents,
  ] = await Promise.all([
    User.countDocuments({ role: 'student' }),
    QuizAttempt.countDocuments({ status: 'completed' }),
    Question.countDocuments({ isActive: true }),
    QuizAttempt.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, avg: { $avg: '$percentage' } } },
    ]),
    QuizAttempt.find({ status: 'completed' })
      .populate('student', 'name email')
      .select('student percentage grade createdAt')
      .sort({ createdAt: -1 })
      .limit(10)
      .lean(),
    QuizAttempt.aggregate([
      { $match: { status: 'completed' } },
      {
        $group: {
          _id: { $switch: {
            branches: [
              { case: { $gte: ['$percentage', 90] }, then: 'A+ (90-100)' },
              { case: { $gte: ['$percentage', 80] }, then: 'A (80-89)' },
              { case: { $gte: ['$percentage', 70] }, then: 'B (70-79)' },
              { case: { $gte: ['$percentage', 60] }, then: 'C (60-69)' },
              { case: { $gte: ['$percentage', 50] }, then: 'D (50-59)' },
            ],
            default: 'F (<50)',
          }},
          count: { $sum: 1 },
        },
      },
    ]),
    User.find({ role: 'student' })
      .select('name email averageScore totalAttempts')
      .sort({ averageScore: -1 })
      .limit(10)
      .lean(),
  ]);

  sendResponse(res, 200, 'Analytics retrieved', {
    overview: {
      totalStudents,
      totalAttempts,
      totalQuestions,
      avgScore: Math.round(avgScoreResult[0]?.avg || 0),
    },
    recentAttempts,
    scoreDistribution,
    topStudents,
  });
});

// Rankings
const getRankings = asyncHandler(async (req, res) => {
  const rankings = await User.find({ role: 'student' })
    .select('name email averageScore totalAttempts')
    .sort({ averageScore: -1, totalAttempts: -1 })
    .lean();

  const ranked = rankings.map((s, i) => ({ ...s, rank: i + 1 }));
  sendResponse(res, 200, 'Rankings retrieved', { rankings: ranked });
});

// Settings (quiz control)
const getSettings = asyncHandler(async (req, res) => {
  const settings = await Settings.getSingleton();
  sendResponse(res, 200, 'Settings retrieved', { settings });
});

const updateSettings = asyncHandler(async (req, res) => {
  const { quizAllowed, reportDownloadAllowed, quizDateTime, quizDuration, syllabusTitle, syllabusContent } = req.body;
  const settings = await Settings.getSingleton();

  if (quizAllowed !== undefined) settings.quizAllowed = quizAllowed;
  if (reportDownloadAllowed !== undefined) settings.reportDownloadAllowed = reportDownloadAllowed;
  if (quizDateTime !== undefined) settings.quizDateTime = quizDateTime;
  if (quizDuration !== undefined) settings.quizDuration = quizDuration;
  if (syllabusTitle !== undefined) settings.syllabusTitle = syllabusTitle;
  if (syllabusContent !== undefined) settings.syllabusContent = syllabusContent;

  await settings.save();
  sendResponse(res, 200, 'Settings updated', { settings });
});

const toggleResumeAttempt = asyncHandler(async (req, res, next) => {
  const attempt = await QuizAttempt.findById(req.params.id);
  if (!attempt) return next(new ApiError('Attempt not found', 404));

  if (attempt.status === 'completed' || attempt.status === 'abandoned') {
    return next(new ApiError('Completed or submitted tests cannot be resumed', 400));
  }

  attempt.adminAllowedResume = !attempt.adminAllowedResume;
  await attempt.save();

  sendResponse(res, 200, `Resume ${attempt.adminAllowedResume ? 'allowed' : 'revoked'}`, { attempt });
});

const forceSuspendAttempt = asyncHandler(async (req, res, next) => {
  const attempt = await QuizAttempt.findById(req.params.id);
  if (!attempt) return next(new ApiError('Attempt not found', 404));

  if (attempt.status !== 'in-progress') {
    return next(new ApiError('Only in-progress attempts can be suspended', 400));
  }

  attempt.status = 'suspended';
  attempt.adminAllowedResume = false;
  await attempt.save();

  sendResponse(res, 200, 'Attempt suspended successfully', { attempt });
});

export { getQuestions, createQuestion, updateQuestion, deleteQuestion, getQuestionStats, getStudents, getStudentDetail, getAnalytics, getRankings, getSettings, updateSettings, toggleResumeAttempt, forceSuspendAttempt };


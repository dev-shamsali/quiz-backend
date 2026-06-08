import mongoose from 'mongoose';

const questionResultSchema = new mongoose.Schema({
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  selectedAnswer: { type: String, default: null },
  correctAnswer: { type: String, default: '' },
  // Written answer for Problem Solving questions (replaces selectedAnswer)
  description: { type: String, default: '' },
  isCorrect: { type: Boolean, default: false },
  timeSpent: { type: Number, default: 0 },
  difficulty: { type: String, enum: ['easy', 'moderate', 'hard'] },
  category: { type: String },
}, { _id: false });

const quizAttemptSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  questions: [questionResultSchema],
  score: { type: Number, default: 0 },
  totalQuestions: { type: Number, default: 300 },
  correctAnswers: { type: Number, default: 0 },
  percentage: { type: Number, default: 0 },
  grade: {
    type: String,
    enum: ['A+', 'A', 'B', 'C', 'D', 'F'],
    default: 'F',
  },
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date },
  timeTaken: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ['in-progress', 'completed', 'suspended', 'abandoned'],
    default: 'in-progress',
  },
  adminAllowedResume: {
    type: Boolean,
    default: false,
  },
  breakdown: {
    easy: { total: { type: Number, default: 13 }, correct: { type: Number, default: 0 } },
    moderate: { total: { type: Number, default: 7 }, correct: { type: Number, default: 0 } },
    hard: { total: { type: Number, default: 5 }, correct: { type: Number, default: 0 } },
  },
  categoryBreakdown: [{
    category: String,
    total: Number,
    correct: Number,
  }],
  reportGenerated: { type: Boolean, default: false },
  violation: { type: Boolean, default: false },
}, { timestamps: true });

quizAttemptSchema.index({ student: 1, createdAt: -1 });
quizAttemptSchema.index({ student: 1, status: 1 });

quizAttemptSchema.methods.calculateGrade = function () {
  if (this.percentage >= 90) return 'A+';
  if (this.percentage >= 80) return 'A';
  if (this.percentage >= 70) return 'B';
  if (this.percentage >= 60) return 'C';
  if (this.percentage >= 50) return 'D';
  return 'F';
};

export default mongoose.model('QuizAttempt', quizAttemptSchema);
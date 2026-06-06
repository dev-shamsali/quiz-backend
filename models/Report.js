import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  attempt: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuizAttempt',
    required: true,
    unique: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  analysis: {
    strengths: [String],
    weaknesses: [String],
    areasToImprove: [String],
    feedback: String,
    score: { type: Number, min: 1, max: 10 },
    learningRoadmap: [String],
    categoryPerformance: [{
      category: String,
      score: Number,
      recommendation: String,
    }],
    overallFeedback: String,
    nextSteps: [String],
  },
  generatedAt: { type: Date, default: Date.now },
  aiModel: { type: String, default: 'gemini-2.0-flash' },
}, { timestamps: true });

reportSchema.index({ student: 1 });

export default mongoose.model('Report', reportSchema);

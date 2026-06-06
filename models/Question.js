import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'Question text is required'],
    trim: true,
  },
  options: {
    type: [String],
    validate: {
      validator: function(arr) {
        if (this.type === 'problem-solving') {
          return arr.length === 0 || arr.length === 4;
        }
        return arr && arr.length === 4;
      },
      message: 'Exactly 4 options are required for non-problem-solving questions',
    },
  },
  correctAnswer: {
    type: String,
    required: [true, 'Correct answer is required'],
  },
  explanation: {
    type: String,
    required: [true, 'Explanation is required'],
  },
  difficulty: {
    type: String,
    enum: ['easy', 'moderate', 'hard'],
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Authentication & Security', 'Problem Solving', 'Debugging'],
  },
  technology: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['mcq', 'debugging', 'scenario', 'problem-solving'],
    required: true,
  },
  codeSnippet: {
    type: String,
    default: '',
  },
  tags: {
    type: [String],
    default: [],
  },
  estimatedTime: {
    type: Number,
    default: 60,
  },
  realWorldUseCase: {
    type: String,
    default: '',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

questionSchema.index({ difficulty: 1, isActive: 1 });
questionSchema.index({ category: 1, difficulty: 1 });

export default mongoose.model('Question', questionSchema);

import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  quizAllowed: { type: Boolean, default: false },
  reportDownloadAllowed: { type: Boolean, default: false },
  quizDateTime: { type: Date, default: null },
  quizDuration: { type: Number, default: 45 },
  syllabusTitle: { type: String, default: 'Quiz Syllabus' },
  syllabusContent: { type: String, default: '' },
}, { timestamps: true });

settingsSchema.statics.getSingleton = async function () {
  let settings = await this.findOne();
  if (!settings) settings = await this.create({});
  return settings;
};

export default mongoose.model('Settings', settingsSchema);

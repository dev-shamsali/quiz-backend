import express from 'express';
import { protect } from '../middleware/auth.js';
import { getDashboard } from '../controllers/quizController.js';
import Settings from '../models/Settings.js';
import { asyncHandler, sendResponse } from '../utils/ApiResponse.js';
import authRoutes from './auth.js';
import quizRoutes from './quiz.js';
import reportsRoutes from './reports.js';
import adminRoutes from './admin.js';
import questionsRoutes from './questions.js';

const router = express.Router();

router.use('/auth', authRoutes);

router.get('/dashboard', protect, getDashboard);

router.get('/settings', asyncHandler(async (req, res) => {
  const settings = await Settings.getSingleton();
  sendResponse(res, 200, 'Settings retrieved', {
    settings: {
      quizAllowed: settings.quizAllowed,
      reportDownloadAllowed: settings.reportDownloadAllowed,
      quizDateTime: settings.quizDateTime,
      quizDuration: settings.quizDuration,
      syllabusTitle: settings.syllabusTitle,
      syllabusContent: settings.syllabusContent,
    },
  });
}));

router.use('/quiz', quizRoutes);
router.use('/reports', reportsRoutes);
router.use('/admin', adminRoutes);
router.use('/questions', questionsRoutes);

export default router;


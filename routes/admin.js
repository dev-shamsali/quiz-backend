import express from 'express';
import { getQuestions, createQuestion, updateQuestion, deleteQuestion, getQuestionStats, getStudents, getStudentDetail, getAnalytics, getRankings, getSettings, updateSettings } from '../controllers/adminController.js';
import { protect } from '../middleware/auth.js';
import { adminOnly } from '../middleware/admin.js';

const router = express.Router();

router.use(protect, adminOnly);

router.get('/analytics', getAnalytics);
router.get('/rankings', getRankings);
router.get('/settings', getSettings);
router.put('/settings', updateSettings);

router.get('/questions', getQuestions);
router.post('/questions', createQuestion);
router.get('/questions/stats', getQuestionStats);
router.put('/questions/:id', updateQuestion);
router.delete('/questions/:id', deleteQuestion);

router.get('/students', getStudents);
router.get('/students/:id', getStudentDetail);

export default router;


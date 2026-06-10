import express from 'express';
import { startQuiz, submitQuiz, getAttempts, getAttemptById, abandonQuiz, saveProgress } from '../controllers/quizController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

router.post('/start', startQuiz);
router.post('/submit/:attemptId', submitQuiz);
router.post('/save-progress/:attemptId', saveProgress);
router.get('/attempts', getAttempts);
router.get('/attempts/:id', getAttemptById);
router.patch('/attempts/:id/abandon', abandonQuiz);

export default router;


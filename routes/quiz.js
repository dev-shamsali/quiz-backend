import express from 'express';
import { startQuiz, submitQuiz, getAttempts, getAttemptById, abandonQuiz } from '../controllers/quizController.js';
import { protect } from '../middleware/auth.js';
import { quizLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.use(protect);

router.post('/start', quizLimiter, startQuiz);
router.post('/submit/:attemptId', submitQuiz);
router.get('/attempts', getAttempts);
router.get('/attempts/:id', getAttemptById);
router.patch('/attempts/:id/abandon', abandonQuiz);

export default router;


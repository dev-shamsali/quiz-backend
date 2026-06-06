import express from 'express';
import { generateReport, getReport, getMyReports } from '../controllers/reportController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

router.get('/', getMyReports);
router.get('/:attemptId', getReport);
router.post('/generate/:attemptId', generateReport);

export default router;


import express from 'express';
import { logEvent, getAllLogs, getStudentLogs } from '../controllers/Activitylogcontroller.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Student logs an event (called from frontend)
router.post('/', protect, logEvent);

// Admin routes — role check is inside the controller
router.get('/', protect, getAllLogs);
router.get('/student/:studentId', protect, getStudentLogs);

export default router;
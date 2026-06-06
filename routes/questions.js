import express from 'express';
import Question from '../models/Question.js';
import { sendResponse, asyncHandler } from '../utils/ApiResponse.js';

const router = express.Router();

// Public endpoint to check question count (for seeding status)
router.get('/count', asyncHandler(async (req, res) => {
  const counts = await Question.aggregate([
    { $group: { _id: '$difficulty', count: { $sum: 1 }, active: { $sum: { $cond: ['$isActive', 1, 0] } } } },
  ]);
  const total = await Question.countDocuments();
  sendResponse(res, 200, 'Question counts', { counts, total });
}));

export default router;


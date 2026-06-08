import ActivityLog from '../models/Activitylog.js';
import ApiError from '../utils/ApiError.js';
import { sendResponse, asyncHandler } from '../utils/ApiResponse.js';

// ── Called by frontend to log an event into the current session ───────────
// Frontend passes sessionId (stored in localStorage/cookie after login)
const logEvent = asyncHandler(async (req, res) => {
  const { event, reason, meta, attemptId, sessionId } = req.body;

  if (!sessionId) {
    // Fallback: if no sessionId, silently ignore (non-blocking)
    return sendResponse(res, 200, 'No session — event skipped');
  }

  await ActivityLog.pushEvent(sessionId, {
    event,
    reason: reason || '',
    meta: meta || {},
    attempt: attemptId || null,
  });

  sendResponse(res, 200, 'Event logged');
});

// ── Admin: get all sessions ───────────────────────────────────────────────
const getAllLogs = asyncHandler(async (req, res, next) => {
  if (req.user.role !== 'admin') return next(new ApiError('Admin access required', 403));

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 50;
  const skip = (page - 1) * limit;
  const { studentId, event } = req.query;

  // Filter by student
  const filter = {};
  if (studentId) filter.student = studentId;

  // Filter by event type inside the events array
  if (event) filter['events.event'] = event;

  const [logs, total] = await Promise.all([
    ActivityLog.find(filter)
      .populate('student', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    ActivityLog.countDocuments(filter),
  ]);

  sendResponse(res, 200, 'Sessions retrieved', {
    logs,
    pagination: { page, limit, total, pages: Math.ceil(total / limit) },
  });
});

// ── Admin: get all sessions for one student ───────────────────────────────
const getStudentLogs = asyncHandler(async (req, res, next) => {
  if (req.user.role !== 'admin') return next(new ApiError('Admin access required', 403));

  const { studentId } = req.params;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 50;
  const skip = (page - 1) * limit;

  const [logs, total] = await Promise.all([
    ActivityLog.find({ student: studentId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    ActivityLog.countDocuments({ student: studentId }),
  ]);

  sendResponse(res, 200, 'Student sessions retrieved', {
    logs,
    pagination: { page, limit, total, pages: Math.ceil(total / limit) },
  });
});

export { logEvent, getAllLogs, getStudentLogs };
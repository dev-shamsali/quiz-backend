import mongoose from 'mongoose';

// ── Single event inside a session ─────────────────────────────────────────
const eventSchema = new mongoose.Schema({
  event: {
    type: String,
    enum: [
      'login', 'logout',
      'quiz_started', 'quiz_completed', 'quiz_abandoned',
      'tab_switch', 'window_blur', 'fullscreen_exit',
      'browser_close_attempt', 'visibility_hidden',
      'quiz_page_enter',
    ],
    required: true,
  },
  reason:    { type: String, default: '' },
  meta:      { type: mongoose.Schema.Types.Mixed, default: {} },
  attempt:   { type: mongoose.Schema.Types.ObjectId, ref: 'QuizAttempt', default: null },
  timestamp: { type: Date, default: Date.now },
}, { _id: false });

// ── One document = one login session ─────────────────────────────────────
const activityLogSchema = new mongoose.Schema({
  student:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sessionId: { type: String, required: true, unique: true }, // JWT jti or random uuid
  ip:        { type: String, default: '' },
  userAgent: { type: String, default: '' },
  loginAt:   { type: Date, default: Date.now },
  logoutAt:  { type: Date, default: null },
  events:    { type: [eventSchema], default: [] },  // all events for this session
}, { timestamps: true });

activityLogSchema.index({ student: 1, createdAt: -1 });

// ── Static: open a new session on login ──────────────────────────────────
activityLogSchema.statics.openSession = function (studentId, sessionId, ip, userAgent) {
  return this.create({
    student:   studentId,
    sessionId,
    ip,
    userAgent,
    loginAt:   new Date(),
    events:    [{ event: 'login', reason: 'Student logged in', timestamp: new Date() }],
  });
};

// ── Static: push an event into the active session ────────────────────────
activityLogSchema.statics.pushEvent = function (sessionId, eventData) {
  return this.findOneAndUpdate(
    { sessionId },
    { $push: { events: { ...eventData, timestamp: new Date() } } },
    { new: true }
  );
};

// ── Static: close session on logout ──────────────────────────────────────
activityLogSchema.statics.closeSession = function (sessionId) {
  return this.findOneAndUpdate(
    { sessionId },
    {
      $set:  { logoutAt: new Date() },
      $push: { events: { event: 'logout', reason: 'Student logged out', timestamp: new Date() } },
    },
    { new: true }
  );
};

export default mongoose.model('ActivityLog', activityLogSchema);
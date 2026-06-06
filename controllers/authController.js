import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';
import ApiError from '../utils/ApiError.js';
import { sendResponse, asyncHandler } from '../utils/ApiResponse.js';
import { sendCredentials } from '../services/emailService.js';
import { generateAccessToken, generateRefreshToken, setRefreshTokenCookie, clearRefreshTokenCookie } from '../utils/tokenUtils.js';
import ActivityLog from '../models/ActivityLog.js';

// ─── Helpers ──────────────────────────────────────────────────────────────────

const generatePassword = () => {
  const upper   = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const lower   = 'abcdefghjkmnpqrstuvwxyz';
  const digits  = '23456789';
  const special = '@#!$';
  let pwd = '';
  pwd += upper  [Math.floor(Math.random() * upper.length)];
  pwd += upper  [Math.floor(Math.random() * upper.length)];
  pwd += lower  [Math.floor(Math.random() * lower.length)];
  pwd += lower  [Math.floor(Math.random() * lower.length)];
  pwd += digits [Math.floor(Math.random() * digits.length)];
  pwd += digits [Math.floor(Math.random() * digits.length)];
  pwd += digits [Math.floor(Math.random() * digits.length)];
  pwd += special[Math.floor(Math.random() * special.length)];
  return pwd.split('').sort(() => Math.random() - 0.5).join('');
};

// ─── Validation ───────────────────────────────────────────────────────────────

const registerValidation = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 50 }),
  body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
];

const loginValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty().withMessage('Password is required'),
];

// ─── Controllers ──────────────────────────────────────────────────────────────

const register = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(new ApiError(errors.array()[0].msg, 400));

  const { name, email } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) return next(new ApiError('Email already registered', 400));

  const password = generatePassword();
  const user = await User.create({ name, email, password, role: 'student' });

  // Send credentials via email (non-blocking)
  sendCredentials({ name, email, password }).catch((err) => {
    console.error('Failed to send credentials email:', err.message);
  });

  // ✅ No tokens, no auto-login
  sendResponse(res, 201, 'Registration successful. Check your email for login credentials.', {
    user: { name: user.name, email: user.email },
  });
});

const login = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(new ApiError(errors.array()[0].msg, 400));

  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password +isActive');
  if (!user || !user.isActive) return next(new ApiError('Invalid credentials', 401));

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return next(new ApiError('Invalid credentials', 401));

  const accessToken  = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);

  user.refreshToken = refreshToken;
  user.lastLogin    = new Date();
  await user.save({ validateBeforeSave: false });

  setRefreshTokenCookie(res, refreshToken);

  // ✅ Open a new session in ActivityLog for students
  if (user.role === 'student') {
    const sessionId = uuidv4();
    // Store sessionId in response so frontend can use it for subsequent events
    ActivityLog.openSession(
      user._id,
      sessionId,
      req.ip || req.headers['x-forwarded-for'] || '',
      req.headers['user-agent'] || ''
    ).catch((err) => console.error('Failed to open activity session:', err.message));

    return sendResponse(res, 200, 'Login successful', {
      user,
      accessToken,
      refreshToken,
      sessionId, // ✅ frontend stores this and sends it with quiz events
    });
  }

  sendResponse(res, 200, 'Login successful', { user, accessToken, refreshToken });
});

const logout = asyncHandler(async (req, res) => {
  // ✅ Close the session in ActivityLog for students
  if (req.user.role === 'student') {
    const sessionId = req.body?.sessionId || req.headers['x-session-id'];
    if (sessionId) {
      ActivityLog.closeSession(sessionId)
        .catch((err) => console.error('Failed to close activity session:', err.message));
    }
  }

  await User.findByIdAndUpdate(req.user._id, { refreshToken: null });
  clearRefreshTokenCookie(res);
  sendResponse(res, 200, 'Logout successful');
});

const refreshToken = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.refreshToken || req.body?.refreshToken;
  if (!token) return next(new ApiError('Refresh token required', 401));

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
  } catch {
    return next(new ApiError('Invalid or expired refresh token', 401));
  }

  const user = await User.findById(decoded.id).select('+refreshToken');
  if (!user || user.refreshToken !== token) return next(new ApiError('Invalid refresh token', 401));

  const accessToken     = generateAccessToken(user._id);
  const newRefreshToken = generateRefreshToken(user._id);

  user.refreshToken = newRefreshToken;
  await user.save({ validateBeforeSave: false });

  setRefreshTokenCookie(res, newRefreshToken);
  sendResponse(res, 200, 'Token refreshed', { accessToken, refreshToken: newRefreshToken });
});

const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  sendResponse(res, 200, 'User retrieved', { user });
});

export { register, registerValidation, login, loginValidation, logout, refreshToken, getMe };
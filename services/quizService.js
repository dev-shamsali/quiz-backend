import mongoose from 'mongoose';
import Question from '../models/Question.js';

export const SECTION_CONFIG = [
  { id: 'react-next',   label: 'React & Next JS',                     categories: ['React.js', 'Next.js'],                               durationMinutes: 36, questionCount: 40 },
  { id: 'nodejs',       label: 'NodeJS',                              categories: ['Node.js'],                                           durationMinutes: 36, questionCount: 40 },
  { id: 'express',      label: 'Express JS',                          categories: ['Express.js'],                                        durationMinutes: 36, questionCount: 40 },
  { id: 'mongodb',      label: 'MongoDB',                             categories: ['MongoDB'],                                           durationMinutes: 36, questionCount: 40 },
  { id: 'iq-based',     label: 'Logical Reasoning & IQ',               categories: ['Logical Reasoning', 'IQ'],                           durationMinutes: 36, questionCount: 40 },
];

export const TOTAL_DURATION_MINUTES = SECTION_CONFIG.reduce((s, c) => s + c.durationMinutes, 0); // 180
export const TOTAL_QUESTIONS        = SECTION_CONFIG.reduce((s, c) => s + c.questionCount,   0); // 200

const QUIZ_CONFIG   = { easy: 13, moderate: 7, hard: 5 };
const PS_GUARANTEED = 3;

// Fisher-Yates shuffle helper
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Helper to sample distinct questions from DB with a fallback in case we run out of unique questions
const sampleQuestions = async (matchFilters, count, currentSelectionIds = []) => {
  if (count <= 0) return [];
  
  let docs = await Question.aggregate([
    { $match: { ...matchFilters, isActive: true } },
    { $sample: { size: count } },
    { $project: { correctAnswer: 0, explanation: 0, __v: 0 } },
  ]);

  // Fallback: if not enough questions are found, retry without the seenIds exclusion
  if (docs.length < count && matchFilters._id && matchFilters._id.$nin) {
    const fallbackFilters = { ...matchFilters };
    fallbackFilters._id = { $nin: currentSelectionIds };
    
    docs = await Question.aggregate([
      { $match: { ...fallbackFilters, isActive: true } },
      { $sample: { size: count } },
      { $project: { correctAnswer: 0, explanation: 0, __v: 0 } },
    ]);
  }
  
  return docs;
};

// ── getRandomQuestions ────────────────────────────────────────────────────
export const getRandomQuestions = async (excludeIds = [], userId = null) => {
  // Find questions currently in-progress by other students to prevent concurrent collisions
  const QuizAttempt = (await import('../models/QuizAttempt.js')).default;
  const activeAttempts = await QuizAttempt.find({
    status: 'in-progress',
    student: { $ne: userId }
  }, { 'questions.question': 1 }).lean();

  const activeQuestionIds = [];
  activeAttempts.forEach(attempt => {
    (attempt.questions || []).forEach(q => {
      if (q.question) {
        activeQuestionIds.push(q.question.toString());
      }
    });
  });

  // Combine seenIds and activeQuestionIds, then cast to ObjectId
  let excluded = [
    ...excludeIds.map(id => id.toString()),
    ...activeQuestionIds
  ];
  excluded = [...new Set(excluded)].map(id => new mongoose.Types.ObjectId(id));

  const selectedQuestions = [];
  const currentSelectionIds = [];

  const addQuestions = (qs, sectionIndex) => {
    const shuffled = shuffleArray([...qs]);
    shuffled.forEach(q => {
      q._sectionIndex = sectionIndex;
      selectedQuestions.push(q);
      excluded.push(new mongoose.Types.ObjectId(q._id.toString()));
      currentSelectionIds.push(new mongoose.Types.ObjectId(q._id.toString()));
    });
  };

  // Helper to ensure enough unseen questions in a category, else reset
  const verifyAndResetCategory = async (category, countNeeded) => {
    const totalCount = await Question.countDocuments({ isActive: true, category });
    const seenCount = await Question.countDocuments({
      isActive: true,
      category,
      _id: { $in: excluded }
    });

    const unseenCount = totalCount - seenCount;

    if (unseenCount < countNeeded) {
      console.log(`[Reset] Category ${category}: unseen: ${unseenCount}, required: ${countNeeded}. Resetting seen list.`);
      const seenQuestionsInCat = await Question.find({ category }, { _id: 1 }).lean();
      const seenIdsInCat = seenQuestionsInCat.map(q => q._id.toString());

      excluded = excluded.filter(id => !seenIdsInCat.includes(id.toString()));

      if (userId) {
        const User = (await import('../models/User.js')).default;
        const studentSeenIdsInCat = seenIdsInCat.filter(id => excludeIds.map(x => x.toString()).includes(id));
        if (studentSeenIdsInCat.length > 0) {
          await User.findByIdAndUpdate(userId, {
            $pull: { seenQuestions: { $in: studentSeenIdsInCat } }
          });
        }
      }
    }
  };

  // Section 1: React & Next JS (40 total: 20 React.js + 20 Next.js)
  await verifyAndResetCategory('React.js', 20);
  await verifyAndResetCategory('Next.js', 20);
  const s1_react = await sampleQuestions({ _id: { $nin: excluded }, category: 'React.js' }, 20, currentSelectionIds);
  const s1_next  = await sampleQuestions({ _id: { $nin: excluded }, category: 'Next.js' }, 20, currentSelectionIds);
  addQuestions([...s1_react, ...s1_next], 0);

  // Section 2: NodeJS (40)
  await verifyAndResetCategory('Node.js', 40);
  const s2 = await sampleQuestions({ _id: { $nin: excluded }, category: 'Node.js' }, 40, currentSelectionIds);
  addQuestions(s2, 1);

  // Section 3: Express JS (40)
  await verifyAndResetCategory('Express.js', 40);
  const s3 = await sampleQuestions({ _id: { $nin: excluded }, category: 'Express.js' }, 40, currentSelectionIds);
  addQuestions(s3, 2);

  // Section 4: MongoDB (40)
  await verifyAndResetCategory('MongoDB', 40);
  const s4 = await sampleQuestions({ _id: { $nin: excluded }, category: 'MongoDB' }, 40, currentSelectionIds);
  addQuestions(s4, 3);

  // Section 5: Logical Reasoning & IQ (40 total: 20 Logical Reasoning + 20 IQ)
  await verifyAndResetCategory('Logical Reasoning', 20);
  await verifyAndResetCategory('IQ', 20);
  const s5_lr = await sampleQuestions({ _id: { $nin: excluded }, category: 'Logical Reasoning' }, 20, currentSelectionIds);
  const s5_iq = await sampleQuestions({ _id: { $nin: excluded }, category: 'IQ' }, 20, currentSelectionIds);
  addQuestions([...s5_lr, ...s5_iq], 4);

  if (selectedQuestions.length === 0) {
    throw new Error('No active questions found in the database. Please add questions first.');
  }

  // Sort by section index so questions are served strictly in section order
  selectedQuestions.sort((a, b) => a._sectionIndex - b._sectionIndex);
  return selectedQuestions;
};

// ── getAnswerMap — now includes question text for PS Gemini grading ────────
export const getAnswerMap = async (questionIds) => {
  const questions = await Question.find(
    { _id: { $in: questionIds } },
    { correctAnswer: 1, explanation: 1, difficulty: 1, category: 1, question: 1 }
  ).lean();

  const map = {};
  questions.forEach((q) => {
    map[q._id.toString()] = {
      correctAnswer: q.correctAnswer,
      explanation:   q.explanation,
      difficulty:    q.difficulty,
      category:      q.category,
      question:      q.question,   // ← needed so Gemini can read the question text
    };
  });
  return map;
};

// ── calculateResults ──────────────────────────────────────────────────────
// PS questions saved with isCorrect: false initially.
// quizController will call Gemini after this to update PS isCorrect.
export const calculateResults = (submittedAnswers, answerMap) => {
  let correctAnswers = 0;
  const breakdown = {
    easy:     { total: 0, correct: 0 },
    moderate: { total: 0, correct: 0 },
    hard:     { total: 0, correct: 0 },
  };
  const categoryMap = {};
  const results     = [];

  submittedAnswers.forEach(({ questionId, selectedAnswer, description, timeSpent }) => {
    const answer = answerMap[questionId.toString()];
    if (!answer) return;

    const isProblemSolving = answer.category === 'Problem Solving';
    const writtenAnswer    = (description || '').trim();

    // PS: always false here — Gemini will update after this
    const isCorrect = isProblemSolving
      ? false
      : selectedAnswer === answer.correctAnswer;

    if (isCorrect) correctAnswers++;

    const diff = answer.difficulty;
    breakdown[diff].total++;
    if (isCorrect) breakdown[diff].correct++;

    const cat = answer.category;
    if (!categoryMap[cat]) categoryMap[cat] = { total: 0, correct: 0 };
    categoryMap[cat].total++;
    if (isCorrect) categoryMap[cat].correct++;

    results.push({
      question:       questionId,
      selectedAnswer: isProblemSolving ? null : (selectedAnswer || null),
      description:    isProblemSolving ? writtenAnswer : '',
      correctAnswer:  answer.correctAnswer,
      isCorrect,
      timeSpent:      timeSpent || 0,
      difficulty:     diff,
      category:       cat,
    });
  });

  const categoryBreakdown = Object.entries(categoryMap).map(([category, data]) => ({
    category,
    total:   data.total,
    correct: data.correct,
  }));

  return { results, correctAnswers, breakdown, categoryBreakdown };
};

export { QUIZ_CONFIG };
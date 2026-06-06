import Question from '../models/Question.js';

export const SECTION_CONFIG = [
  { id: 'react-next',  label: 'React.js + Next.js',                  categories: ['React.js', 'Next.js'],                               durationMinutes: 30, questionCount: 60  },
  { id: 'node',        label: 'Node.js',                              categories: ['Node.js'],                                           durationMinutes: 30, questionCount: 60  },
  { id: 'express',     label: 'Express.js',                           categories: ['Express.js'],                                        durationMinutes: 30, questionCount: 60  },
  { id: 'mongodb',     label: 'MongoDB',                              categories: ['MongoDB'],                                           durationMinutes: 30, questionCount: 60  },
  { id: 'auth-ps-dbg', label: 'Auth + Problem Solving + Debugging',  categories: ['Authentication & Security', 'Problem Solving', 'Debugging'], durationMinutes: 60, questionCount: 60 },
];

export const TOTAL_DURATION_MINUTES = SECTION_CONFIG.reduce((s, c) => s + c.durationMinutes, 0); // 180
export const TOTAL_QUESTIONS        = SECTION_CONFIG.reduce((s, c) => s + c.questionCount,   0); // 300

const QUIZ_CONFIG   = { easy: 13, moderate: 7, hard: 5 };
const PS_GUARANTEED = 3;

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
export const getRandomQuestions = async (excludeIds = []) => {
  const excluded = [...excludeIds].map(id => id.toString());
  const selectedQuestions = [];
  const currentSelectionIds = [];

  const addQuestions = (qs, sectionIndex) => {
    qs.forEach(q => {
      q._sectionIndex = sectionIndex;
      selectedQuestions.push(q);
      excluded.push(q._id.toString());
      currentSelectionIds.push(q._id.toString());
    });
  };

  // Section 1: React.js + Next.js (30 React.js + 30 Next.js)
  const s1React = await sampleQuestions({ _id: { $nin: excluded }, category: 'React.js', type: { $ne: 'problem-solving' } }, 30, currentSelectionIds);
  const s1Next  = await sampleQuestions({ _id: { $nin: excluded }, category: 'Next.js', type: { $ne: 'problem-solving' } }, 30, currentSelectionIds);
  addQuestions([...s1React, ...s1Next], 0);

  // Section 2: Node.js (60 Node.js)
  const s2Node  = await sampleQuestions({ _id: { $nin: excluded }, category: 'Node.js', type: { $ne: 'problem-solving' } }, 60, currentSelectionIds);
  addQuestions(s2Node, 1);

  // Section 3: Express.js (60 Express.js)
  const s3Express = await sampleQuestions({ _id: { $nin: excluded }, category: 'Express.js', type: { $ne: 'problem-solving' } }, 60, currentSelectionIds);
  addQuestions(s3Express, 2);

  // Section 4: MongoDB (60 MongoDB)
  const s4Mongodb = await sampleQuestions({ _id: { $nin: excluded }, category: 'MongoDB', type: { $ne: 'problem-solving' } }, 60, currentSelectionIds);
  addQuestions(s4Mongodb, 3);

  // Section 5: Auth + PS + Debugging (10 PS + 25 Debugging + 25 Authentication & Security)
  const s5Ps    = await sampleQuestions({ _id: { $nin: excluded }, category: 'Problem Solving' }, 10, currentSelectionIds);
  const s5Dbg   = await sampleQuestions({ _id: { $nin: excluded }, category: 'Debugging', type: { $ne: 'problem-solving' } }, 25, currentSelectionIds);
  const s5Auth  = await sampleQuestions({ _id: { $nin: excluded }, category: 'Authentication & Security', type: { $ne: 'problem-solving' } }, 25, currentSelectionIds);
  addQuestions([...s5Ps, ...s5Dbg, ...s5Auth], 4);

  if (selectedQuestions.length < 300) {
    throw new Error('Insufficient questions in the database. Please run the seed script.');
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
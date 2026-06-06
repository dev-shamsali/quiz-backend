import Question from '../models/Question.js';

// ── Section definitions (must mirror frontend SECTION_CONFIG) ─────────────
export const SECTION_CONFIG = [
  { id: 'react-next',  label: 'React.js + Next.js',                  categories: ['React.js', 'Next.js'],                               durationMinutes: 30, questionCount: 6  },
  { id: 'node',        label: 'Node.js',                              categories: ['Node.js'],                                           durationMinutes: 30, questionCount: 5  },
  { id: 'express',     label: 'Express.js',                           categories: ['Express.js'],                                        durationMinutes: 30, questionCount: 4  },
  { id: 'mongodb',     label: 'MongoDB',                              categories: ['MongoDB'],                                           durationMinutes: 30, questionCount: 4  },
  { id: 'auth-ps-dbg', label: 'Auth + Problem Solving + Debugging',  categories: ['Authentication & Security', 'Problem Solving', 'Debugging'], durationMinutes: 60, questionCount: 6 },
];

export const TOTAL_DURATION_MINUTES = SECTION_CONFIG.reduce((s, c) => s + c.durationMinutes, 0); // 180
export const TOTAL_QUESTIONS        = SECTION_CONFIG.reduce((s, c) => s + c.questionCount,   0); // 25

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

  // Section 1: React.js + Next.js (6 total: 3 easy, 2 moderate, 1 hard)
  // MUST NOT contain 'problem-solving' type questions
  const s1Easy = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'easy', category: { $in: ['React.js', 'Next.js'] }, type: { $ne: 'problem-solving' } }, 3, currentSelectionIds);
  const s1Mod  = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'moderate', category: { $in: ['React.js', 'Next.js'] }, type: { $ne: 'problem-solving' } }, 2, currentSelectionIds);
  const s1Hard = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'hard', category: { $in: ['React.js', 'Next.js'] }, type: { $ne: 'problem-solving' } }, 1, currentSelectionIds);
  addQuestions([...s1Easy, ...s1Mod, ...s1Hard], 0);

  // Section 2: Node.js (5 total: 3 easy, 1 moderate, 1 hard)
  // MUST NOT contain 'problem-solving' type questions
  const s2Easy = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'easy', category: 'Node.js', type: { $ne: 'problem-solving' } }, 3, currentSelectionIds);
  const s2Mod  = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'moderate', category: 'Node.js', type: { $ne: 'problem-solving' } }, 1, currentSelectionIds);
  const s2Hard = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'hard', category: 'Node.js', type: { $ne: 'problem-solving' } }, 1, currentSelectionIds);
  addQuestions([...s2Easy, ...s2Mod, ...s2Hard], 1);

  // Section 3: Express.js (4 total: 2 easy, 1 moderate, 1 hard)
  // MUST NOT contain 'problem-solving' type questions
  const s3Easy = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'easy', category: 'Express.js', type: { $ne: 'problem-solving' } }, 2, currentSelectionIds);
  const s3Mod  = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'moderate', category: 'Express.js', type: { $ne: 'problem-solving' } }, 1, currentSelectionIds);
  const s3Hard = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'hard', category: 'Express.js', type: { $ne: 'problem-solving' } }, 1, currentSelectionIds);
  addQuestions([...s3Easy, ...s3Mod, ...s3Hard], 2);

  // Section 4: MongoDB (4 total: 2 easy, 1 moderate, 1 hard)
  // MUST NOT contain 'problem-solving' type questions
  const s4Easy = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'easy', category: 'MongoDB', type: { $ne: 'problem-solving' } }, 2, currentSelectionIds);
  const s4Mod  = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'moderate', category: 'MongoDB', type: { $ne: 'problem-solving' } }, 1, currentSelectionIds);
  const s4Hard = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'hard', category: 'MongoDB', type: { $ne: 'problem-solving' } }, 1, currentSelectionIds);
  addQuestions([...s4Easy, ...s4Mod, ...s4Hard], 3);

  // Section 5: Auth + PS + Debugging (6 total: 3 PS, 3 Auth/Dbg)
  // Exactly 3 Problem Solving category questions (1 easy, 1 moderate, 1 hard)
  const s5PsEasy = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'easy', category: 'Problem Solving' }, 1, currentSelectionIds);
  const s5PsMod  = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'moderate', category: 'Problem Solving' }, 1, currentSelectionIds);
  const s5PsHard = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'hard', category: 'Problem Solving' }, 1, currentSelectionIds);
  
  // Exactly 3 other questions from Auth & Debugging (2 easy, 1 moderate)
  // MUST NOT contain 'problem-solving' type questions
  const s5OtherEasy = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'easy', category: { $in: ['Authentication & Security', 'Debugging'] }, type: { $ne: 'problem-solving' } }, 2, currentSelectionIds);
  const s5OtherMod  = await sampleQuestions({ _id: { $nin: excluded }, difficulty: 'moderate', category: { $in: ['Authentication & Security', 'Debugging'] }, type: { $ne: 'problem-solving' } }, 1, currentSelectionIds);

  addQuestions([...s5PsEasy, ...s5PsMod, ...s5PsHard, ...s5OtherEasy, ...s5OtherMod], 4);

  if (selectedQuestions.length < 25) {
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
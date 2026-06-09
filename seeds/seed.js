import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../.env') });

import mongoose from 'mongoose';
import Question from '../models/Question.js';
import User from '../models/User.js';
import rawQuestions from './questions.js';
import { readFileSync } from 'fs';

const excelQuestions = JSON.parse(
  readFileSync(resolve(__dirname, './excel_questions.json'), 'utf8')
);

const combinedQuestions = [...rawQuestions, ...excelQuestions];

// ── Fix maps ──────────────────────────────────────────────────────────────
const DIFFICULTY_MAP = {
  'medium':   'moderate',   // file uses 'medium', schema needs 'moderate'
  'easy':     'easy',
  'hard':     'hard',
  'moderate': 'moderate',
};

const CATEGORY_MAP = {
  'React.js':        'React.js',
  'Next.js':         'Next.js',
  'Node.js':         'Node.js',
  'Express.js':      'Express.js',
  'MongoDB':         'MongoDB',
  'Problem Solving': 'Problem Solving',
  'Logical Reasoning': 'Logical Reasoning',
  'IQ':              'IQ',
};

const VALID_CATEGORIES = Object.values(CATEGORY_MAP);

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    maxPoolSize: 5,
    serverSelectionTimeoutMS: 10000,
  });
  // console.log('MongoDB Connected for seeding...');
};

const seedQuestions = async () => {
  await connectDB();

  // ── Deduplicate + fix each question ──────────────────────────────────────
  const seen    = new Set();
  const fixed   = [];
  let dupes     = 0;
  let invalid   = 0;

  for (const q of combinedQuestions) {
    const key = q.question?.trim().toLowerCase();

    // Skip missing required fields or wrong option count
    if (!key || !q.options || q.options.length !== 4 || !q.correctAnswer) {
      invalid++; continue;
    }

    // Skip duplicates
    if (seen.has(key)) { dupes++; continue; }
    seen.add(key);

    const category   = CATEGORY_MAP[q.category] || q.category;
    const difficulty = DIFFICULTY_MAP[q.difficulty] || q.difficulty;

    // Skip unknown categories (won't pass schema enum validation)
    if (!VALID_CATEGORIES.includes(category)) { invalid++; continue; }

    fixed.push({
      question:         q.question.trim(),
      options:          q.options,
      correctAnswer:    q.correctAnswer,
      explanation:      q.explanation     || 'No explanation provided.',
      difficulty,
      category,
      technology:       q.technology      || q.category || '',
      type:             q.type            || 'mcq',
      codeSnippet:      q.codeSnippet     || '',
      tags:             q.tags            || [],
      estimatedTime:    q.estimatedTime   || 60,
      realWorldUseCase: q.realWorldUseCase || '',
      isActive:         true,  // ← critical: quizService filters by isActive: true
    });
  }

  // console.log(`\n Combined questions:  ${combinedQuestions.length}`);
  // console.log(` Valid unique:        ${fixed.length}`);
  // console.log(`  Duplicates removed: ${dupes}`);
  // console.log(`  Invalid/skipped:    ${invalid}\n`);

  // ── Clear + insert ────────────────────────────────────────────────────────
  await Question.deleteMany({});
  // console.log('Cleared existing questions');

  const BATCH = 500;
  for (let i = 0; i < fixed.length; i += BATCH) {
    await Question.insertMany(fixed.slice(i, i + BATCH), { ordered: false });
    // console.log(`   Inserted ${Math.min(i + BATCH, fixed.length)} / ${fixed.length}...`);
  }

  // ── Verify ────────────────────────────────────────────────────────────────
  const [easy, moderate, hard] = await Promise.all([
    Question.countDocuments({ isActive: true, difficulty: 'easy' }),
    Question.countDocuments({ isActive: true, difficulty: 'moderate' }),
    Question.countDocuments({ isActive: true, difficulty: 'hard' }),
  ]);
  // console.log(`\n✅ Inserted — Easy: ${easy} | Moderate: ${moderate} | Hard: ${hard}`);

  const [ps, lr, iq] = await Promise.all([
    Question.countDocuments({ isActive: true, category: 'Problem Solving' }),
    Question.countDocuments({ isActive: true, category: 'Logical Reasoning' }),
    Question.countDocuments({ isActive: true, category: 'IQ' }),
  ]);
  // console.log(`   Problem Solving: ${ps}`);
  // console.log(`   Logical Reasoning: ${lr} | IQ: ${iq}`);

  // ── Quiz readiness check ──────────────────────────────────────────────────
  // console.log('\n🔍 Quiz readiness:');
  // console.log(`   Need 13 easy    → ${easy   >= 13 ? '✓' : '✗ NOT ENOUGH'} (have ${easy})`);
  // console.log(`   Need 7 moderate → ${moderate >= 7 ? '✓' : '✗ NOT ENOUGH'} (have ${moderate})`);
  // console.log(`   Need 5 hard     → ${hard   >= 5  ? '✓' : '✗ NOT ENOUGH'} (have ${hard})`);
  // console.log(`   Need 3 PS       → ${ps     >= 3  ? '✓' : '✗ NOT ENOUGH'} (have ${ps})`);
  // console.log(`   Logical Reasoning & IQ (Need 40) → ${lr + iq >= 40 ? '✓' : '✗ NOT ENOUGH'} (have ${lr + iq})`);

  // ── Admin user ────────────────────────────────────────────────────────────
  const adminExists = await User.findOne({ email: 'admin@devquiz.com' });
  if (!adminExists) {
    await User.create({
      name: 'Admin',
      email: 'admin@devquiz.com',
      password: 'Admin@123',
      role: 'admin',
    });
    // console.log('\n Admin user created: admin@devquiz.com / Admin@123');
  } else {
    // console.log('\n Admin user already exists');
  }

  await mongoose.connection.close();
  // console.log('\n🎉 Seeding complete! Your quiz will now serve questions automatically.');
  process.exit(0);
};

seedQuestions().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';
import fs from 'fs/promises';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Question from '../models/Question.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../.env') });

const DIFFICULTY_MAP = {
  'medium':   'moderate',
  'easy':     'easy',
  'hard':     'hard',
  'moderate': 'moderate',
};

const CATEGORY_MAP = {
  'Authentication Security':   'Authentication & Security',
  'Authentication & Security': 'Authentication & Security',
  'React.js':        'React.js',
  'Next.js':         'Next.js',
  'Node.js':         'Node.js',
  'Express.js':      'Express.js',
  'MongoDB':         'MongoDB',
  'Problem Solving': 'Problem Solving',
  'Debugging':       'Debugging',
};

const VALID_CATEGORIES = Object.values(CATEGORY_MAP);
const VALID_DIFFICULTIES = ['easy', 'moderate', 'hard'];
const VALID_TYPES = ['mcq', 'debugging', 'scenario', 'problem-solving'];

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    maxPoolSize: 5,
    serverSelectionTimeoutMS: 10000,
  });
  console.log('✓ MongoDB Connected for batch seeding...');
};

const seedMultipleBatches = async () => {
  const batchesDir = join(__dirname, 'batches');
  await connectDB();

  // 1. Fetch all existing question texts to prevent duplicates
  console.log('Fetching existing questions from database...');
  const existingQuestions = await Question.find({}, { question: 1 }).lean();
  const seenKeys = new Set(existingQuestions.map((q) => q.question.trim().toLowerCase()));
  console.log(`Loaded ${seenKeys.size} existing question signatures from database.`);

  // 2. Read all files in seeds/batches
  let files;
  try {
    files = await fs.readdir(batchesDir);
  } catch (err) {
    console.error(`Error reading directory ${batchesDir}:`, err.message);
    await mongoose.connection.close();
    process.exit(1);
  }

  const jsonFiles = files.filter((f) => f.endsWith('.json'));
  if (jsonFiles.length === 0) {
    console.log(`No .json files found in ${batchesDir}. Place your topic JSON files there and run again.`);
    await mongoose.connection.close();
    process.exit(0);
  }

  console.log(`Found ${jsonFiles.length} JSON batch files to process: ${jsonFiles.join(', ')}`);

  const toInsert = [];
  let duplicateCount = 0;
  let invalidCount = 0;
  let fileErrorCount = 0;

  for (const file of jsonFiles) {
    const filePath = join(batchesDir, file);
    console.log(`\nProcessing file: ${file}...`);

    try {
      const data = await fs.readFile(filePath, 'utf8');
      const questionsList = JSON.parse(data);

      if (!Array.isArray(questionsList)) {
        console.warn(`⚠️ Warning: ${file} does not contain a JSON array. Skipping.`);
        invalidCount++;
        continue;
      }

      console.log(`- Read ${questionsList.length} questions from ${file}`);

      for (let idx = 0; idx < questionsList.length; idx++) {
        const q = questionsList[idx];
        const questionText = q.question?.trim();

        if (!questionText) {
          invalidCount++;
          continue;
        }

        const key = questionText.toLowerCase();

        // Check for duplicates (both in DB and current batch)
        if (seenKeys.has(key)) {
          duplicateCount++;
          continue;
        }

        const category = CATEGORY_MAP[q.category] || q.category;
        const difficulty = DIFFICULTY_MAP[q.difficulty] || q.difficulty;
        const type = q.type || 'mcq';

        // Validation checks
        if (!VALID_CATEGORIES.includes(category)) {
          console.warn(`  [Row ${idx+1}] Invalid Category: "${q.category}". Skipping.`);
          invalidCount++;
          continue;
        }

        if (!VALID_DIFFICULTIES.includes(difficulty)) {
          console.warn(`  [Row ${idx+1}] Invalid Difficulty: "${q.difficulty}". Skipping.`);
          invalidCount++;
          continue;
        }

        if (!VALID_TYPES.includes(type)) {
          console.warn(`  [Row ${idx+1}] Invalid Type: "${type}". Skipping.`);
          invalidCount++;
          continue;
        }

        const isProblemSolving = category === 'Problem Solving' || type === 'problem-solving';

        if (!isProblemSolving) {
          if (!Array.isArray(q.options) || q.options.length !== 4) {
            console.warn(`  [Row ${idx+1}] MCQ type must have exactly 4 options. Skipping.`);
            invalidCount++;
            continue;
          }
          if (!q.correctAnswer) {
            console.warn(`  [Row ${idx+1}] Missing correctAnswer. Skipping.`);
            invalidCount++;
            continue;
          }
        }

        // Dynamically compute technology if missing
        const technology = q.technology || category.replace('.js', '').replace(' & Security', '');

        // Add to insertion array
        toInsert.push({
          question:         questionText,
          options:          isProblemSolving ? [] : q.options.map((opt) => String(opt).trim()),
          correctAnswer:    String(q.correctAnswer || '').trim(),
          explanation:      String(q.explanation || 'No explanation provided.').trim(),
          difficulty,
          category,
          technology,
          type,
          codeSnippet:      String(q.codeSnippet || '').trim(),
          tags:             Array.isArray(q.tags) ? q.tags.map((t) => String(t).toLowerCase().trim()) : [],
          estimatedTime:    parseInt(q.estimatedTime) || (difficulty === 'easy' ? 30 : difficulty === 'moderate' ? 60 : 120),
          realWorldUseCase: String(q.realWorldUseCase || '').trim(),
          isActive:         true,
        });

        // Mark as seen to prevent duplicates within the batch
        seenKeys.add(key);
      }
    } catch (err) {
      fileErrorCount++;
      console.error(`❌ Error parsing or reading ${file}:`, err.message);
    }
  }

  // 3. Batch insert questions
  console.log(`\n--- Seeding Summary ---`);
  console.log(`Questions to insert:  ${toInsert.length}`);
  console.log(`Duplicates skipped:   ${duplicateCount}`);
  console.log(`Invalid items skipped: ${invalidCount}`);
  if (fileErrorCount > 0) {
    console.log(`Files with errors:     ${fileErrorCount}`);
  }

  if (toInsert.length > 0) {
    console.log(`Inserting ${toInsert.length} questions into MongoDB...`);
    const BATCH_SIZE = 500;
    let inserted = 0;

    for (let i = 0; i < toInsert.length; i += BATCH_SIZE) {
      const batch = toInsert.slice(i, i + BATCH_SIZE);
      await Question.insertMany(batch, { ordered: false });
      inserted += batch.length;
      console.log(`   Inserted ${inserted} / ${toInsert.length}...`);
    }

    console.log('✓ Seeding complete!');
  } else {
    console.log('No new unique questions to insert.');
  }

  // 4. Print final counts in DB
  const [easy, moderate, hard] = await Promise.all([
    Question.countDocuments({ isActive: true, difficulty: 'easy' }),
    Question.countDocuments({ isActive: true, difficulty: 'moderate' }),
    Question.countDocuments({ isActive: true, difficulty: 'hard' }),
  ]);
  const total = easy + moderate + hard;
  console.log(`\nDatabase Status — Total Questions: ${total} (Easy: ${easy} | Moderate: ${moderate} | Hard: ${hard})`);

  await mongoose.connection.close();
  process.exit(0);
};

seedMultipleBatches().catch((err) => {
  console.error('Fatal Seeding Error:', err);
  process.exit(1);
});

import 'dotenv/config';
import mongoose from 'mongoose';
import Groq from 'groq-sdk';
import Question from '../models/Question.js';

// Subtopics to cover
const REACT_SUBTOPICS = [
  "JSX & Virtual DOM",
  "Hooks (useState, useEffect, useRef, useMemo, useCallback)",
  "Component Lifecycle",
  "Props & State Management",
  "Context API",
  "React Router",
  "Performance Optimisation",
  "Error Boundaries",
  "Code Splitting & Lazy Loading"
];

const NEXT_SUBTOPICS = [
  "App Router & Pages Router",
  "Server & Client Components",
  "Static Generation (SSG)",
  "Server-Side Rendering (SSR)",
  "Incremental Static Regeneration (ISR)",
  "API Routes",
  "Middleware & Edge Functions",
  "Image Optimisation",
  "Metadata & SEO"
];

// Initialize Groq Client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function callGroqWithRetry(prompt, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const completion = await groq.chat.completions.create({
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 4000,
        temperature: 0.7,
      });

      const responseText = completion.choices[0]?.message?.content?.trim();
      const cleaned = responseText
        .replace(/^```(?:json)?\s*/i, '')
        .replace(/\s*```$/, '')
        .trim();

      return JSON.parse(cleaned);
    } catch (err) {
      console.warn(`[Groq API Warning] Attempt ${attempt} failed:`, err.message);
      if (attempt === retries) throw err;
      await sleep(3000 * attempt);
    }
  }
}

async function generateSubtopicBatch(category, subtopic, difficulty, count, seenSignatures) {
  const isReact = category === 'React.js';
  const technology = isReact ? 'React' : 'Next.js';
  
  // Distribute types within the batch: mix of mcq, debugging, problem-solving
  const prompt = `Generate exactly ${count} unique, high-quality, practical technical quiz questions.
Category: ${category}
Technology: ${technology}
Syllabus Subtopic: ${subtopic}
Difficulty Level: ${difficulty}

Of the ${count} questions, distribute them as follows:
- Approx 40%: standard 'mcq' type. Conceptual or code reading. MUST have exactly 4 options.
- Approx 40%: 'debugging' type. Contains a codeSnippet containing a subtle bug or anti-pattern. Question should ask how to fix or what the bug is. MUST have exactly 4 options.
- Approx 20%: 'problem-solving' type. Practical coding task. Options MUST be an empty array []. Type MUST be 'problem-solving'. correctAnswer MUST contain the detailed model answer (2-4 sentences describing the key technical concepts and steps needed for a correct solution).

Rules:
1. For 'mcq' and 'debugging' types:
   - "options" MUST be an array of EXACTLY 4 strings.
   - "correctAnswer" MUST match one of the options EXACTLY (case-sensitive).
2. For 'problem-solving' type:
   - "options" MUST be an empty array [].
   - "correctAnswer" MUST be a detailed model solution (2-4 sentences describing technical steps).
3. "question" MUST be a clear, unique, practical question.
4. "explanation" MUST be 2-3 sentences explaining why the correct answer is correct.
5. "codeSnippet" should contain the code snippet if relevant (mandatory for 'debugging', optional for others).
6. "tags" MUST be an array of 2-4 lowercase kebab-case tags.
7. "estimatedTime" MUST be a number in seconds (e.g. 60 to 120).
8. "realWorldUseCase" MUST be 1 sentence explaining why this concept is important in production.

CRITICAL JSON RULES (Failure is unacceptable):
- Return ONLY a single raw valid JSON array. DO NOT wrap it in markdown block quotes or fences.
- All codeSnippet strings MUST have newlines represented as \\n and double quotes represented as \\".
- DO NOT use unescaped backtick characters (\`) in any JSON string fields (like codeSnippet, question, explanation). If you need a string template or backtick in a codeSnippet, represent it using single quotes (') or double quotes (\").
- No single quotes for JSON keys or values. Everything MUST use valid JSON double quotes.

Return format:
[
  {
    "question": "...",
    "options": ["opt1", "opt2", "opt3", "opt4"],
    "correctAnswer": "opt2",
    "explanation": "...",
    "difficulty": "${difficulty}",
    "category": "${category}",
    "technology": "${technology}",
    "type": "mcq",
    "codeSnippet": "const foo = () => {}",
    "tags": ["tag1", "tag2"],
    "estimatedTime": 90,
    "realWorldUseCase": "..."
  }
]`;

  return await callGroqWithRetry(prompt);
}

async function run() {
  // console.log('🚀 Connecting to MongoDB...');
  await mongoose.connect(process.env.MONGODB_URI);
  // console.log('✓ Connected to MongoDB');

  // console.log('Fetching existing question signatures...');
  const existingDocs = await Question.find({}, { question: 1 }).lean();
  const seenSignatures = new Set(existingDocs.map(d => d.question.trim().toLowerCase()));
  // console.log(`Loaded ${seenSignatures.size} existing questions to prevent duplicates.\n`);

  // Target: 45 questions per subtopic (15 easy, 15 moderate, 15 hard)
  const targets = [
    { category: 'React.js', subtopics: REACT_SUBTOPICS },
    { category: 'Next.js', subtopics: NEXT_SUBTOPICS }
  ];

  const difficulties = ['easy', 'moderate', 'hard'];
  let totalInserted = 0;

  for (const t of targets) {
    // console.log(`\n=== Generating Questions for Category: ${t.category} ===`);
    for (const subtopic of t.subtopics) {
      // console.log(`\n📖 Subtopic: "${subtopic}"`);
      
      for (const difficulty of difficulties) {
        const count = 15; // Generate 15 questions per difficulty/subtopic combination
        // console.log(`   Generating ${count} ${difficulty} questions...`);
        
        try {
          const batch = await generateSubtopicBatch(t.category, subtopic, difficulty, count, seenSignatures);
          const docs = [];

          if (Array.isArray(batch)) {
            for (const q of batch) {
              const text = (q.question || '').trim();
              if (!text || seenSignatures.has(text.toLowerCase())) continue;

              const isPS = q.type === 'problem-solving';

              // Strict validations
              if (!isPS && (!q.options || q.options.length !== 4)) {
                console.warn(`   ⚠️ Skipping question (does not have exactly 4 options): "${text.slice(0, 40)}..."`);
                continue;
              }
              if (!isPS && !q.options.includes(q.correctAnswer)) {
                console.warn(`   ⚠️ Correct answer "${q.correctAnswer}" not in options. Auto-correcting...`);
                q.correctAnswer = q.options[0];
              }
              if (isPS) {
                q.options = [];
              }

              docs.push({
                question: text,
                options: q.options || [],
                correctAnswer: (q.correctAnswer || '').trim(),
                explanation: (q.explanation || '').trim(),
                difficulty: q.difficulty || difficulty,
                category: t.category,
                technology: q.technology || (t.category === 'React.js' ? 'React' : 'Next.js'),
                type: q.type || (isPS ? 'problem-solving' : 'mcq'),
                codeSnippet: q.codeSnippet || '',
                tags: Array.isArray(q.tags) ? q.tags : [],
                estimatedTime: parseInt(q.estimatedTime) || 90,
                realWorldUseCase: q.realWorldUseCase || '',
                isActive: true
              });

              seenSignatures.add(text.toLowerCase());
            }

            if (docs.length > 0) {
              await Question.insertMany(docs, { ordered: false });
              totalInserted += docs.length;
              // console.log(`   ✓ Successfully inserted ${docs.length} unique questions.`);
            } else {
              // console.log(`   ⚠️ No new unique questions generated in this batch.`);
            }
          } else {
            console.error(`   ❌ Failed to receive a valid JSON array for this batch.`);
          }
        } catch (err) {
          console.error(`   ❌ Error generating batch:`, err.message);
        }

        // 3 seconds delay to comply with standard free-tier rate limits (15 RPM)
        await sleep(3000);
      }
    }
  }

  const finalCount = await Question.countDocuments({ isActive: true });
  // console.log('\n🎉 ALL REACTOR & NEXT.JS QUESTIONS SEEDED SUCCESSFULLY!');
  // console.log(`Total questions added during this run: ${totalInserted}`);
  // console.log(`Total active questions now in DB: ${finalCount}`);

  await mongoose.disconnect();
  process.exit(0);
}

run().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});

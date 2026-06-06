import { getModel } from '../config/gemini.js';

const generateQuizReport = async (attemptData) => {
  const {
    studentName, percentage, correctAnswers, totalQuestions,
    breakdown, categoryBreakdown, timeTaken, grade,
    wrongQuestions = [], violation = false,
  } = attemptData;

  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;

  // Build category performance summary
  const catSummary = categoryBreakdown.map((c) => {
    const pct = c.total > 0 ? Math.round((c.correct / c.total) * 100) : 0;
    return `  - ${c.category}: ${c.correct}/${c.total} (${pct}%)`;
  }).join('\n');

  // Build wrong-question details (limit to 10 to keep prompt concise)
  const wrongSample = wrongQuestions.slice(0, 10);
  const wrongText = wrongSample.length > 0
    ? wrongSample.map((q, i) => {
        const isPS = q.category === 'Problem Solving';
        let lines = `  ${i + 1}. [${q.difficulty.toUpperCase()} | ${q.category}] ${q.question}\n`;
        if (isPS && q.writtenDescription) {
          lines += `     Written answer:   "${q.writtenDescription}"\n`;
          lines += `     (Problem Solving — evaluate quality of written explanation, not right/wrong)\n`;
          lines += `     Model answer:     "${q.correctAnswer || 'Open-ended — teacher reviews'}"`;
        } else if (isPS && !q.writtenDescription) {
          lines += `     Written answer:   (no answer provided)\n`;
          lines += `     (Problem Solving — student left this blank)`;
        } else {
          lines += `     Student answered: "${q.yourAnswer || 'unanswered'}"\n`;
          lines += `     Correct answer:   "${q.correctAnswer}"`;
        }
        return lines;
      }).join('\n')
    : '  (No wrong questions data available)';

  // Weighted score: weight hard questions more
  const easyPct     = breakdown.easy.total     > 0 ? (breakdown.easy.correct     / breakdown.easy.total)     : 0;
  const modPct      = breakdown.moderate.total > 0 ? (breakdown.moderate.correct / breakdown.moderate.total) : 0;
  const hardPct     = breakdown.hard.total     > 0 ? (breakdown.hard.correct     / breakdown.hard.total)     : 0;
  const weightedPct = ((easyPct * 0.3) + (modPct * 0.4) + (hardPct * 0.3)) * 100;

  const violationNote = violation
    ? '\nNOTE: This student was flagged for a proctoring violation (tab switch / window exit) during the quiz. Mention this briefly and professionally in the feedback.'
    : '';

  const prompt = `You are a senior MERN stack technical evaluator and career coach generating a detailed, professional performance report for an educational assessment platform.

STUDENT ASSESSMENT DATA
═══════════════════════
Student: ${studentName}
Overall Score: ${correctAnswers}/${totalQuestions} (${percentage}%)
Grade: ${grade}
Time Taken: ${minutes}m ${seconds}s
Weighted Performance Score: ${weightedPct.toFixed(1)}%

DIFFICULTY BREAKDOWN
Easy     (${breakdown.easy.total} questions):     ${breakdown.easy.correct} correct (${breakdown.easy.total > 0 ? Math.round((breakdown.easy.correct / breakdown.easy.total) * 100) : 0}%)
Moderate (${breakdown.moderate.total} questions): ${breakdown.moderate.correct} correct (${breakdown.moderate.total > 0 ? Math.round((breakdown.moderate.correct / breakdown.moderate.total) * 100) : 0}%)
Hard     (${breakdown.hard.total} questions):     ${breakdown.hard.correct} correct (${breakdown.hard.total > 0 ? Math.round((breakdown.hard.correct / breakdown.hard.total) * 100) : 0}%)

CATEGORY PERFORMANCE
${catSummary || '  (No category data)'}

WRONG/UNANSWERED QUESTIONS (${wrongQuestions.length} total wrong)
${wrongText}
${violationNote}

PROBLEM SOLVING QUESTIONS NOTE
For any question marked [... | Problem Solving], the student wrote a free-text explanation instead of picking MCQ options. These are NEVER auto-graded — they are always marked wrong by the system regardless of answer quality.
Your job: read the written answer and evaluate the quality of their reasoning.
- If the written answer shows good understanding → mention it as a strength and acknowledge it in feedback
- If the written answer shows partial understanding → acknowledge the effort, point out the gaps
- If the written answer is blank or very weak → flag it as a weakness
Do NOT treat PS questions the same as MCQ wrong answers. Give specific, meaningful feedback on what they wrote.

INSTRUCTIONS
You must return ONLY a single valid JSON object — no markdown, no extra text, no code fences.

The "score" field MUST be calculated precisely:
- 0–10%:   score 1
- 11–20%:  score 2
- 21–30%:  score 3
- 31–40%:  score 4
- 41–50%:  score 5
- 51–60%:  score 6
- 61–70%:  score 7
- 71–80%:  score 8
- 81–90%:  score 9
- 91–100%: score 10

For this student, percentage = ${percentage}%, so score MUST be ${Math.max(1, Math.min(10, Math.ceil(percentage / 10)))}.

JSON SCHEMA (return exactly this structure):
{
  "score": <integer 1-10, MUST follow the table above>,
  "feedback": "<2-3 sentences: honest, specific, professional assessment of overall performance. For PS questions, briefly note the quality of written answers.>",
  "strengths": [
    "<specific strength based on category/difficulty data — e.g. 'Strong grasp of Node.js fundamentals (X/Y correct)'>",
    "<if a PS written answer showed good reasoning, mention it here specifically>",
    "<optional third strength if warranted>"
  ],
  "weaknesses": [
    "<specific weakness with category evidence — e.g. 'Struggled with React.js state management (X/Y correct)'>",
    "<if a PS written answer was weak or blank, mention it here specifically>",
    "<optional third weakness>"
  ],
  "areasToImprove": [
    "<specific topic from wrong questions analysis>",
    "<another topic>",
    "<another topic>",
    "<fourth topic if applicable>"
  ],
  "categoryPerformance": [
    {
      "category": "<category name>",
      "score": <percentage 0-100>,
      "recommendation": "<1 specific actionable tip for this category>"
    }
  ],
  "learningRoadmap": [
    "<Step 1: most urgent topic based on wrong answers>",
    "<Step 2: next priority>",
    "<Step 3>",
    "<Step 4>",
    "<Step 5: long-term goal>"
  ],
  "overallFeedback": "<2-3 paragraphs: detailed personalised analysis. Reference specific categories, difficulty levels, and time management. For Problem Solving questions, comment specifically on the quality of written answers provided. Be constructive and motivating. If violation occurred, mention it professionally.>",
  "nextSteps": [
    "<Immediate action — specific resource or practice task>",
    "<Second step — concrete>",
    "<Third step — measurable goal>"
  ]
}`;

  try {
    const model  = getModel('gemini-2.0-flash');
    const result = await model.generateContent(prompt);
    const text   = result.response.text().trim();
    // Strip any accidental markdown fences
    const cleaned = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
    const parsed  = JSON.parse(cleaned);

    // Enforce the score calculation server-side regardless of what Gemini returns
    parsed.score = Math.max(1, Math.min(10, Math.ceil(percentage / 10)));

    return parsed;
  } catch (error) {
    console.error('Gemini API error:', error.message);
    return buildFallbackReport(attemptData);
  }
};

const buildFallbackReport = ({ studentName, percentage, breakdown, categoryBreakdown, wrongQuestions = [], violation = false }) => {
  const score = Math.max(1, Math.min(10, Math.ceil(percentage / 10)));

  // Separate PS and MCQ wrong questions
  const psWrong  = wrongQuestions.filter((q) => q.category === 'Problem Solving');
  const mcqWrong = wrongQuestions.filter((q) => q.category !== 'Problem Solving');

  const weakCats = [...categoryBreakdown]
    .sort((a, b) => (a.correct / Math.max(a.total, 1)) - (b.correct / Math.max(b.total, 1)))
    .slice(0, 3)
    .map((c) => c.category);

  const strongCats = [...categoryBreakdown]
    .sort((a, b) => (b.correct / Math.max(b.total, 1)) - (a.correct / Math.max(a.total, 1)))
    .slice(0, 2)
    .map((c) => c.category);

  const level = percentage >= 80 ? 'excellent' : percentage >= 60 ? 'good' : percentage >= 40 ? 'average' : 'needs improvement';

  // Build PS-specific feedback for fallback
  const psWithAnswers  = psWrong.filter((q) => q.writtenDescription);
  const psWithoutAnswers = psWrong.filter((q) => !q.writtenDescription);

  const strengthsList = strongCats.length > 0
    ? strongCats.map((c) => `Demonstrated understanding in ${c}`)
    : ['Completed the full assessment', 'Engaged with MERN stack concepts'];

  if (psWithAnswers.length > 0) {
    strengthsList.push(`Attempted ${psWithAnswers.length} Problem Solving question(s) with written explanations — shows willingness to engage with open-ended challenges`);
  }

  const weaknessesList = weakCats.length > 0
    ? weakCats.map((c) => `Needs improvement in ${c}`)
    : ['Review harder difficulty questions', 'Practice debugging scenarios'];

  if (psWithoutAnswers.length > 0) {
    weaknessesList.push(`${psWithoutAnswers.length} Problem Solving question(s) left unanswered — these require written explanations and carry significant weight`);
  }

  return {
    score,
    feedback: `${studentName || 'You'} scored ${percentage}% (${score}/10) — a ${level} performance. ${
      percentage >= 70
        ? 'Solid foundation across MERN stack topics. Focus on hard questions to push further.'
        : percentage >= 40
        ? 'Shows understanding of core concepts but gaps remain in advanced topics.'
        : 'Significant improvement needed. Revisit fundamentals and build progressively.'
    }${psWithAnswers.length > 0 ? ` Written answers were provided for ${psWithAnswers.length} Problem Solving question(s) and will be reviewed by the teacher.` : ''}${violation ? ' Note: A proctoring violation was recorded during this attempt.' : ''}`,
    strengths: strengthsList,
    weaknesses: weaknessesList,
    areasToImprove: weakCats.length > 0
      ? [...weakCats, 'Advanced problem-solving patterns']
      : ['React hooks & state management', 'MongoDB aggregation pipelines', 'Express middleware patterns', 'JWT authentication flows'],
    categoryPerformance: categoryBreakdown.map((c) => ({
      category: c.category,
      score: c.total > 0 ? Math.round((c.correct / c.total) * 100) : 0,
      recommendation: `Practice more ${c.category} exercises and review official documentation.`,
    })),
    learningRoadmap: [
      `Priority: Master ${weakCats[0] || 'foundational'} concepts — read docs and build a mini-project`,
      `Build a complete MERN CRUD application covering all 8 topic areas`,
      `Practice Problem Solving questions — write out your architecture and reasoning clearly`,
      `Study authentication flows — JWT, refresh tokens, and secure cookie handling`,
      `Take mock assessments weekly and review wrong answers immediately after`,
    ],
    overallFeedback: `Overall performance: ${percentage}% with a score of ${score}/10. ${
      breakdown.hard.total > 0
        ? `Hard questions: ${breakdown.hard.correct}/${breakdown.hard.total} correct — ${
            breakdown.hard.correct === 0
              ? 'no hard questions answered correctly, indicating gaps in advanced concepts.'
              : 'some hard questions handled well.'
          }`
        : ''
    } ${psWrong.length > 0
        ? `Problem Solving questions (${psWrong.length} total): ${psWithAnswers.length} answered with written explanations, ${psWithoutAnswers.length} left blank. These are reviewed manually by the teacher.`
        : ''
    } Focus on ${weakCats.slice(0, 2).join(' and ') || 'all categories'} for the greatest improvement.`,
    nextSteps: [
      `Review wrong answers and their explanations in the Answer Review section`,
      `Study ${weakCats[0] || 'MongoDB and React'} — focus on official docs and hands-on practice`,
      `Re-attempt the quiz after 1 week of focused study to measure improvement`,
    ],
  };
};

export { generateQuizReport };
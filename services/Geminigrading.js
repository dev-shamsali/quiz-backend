import 'dotenv/config';
import Groq from 'groq-sdk';

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/**
 * Grades a single Problem Solving answer using Groq.
 * Returns true (correct) or false (wrong/unanswered).
 */
export const gradePSAnswer = async (
  question,
  modelAnswer,
  studentAnswer
) => {
  if (!studentAnswer || !studentAnswer.trim()) {
    return false;
  }

  const prompt = `You are a strict MERN stack technical evaluator grading a Problem Solving question.

QUESTION:
${question}

MODEL ANSWER (the key concepts a correct answer must cover):
${modelAnswer}

STUDENT'S WRITTEN ANSWER:
${studentAnswer}

GRADING RULES:
1. Award PASS if the student's answer covers the core technical concept(s) from the model answer, even if worded differently or less detailed.
2. Award FAIL if the student's answer is missing key concepts, is irrelevant, too vague, or clearly wrong.
3. A partial answer that correctly identifies the main technical approach should PASS.
4. Do not penalise for spelling or grammar.
5. A one-word or very short answer that is technically correct should PASS.
6. A lengthy answer that misses the point should FAIL.

Respond with ONLY one word — either PASS or FAIL. No explanation, no punctuation, nothing else.`;

  try {
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 5,
      temperature: 0,
    });

    const text =
      completion.choices?.[0]?.message?.content
        ?.trim()
        ?.toUpperCase() || 'FAIL';

    // console.log(
    //   `[PS Grading] Result: "${text}" | Answer: "${studentAnswer.slice(
    //     0,
    //     60
    //   )}..."`
    // );

    return text.startsWith('PASS');
  } catch (err) {
    console.error('[PS Grading] Groq error:', err);
    return false;
  }
};

/**
 * Grades all PS answers in a results array using Groq.
 * Returns updatedResults (with isCorrect set) and psCorrectCount.
 */
export const gradePSAnswers = async (results, answerMap) => {
  let psCorrectCount = 0;

  const gradingPromises = results.map(async (r) => {
    const qId = r.question.toString();
    const answer = answerMap[qId];

    // Only grade Problem Solving questions
    if (!answer || answer.category !== 'Problem Solving') {
      return r;
    }

    const writtenAnswer = (r.description || '').trim();

    if (!writtenAnswer) {
      // console.log(
      //   `[PS Grading] Skipping empty answer for question ${qId}`
      // );

      return {
        ...r,
        isCorrect: false,
      };
    }

    const isCorrect = await gradePSAnswer(
      answer.question || '',
      answer.correctAnswer || '',
      writtenAnswer
    );

    if (isCorrect) {
      psCorrectCount++;
    }

    return {
      ...r,
      isCorrect,
    };
  });

  const updatedResults = await Promise.all(gradingPromises);

  return {
    updatedResults,
    psCorrectCount,
  };
};
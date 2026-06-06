import { GoogleGenerativeAI } from '@google/generative-ai';

let genAI = null;

const getGeminiClient = () => {
  if (!genAI) {
    const key = process.env.GEMINI_API_KEY;
    console.log('[Gemini Config] Key status:', key ? `FOUND (starts with ${key.slice(0, 8)}...)` : 'MISSING');
    if (!key) {
      throw new Error('GEMINI_API_KEY is not configured');
    }
    genAI = new GoogleGenerativeAI(key);
  }
  return genAI;
};

const getModel = (modelName = 'gemini-2.0-flash') => {
  return getGeminiClient().getGenerativeModel({ model: modelName });
};

// ── Force-reset client (use if key changes at runtime) ────────────────────
const resetGeminiClient = () => { genAI = null; };

export { getGeminiClient, getModel, resetGeminiClient };
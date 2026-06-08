import rawQuestions from './seeds/questions.js';

console.log("Total raw questions:", rawQuestions.length);
const categories = {};
rawQuestions.forEach(q => {
  categories[q.category] = (categories[q.category] || 0) + 1;
});
console.log("Categories in questions.js:");
console.log(JSON.stringify(categories, null, 2));

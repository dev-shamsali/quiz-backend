# Batch JSON Question Format

Place your `.json` topic files in this directory. The seeder script will automatically scan, read, and insert them in bulk.

## Expected JSON Schema

Each file must be a JSON array containing objects with the following fields:

```json
[
  {
    "question": "Question text here?",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "correctAnswer": "Option B",
    "explanation": "Detailed explanation of why Option B is correct.",
    "difficulty": "easy",
    "category": "React.js",
    "type": "mcq",
    "tags": ["hooks", "state"],
    "estimatedTime": 30,
    "realWorldUseCase": "Managing local state in forms."
  }
]
```

## Schema Constraints & Enums

- **category**: Must be exactly one of:
  - `React.js`
  - `Next.js`
  - `Node.js`
  - `Express.js`
  - `MongoDB`
  - `Authentication & Security`
  - `Problem Solving`
  - `Debugging`
- **difficulty**: Must be exactly one of:
  - `easy`
  - `moderate` (or `medium` which is auto-mapped to `moderate`)
  - `hard`
- **type**: Must be exactly one of:
  - `mcq`
  - `debugging`
  - `scenario`
  - `problem-solving`
- **options**: Exactly 4 options are required for `mcq`, `debugging`, and `scenario` types. For `problem-solving` types, this can be omitted or empty since they are open-ended.
- **correctAnswer**: Must match one of the `options` strings exactly (case-sensitive) for non-problem-solving questions. For `problem-solving` questions, this should contain the model answer key concepts.

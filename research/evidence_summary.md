Purpose: Short synthesis of research evidence for improving LULT.
How the GPT should use this file: Use as a methodological summary; do not upload as a long replacement for runtime rubrics.
Priority: High
Last updated: 2026-05-26

# Evidence Summary

## What Seems Solid

- CEFR is a reference framework, not a test or certificate.
- CEFR-based claims need context and evidence; formal alignment requires a validation argument.
- Language ability is multi-skill and often uneven across reading, writing, speaking, and listening.
- Validity, reliability, fairness, transparency, and practicality are core assessment concerns.
- Writing and speaking assessment need clear criteria and benchmark examples because human or AI ratings can vary.
- Speaking cannot be fully assessed from text alone.
- Formal CAT/IRT requires calibrated item banks and statistical scoring; LULT currently uses heuristic adaptation.
- AI scoring in language assessment is promising but raises validity, fairness, interpretability, privacy, and over-reliance concerns.

## What Is Uncertain

- Whether LULT’s current 0-100 score boundaries match real CEFR distributions.
- How stable GPT scoring is across model versions and prompt variants.
- Whether short tests can reliably distinguish adjacent boundaries such as A2/B1 or B2/C1.
- How much self-assessed speaking/listening should affect a total score.
- Whether AI feedback introduces systematic bias against specific language backgrounds, varieties, or writing styles.

## What Should NOT Be Claimed

- LULT is an official CEFR exam.
- LULT certifies a user’s level.
- LULT is formally aligned to CEFR.
- LULT scores are equivalent to IELTS, TOEFL, Cambridge English, Duolingo English Test, EF SET, ACTFL, or any other exam scale.
- LULT is a formal computerized adaptive test or IRT-based assessment.
- Text-only sessions directly assess pronunciation, spontaneous fluency, or listening comprehension.
- A single short session can provide a permanent or high-stakes decision.

## Practical Implications For This GPT

- Keep the result label as “approximate diagnostic snapshot.”
- Report a total score plus skill evidence and confidence level.
- Use a boundary label when appropriate: “A2/B1 border”, “B1/B2 border”, “B2/C1 border.”
- Ask at least one open production task before assigning B1+ with medium/high confidence.
- If speaking/listening are unavailable, redistribute scoring and state the limitation.
- Treat adaptive routing as heuristic: raise, lower, or hold level based on repeated evidence.
- Use calibration examples as anchors for scoring consistency.
- Maintain a regression suite and add human-rated benchmark answers before increasing confidence claims.

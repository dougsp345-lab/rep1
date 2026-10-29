# Fact & Form — curriculum and learning design

## Purpose

Make foundational arithmetic facts readily retrievable so that working memory remains available for reasoning. This is a focused practice tool, not a substitute for mathematical understanding or an unrelated entertainment game. Its aim is accurate, fluent, durable recall. It is not affiliated with Justin Skycak or Math Academy.

## Exact inventory: 663 facts, not 695

There is no natural 695-fact total for the following complete, explicitly defined inventory. The application uses **663** and does not invent or duplicate 32 facts to reach the requested number.

| Operation | Definition | Count |
| --- | --- | ---: |
| Addition | a + b, where a and b independently range from 0 through 12 | 169 |
| Subtraction | (a + b) − a = b, for the same a and b | 169 |
| Multiplication | a × b, where a and b independently range from 0 through 12 | 169 |
| Division | (d × q) ÷ d = q, with divisor d from 1 through 12 and quotient q from 0 through 12 | 156 |
| **Total** | **169 + 169 + 169 + 156** | **663** |

Reversed addition and multiplication prompts are separate recall tasks, even though they share an answer. Subtraction includes facts such as 24 − 12; division includes 144 ÷ 12. Division by zero is never included. The inventory is finite; practice continues indefinitely by revisiting and mixing these facts. Variety must not prevent the repetition required for memorization.

## Twenty simple modules

Five modules belong to each operation. Classification uses the first matching row, so modules partition the inventory rather than double-counting facts. Addition and subtraction use the underlying addition-family values a and b. Multiplication uses its factors; division uses its divisor and quotient.

| Priority | Addition and inverse subtraction | Multiplication and inverse division |
| --- | --- | --- |
| 1 | Either value is zero | Either value is zero or one |
| 2 | Either value is one or two | Either value is two or ten |
| 3 | Doubles or near doubles: absolute difference at most one | Either value is five |
| 4 | Either value is ten, or the sum is ten | Either value is three, four, or eleven |
| 5 | Remaining facts: bridge through ten or use a known fact | Remaining facts involving six, seven, eight, nine, and twelve |

The order provides a practical route from identities and small increments to useful anchors and harder combinations. All modules remain available; recommendations guide rather than lock out learners who already know earlier material. Opposite operations share explanatory fact families, but success on one prompt must not automatically mark all related prompts mastered.

## Instruction and practice loop

1. Give concise direct instruction on the relevant relation or strategy.
2. Show a worked example, using concrete groupings or a useful decomposition where appropriate.
3. Ask for a typed numerical answer without displaying answer choices.
4. Begin with accuracy and untimed practice. Introduce only a small number of new facts among known or recently learned facts.
5. On an error or help request, provide the correct relation and a short worked explanation. Schedule a later independent retry; copying a shown answer is not mastery evidence.
6. Revisit facts after intervening questions and across days. Prefer needed reviews over repeatedly farming already easy questions.
7. After accuracy is established, measure fluent recall using a configurable response-time target. The default six-second target is a practical starting setting, not a universal scientific boundary.

There is no answer deadline: a slow correct response remains correct. Adjust timing for typing speed, accessibility needs, and learner readiness. Fast guesses should not outperform accurate learning. Meaning and calculation strategies establish the fact; retrieval practice then makes the fact itself readily available.

## Honest progress states

- **New:** not yet attempted.
- **Learning:** introduced but not yet consistently accurate.
- **Accurate:** repeated independent correct responses, without a requirement for speed.
- **Fluent:** established accuracy accompanied by sufficiently prompt unassisted responses.
- **Retained:** fluent knowledge supported by successful spaced due reviews on at least three distinct days (or accurate recall across those reviews when accuracy-only mode is selected).

A single successful answer or one long session cannot establish durable retention. Hinted answers and corrected copies do not receive independent mastery credit. Due reviews provide stronger retention evidence than premature repetition. These labels describe evidence collected by this application, not a clinical certification of automaticity. Facts remain reviewable after reaching the highest state.

## Motivation tied to learning

Rounds contain ten questions and end with a clear summary. Learners may continue for as many rounds as they choose, while a natural stopping point makes short distributed practice convenient. Rewards and progress indicators should emphasize coverage, independent accuracy, and successful reviews. Avoid punitive loss of accumulated achievement, pressured daily streaks, gambling-like rewards, public ranking, or unrelated minigames. Engagement serves learning rather than maximizing screen time.

The scheduler and reward thresholds are transparent engineering heuristics informed by research. They are not a replication of Math Academy's proprietary systems, nor an experimentally validated optimal schedule. Continued refinement should examine delayed recall, errors, coverage, and accessibility—not just session length or clicks.

## Profiles, privacy, and recovery

- Named profiles are local to this browser and device; no account or password is required.
- Do not use IP addresses as learner identity. Shared networks and changing addresses make them unreliable, and server-side tracking is unnecessary here.
- Local storage is persistence, not a backup. Clearing browser data, using a different browser/device, or leaving private browsing may lose or hide progress.
- Export progress regularly. Import a saved export to restore or move progress; safeguard exports because they contain profile names and learning records.
- Profiles are not access-controlled private accounts. Someone using the same browser can access them.
- Hosting providers may maintain ordinary request logs; the application's no-IP-identification policy does not imply that the host has no logs.

## Reset semantics

Offer a confirmation before destructive resets and recommend exporting first. Resetting one module clears only that module's fact records in the selected profile; other modules and other profiles remain unchanged. Resetting all progress affects only the selected profile, not every learner using the browser. The interface should describe the exact scope before confirmation.

## Evidence informing the design

1. **Justin Skycak, “Fast, Correct Answers Do Matter in Mathematics” (2024).** Describes a progression from understanding meaning to untimed competence and then timed fluency, with a warning against imposing timing before successful execution. https://www.justinmath.com/fast-correct-answers-do-matter-in-mathematics/
2. **Justin Skycak, “The Math Academy Way FAQ” (2026).** Describes brief worked examples followed by active problem solving, distinguishes baseline mastery from automaticity, and emphasizes spaced reinforcement over time. This is a primary account of Math Academy's approach, not independent proof that every implementation detail is optimal. https://www.justinmath.com/the-math-academy-way-faq/
3. **Institute of Education Sciences / What Works Clearinghouse, “Assisting Students Struggling with Mathematics: Intervention in the Elementary Grades” (2021).** Rates systematic instruction, clear mathematical language, selected representations, number lines, word-problem instruction, and timed activities as strongly supported recommendations for the guide's intervention population. https://ies.ed.gov/ncee/wwc/PracticeGuide/26

These sources support the instructional principles. They do not establish that twenty modules, ten-question rounds, a six-second target, or three review days are uniquely best for every learner. Those parameters are deliberately modest, inspectable implementation choices.

# Fact & Form: critical audit and revision specification

Audit date: October 29, 2026. Baseline: the first published Fact & Form implementation. This is a source-code and instructional-design audit, not a trial with children. The list is deliberately specific; it does not claim that every conceivable improvement has been discovered or that any website can be impossible to misunderstand.

## Instructional references

These are the relevant specialists and the particular principles used, not a ranking of people or an endorsement of all their views.

| Specialists | Relevant contribution | Primary source |
| --- | --- | --- |
| Justin Skycak; Jason Roberts as his Math Academy collaborator/adviser | Establish meaning, then reliable untimed execution, then efficient recall. Keep practice active and revisit learning over time. | [Skycak on fluency](https://www.justinmath.com/fast-correct-answers-do-matter-in-mathematics/), [Skycak's account of collaboration](https://www.justinmath.com/interests/) |
| Siegfried Engelmann and Douglas Carnine | Carefully analyze the content and communication; plan small instructional increments, clear examples, and corrections. | [Their Theory of Instruction, NIFDI publisher page](https://nifdi.org/store/product/theory/), [NIFDI's description of DI](https://nifdi.org/what-is-di/) |
| Anita Archer and Charles Hughes | Explicit goals, logical prerequisite sequencing, concise consistent language, step-by-step models, supported practice followed by independent practice, immediate feedback, cumulative review. | [Authors' sample chapter](https://explicitinstruction.org/download/sample-chapter.pdf) |
| Barak Rosenshine | Teach manageable steps, check responses, maintain successful practice, reteach when necessary, and review previously taught content. | [Original 2012 article](https://www.aft.org/sites/default/files/Rosenshine.pdf) |
| John Sweller and Graham Cooper | Use worked examples to reduce unproductive search for novices; an example must actually match the structure being taught. | [Original algebra experiments](https://doi.org/10.1207/s1532690xci0201_3) |
| Pooja Agarwal and Henry Roediger | Retrieval, feedback, spacing, and interleaving are useful mechanisms for durable learning. These support explicit teaching; they do not replace it. | [Authors' research synthesis](https://doi.org/10.1177/0031721718815666) |

This project does not use discovery learning as its teaching method. It does not use Reddit, Department of Education guidance, or socioemotional-learning frameworks as design authorities. Its scripts are original adaptations of explicit-instruction principles, not a field-tested Engelmann curriculum or Math Academy's proprietary scheduling system. General findings do not validate this app's particular thresholds.

## Priority 1: correctness and learning integrity

1. **Match teaching to the actual strategy.** The old module-level example picker could show a different method from the next question.
2. **Track teaching more finely than a broad module.** Seeing one example should not suppress instruction on every other method within that module.
3. **Remove prerequisite loops.** Do not teach early addition doubles through multiplication notation before multiplication is learned.
4. **Teach multiplication by five without requiring division first.** Repeated groups, known fives, or explicit decomposition must remain available.
5. **Show all essential intermediate arithmetic.** An expression such as `8 × 7 = 2 × (2 × (2 × 7)) = 56` omits the useful intermediate doubles.
6. **Use one efficient method per explanation.** Do not overwhelm a novice with several competing methods at once.
7. **Replace circular hints.** 'Combine the two parts' does not teach a learner how to find the sum.
8. **Make corrections active.** Show the right answer and its method, then require a supported correction; do not count copying as independent recall.
9. **Recheck the corrected fact later without its answer visible.** Separate the supported response from later retrieval credit.
10. **Preserve pending errors across rounds.** A promise that missed facts return should not disappear when a ten-question set ends.
11. **Bound introduction of new material.** New facts should not crowd out unresolved errors or needed reviews.
12. **Keep review honest.** A review session should not silently introduce new facts or select facts that are not due when due facts remain.
13. **Stop a finished review cleanly.** Do not keep filling a ten-question review with unnecessary questions merely to reach ten.
14. **Prevent immediate same-fact repetition from inflating mastery.** A repeated answer still in working memory is weak evidence of retrieval.
15. **Require delayed evidence for durable-recall labels.** A long single session must never certify lasting retention.
16. **Keep speed secondary to accuracy.** Correct but slow answers remain correct; speed practice follows reliable independent answers.
17. **Do not use a countdown that invalidates a correct response.** Optional targets should guide practice, not force guessing.
18. **Treat interrupted timing cautiously.** Background tabs, opened lessons, or loss of focus must not produce bogus speed evidence.
19. **Keep unsupported success separate.** Hints, visible solutions, corrections, and normal independent answers must not share mastery credit.
20. **Remove the implicit 85% completion shortcut.** Recommendations should eventually cover all facts, including remaining gaps.
21. **Keep the diagnostic modest.** Twelve fixed facts cannot establish mastery of 663 prompts or justify confident placement in the hardest module.
22. **Do not infer one fact's mastery from its inverse.** Fact-family explanations connect knowledge; each prompted operation still needs evidence.
23. **Revisit mastered facts.** 'Remembered' is evidence so far, not a permanent guarantee.

## Priority 2: plain, literal learner language

24. Replace abstract module names such as 'Zero & identity', 'Bridge & combine', and 'Remaining quotients' with the operations or numbers practiced.
25. Replace 'Bring it back to mind' with 'Review'.
26. Replace 'independent answers' with 'right without help' on learner screens.
27. Replace 'retained' with a short plain label and explain that it means success on later days.
28. Explain 'double' the first time: add the same number twice.
29. Explain 'half' before relying on it; do not use it as an unexplained command.
30. Use the same terms consistently: question, answer, lesson, practice, review, points.
31. Make action buttons literal: Start, Check, Next, Help, Home.
32. Keep the exact correct-answer feedback 'Correct!'.
33. State the right answer directly after an error; do not bury it in motivational prose.
34. Replace 'Read the relationship' with a concrete instruction about the displayed example.
35. Remove 'placement certificate', 'grinding XP', and similar adult or gaming jargon from learner summaries.
36. Put detailed scheduler definitions, provenance, and limitations in a parent/teacher section.
37. Do not make children read the old 695-versus-663 dispute before practicing.
38. Describe progress without exaggerated praise or unsupported learning claims.
39. Make each short lesson answer three questions: what to do, how to do it, what to do next.
40. Present explanation steps on separate lines, not a long chain of nested symbols.
41. Keep notation correct and explain a reversed equation when it is used; do not silently switch the order of a problem and assume that the child knows commutativity.
42. Give visible examples beside potentially ambiguous settings.

## Priority 3: operation mixing and adjustable difficulty

43. Offer four large operation toggles with both symbols and words.
44. Allow every nonempty subset: four singles, six pairs, four triples, and all four operations.
45. Never start an empty selection; explain the fix beside the controls.
46. Provide useful one-tap combinations such as addition/subtraction, multiplication/division, and all four.
47. Clearly distinguish guided small lessons from custom mixed practice.
48. Balance selected operations so one operation does not starve the others.
49. Preserve adaptive review within a selected scope rather than making 'mixed' mean uniformly random forever.
50. Offer smaller tables for a beginner and a bounded extension for advanced learners.
51. Define the ceiling precisely: addends and factors; corresponding subtraction and division families. It is not a ceiling on every displayed number.
52. Show why a ceiling of twelve includes `24 − 12` and `144 ÷ 12`.
53. Keep core 0–12 progress distinct from optional larger-table progress.
54. Reuse the same fact record wherever a fact appears; avoid duplicate progress in overlapping custom selections.
55. Do not impose the larger table on every learner. Extension is optional, not a requirement for core completion.
56. For advanced users, prefer a mixture of known facts, shorter optional recall targets, and optional larger tables over distracting animations or arbitrary cognitive burdens.
57. Make fast-recall practice available only for facts already answered reliably; route unfamiliar facts to teaching.
58. When a selected challenge has no eligible facts, explain why and offer normal practice.
59. Retain custom choices when continuing a round and make the current selection visible during practice.
60. Explain reset scope for overlapping selections; resetting one fact must affect every view of that same fact.

## Priority 4: controls, accessibility, and performance

61. Keep the answer box and Check/Next controls in stable positions.
62. Support Enter consistently for checking and continuing without requiring a mouse.
63. Keep a readable touch keypad and an accessible delete-digit label.
64. Make keypad availability explicit on small screens; avoid tiny targets or overlaps with mobile keyboards.
65. Do not accept malformed numeric input as a wrong mathematical answer.
66. Match input limits and error messages to the extended inventory; the old '0 to 144' message would be false for 20 × 20.
67. Keep feedback visible and announce it accessibly.
68. Move focus to the relevant control after lessons, answers, and dialogs.
69. Include visible keyboard focus and sufficient color contrast; color must not be the only status cue.
70. Test narrow layouts, long names, all operation selections, and enlarged text.
71. Avoid enormous dot arrays for extended facts; use compact, labeled grouping diagrams or explicit arithmetic steps.
72. Preserve the light buildless implementation and avoid unnecessary network dependencies.
73. Maintain reduced-motion support; learning should not depend on animation or sound.

## Priority 5: motivation, saves, and recoverability

74. Explain what points reward, and keep points distinct from knowledge.
75. Make level changes visible without interrupting a worked explanation or a correction.
76. Do not reward repeated farming of one easy fact more than useful practice.
77. Offer short stopping points and unlimited voluntary continuation; do not punish stopping.
78. Never subtract lifetime points because the learner missed a question.
79. Preserve existing profiles and all old fact IDs when adding the new inventory.
80. Accept and migrate old backups without discarding legitimate core records.
81. Save after meaningful updates, and report save failures plainly and persistently.
82. Keep per-learner isolation and explain shared-browser access.
83. Say 'this browser' rather than implying cross-device identity or cloud synchronization.
84. Keep module reset, whole-learner reset, and learner deletion visibly distinct.
85. Confirm destructive actions and identify the learner and exact scope.
86. Validate imports before replacing current progress, including prototype-like keys and inconsistent counters.
87. Explain that export contains all profiles and that import replaces them.
88. Handle another tab changing progress without silently overwriting its newer data.
89. Preserve old project files outside this app when publishing.

## Acceptance checks

- Independently calculate every generated answer, including zero cases and upper bounds.
- Check unique IDs, disjoint core-module membership, and complete core coverage.
- Check every nonempty operation combination at every supported ceiling.
- Simulate enough rounds to test reachability and operation balance, not just a handful of random questions.
- Verify no division by zero, fractional quotient, or unintended negative subtraction enters the inventory.
- Test teaching, help, correction, delayed retry, review completion, and empty-challenge paths.
- Test that one-day repetition and answer copying cannot earn delayed-retention status.
- Round-trip old and new backups; test resets without changing unrelated profiles.
- Test actual browser controls and publication, not only the pure arithmetic functions.
- Report verification limits honestly. Adult-led observation with real novice learners, delayed-recall outcomes, and accessibility testing remain necessary before claiming top-tier effectiveness empirically.

## How to read this audit

The numbered items above record baseline findings and revision requirements. The revision implements the instructional, wording, selection, reward, and persistence changes described in DESIGN.md. Verification is specific, not a declaration of perfection:

- 32 deterministic regression tests pass, covering all 1,743 answers and displayed numerical equations, all 60 scope combinations, eventual fact coverage, guided-lesson introduction limits, spacing, strict reviews, unrestricted selector access, resets, and old/new backups.
- All 60 operation/ceiling combinations were also checked through the actual browser controls.
- Browser checks covered learner creation, retained old profiles, a worked 20×20 lesson, wrong-answer correction, the uncredited supported retry, empty selections, empty quick practice, and a complete 10-question mixed round.
- Narrow-screen CSS, accessible names, focus, contrast, and reduced-motion support were reviewed in code; full mobile-device, enlarged-text, and assistive-technology testing remains outstanding (item 70 and parts of 64/69).
- Full learner trials and validated prerequisite diagnosis remain future work. The app cannot guarantee comprehension, mastery, or optimal outcomes merely because its software tests pass.

### Subsequent requested adjustment

Choose your practice is now unrestricted: both ordinary and speed-goal rounds can draw any fact in the selected operations/range from the first visit. They do not require prior correct answers, completed lessons, or the guided lessons' three-new-fact limit. Questions appear directly; help and worked corrections remain available. The earlier checklist's known-facts-only quick-practice recommendation is superseded for this selector by the user's explicit preference. Guided lessons and honest progress accounting are unchanged.

### Range and real-timer adjustment

The user subsequently requested integer minimums 0–15, integer maximums 1–25, and a real deadline. These supersede the original four fixed ceilings and the earlier no-countdown recommendation for the optional timed mode. Timed questions now show a countdown, end at zero, record the expired attempt as unsuccessful, and offer an untimed correction. The 0–25 inventory has 2,678 facts; core progress is unchanged. Current test coverage checks all 4,425 valid operation/range combinations, including singleton ranges and divisor-zero exclusion. See DESIGN.md and the countdown regression test for the current behavior. Original numbered findings above are retained as the baseline audit, not current claims contradicting these user-requested changes.

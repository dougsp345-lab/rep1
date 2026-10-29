# Fact & Form — revised design

October 29, 2026. See [the 89-item audit](AUDIT.md) for baseline findings, instructional specialists, and acceptance criteria.

## Purpose

Explicitly teach arithmetic facts, then develop accurate, efficient recall through independent practice and later review. No discovery-learning lesson design, unrelated entertainment, external application libraries, or tracking scripts. This is an independent implementation, not a field-tested Engelmann Direct Instruction program or Math Academy's proprietary algorithm. Its effectiveness has not been established in learner trials.

## Inventories and selection

For limit n, addition has (n+1)² ordered a+b pairs; subtraction has the corresponding (a+b)−a=b prompts; multiplication has (n+1)² products; division has n(n+1) exact quotients (d×q)÷d=q with d=1…n and q=0…n. No division by zero or negative subtraction answers.

| Limit | Addition | Subtraction | Multiplication | Division | Total |
| --- | ---: | ---: | ---: | ---: | ---: |
| 5 | 36 | 36 | 36 | 30 | 138 |
| 10 | 121 | 121 | 121 | 110 | 473 |
| 12 | 169 | 169 | 169 | 156 | 663 |
| 20 | 441 | 441 | 441 | 420 | 1,743 |

The limit applies to underlying addends/factors, not every displayed number. Twelve includes 24−12 and 144÷12. The 663 core facts retain their old IDs and progress. The optional extension adds 1,080 facts and is not required for core completion. Both coverage counts are shown separately.

Twenty lessons partition the core inventory using the first matching category. Addition/inverse subtraction: zero; one/two; doubles/near doubles; ten or sum ten; remaining facts. Multiplication/inverse division: zero/one; two/ten; five; three/four/eleven; remaining facts. Every module is open. Recommendations now address every fact's accuracy instead of skipping the last 15%.

Four buttons support all 15 nonempty operation subsets. Pair presets and All four simplify selection. Empty selections and quick-practice scopes without eligible facts cannot start. One fact shares one record across all lessons and mixed sets; resets apply wherever it appears.

## Instruction and correction

Show the actual question and a brief, step-by-step method before a new strategy. Then hide the answer and ask the learner to respond. This supported response is not independent evidence. Teaching flags are per strategy and core/extension band, not per broad module. Addition doubles do not rely on multiplication; fives do not require division. Explain order swaps explicitly, avoid nested symbolic chains, and replace huge dot arrays with compact descriptions.

Correct responses receive exactly “Correct!”. Errors show the right answer and worked method, then a hide-and-retry correction. Immediate corrections do not erase errors or earn mastery/points. Later independent retries follow intervening questions. Learners may always leave a round.

The 12-question check is explicitly a sample. Passing it neither certifies unseen facts nor places the learner at the hardest module.

## Practice and speed

No more than three new facts enter a round, and new introductions pause when six selected facts still lack accuracy. Error retries are spaced by two intervening recorded questions when available, compatible with a three-fact novice pool. Progress records carry retry history across rounds and saves. Immediate same-fact repetition cannot manufacture independent accuracy. An exhausted eligible pool can end a round early.

Mixed practice balances available selected operations, with needed practice prioritized within the scope. Strict review includes only due facts and finishes when exhausted. The selector makes the entire selected fact set available immediately, in both ordinary and speed-goal practice. No completed lessons or prior correct answers are required. It starts directly with a question; help and worked corrections remain available. Guided lessons keep their small-new-fact limits. Speed-goal rounds do not repeat a fact within the same round.

Quick-round targets are 2, 3, 4, 6, or 10 seconds. They do not cut off answers or mark slow correct answers wrong. The separate Settings target controls the long-term quick-recall progress label and includes an accuracy-only option. Both include typing time and are imperfect recall measures. Help and interruptions invalidate independent speed evidence.

## Progress and rewards

- Not tried yet: no attempts.
- Still learning: insufficient independent accuracy evidence.
- Correct without help: at least three consecutive independent correct responses.
- Correct and quick: also two subsequent independent responses within the Settings target.
- Remembered on later days: also successful actually-due reviews on at least three different dates; the speed condition is omitted in accuracy-only mode.

Intervals grow approximately 1, 3, 7, 21, and 60 days. Errors trigger more practice and restart evidence of reliable recall. These thresholds are transparent heuristics, not validated optimal parameters. Remembered does not mean permanent.

Points are capped to one qualifying success per fact per day. Levels measure accumulated practice, not knowledge; changes appear in round summaries. No lost streaks, lives, leaderboards, random rewards, or incentives for excessive session length. Up-to-ten-question rounds have natural stopping points and unlimited voluntary continuation.

## Controls and persistence

Plain learner wording; detailed methodology stays under For parents and teachers. Buttons show selected states, touch targets are at least 44px, feedback is announced, focus is visible, dialogs work with keyboards, and reduced-motion preferences are respected. A small-screen keypad complements keyboard input.

The existing storage key and version remain. New optional fields have defaults in old backups. Fact IDs, points, and profiles are preserved. Imports are validated before replacement. Resets identify the learner and scope, keep unrelated records, and require confirmation. Fact-set resets retain points; whole-learner reset leaves other people untouched.

Saving is browser-local, not cloud synchronization or a backup. Export includes all profiles; import replaces them after confirmation. Clearing browser data removes progress. Persistent warnings report unavailable/corrupt storage. Cross-tab changes stop stale practice. Shared-device profiles are not password protected. GitHub may keep normal hosting logs; the app adds no analytics or IP identity.

## Sources, status, and limits

The primary-source shortlist is in [AUDIT.md](AUDIT.md): Skycak; Engelmann/Carnine; Archer/Hughes; Rosenshine; Sweller/Cooper; and retrieval-practice researchers. The earlier Department of Education reference is not retained as this revision's instructional authority.

The audit drove the code revision. Real-learner comprehension, delayed-learning outcomes, and full assistive-technology/device coverage still require testing beyond this development session. Recommendations use a practical module sequence, not a validated individual prerequisite graph. The source principles do not establish that these custom scripts or scheduling parameters are uniquely best.

Run `node test-engine.mjs` for arithmetic, inventory, scheduling, scope, reset, and backup regression tests. Browser QA additionally checks actual selection controls, lessons, correction responses, extended answers, profiles, and publication. Automated passing tests are not proof of educational effectiveness.

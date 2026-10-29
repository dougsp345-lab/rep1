# Phonics Path

A focused, browser-based phonics course with 120 lessons, explicit instruction, cumulative practice, spelling, and read-aloud checks. The course moves from first sounds and blending to common English spelling patterns, longer words, morphology, and less predictable pronunciations.

## Start

Open the published site, choose or create a learner profile, and continue the recommended lesson. No account is required.

- Lessons explain a pattern before asking the learner to use it.
- Short practice rounds can continue for as long as useful.
- Spelling and adult-checked reading supply the evidence used for skill mastery. Multiple-choice practice alone cannot establish mastery.
- Review brings previously practised skills back after a delay.
- Each learner has separate progress, and individual lessons or the learner's entire progress can be reset.

Beginning readers should work with a capable reader. The adult models letter sounds, checks oral reading, and helps with instructions. The application does not listen to, record, or automatically grade speech.

## Progress and privacy

Profiles and progress are saved in this browser's local storage. They do not automatically follow a name onto another device or browser. Export a backup to preserve or transfer progress, then import it on the other device. Clearing site data, using private browsing, or changing the site's origin may remove or separate local progress.

Learner names are local labels, not authenticated identities. Everyone using the same browser profile can access those learners' progress. Use a nickname if preferred.

Optional whole-word audio uses the browser's speech synthesis. Available voices and pronunciation quality depend on the device; some voices may use an online service. Audio is a model or check, not evidence that the learner independently decoded the word. The app deliberately does not synthesize isolated phonemes or use speech recognition to award mastery.

## Run locally

The application is plain HTML, CSS, and JavaScript ES modules. No build step or third-party runtime package installation is needed.

```sh
python3 -m http.server 8080 --directory dist
```

Open `http://localhost:8080`. Serve the files over HTTP rather than double-clicking `index.html`, because browser security restrictions can prevent ES modules from loading through `file:` URLs.

Run the automated checks with a current Node.js installation:

```sh
npm test
```

## Deploy

Publish the **contents** of `dist/` to a static host. Relative application URLs support a subdirectory such as `/phonics-path/`, including GitHub Pages project sites. The repository's `docs/`, tests, and package metadata are development files and do not need to be served with the app.

## Instructional scope

The early sequence prioritizes useful sound–spelling correspondences and connected reading. Later study expands to alternatives, word parts, stress, schwa, silent letters, and unusual spelling patterns. Lessons teach patterns as useful generalizations with exceptions, not universal laws.

English spelling alone cannot uniquely determine every word's pronunciation. Heteronyms, names, borrowed words, stress, dialect, and unfamiliar vocabulary sometimes require context, a knowledgeable reader, or a pronunciation reference. This is a phonics-learning tool, not a complete language-comprehension curriculum or a diagnostic assessment.

See [the learning design and evidence notes](docs/LEARNING-DESIGN.md) for the sequence, mastery model, coverage approach, and limitations. The instructional principles have research support; this particular application and its mastery thresholds have not undergone an efficacy trial.

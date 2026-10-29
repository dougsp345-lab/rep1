// Original curriculum. See docs/COVERAGE.md for scope and instructional limits.
export const STAGES = [
  {
    "id": 0,
    "title": "Hear the sounds",
    "subtitle": "Adult-led oral blending and segmenting"
  },
  {
    "id": 1,
    "title": "First words",
    "subtitle": "The alphabetic code and short vowels"
  },
  {
    "id": 2,
    "title": "Consonant teams",
    "subtitle": "Digraphs, blends, and useful common words"
  },
  {
    "id": 3,
    "title": "Long vowels",
    "subtitle": "Open syllables and silent-e patterns"
  },
  {
    "id": 4,
    "title": "The everyday code",
    "subtitle": "Common vowel teams and r-controlled vowels"
  },
  {
    "id": 5,
    "title": "Longer words",
    "subtitle": "Endings, syllables, and compound words"
  },
  {
    "id": 6,
    "title": "Code alternatives",
    "subtitle": "Less common spellings and exceptions"
  },
  {
    "id": 7,
    "title": "Word structure",
    "subtitle": "Morphology, stress, and unstressed vowels"
  },
  {
    "id": 8,
    "title": "Advanced decoding",
    "subtitle": "Loanwords, ambiguity, dialect, and reference skills"
  }
];

export const LESSONS = [
  {
    "id": "l001",
    "stage": 0,
    "title": "Hear and join sounds",
    "code": "oral blending",
    "rule": "An adult says the separate sounds. The learner joins them and says the word. Keep the print covered.",
    "tip": "Start with two sounds, then three. Say continuous sounds smoothly; do not add “uh” to consonants.",
    "words": [
      "at",
      "am",
      "in",
      "up",
      "sat",
      "map",
      "sun",
      "fish",
      "shop",
      "rain",
      "moon",
      "feet"
    ],
    "examples": [
      {
        "word": "at",
        "parts": [
          "a",
          "t"
        ],
        "note": "Adult says the two sounds; learner says at."
      },
      {
        "word": "sun",
        "parts": [
          "s",
          "u",
          "n"
        ],
        "note": "Adult says three sounds; learner says sun."
      }
    ],
    "sentences": [
      "Adult: Say /s/ /u/ /n/. Learner: sun."
    ],
    "exceptions": "This is listening practice, not a print-reading test. Word audio models the whole word, not its separate phonemes.",
    "prerequisites": []
  },
  {
    "id": "l002",
    "stage": 0,
    "title": "Take a spoken word apart",
    "code": "oral segmenting",
    "rule": "Say a word. Move one counter for each speech sound you hear. Letters are not needed.",
    "tip": "Use two- and three-sound words. Ship has three sounds even though it has four letters.",
    "words": [
      "at",
      "in",
      "up",
      "am",
      "map",
      "sun",
      "sit",
      "fish",
      "shop",
      "ship",
      "feet",
      "rain"
    ],
    "examples": [
      {
        "word": "ship",
        "parts": [
          "sh",
          "i",
          "p"
        ],
        "note": "Three sounds, not four."
      },
      {
        "word": "feet",
        "parts": [
          "f",
          "ee",
          "t"
        ],
        "note": "Three sounds; ee spells one vowel sound."
      }
    ],
    "sentences": [
      "Adult: Say map. Learner: /m/ /a/ /p/."
    ],
    "exceptions": "Count speech sounds, not letter names. Accept local pronunciation.",
    "prerequisites": []
  },
  {
    "id": "l003",
    "stage": 0,
    "title": "Change one spoken sound",
    "code": "oral sound changes",
    "rule": "Say a word. Change, add, or remove one sound and say the new word.",
    "tip": "Model first: map; change the first sound to /t/; tap. Keep this short and playful.",
    "words": [
      "map",
      "tap",
      "sat",
      "sit",
      "pin",
      "pan",
      "at",
      "cat",
      "sun",
      "run",
      "ship",
      "shop"
    ],
    "examples": [
      {
        "word": "map",
        "parts": [
          "m",
          "a",
          "p"
        ],
        "note": "Change /m/ to /t/: tap."
      },
      {
        "word": "sit",
        "parts": [
          "s",
          "i",
          "t"
        ],
        "note": "Change the vowel to the sound in sat: sat."
      }
    ],
    "sentences": [
      "Adult: Say sat. Change the first sound to /m/. Learner: mat."
    ],
    "exceptions": "This is supported oral practice. Do not require a child to finish oral exercises before beginning print instruction.",
    "prerequisites": []
  },
  {
    "id": "l004",
    "stage": 1,
    "title": "First letters: s a t m i n",
    "code": "s a t m i n",
    "rule": "Teach one letter at a time. Point to it, say its sound, have the learner repeat, then blend known letters from left to right.",
    "tip": "Use /s/ in sat, /a/ in at, /t/ in tap, /m/ in mat, /i/ in sit, /n/ in nap. Avoid letter names while blending.",
    "words": [
      "at",
      "am",
      "an",
      "in",
      "it",
      "sat",
      "mat",
      "sit",
      "tin",
      "tan",
      "man"
    ],
    "examples": [
      {
        "word": "sat",
        "parts": [
          "s",
          "a",
          "t"
        ],
        "note": "Say each sound, then slide them together: sat."
      },
      {
        "word": "mat",
        "parts": [
          "m",
          "a",
          "t"
        ],
        "note": "Only the first sound changes from sat."
      }
    ],
    "sentences": [
      "Sit. Sit at a mat."
    ],
    "exceptions": "In the sentence, a is an explicitly taught common word: usually the unstressed “uh” sound. An adult may read that word.",
    "pseudowords": [
      {
        "word": "nim",
        "guide": "Rhymes with him; /n/ + short i + /m/."
      },
      {
        "word": "tas",
        "guide": "Rhymes with mass; /t/ + short a + /s/."
      }
    ],
    "prerequisites": []
  },
  {
    "id": "l005",
    "stage": 1,
    "title": "Add p and blend short words",
    "code": "p; CVC blending",
    "rule": "P spells the first sound in pin. Read every sound, then say the word smoothly.",
    "tip": "Point under the letters as you blend. Pause briefly at p rather than adding “puh.”",
    "words": [
      "pan",
      "pat",
      "pin",
      "pit",
      "nap",
      "tap",
      "tip",
      "map",
      "sip",
      "sap",
      "pip"
    ],
    "examples": [
      {
        "word": "pin",
        "parts": [
          "p",
          "i",
          "n"
        ],
        "note": "Three sounds."
      },
      {
        "word": "map",
        "parts": [
          "m",
          "a",
          "p"
        ],
        "note": "Blend all the way to the final p."
      }
    ],
    "sentences": [
      "Pat sat. Pat sat in a pit."
    ],
    "exceptions": "Pat is a name and follows the taught letter sounds.",
    "pseudowords": [
      {
        "word": "pim",
        "guide": "Rhymes with him."
      }
    ],
    "prerequisites": [
      "l004"
    ]
  },
  {
    "id": "l006",
    "stage": 1,
    "title": "Add o, c, and g",
    "code": "short o; hard c g",
    "rule": "O has the vowel sound in hot. C often spells /k/. G often spells the first sound in got.",
    "tip": "These are the common c and g sounds. Other sounds are taught later.",
    "words": [
      "cat",
      "can",
      "cap",
      "cot",
      "cop",
      "cog",
      "got",
      "gas",
      "gap",
      "tag",
      "nag",
      "top",
      "pot",
      "mop",
      "pop"
    ],
    "examples": [
      {
        "word": "cat",
        "parts": [
          "c",
          "a",
          "t"
        ],
        "note": "C spells /k/."
      },
      {
        "word": "got",
        "parts": [
          "g",
          "o",
          "t"
        ],
        "note": "O has the vowel sound in hot."
      }
    ],
    "sentences": [
      "A cat can sit on a mat."
    ],
    "exceptions": "Teach on by blending; a is the introduced common word. The short-o vowel differs by accent.",
    "pseudowords": [
      {
        "word": "gop",
        "guide": "Rhymes with hop."
      }
    ],
    "prerequisites": [
      "l005"
    ]
  },
  {
    "id": "l007",
    "stage": 1,
    "title": "Add e and d",
    "code": "short e; d",
    "rule": "E has the vowel sound in pen. D spells the first sound in dog.",
    "tip": "Contrast pen with pin. Let the learner hear and say both before reading.",
    "words": [
      "den",
      "dip",
      "did",
      "dot",
      "dog",
      "dad",
      "dim",
      "ten",
      "net",
      "pen",
      "pet",
      "peg",
      "met",
      "get"
    ],
    "examples": [
      {
        "word": "pen",
        "parts": [
          "p",
          "e",
          "n"
        ],
        "note": "Short e, as in pet."
      },
      {
        "word": "dog",
        "parts": [
          "d",
          "o",
          "g"
        ],
        "note": "Finish with /g/."
      }
    ],
    "sentences": [
      "A dog can get a pen."
    ],
    "exceptions": "In accents with a pin–pen merger, use another contrast and accept the learner’s pronunciation.",
    "pseudowords": [
      {
        "word": "dep",
        "guide": "Rhymes with step."
      },
      {
        "word": "pem",
        "guide": "Rhymes with hem."
      }
    ],
    "prerequisites": [
      "l006"
    ]
  },
  {
    "id": "l008",
    "stage": 1,
    "title": "Add u and b",
    "code": "short u; b",
    "rule": "U has the vowel sound in sun. B spells the first sound in bat.",
    "tip": "Model b and d separately, then contrast bat and dad. Do not treat letter reversals as a diagnosis.",
    "words": [
      "bug",
      "bun",
      "bus",
      "but",
      "tub",
      "cub",
      "bud",
      "bad",
      "bed",
      "big",
      "bit",
      "bat",
      "bag",
      "bin"
    ],
    "examples": [
      {
        "word": "bun",
        "parts": [
          "b",
          "u",
          "n"
        ],
        "note": "U has the vowel sound in sun."
      },
      {
        "word": "bed",
        "parts": [
          "b",
          "e",
          "d"
        ],
        "note": "Watch the direction of b and d."
      }
    ],
    "sentences": [
      "A big bug can sit in a bin."
    ],
    "exceptions": "Northern English accents may have a different vowel in some short-u words.",
    "pseudowords": [
      {
        "word": "bup",
        "guide": "Use the vowel in cup."
      }
    ],
    "prerequisites": [
      "l007"
    ]
  },
  {
    "id": "l009",
    "stage": 1,
    "title": "Add h and r",
    "code": "h; r",
    "rule": "H spells the first sound in hat. R spells the first sound in run.",
    "tip": "Use a gentle breath for h. Use the learner’s normal r pronunciation.",
    "words": [
      "hat",
      "hen",
      "hip",
      "hop",
      "hot",
      "hut",
      "ram",
      "ran",
      "rat",
      "red",
      "rib",
      "rip",
      "rob",
      "rod",
      "rug",
      "run"
    ],
    "examples": [
      {
        "word": "hat",
        "parts": [
          "h",
          "a",
          "t"
        ],
        "note": "Three sounds."
      },
      {
        "word": "run",
        "parts": [
          "r",
          "u",
          "n"
        ],
        "note": "Hold the vowel briefly and blend."
      }
    ],
    "sentences": [
      "A red hen can run."
    ],
    "exceptions": "Do not add an extra vowel after a consonant.",
    "pseudowords": [
      {
        "word": "hep",
        "guide": "Rhymes with step."
      },
      {
        "word": "rop",
        "guide": "Rhymes with hop."
      }
    ],
    "prerequisites": [
      "l008"
    ]
  },
  {
    "id": "l010",
    "stage": 1,
    "title": "Add f and l",
    "code": "f; l",
    "rule": "F spells the first sound in fan. L spells the first sound in lip.",
    "tip": "Stretch f without saying “fuh.” Keep the final consonant in words such as lap.",
    "words": [
      "fan",
      "fat",
      "fed",
      "fig",
      "fin",
      "fit",
      "fog",
      "fun",
      "lap",
      "leg",
      "let",
      "lid",
      "lip",
      "log",
      "lot",
      "lug"
    ],
    "examples": [
      {
        "word": "fan",
        "parts": [
          "f",
          "a",
          "n"
        ],
        "note": "You can stretch /f/."
      },
      {
        "word": "lip",
        "parts": [
          "l",
          "i",
          "p"
        ],
        "note": "Blend from left to right."
      }
    ],
    "sentences": [
      "A fat cat sat on a log."
    ],
    "exceptions": "Some accents have a dark final l; ordinary local speech is acceptable.",
    "pseudowords": [
      {
        "word": "fep",
        "guide": "Rhymes with step."
      },
      {
        "word": "lud",
        "guide": "Rhymes with bud."
      }
    ],
    "prerequisites": [
      "l009"
    ]
  },
  {
    "id": "l011",
    "stage": 1,
    "title": "Add j and v",
    "code": "j; v",
    "rule": "J spells the first sound in jam. V spells the first sound in van.",
    "tip": "Contrast f and v: the lips and teeth are alike, but the voice vibrates for v.",
    "words": [
      "jam",
      "jet",
      "jig",
      "job",
      "jog",
      "jug",
      "jab",
      "jut",
      "van",
      "vat",
      "vet",
      "vim"
    ],
    "examples": [
      {
        "word": "jam",
        "parts": [
          "j",
          "a",
          "m"
        ],
        "note": "J is one speech sound."
      },
      {
        "word": "van",
        "parts": [
          "v",
          "a",
          "n"
        ],
        "note": "Use your voice for v."
      }
    ],
    "sentences": [
      "A vet can jog."
    ],
    "exceptions": "Vim is a real word meaning energy; explain it orally. English words seldom end with a single written v.",
    "pseudowords": [
      {
        "word": "jep",
        "guide": "Rhymes with step."
      },
      {
        "word": "vab",
        "guide": "Rhymes with cab."
      }
    ],
    "prerequisites": [
      "l010"
    ]
  },
  {
    "id": "l012",
    "stage": 1,
    "title": "Add w and consonant y",
    "code": "w; y as /y/",
    "rule": "W spells the first sound in web. At the start of yes, y is a consonant sound.",
    "tip": "Say yes, then isolate its first sound. Do not say the letter name why as the sound.",
    "words": [
      "web",
      "wet",
      "win",
      "wig",
      "wag",
      "yam",
      "yap",
      "yes",
      "yet",
      "yip",
      "yum"
    ],
    "examples": [
      {
        "word": "web",
        "parts": [
          "w",
          "e",
          "b"
        ],
        "note": "Three sounds."
      },
      {
        "word": "yes",
        "parts": [
          "y",
          "e",
          "s"
        ],
        "note": "Y starts with a consonant sound."
      }
    ],
    "sentences": [
      "A wet dog can wag."
    ],
    "exceptions": "Y at the beginning of these words is a consonant; vowel uses come later.",
    "pseudowords": [
      {
        "word": "wug",
        "guide": "Rhymes with bug."
      },
      {
        "word": "yem",
        "guide": "Rhymes with hem."
      }
    ],
    "prerequisites": [
      "l011"
    ]
  },
  {
    "id": "l013",
    "stage": 1,
    "title": "Add k, x, z, and qu",
    "code": "k; x=/ks/; z; qu=/kw/",
    "rule": "K often spells /k/. X usually spells /k/ then /s/. Z spells the buzzing sound in zip. Qu usually spells /k/ then /w/.",
    "tip": "Qu is a common letter team, but it usually represents two sounds. X also usually represents two sounds.",
    "words": [
      "kit",
      "kid",
      "kin",
      "keg",
      "box",
      "fox",
      "six",
      "fix",
      "zip",
      "zap",
      "quiz",
      "quit",
      "quip"
    ],
    "examples": [
      {
        "word": "fox",
        "parts": [
          "f",
          "o",
          "x"
        ],
        "note": "X represents /k/ and /s/."
      },
      {
        "word": "quit",
        "parts": [
          "qu",
          "i",
          "t"
        ],
        "note": "Qu usually represents /k/ and /w/."
      }
    ],
    "sentences": [
      "A fox can run."
    ],
    "exceptions": "Do not describe every letter team as one phoneme: qu usually represents two sounds.",
    "pseudowords": [
      {
        "word": "zib",
        "guide": "Rhymes with rib."
      }
    ],
    "prerequisites": [
      "l012"
    ]
  },
  {
    "id": "l014",
    "stage": 1,
    "title": "Read all five short vowels",
    "code": "a e i o u",
    "rule": "In these short words, a, e, i, o, and u have the sounds heard in cat, bed, sit, hot, and cup.",
    "tip": "Look through the whole word. Do not guess from its first letter.",
    "words": [
      "cat",
      "cot",
      "cut",
      "cap",
      "cop",
      "cup",
      "pat",
      "pet",
      "pit",
      "pot",
      "pan",
      "pen",
      "pin",
      "bag",
      "beg",
      "big",
      "bog",
      "bug"
    ],
    "examples": [
      {
        "word": "cat",
        "parts": [
          "c",
          "a",
          "t"
        ],
        "note": "Short a."
      },
      {
        "word": "cut",
        "parts": [
          "c",
          "u",
          "t"
        ],
        "note": "Only the vowel changes."
      }
    ],
    "sentences": [
      "A cat can nap on a bed."
    ],
    "exceptions": "Accent differences are normal. A written vowel can represent other sounds in later lessons.",
    "pseudowords": [
      {
        "word": "dap",
        "guide": "Rhymes with cap."
      },
      {
        "word": "mep",
        "guide": "Rhymes with step."
      },
      {
        "word": "vot",
        "guide": "Rhymes with hot."
      },
      {
        "word": "nup",
        "guide": "Rhymes with cup."
      }
    ],
    "prerequisites": [
      "l013"
    ]
  },
  {
    "id": "l015",
    "stage": 1,
    "title": "Blend, read, and change one letter",
    "code": "cumulative CVC",
    "rule": "Read the first word. Change one letter. Say the new sound and read the new word.",
    "tip": "Use chains such as map → mat → sat → sit → sip. Say the whole word after blending.",
    "words": [
      "map",
      "mat",
      "sat",
      "sit",
      "sip",
      "tip",
      "tap",
      "top",
      "mop",
      "pop",
      "pot",
      "pit",
      "pin",
      "pan",
      "pen",
      "ten"
    ],
    "examples": [
      {
        "word": "map",
        "parts": [
          "m",
          "a",
          "p"
        ],
        "note": "Map becomes mat when p changes to t."
      },
      {
        "word": "sit",
        "parts": [
          "s",
          "i",
          "t"
        ],
        "note": "Sit becomes sip when t changes to p."
      }
    ],
    "sentences": [
      "A man can sit. A cat can nap."
    ],
    "exceptions": "Read a as the already introduced common word.",
    "pseudowords": [
      {
        "word": "mip",
        "guide": "Rhymes with lip."
      },
      {
        "word": "nup",
        "guide": "Rhymes with cup."
      }
    ],
    "prerequisites": [
      "l014"
    ]
  },
  {
    "id": "l016",
    "stage": 2,
    "title": "Double final f, l, s, and z",
    "code": "ff ll ss zz",
    "rule": "After a short vowel in many one-syllable words, final f, l, s, or z is doubled. The pair usually spells one sound.",
    "tip": "Read each doubled consonant once. This spelling tendency has exceptions.",
    "words": [
      "off",
      "puff",
      "cuff",
      "huff",
      "bell",
      "fell",
      "fill",
      "hill",
      "mess",
      "hiss",
      "kiss",
      "fuzz",
      "buzz",
      "jazz"
    ],
    "examples": [
      {
        "word": "hill",
        "parts": [
          "h",
          "i",
          "ll"
        ],
        "note": "Ll spells one /l/."
      },
      {
        "word": "buzz",
        "parts": [
          "b",
          "u",
          "zz"
        ],
        "note": "Zz spells one /z/."
      }
    ],
    "sentences": [
      "A bell fell in a tub."
    ],
    "exceptions": "If, pal, gas, bus, and yes are common exceptions; do not double by rule when reading.",
    "prerequisites": [
      "l015"
    ]
  },
  {
    "id": "l017",
    "stage": 2,
    "title": "Final ck",
    "code": "ck=/k/",
    "rule": "Ck usually spells /k/ right after a short vowel at the end of a one-syllable word.",
    "tip": "Read ck as one sound. Compare back and bake in later practice.",
    "words": [
      "back",
      "pack",
      "sack",
      "rack",
      "deck",
      "neck",
      "peck",
      "pick",
      "sick",
      "kick",
      "sock",
      "lock",
      "duck",
      "luck"
    ],
    "examples": [
      {
        "word": "duck",
        "parts": [
          "d",
          "u",
          "ck"
        ],
        "note": "Ck spells one /k/."
      },
      {
        "word": "back",
        "parts": [
          "b",
          "a",
          "ck"
        ],
        "note": "The a is short."
      }
    ],
    "sentences": [
      "A duck can peck."
    ],
    "exceptions": "Ck is a spelling pattern, not a claim that every /k/ after a short vowel is written ck.",
    "prerequisites": [
      "l016"
    ]
  },
  {
    "id": "l018",
    "stage": 2,
    "title": "The sh team",
    "code": "sh=/sh/",
    "rule": "Sh spells the first sound in ship or the last sound in fish.",
    "tip": "Both letters work together. Slide your finger under sh as one unit.",
    "words": [
      "ship",
      "shop",
      "shut",
      "shed",
      "shell",
      "shin",
      "shock",
      "fish",
      "dish",
      "wish",
      "rush",
      "hush",
      "cash",
      "mash"
    ],
    "examples": [
      {
        "word": "ship",
        "parts": [
          "sh",
          "i",
          "p"
        ],
        "note": "Sh spells one sound."
      },
      {
        "word": "fish",
        "parts": [
          "f",
          "i",
          "sh"
        ],
        "note": "Three sounds in fish."
      }
    ],
    "sentences": [
      "A fish can dash."
    ],
    "exceptions": "The sh letters represent one sound wherever they occur in these words.",
    "pseudowords": [
      {
        "word": "shup",
        "guide": "Rhymes with cup but starts with sh."
      },
      {
        "word": "nish",
        "guide": "Rhymes with fish."
      }
    ],
    "prerequisites": [
      "l017"
    ]
  },
  {
    "id": "l019",
    "stage": 2,
    "title": "The ch team",
    "code": "ch=/ch/",
    "rule": "Ch often spells the first sound in chin. It is one consonant sound.",
    "tip": "Read ch together; do not say /k/ then /h/.",
    "words": [
      "chin",
      "chip",
      "chat",
      "chop",
      "chill",
      "much",
      "rich",
      "such",
      "check",
      "chess",
      "chick",
      "chuck",
      "chug",
      "chap",
      "chum"
    ],
    "examples": [
      {
        "word": "chin",
        "parts": [
          "ch",
          "i",
          "n"
        ],
        "note": "Ch is one sound."
      },
      {
        "word": "much",
        "parts": [
          "m",
          "u",
          "ch"
        ],
        "note": "Three sounds."
      }
    ],
    "sentences": [
      "A rich man can chat."
    ],
    "exceptions": "Ch has other pronunciations, as in school and chef; later lessons teach them.",
    "pseudowords": [
      {
        "word": "chab",
        "guide": "Rhymes with cab with ch at the start."
      },
      {
        "word": "puch",
        "guide": "Rhymes with much."
      }
    ],
    "prerequisites": [
      "l018"
    ]
  },
  {
    "id": "l020",
    "stage": 2,
    "title": "Quiet th",
    "code": "th as in thin",
    "rule": "Th can spell the unvoiced sound at the beginning of thin. Put the tongue lightly between the teeth and blow.",
    "tip": "Use thin, thick, and bath. Do not require imitation of an accent the learner does not use.",
    "words": [
      "thin",
      "thick",
      "thud",
      "bath",
      "math",
      "moth",
      "path",
      "pith",
      "lath"
    ],
    "examples": [
      {
        "word": "thin",
        "parts": [
          "th",
          "i",
          "n"
        ],
        "note": "Unvoiced th."
      },
      {
        "word": "bath",
        "parts": [
          "b",
          "a",
          "th"
        ],
        "note": "The th comes last."
      }
    ],
    "sentences": [
      "A moth can sit on a path."
    ],
    "exceptions": "Th sounds and bath vowels differ across dialects. Teach the print-to-speech link without penalizing dialect.",
    "prerequisites": [
      "l019"
    ]
  },
  {
    "id": "l021",
    "stage": 2,
    "title": "Buzzing th",
    "code": "th as in this",
    "rule": "Th can also spell the voiced sound in this. The tongue position is like thin, with the voice turned on.",
    "tip": "Compare thin and then. Feel the throat vibrate for then.",
    "words": [
      "this",
      "that",
      "them",
      "then",
      "than",
      "with",
      "thus",
      "the"
    ],
    "examples": [
      {
        "word": "this",
        "parts": [
          "th",
          "i",
          "s"
        ],
        "note": "Voiced th."
      },
      {
        "word": "then",
        "parts": [
          "th",
          "e",
          "n"
        ],
        "note": "Voiced th with short e."
      }
    ],
    "sentences": [
      "This cat can sit with that dog."
    ],
    "exceptions": "The is introduced explicitly: th is voiced, and the e is often an unstressed uh sound, sometimes long e. With varies by speaker.",
    "prerequisites": [
      "l020"
    ]
  },
  {
    "id": "l022",
    "stage": 2,
    "title": "The ng ending",
    "code": "ng=/ng/",
    "rule": "Ng often spells the final sound in sing. Say it without adding a separate /g/.",
    "tip": "Compare sin and sing. The mouth changes at the end.",
    "words": [
      "sing",
      "ring",
      "king",
      "wing",
      "thing",
      "bang",
      "hang",
      "rang",
      "long",
      "song",
      "sung",
      "lung"
    ],
    "examples": [
      {
        "word": "sing",
        "parts": [
          "s",
          "i",
          "ng"
        ],
        "note": "Ng spells one final sound."
      },
      {
        "word": "rang",
        "parts": [
          "r",
          "a",
          "ng"
        ],
        "note": "Do not add a hard g."
      }
    ],
    "sentences": [
      "A king can sing a song."
    ],
    "exceptions": "In finger and anger, many speakers do pronounce a separate /g/. Those words need a different mapping.",
    "prerequisites": [
      "l021"
    ]
  },
  {
    "id": "l023",
    "stage": 2,
    "title": "N before k",
    "code": "nk=/ng/+/k/",
    "rule": "In words such as sink, n usually has the sound heard at the end of sing, followed by /k/.",
    "tip": "Nk represents two sounds. Blend both at the end.",
    "words": [
      "ink",
      "sink",
      "pink",
      "wink",
      "link",
      "rink",
      "bank",
      "tank",
      "thank",
      "sank",
      "dunk",
      "junk"
    ],
    "examples": [
      {
        "word": "sink",
        "parts": [
          "s",
          "i",
          "n",
          "k"
        ],
        "note": "N has the ng sound before k."
      },
      {
        "word": "bank",
        "parts": [
          "b",
          "a",
          "n",
          "k"
        ],
        "note": "Keep the final /k/."
      }
    ],
    "sentences": [
      "A pink pig can wink."
    ],
    "exceptions": "The same change often occurs before written c as in uncle.",
    "prerequisites": [
      "l022"
    ]
  },
  {
    "id": "l024",
    "stage": 2,
    "title": "Wh and initial h",
    "code": "wh; wh in who",
    "rule": "Wh usually sounds like w in what and when. In who, whole, and whose, the w is silent.",
    "tip": "Some speakers distinguish which from witch; both established dialect patterns are accepted.",
    "words": [
      "when",
      "whack",
      "whip",
      "whiff",
      "whiz",
      "which",
      "wham",
      "whet"
    ],
    "examples": [
      {
        "word": "whip",
        "parts": [
          "wh",
          "i",
          "p"
        ],
        "note": "Usually /w/, or a breathier wh in some accents."
      },
      {
        "word": "wham",
        "parts": [
          "wh",
          "a",
          "m"
        ],
        "note": "Wh is the initial sound spelling."
      }
    ],
    "sentences": [
      "Which cat can hop?"
    ],
    "exceptions": "Who, whole, and whose start with /h/; their vowel patterns are taught later, and they are not in this lesson’s quiz bank.",
    "prerequisites": [
      "l023"
    ]
  },
  {
    "id": "l025",
    "stage": 2,
    "title": "Keep every sound in a starting blend",
    "code": "initial consonant blends",
    "rule": "A blend keeps the separate sounds of its consonants. Read them smoothly without inserting a vowel.",
    "tip": "Compare ship with slip: sh is one sound; s and l are two.",
    "words": [
      "stop",
      "step",
      "spin",
      "spot",
      "snap",
      "snip",
      "swim",
      "clap",
      "clip",
      "club",
      "flag",
      "flat",
      "frog",
      "grip",
      "drum",
      "trip"
    ],
    "examples": [
      {
        "word": "stop",
        "parts": [
          "s",
          "t",
          "o",
          "p"
        ],
        "note": "Keep both /s/ and /t/."
      },
      {
        "word": "flag",
        "parts": [
          "f",
          "l",
          "a",
          "g"
        ],
        "note": "Keep both /f/ and /l/."
      }
    ],
    "sentences": [
      "A frog can hop. A crab can snap."
    ],
    "exceptions": "Blends are combinations of known sounds, not new phonemes.",
    "prerequisites": [
      "l024"
    ]
  },
  {
    "id": "l026",
    "stage": 2,
    "title": "Keep every sound in an ending blend",
    "code": "final consonant blends",
    "rule": "At the end of a word, read each consonant sound. Do not drop the last one.",
    "tip": "Contrast bent with bet and lamp with lap.",
    "words": [
      "hand",
      "land",
      "sand",
      "bend",
      "send",
      "tent",
      "went",
      "belt",
      "felt",
      "milk",
      "silk",
      "lamp",
      "limp",
      "jump",
      "bump",
      "next"
    ],
    "examples": [
      {
        "word": "hand",
        "parts": [
          "h",
          "a",
          "n",
          "d"
        ],
        "note": "Keep /n/ and /d/."
      },
      {
        "word": "lamp",
        "parts": [
          "l",
          "a",
          "m",
          "p"
        ],
        "note": "Keep /m/ and /p/."
      }
    ],
    "sentences": [
      "A cat can jump on a stump."
    ],
    "exceptions": "Next has x=/ks/ plus t. Keep a natural spoken pronunciation; do not over-articulate.",
    "prerequisites": [
      "l025"
    ]
  },
  {
    "id": "l027",
    "stage": 2,
    "title": "Longer consonant clusters",
    "code": "str spr scr spl squ thr; -nch",
    "rule": "Read consonant clusters sound by sound. Some contain three consonant sounds; letter teams such as ch still represent one sound.",
    "tip": "Start slowly with stretchable sounds, then say the whole word normally.",
    "words": [
      "strap",
      "strip",
      "strong",
      "spring",
      "sprint",
      "scrap",
      "scrub",
      "splash",
      "split",
      "squid",
      "squint",
      "thrust",
      "strand",
      "strict",
      "scrimp",
      "lunch",
      "bench",
      "clench"
    ],
    "examples": [
      {
        "word": "strap",
        "parts": [
          "s",
          "t",
          "r",
          "a",
          "p"
        ],
        "note": "Three consonants before the vowel."
      },
      {
        "word": "split",
        "parts": [
          "s",
          "p",
          "l",
          "i",
          "t"
        ],
        "note": "Do not insert extra vowels."
      }
    ],
    "sentences": [
      "A strong frog can spring."
    ],
    "exceptions": "Squ usually represents /s/ /k/ /w/. Thr combines the th sound with r.",
    "prerequisites": [
      "l026"
    ]
  },
  {
    "id": "l028",
    "stage": 2,
    "title": "Tch and dge after a short vowel",
    "code": "tch=/ch/; dge=/j/",
    "rule": "Tch often spells /ch/ and dge often spells /j/ immediately after a short vowel.",
    "tip": "Read each group as one consonant sound.",
    "words": [
      "catch",
      "match",
      "patch",
      "hatch",
      "fetch",
      "pitch",
      "ditch",
      "stitch",
      "judge",
      "badge",
      "edge",
      "hedge",
      "bridge",
      "lodge",
      "fudge"
    ],
    "examples": [
      {
        "word": "match",
        "parts": [
          "m",
          "a",
          "tch"
        ],
        "note": "Tch spells /ch/."
      },
      {
        "word": "badge",
        "parts": [
          "b",
          "a",
          "dge"
        ],
        "note": "Dge spells /j/."
      }
    ],
    "sentences": [
      "A cat can catch a fish."
    ],
    "exceptions": "Rich, much, such, which, and sandwich show that tch is not universal.",
    "prerequisites": [
      "l027"
    ]
  },
  {
    "id": "l029",
    "stage": 2,
    "title": "Final ve and other quiet e words",
    "code": "-ve; have give live",
    "rule": "English words rarely end in a single v, so e is often added. That e does not always make a vowel long.",
    "tip": "Read have, give, and live with their short vowels; do not force a silent-e rule.",
    "words": [
      "have",
      "give",
      "live",
      "love",
      "glove",
      "shove",
      "dove",
      "above"
    ],
    "examples": [
      {
        "word": "have",
        "parts": [
          "h",
          "a",
          "ve"
        ],
        "note": "A stays short."
      },
      {
        "word": "give",
        "parts": [
          "g",
          "i",
          "ve"
        ],
        "note": "I stays short."
      }
    ],
    "sentences": [
      "Give this cat a big hug."
    ],
    "exceptions": "Love, above, glove, shove, and dove (the bird) have the vowel in cup for many speakers. Above starts with an unstressed vowel. Model these explicitly. Live as a verb has short i; live as an adjective has long i.",
    "prerequisites": [
      "l028"
    ]
  },
  {
    "id": "l030",
    "stage": 2,
    "title": "Map common words with unusual parts",
    "code": "the a I is was to of said",
    "rule": "Learn these words in small groups across short visits. Read the regular parts, then explicitly model the unexpected spelling before the learner reads the whole word.",
    "tip": "Use the sound map on each card. The mixed quiz draws from all 18 words, so introduce every card before using it as an independent check. Say the sounds, connect them to the letters, then read the whole word.",
    "words": [
      "the",
      "a",
      "I",
      "is",
      "his",
      "as",
      "has",
      "was",
      "to",
      "do",
      "of",
      "said",
      "says",
      "are",
      "you",
      "your",
      "one",
      "two"
    ],
    "examples": [
      {
        "word": "the",
        "parts": [
          "th",
          "e"
        ],
        "note": "Th has the voiced sound in this. E is often the unstressed uh vowel; it can also have the long-e sound. Model the word naturally in a phrase."
      },
      {
        "word": "a",
        "parts": [
          "a"
        ],
        "note": "This single-letter word is usually unstressed uh in a phrase. When emphasized, it can have the long-a sound. Both are normal."
      },
      {
        "word": "I",
        "parts": [
          "I"
        ],
        "note": "This word has the long-i sound and is always capitalized. It names the speaker."
      },
      {
        "word": "is",
        "parts": [
          "i",
          "s"
        ],
        "note": "I has its familiar short sound. S spells the voiced buzzing z sound here: short i plus z."
      },
      {
        "word": "his",
        "parts": [
          "h",
          "i",
          "s"
        ],
        "note": "H and short i are regular. Final s spells z here. Blend h, short i, z."
      },
      {
        "word": "as",
        "parts": [
          "a",
          "s"
        ],
        "note": "In the full form, a has its short sound and s spells z. In a sentence the vowel may reduce to unstressed uh."
      },
      {
        "word": "has",
        "parts": [
          "h",
          "a",
          "s"
        ],
        "note": "H and short a are regular. Final s spells z. The vowel can reduce when this word is unstressed in a sentence."
      },
      {
        "word": "was",
        "parts": [
          "w",
          "a",
          "s"
        ],
        "note": "W is regular and final s spells z. A often has an uh-like vowel here, with accent and stress differences. The adult models the complete local pronunciation."
      },
      {
        "word": "to",
        "parts": [
          "t",
          "o"
        ],
        "note": "T is regular. In its full form, o spells the oo sound heard in two. In a phrase, to often reduces to t plus unstressed uh."
      },
      {
        "word": "do",
        "parts": [
          "d",
          "o"
        ],
        "note": "D is regular. O spells the oo sound heard in two. Blend d with oo; do not use the ordinary short-o sound."
      },
      {
        "word": "of",
        "parts": [
          "o",
          "f"
        ],
        "note": "F spells v, not its usual unvoiced sound. O is often an uh-like vowel; the adult models the full word and its natural reduced form."
      },
      {
        "word": "said",
        "parts": [
          "s",
          "ai",
          "d"
        ],
        "note": "S and d are regular. The unexpected ai spells the short-e sound in bed. Blend s, short e, d."
      },
      {
        "word": "says",
        "parts": [
          "s",
          "ay",
          "s"
        ],
        "note": "The first s has its usual unvoiced sound; the final s spells z. Ay usually has short e here, so says rhymes with fez. Accept an established local variant."
      },
      {
        "word": "are",
        "parts": [
          "ar",
          "e"
        ],
        "note": "In the full form, ar has the sound heard in car; the final e is silent. The r follows the learner’s accent, and the vowel may reduce when the word is unstressed."
      },
      {
        "word": "you",
        "parts": [
          "y",
          "ou"
        ],
        "note": "Y has its familiar consonant sound as in yes. Ou spells oo here. Blend the initial y sound with oo."
      },
      {
        "word": "your",
        "parts": [
          "y",
          "our"
        ],
        "note": "Y has its familiar consonant sound. Model our as it sounds in your: commonly or, oor, or a reduced er-like sound, depending on accent and stress. It need not sound like the separate word our."
      },
      {
        "word": "one",
        "parts": [
          "o",
          "n",
          "e"
        ],
        "note": "One usually rhymes with sun. Its opening w sound and short-u vowel are unexpectedly represented by o; n is regular, and final e is silent. Model the whole word before mapping it."
      },
      {
        "word": "two",
        "parts": [
          "t",
          "w",
          "o"
        ],
        "note": "T is regular, w is silent, and o spells oo. Blend t with oo. Two names the number 2."
      }
    ],
    "sentences": [
      "The cat is on the bed. I said it can nap."
    ],
    "exceptions": "These frequent words have accent-dependent and context-dependent forms. The may use a short unstressed vowel or the vowel in thee.",
    "prerequisites": [
      "l029"
    ]
  },
  {
    "id": "l031",
    "stage": 3,
    "title": "Open one-syllable words",
    "code": "open syllables: me go hi",
    "rule": "At the end of an open syllable, a single vowel often says its long sound. A long vowel sounds like its letter name.",
    "tip": "Read the whole word and check whether it is a known spoken word.",
    "words": [
      "me",
      "he",
      "she",
      "we",
      "be",
      "no",
      "go",
      "so",
      "hi",
      "I"
    ],
    "examples": [
      {
        "word": "me",
        "parts": [
          "m",
          "e"
        ],
        "note": "E is long."
      },
      {
        "word": "go",
        "parts": [
          "g",
          "o"
        ],
        "note": "O is long."
      }
    ],
    "sentences": [
      "She can go. We can go with them."
    ],
    "exceptions": "I is always capitalized. This open-syllable pattern is useful, but not an exception-free rule.",
    "prerequisites": [
      "l030"
    ]
  },
  {
    "id": "l032",
    "stage": 3,
    "title": "Long a with a–e",
    "code": "a_e",
    "rule": "In many one-syllable words, a consonant and a final silent e follow a. The a is long.",
    "tip": "Compare cap and cape; tap and tape.",
    "words": [
      "cap",
      "cape",
      "tap",
      "tape",
      "mad",
      "made",
      "can",
      "cane",
      "hat",
      "hate",
      "pan",
      "pane",
      "lake",
      "cake",
      "name",
      "same"
    ],
    "examples": [
      {
        "word": "cape",
        "parts": [
          "c",
          "a",
          "p",
          "e"
        ],
        "note": "Final e marks the long a; it is not spoken."
      },
      {
        "word": "made",
        "parts": [
          "m",
          "a",
          "d",
          "e"
        ],
        "note": "Compare mad and made."
      }
    ],
    "sentences": [
      "I can make a cake."
    ],
    "exceptions": "Have is a common exception; a final e does not guarantee a long vowel.",
    "pseudowords": [
      {
        "word": "dape",
        "guide": "Rhymes with cape."
      },
      {
        "word": "vame",
        "guide": "Rhymes with same."
      }
    ],
    "prerequisites": [
      "l031"
    ]
  },
  {
    "id": "l033",
    "stage": 3,
    "title": "Long i with i–e",
    "code": "i_e",
    "rule": "In many one-syllable words, i followed by a consonant and silent e has the long-i sound.",
    "tip": "Compare kit and kite; pin and pine.",
    "words": [
      "kit",
      "kite",
      "pin",
      "pine",
      "fin",
      "fine",
      "rid",
      "ride",
      "hid",
      "hide",
      "bit",
      "bite",
      "time",
      "line",
      "side",
      "mine"
    ],
    "examples": [
      {
        "word": "kite",
        "parts": [
          "k",
          "i",
          "t",
          "e"
        ],
        "note": "I is long."
      },
      {
        "word": "time",
        "parts": [
          "t",
          "i",
          "m",
          "e"
        ],
        "note": "Final e is silent."
      }
    ],
    "sentences": [
      "I can ride a bike."
    ],
    "exceptions": "Give and live (meaning reside) are exceptions. Live in live music has long i.",
    "pseudowords": [
      {
        "word": "nime",
        "guide": "Rhymes with time."
      },
      {
        "word": "pide",
        "guide": "Rhymes with side."
      }
    ],
    "prerequisites": [
      "l032"
    ]
  },
  {
    "id": "l034",
    "stage": 3,
    "title": "Long o with o–e",
    "code": "o_e",
    "rule": "In many one-syllable words, o followed by a consonant and silent e has the long-o sound.",
    "tip": "Compare hop and hope; not and note.",
    "words": [
      "hop",
      "hope",
      "not",
      "note",
      "rod",
      "rode",
      "cod",
      "code",
      "rob",
      "robe",
      "home",
      "bone",
      "cone",
      "rope",
      "rose",
      "stone"
    ],
    "examples": [
      {
        "word": "hope",
        "parts": [
          "h",
          "o",
          "p",
          "e"
        ],
        "note": "O is long."
      },
      {
        "word": "rope",
        "parts": [
          "r",
          "o",
          "p",
          "e"
        ],
        "note": "Final e is silent."
      }
    ],
    "sentences": [
      "A dog can take a bone home."
    ],
    "exceptions": "Love, come, some, done, and one do not follow the usual long-o pattern.",
    "pseudowords": [
      {
        "word": "fome",
        "guide": "Rhymes with home."
      },
      {
        "word": "zote",
        "guide": "Rhymes with note."
      }
    ],
    "prerequisites": [
      "l033"
    ]
  },
  {
    "id": "l035",
    "stage": 3,
    "title": "Long u with u–e",
    "code": "u_e: /yoo/ or /oo/",
    "rule": "U followed by a consonant and silent e often sounds like the vowel in cube or flute.",
    "tip": "Both long-u pronunciations are common. Let normal speech guide the choice.",
    "words": [
      "cub",
      "cube",
      "cut",
      "cute",
      "tub",
      "tube",
      "us",
      "use",
      "mule",
      "fume",
      "tune",
      "dune",
      "rule",
      "rude",
      "flute"
    ],
    "examples": [
      {
        "word": "cube",
        "parts": [
          "c",
          "u",
          "b",
          "e"
        ],
        "note": "Often /yoo/."
      },
      {
        "word": "flute",
        "parts": [
          "f",
          "l",
          "u",
          "t",
          "e"
        ],
        "note": "Usually /oo/."
      }
    ],
    "sentences": [
      "A cute mule has a flute."
    ],
    "exceptions": "Tune, tube, and similar words vary between /yoo/ and /oo/ by accent.",
    "prerequisites": [
      "l034"
    ]
  },
  {
    "id": "l036",
    "stage": 3,
    "title": "Long e with e–e",
    "code": "e_e",
    "rule": "A few familiar words use e, a consonant, and silent e for long e.",
    "tip": "This pattern is less common than ee and ea. Learn it with whole-word examples.",
    "words": [
      "these",
      "theme",
      "eve",
      "Pete",
      "Steve"
    ],
    "examples": [
      {
        "word": "these",
        "parts": [
          "th",
          "e",
          "s",
          "e"
        ],
        "note": "These has long e."
      },
      {
        "word": "theme",
        "parts": [
          "th",
          "e",
          "m",
          "e"
        ],
        "note": "Theme has long e."
      }
    ],
    "sentences": [
      "These are the same."
    ],
    "exceptions": "Eve means the evening before a day. Pete and Steve are names. Longer examples such as complete and delete follow later; here and mere involve r and are not plain long-e examples.",
    "prerequisites": [
      "l035"
    ]
  },
  {
    "id": "l037",
    "stage": 3,
    "title": "Compare short and long vowels",
    "code": "CVC versus CVCe",
    "rule": "Check the ending before you blend. A final silent e can change a short vowel to a long vowel.",
    "tip": "Read pairs, then mix them so the answer cannot be guessed from order.",
    "words": [
      "cap",
      "cape",
      "kit",
      "kite",
      "hop",
      "hope",
      "cub",
      "cube",
      "tap",
      "tape",
      "pin",
      "pine",
      "not",
      "note",
      "cut",
      "cute"
    ],
    "examples": [
      {
        "word": "pin",
        "parts": [
          "p",
          "i",
          "n"
        ],
        "note": "Short i."
      },
      {
        "word": "pine",
        "parts": [
          "p",
          "i",
          "n",
          "e"
        ],
        "note": "Long i."
      }
    ],
    "sentences": [
      "I hope the cat can nap at home."
    ],
    "exceptions": "The pattern is useful but not exception-free.",
    "prerequisites": [
      "l036"
    ]
  },
  {
    "id": "l038",
    "stage": 3,
    "title": "Y at the end of short words",
    "code": "y=/long i/",
    "rule": "At the end of many one-syllable words, y spells the long-i sound.",
    "tip": "Use the position of y: consonant at the start of yes, vowel at the end of my.",
    "words": [
      "my",
      "by",
      "shy",
      "fly",
      "cry",
      "dry",
      "try",
      "fry",
      "sky",
      "sly",
      "spy",
      "why"
    ],
    "examples": [
      {
        "word": "fly",
        "parts": [
          "f",
          "l",
          "y"
        ],
        "note": "Y spells long i."
      },
      {
        "word": "sky",
        "parts": [
          "s",
          "k",
          "y"
        ],
        "note": "Y is the vowel spelling."
      }
    ],
    "sentences": [
      "I can try to fly a kite."
    ],
    "exceptions": "Y in longer unstressed endings is taught later.",
    "prerequisites": [
      "l037"
    ]
  },
  {
    "id": "l039",
    "stage": 3,
    "title": "Soft c and soft g",
    "code": "c=/s/; g=/j/ before e i y",
    "rule": "C usually sounds like /s/ before e, i, or y. G often sounds like /j/ there, but has many exceptions.",
    "tip": "Try the common pronunciation, then check the whole word.",
    "words": [
      "cent",
      "face",
      "race",
      "ice",
      "rice",
      "nice",
      "gem",
      "page",
      "age",
      "cage",
      "huge"
    ],
    "examples": [
      {
        "word": "cent",
        "parts": [
          "c",
          "e",
          "n",
          "t"
        ],
        "note": "C is soft before e."
      },
      {
        "word": "gem",
        "parts": [
          "g",
          "e",
          "m"
        ],
        "note": "G is soft before e."
      }
    ],
    "sentences": [
      "A nice cat can sit in a cage."
    ],
    "exceptions": "Get, give, girl, gear, and gift keep hard g. City, cycle, giant, and gentle illustrate this pattern in longer words taught later. Cello is a borrowed-word exception.",
    "prerequisites": [
      "l038"
    ]
  },
  {
    "id": "l040",
    "stage": 4,
    "title": "Long a: ai and ay",
    "code": "ai ay",
    "rule": "Ai often spells long a inside a word; ay often spells long a at the end of a word or syllable.",
    "tip": "Learn useful positions without treating them as absolute rules.",
    "words": [
      "rain",
      "train",
      "mail",
      "tail",
      "sail",
      "nail",
      "wait",
      "paint",
      "day",
      "play",
      "stay",
      "tray",
      "clay",
      "spray"
    ],
    "examples": [
      {
        "word": "rain",
        "parts": [
          "r",
          "ai",
          "n"
        ],
        "note": "Ai spells long a."
      },
      {
        "word": "play",
        "parts": [
          "p",
          "l",
          "ay"
        ],
        "note": "Ay spells long a."
      }
    ],
    "sentences": [
      "I can play in the rain."
    ],
    "exceptions": "Said and says are common exceptions.",
    "pseudowords": [
      {
        "word": "taip",
        "guide": "Rhymes with tape."
      },
      {
        "word": "zay",
        "guide": "Rhymes with day."
      }
    ],
    "prerequisites": [
      "l039"
    ]
  },
  {
    "id": "l041",
    "stage": 4,
    "title": "Long e: ee and ea",
    "code": "ee ea",
    "rule": "Ee and ea often spell long e. Read the letters together.",
    "tip": "Compare see and sea: different spellings can have the same sound.",
    "words": [
      "see",
      "tree",
      "free",
      "green",
      "feet",
      "sheep",
      "sleep",
      "seed",
      "sea",
      "eat",
      "team",
      "leaf",
      "read",
      "bean",
      "clean",
      "dream"
    ],
    "examples": [
      {
        "word": "sheep",
        "parts": [
          "sh",
          "ee",
          "p"
        ],
        "note": "Ee spells long e."
      },
      {
        "word": "leaf",
        "parts": [
          "l",
          "ea",
          "f"
        ],
        "note": "Ea spells long e."
      }
    ],
    "sentences": [
      "We can see a green leaf."
    ],
    "exceptions": "Ea also has other sounds; read changes pronunciation with tense.",
    "pseudowords": [
      {
        "word": "meef",
        "guide": "Rhymes with leaf."
      },
      {
        "word": "teap",
        "guide": "Rhymes with keep."
      }
    ],
    "prerequisites": [
      "l040"
    ]
  },
  {
    "id": "l042",
    "stage": 4,
    "title": "Long o: oa and ow",
    "code": "oa ow=/long o/",
    "rule": "Oa often spells long o inside a word. Ow can spell long o, especially at a word ending.",
    "tip": "Read both letters as the vowel spelling.",
    "words": [
      "boat",
      "coat",
      "goat",
      "road",
      "toad",
      "load",
      "soap",
      "float",
      "oak",
      "low",
      "slow",
      "snow",
      "grow",
      "show",
      "bowl",
      "own"
    ],
    "examples": [
      {
        "word": "boat",
        "parts": [
          "b",
          "oa",
          "t"
        ],
        "note": "Oa spells long o."
      },
      {
        "word": "snow",
        "parts": [
          "s",
          "n",
          "ow"
        ],
        "note": "Ow spells long o."
      }
    ],
    "sentences": [
      "The goat can see the snow."
    ],
    "exceptions": "Ow also spells the vowel in cow. Try and check using spoken vocabulary.",
    "prerequisites": [
      "l041"
    ]
  },
  {
    "id": "l043",
    "stage": 4,
    "title": "Long i: igh and ie",
    "code": "igh ie=/long i/",
    "rule": "Igh often spells long i; gh is not spoken. Ie spells long i in pie and tie.",
    "tip": "Read igh together, even though it has three letters.",
    "words": [
      "high",
      "sigh",
      "night",
      "light",
      "bright",
      "right",
      "sight",
      "tight",
      "fight",
      "pie",
      "tie",
      "lie",
      "die",
      "fried",
      "cried"
    ],
    "examples": [
      {
        "word": "night",
        "parts": [
          "n",
          "igh",
          "t"
        ],
        "note": "Igh spells one vowel sound."
      },
      {
        "word": "pie",
        "parts": [
          "p",
          "ie"
        ],
        "note": "Ie spells long i."
      }
    ],
    "sentences": [
      "I can see a bright light."
    ],
    "exceptions": "Ie has other sounds in field and friend. Cried and fried also use an ending spelling change.",
    "prerequisites": [
      "l042"
    ]
  },
  {
    "id": "l044",
    "stage": 4,
    "title": "Long u: ue and ew",
    "code": "ue ew=/yoo/ or /oo/",
    "rule": "Ue and ew can spell the vowel in blue or the sound in few.",
    "tip": "Listen to the known word; speakers differ in where they keep a y sound.",
    "words": [
      "blue",
      "clue",
      "glue",
      "true",
      "due",
      "cue",
      "rescue",
      "value",
      "new",
      "few",
      "dew",
      "stew",
      "grew",
      "flew",
      "threw",
      "crew"
    ],
    "examples": [
      {
        "word": "blue",
        "parts": [
          "b",
          "l",
          "ue"
        ],
        "note": "Usually /oo/."
      },
      {
        "word": "few",
        "parts": [
          "f",
          "ew"
        ],
        "note": "Usually /yoo/."
      }
    ],
    "sentences": [
      "A few birds flew by."
    ],
    "exceptions": "New and dew vary by accent. Sew is a long-o exception; new versus knew is a spelling distinction.",
    "prerequisites": [
      "l043"
    ]
  },
  {
    "id": "l045",
    "stage": 4,
    "title": "Ar",
    "code": "ar",
    "rule": "Ar often spells the vowel-plus-r pattern heard in car.",
    "tip": "Treat ar as a useful spelling unit. Pronounce r according to the learner’s accent.",
    "words": [
      "car",
      "far",
      "jar",
      "bar",
      "star",
      "scar",
      "arm",
      "farm",
      "park",
      "dark",
      "hard",
      "sharp",
      "start",
      "cart",
      "charm"
    ],
    "examples": [
      {
        "word": "car",
        "parts": [
          "c",
          "ar"
        ],
        "note": "Ar as in car."
      },
      {
        "word": "star",
        "parts": [
          "s",
          "t",
          "ar"
        ],
        "note": "Keep the starting blend."
      }
    ],
    "sentences": [
      "A car can park by the farm."
    ],
    "exceptions": "In non-rhotic accents the r may not be pronounced before a consonant or pause.",
    "prerequisites": [
      "l044"
    ]
  },
  {
    "id": "l046",
    "stage": 4,
    "title": "Or and ore",
    "code": "or ore",
    "rule": "Or and ore often spell the sound pattern in fork and more.",
    "tip": "Use whole words to model the r-controlled vowel.",
    "words": [
      "or",
      "for",
      "fork",
      "corn",
      "horn",
      "born",
      "storm",
      "short",
      "sport",
      "more",
      "store",
      "shore",
      "score",
      "core",
      "sore"
    ],
    "examples": [
      {
        "word": "fork",
        "parts": [
          "f",
          "or",
          "k"
        ],
        "note": "Or as in fork."
      },
      {
        "word": "more",
        "parts": [
          "m",
          "ore"
        ],
        "note": "Ore as in more."
      }
    ],
    "sentences": [
      "The storm is far from the shore."
    ],
    "exceptions": "For is often reduced in normal speech. Word and work do not use the usual or sound.",
    "prerequisites": [
      "l045"
    ]
  },
  {
    "id": "l047",
    "stage": 4,
    "title": "Er, ir, and ur",
    "code": "er ir ur",
    "rule": "In stressed syllables, er, ir, and ur often spell the same vowel-plus-r sound.",
    "tip": "Practice reading the alternatives. Spelling a heard word requires knowing which spelling it uses.",
    "words": [
      "her",
      "fern",
      "term",
      "verb",
      "perch",
      "bird",
      "girl",
      "first",
      "shirt",
      "third",
      "turn",
      "burn",
      "curl",
      "hurt",
      "church",
      "nurse"
    ],
    "examples": [
      {
        "word": "bird",
        "parts": [
          "b",
          "ir",
          "d"
        ],
        "note": "Ir as in bird."
      },
      {
        "word": "turn",
        "parts": [
          "t",
          "ur",
          "n"
        ],
        "note": "Ur as in turn."
      }
    ],
    "sentences": [
      "The girl can turn first."
    ],
    "exceptions": "The exact vowel and r depend on accent. Some er words use a different pattern, such as very.",
    "prerequisites": [
      "l046"
    ]
  },
  {
    "id": "l048",
    "stage": 4,
    "title": "Oo as in moon",
    "code": "oo=/oo/",
    "rule": "Oo often spells the vowel heard in moon.",
    "tip": "Say moon, then read the spelling oo together.",
    "words": [
      "moon",
      "soon",
      "noon",
      "food",
      "pool",
      "cool",
      "tool",
      "room",
      "broom",
      "spoon",
      "boot",
      "root",
      "tooth",
      "smooth"
    ],
    "examples": [
      {
        "word": "moon",
        "parts": [
          "m",
          "oo",
          "n"
        ],
        "note": "Long oo."
      },
      {
        "word": "spoon",
        "parts": [
          "s",
          "p",
          "oo",
          "n"
        ],
        "note": "One vowel spelling."
      }
    ],
    "sentences": [
      "The moon is bright."
    ],
    "exceptions": "Food and good have different vowels. Room and root vary by accent.",
    "prerequisites": [
      "l047"
    ]
  },
  {
    "id": "l049",
    "stage": 4,
    "title": "Oo as in book",
    "code": "oo=/short oo/",
    "rule": "Oo can also spell the shorter vowel heard in book.",
    "tip": "Compare food and foot. A known spoken word helps choose the right pronunciation.",
    "words": [
      "book",
      "cook",
      "look",
      "took",
      "shook",
      "hook",
      "brook",
      "good",
      "wood",
      "stood",
      "foot",
      "wool",
      "soot",
      "hood"
    ],
    "examples": [
      {
        "word": "book",
        "parts": [
          "b",
          "oo",
          "k"
        ],
        "note": "The vowel in book."
      },
      {
        "word": "foot",
        "parts": [
          "f",
          "oo",
          "t"
        ],
        "note": "The vowel in foot."
      }
    ],
    "sentences": [
      "Look at the good book."
    ],
    "exceptions": "Soot and room vary by dialect. Do not teach oo as having only one sound.",
    "prerequisites": [
      "l048"
    ]
  },
  {
    "id": "l050",
    "stage": 4,
    "title": "Oi and oy",
    "code": "oi oy",
    "rule": "Oi and oy usually spell the vowel sound heard in coin and toy.",
    "tip": "Oi is common inside a word; oy is common at the end of a word or syllable.",
    "words": [
      "oil",
      "boil",
      "coin",
      "join",
      "soil",
      "foil",
      "point",
      "noise",
      "choice",
      "toy",
      "boy",
      "joy",
      "soy",
      "enjoy",
      "royal"
    ],
    "examples": [
      {
        "word": "coin",
        "parts": [
          "c",
          "oi",
          "n"
        ],
        "note": "Oi as in coin."
      },
      {
        "word": "toy",
        "parts": [
          "t",
          "oy"
        ],
        "note": "Oy as in toy."
      }
    ],
    "sentences": [
      "The boy can point to a toy."
    ],
    "exceptions": "These are common positions, not universal spelling laws.",
    "prerequisites": [
      "l049"
    ]
  },
  {
    "id": "l051",
    "stage": 4,
    "title": "Ou and ow as in out and cow",
    "code": "ou ow=/ow/",
    "rule": "Ou and ow often spell the vowel heard in out and cow.",
    "tip": "Say the whole vowel smoothly; it changes within the syllable.",
    "words": [
      "out",
      "shout",
      "cloud",
      "proud",
      "round",
      "sound",
      "found",
      "house",
      "mouse",
      "cow",
      "now",
      "how",
      "town",
      "brown",
      "down",
      "flower"
    ],
    "examples": [
      {
        "word": "out",
        "parts": [
          "ou",
          "t"
        ],
        "note": "Ou as in out."
      },
      {
        "word": "cow",
        "parts": [
          "c",
          "ow"
        ],
        "note": "Ow as in cow."
      }
    ],
    "sentences": [
      "A brown cow is by the house."
    ],
    "exceptions": "Ou and ow have several other sounds. House has /s/ as a noun and /z/ as a verb in many accents.",
    "prerequisites": [
      "l050"
    ]
  },
  {
    "id": "l052",
    "stage": 4,
    "title": "Aw and au",
    "code": "aw au",
    "rule": "Aw and au often spell the vowel heard in saw and haul.",
    "tip": "Model the words in the learner’s accent. Many speakers merge this vowel with the one in cot.",
    "words": [
      "saw",
      "paw",
      "law",
      "raw",
      "draw",
      "straw",
      "claw",
      "yawn",
      "dawn",
      "haul",
      "fault",
      "pause",
      "cause",
      "sauce",
      "launch",
      "author"
    ],
    "examples": [
      {
        "word": "saw",
        "parts": [
          "s",
          "aw"
        ],
        "note": "Aw as in saw."
      },
      {
        "word": "haul",
        "parts": [
          "h",
          "au",
          "l"
        ],
        "note": "Au as in haul."
      }
    ],
    "sentences": [
      "I saw a paw print."
    ],
    "exceptions": "Caught and cot may sound alike. Au can have other pronunciations in borrowed words.",
    "prerequisites": [
      "l051"
    ]
  },
  {
    "id": "l053",
    "stage": 4,
    "title": "Air, are, and ear",
    "code": "air are ear as in bear",
    "rule": "Air, are, and ear can spell the sound pattern heard in fair, care, and bear.",
    "tip": "Notice the spelling, then say the familiar spoken word.",
    "words": [
      "air",
      "fair",
      "hair",
      "pair",
      "chair",
      "stair",
      "care",
      "dare",
      "fare",
      "hare",
      "share",
      "spare",
      "bear",
      "pear",
      "wear",
      "tear"
    ],
    "examples": [
      {
        "word": "chair",
        "parts": [
          "ch",
          "air"
        ],
        "note": "Air as in chair."
      },
      {
        "word": "bear",
        "parts": [
          "b",
          "ear"
        ],
        "note": "Ear as in bear."
      }
    ],
    "sentences": [
      "A bear sat by a chair."
    ],
    "exceptions": "Tear meaning rip rhymes with bear; tear from the eye belongs to the next lesson.",
    "prerequisites": [
      "l052"
    ]
  },
  {
    "id": "l054",
    "stage": 4,
    "title": "Ear, eer, and ere",
    "code": "ear eer ere as in here",
    "rule": "Ear, eer, and ere can spell the sound pattern heard in near, deer, and here.",
    "tip": "Compare bear and hear. The same spelling can have different pronunciations.",
    "words": [
      "ear",
      "hear",
      "near",
      "dear",
      "fear",
      "clear",
      "spear",
      "year",
      "tear",
      "deer",
      "cheer",
      "sheer",
      "peer",
      "here",
      "mere",
      "sphere"
    ],
    "examples": [
      {
        "word": "hear",
        "parts": [
          "h",
          "ear"
        ],
        "note": "Ear as in hear."
      },
      {
        "word": "deer",
        "parts": [
          "d",
          "eer"
        ],
        "note": "Eer as in deer."
      }
    ],
    "sentences": [
      "I can hear a deer near here."
    ],
    "exceptions": "Tear meaning a drop from an eye rhymes with hear. Many accents merge some vowel-plus-r categories.",
    "prerequisites": [
      "l053"
    ]
  },
  {
    "id": "l055",
    "stage": 5,
    "title": "Plural and verb endings: s and es",
    "code": "-s=/s/ /z/; -es=/iz/",
    "rule": "An ending written s or es can sound like /s/, /z/, or an extra syllable as in buses.",
    "tip": "Say the base word, add the ending, then read naturally.",
    "words": [
      "cats",
      "dogs",
      "cups",
      "beds",
      "hats",
      "pigs",
      "maps",
      "runs",
      "jumps",
      "buses",
      "boxes",
      "wishes",
      "dishes",
      "matches",
      "roses",
      "judges"
    ],
    "examples": [
      {
        "word": "cats",
        "parts": [
          "cat",
          "s"
        ],
        "note": "Final sound is /s/."
      },
      {
        "word": "dogs",
        "parts": [
          "dog",
          "s"
        ],
        "note": "Final sound is /z/."
      },
      {
        "word": "buses",
        "parts": [
          "bus",
          "es"
        ],
        "note": "The ending adds a syllable."
      }
    ],
    "sentences": [
      "The cats and dogs jump."
    ],
    "exceptions": "Es does not always add a syllable: cakes and homes each have one syllable. Plural spelling patterns have exceptions.",
    "prerequisites": [
      "l054"
    ]
  },
  {
    "id": "l056",
    "stage": 5,
    "title": "Past-tense ed has three sounds",
    "code": "-ed=/t/ /d/ /id/",
    "rule": "Ed often sounds like /t/ after a voiceless sound, /d/ after a voiced sound, and an extra syllable after /t/ or /d/.",
    "tip": "The final sound of the base word matters, not just its final letter.",
    "words": [
      "jumped",
      "looked",
      "helped",
      "missed",
      "washed",
      "laughed",
      "played",
      "cleaned",
      "called",
      "filled",
      "loved",
      "wanted",
      "needed",
      "landed",
      "rested"
    ],
    "examples": [
      {
        "word": "jumped",
        "parts": [
          "jump",
          "ed"
        ],
        "note": "Ed sounds like /t/."
      },
      {
        "word": "played",
        "parts": [
          "play",
          "ed"
        ],
        "note": "Ed sounds like /d/."
      },
      {
        "word": "wanted",
        "parts": [
          "want",
          "ed"
        ],
        "note": "Ed adds a syllable."
      }
    ],
    "sentences": [
      "The dog jumped and landed."
    ],
    "exceptions": "Some adjectives, such as learned meaning scholarly, have a different ed pronunciation.",
    "prerequisites": [
      "l055"
    ]
  },
  {
    "id": "l057",
    "stage": 5,
    "title": "Read the ing ending",
    "code": "-ing",
    "rule": "Read the base word, then add ing. The ending usually has the sounds in sing without the first s.",
    "tip": "Ng is not a separate hard g in ordinary ing.",
    "words": [
      "helping",
      "camping",
      "jumping",
      "resting",
      "standing",
      "singing",
      "ringing",
      "looking",
      "reading",
      "playing",
      "wishing",
      "fishing",
      "starting",
      "turning"
    ],
    "examples": [
      {
        "word": "jumping",
        "parts": [
          "jump",
          "ing"
        ],
        "note": "Base plus ending."
      },
      {
        "word": "singing",
        "parts": [
          "sing",
          "ing"
        ],
        "note": "Keep both syllables."
      }
    ],
    "sentences": [
      "The dog is jumping and running."
    ],
    "exceptions": "Running doubles n; that spelling change is taught next. Conversational dialects may use a different final sound.",
    "prerequisites": [
      "l056"
    ]
  },
  {
    "id": "l058",
    "stage": 5,
    "title": "Double before a vowel ending",
    "code": "CVC + ing ed er",
    "rule": "A short-vowel base ending in one consonant often doubles that consonant before a vowel-starting ending.",
    "tip": "Compare hopping with hoping. In longer words, final stress matters.",
    "words": [
      "hopping",
      "running",
      "sitting",
      "swimming",
      "stopping",
      "planning",
      "rubbed",
      "grabbed",
      "slipped",
      "biggest",
      "hotter",
      "thinner",
      "winner",
      "beginner"
    ],
    "examples": [
      {
        "word": "hopping",
        "parts": [
          "hop",
          "p",
          "ing"
        ],
        "note": "The double p preserves the short-vowel pattern."
      },
      {
        "word": "running",
        "parts": [
          "run",
          "n",
          "ing"
        ],
        "note": "One consonant sound despite nn."
      }
    ],
    "sentences": [
      "The rabbit is hopping."
    ],
    "exceptions": "Do not double final w, x, or y. Visit becomes visiting; begin becomes beginning because stress differs.",
    "prerequisites": [
      "l057"
    ]
  },
  {
    "id": "l059",
    "stage": 5,
    "title": "Drop a final silent e",
    "code": "silent e + vowel suffix",
    "rule": "A final silent e is often dropped before an ending that begins with a vowel.",
    "tip": "Compare making with make. Keep the base word in mind.",
    "words": [
      "making",
      "taking",
      "baking",
      "riding",
      "hoping",
      "using",
      "writing",
      "shining",
      "saved",
      "timed",
      "safer",
      "nicest",
      "caring",
      "hiker"
    ],
    "examples": [
      {
        "word": "making",
        "parts": [
          "mak",
          "ing"
        ],
        "note": "Make loses its final e."
      },
      {
        "word": "hoping",
        "parts": [
          "hop",
          "ing"
        ],
        "note": "Hope loses e; compare hopping."
      }
    ],
    "sentences": [
      "I am making a cake."
    ],
    "exceptions": "Keep e where needed for soft c or g, as in changeable and noticeable; dyeing keeps e to distinguish dying.",
    "prerequisites": [
      "l058"
    ]
  },
  {
    "id": "l060",
    "stage": 5,
    "title": "Change final y to i",
    "code": "consonant+y; vowel+y",
    "rule": "A base ending in consonant plus y often changes y to i before an ending. Keep y before ing.",
    "tip": "If a vowel comes before y, usually keep y: play, played.",
    "words": [
      "baby",
      "babies",
      "puppy",
      "puppies",
      "city",
      "cities",
      "try",
      "tried",
      "cry",
      "cried",
      "happy",
      "happier",
      "carry",
      "carried",
      "trying",
      "playing"
    ],
    "examples": [
      {
        "word": "babies",
        "parts": [
          "bab",
          "ies"
        ],
        "note": "Baby changes y to i before es."
      },
      {
        "word": "trying",
        "parts": [
          "try",
          "ing"
        ],
        "note": "Keep y before ing."
      }
    ],
    "sentences": [
      "The babies are happy."
    ],
    "exceptions": "Some words are exceptions, including said, paid, laid, and daily. This rule explains spelling changes, not every pronunciation.",
    "prerequisites": [
      "l059"
    ]
  },
  {
    "id": "l061",
    "stage": 5,
    "title": "Closed syllables in longer words",
    "code": "closed syllable",
    "rule": "A closed syllable ends in a consonant and often has a short vowel. Read manageable parts, then blend the whole word.",
    "tip": "The division helps reading; it is not a rigid claim about speech boundaries.",
    "words": [
      "rabbit",
      "picnic",
      "napkin",
      "sunset",
      "basket",
      "helmet",
      "magnet",
      "tablet",
      "muffin",
      "tennis",
      "dentist",
      "insect",
      "velvet",
      "cabin"
    ],
    "examples": [
      {
        "word": "rabbit",
        "parts": [
          "rab",
          "bit"
        ],
        "note": "Two closed syllables."
      },
      {
        "word": "napkin",
        "parts": [
          "nap",
          "kin"
        ],
        "note": "Read both parts, then blend."
      }
    ],
    "sentences": [
      "A rabbit sat in a basket."
    ],
    "exceptions": "Cabin is often divided ca/bin in speech but has short a; flexible decoding matters more than one imposed division.",
    "prerequisites": [
      "l060"
    ]
  },
  {
    "id": "l062",
    "stage": 5,
    "title": "Open syllables in longer words",
    "code": "open syllable",
    "rule": "An open syllable ends in a vowel and often has a long vowel sound.",
    "tip": "Try the open vowel, then adjust using a known spoken word.",
    "words": [
      "robot",
      "paper",
      "tiger",
      "baby",
      "pony",
      "music",
      "tulip",
      "pilot",
      "basic",
      "hotel",
      "even",
      "silent",
      "moment",
      "zero"
    ],
    "examples": [
      {
        "word": "robot",
        "parts": [
          "ro",
          "bot"
        ],
        "note": "The first o is long."
      },
      {
        "word": "paper",
        "parts": [
          "pa",
          "per"
        ],
        "note": "The first a is long."
      }
    ],
    "sentences": [
      "A baby can see a tiger."
    ],
    "exceptions": "Unstressed vowels often reduce. Open does not mean long in every English word.",
    "prerequisites": [
      "l061"
    ]
  },
  {
    "id": "l063",
    "stage": 5,
    "title": "The consonant-le ending",
    "code": "-ble -cle -dle -fle -gle -kle -ple -tle -zle",
    "rule": "At the end of many words, a consonant plus le forms an unstressed syllable. L may carry the syllable.",
    "tip": "Read the base part, then the final consonant-le group.",
    "words": [
      "table",
      "cable",
      "stable",
      "apple",
      "little",
      "bottle",
      "middle",
      "handle",
      "candle",
      "simple",
      "purple",
      "uncle",
      "buckle",
      "puzzle"
    ],
    "examples": [
      {
        "word": "apple",
        "parts": [
          "ap",
          "ple"
        ],
        "note": "Two syllables."
      },
      {
        "word": "table",
        "parts": [
          "ta",
          "ble"
        ],
        "note": "A long first vowel and a final le syllable."
      }
    ],
    "sentences": [
      "A little apple is on the table."
    ],
    "exceptions": "The e is not separately spoken. Some accents use a slight unstressed vowel before l.",
    "prerequisites": [
      "l062"
    ]
  },
  {
    "id": "l064",
    "stage": 5,
    "title": "Compound words",
    "code": "two meaningful bases",
    "rule": "Find two familiar words inside a longer word. Read each, then say the compound smoothly.",
    "tip": "The meaning can help check the result after decoding.",
    "words": [
      "sunset",
      "handbag",
      "backpack",
      "bathtub",
      "sandbox",
      "bedroom",
      "football",
      "moonlight",
      "raincoat",
      "playground",
      "snowman",
      "windmill",
      "seashell",
      "toothbrush"
    ],
    "examples": [
      {
        "word": "sunset",
        "parts": [
          "sun",
          "set"
        ],
        "note": "Sun plus set."
      },
      {
        "word": "raincoat",
        "parts": [
          "rain",
          "coat"
        ],
        "note": "Rain plus coat."
      }
    ],
    "sentences": [
      "The raincoat is in the bedroom."
    ],
    "exceptions": "A compound is a meaning structure; spoken stress may change.",
    "prerequisites": [
      "l063"
    ]
  },
  {
    "id": "l065",
    "stage": 5,
    "title": "Flexible syllable division",
    "code": "VC/CV; V/CV; VC/V",
    "rule": "Try a useful division between consonants or around one consonant. If the result is not a known word, try another division.",
    "tip": "Model the choices aloud: robot has long o; robin has short o.",
    "words": [
      "robot",
      "robin",
      "tiger",
      "timid",
      "paper",
      "panic",
      "music",
      "mimic",
      "lemon",
      "melon",
      "seven",
      "travel",
      "finish",
      "limit"
    ],
    "examples": [
      {
        "word": "robot",
        "parts": [
          "ro",
          "bot"
        ],
        "note": "Try an open first syllable."
      },
      {
        "word": "robin",
        "parts": [
          "rob",
          "in"
        ],
        "note": "Try a closed first syllable."
      }
    ],
    "sentences": [
      "A robin can rest in a garden."
    ],
    "exceptions": "Syllable division is a decoding aid, not an exception-free algorithm. Vocabulary and stress matter.",
    "prerequisites": [
      "l064"
    ]
  },
  {
    "id": "l066",
    "stage": 5,
    "title": "Read longer vowel and r syllables",
    "code": "vowel-team and r-controlled syllables",
    "rule": "Keep familiar vowel teams and r-controlled patterns together while reading longer words.",
    "tip": "Find the vowel spellings first; blend syllables into a normal spoken word.",
    "words": [
      "rainbow",
      "weekend",
      "teacher",
      "toaster",
      "sailor",
      "freedom",
      "garden",
      "market",
      "farmer",
      "corner",
      "morning",
      "thirteen",
      "birthday",
      "carpet"
    ],
    "examples": [
      {
        "word": "rainbow",
        "parts": [
          "rain",
          "bow"
        ],
        "note": "Two familiar vowel spellings."
      },
      {
        "word": "market",
        "parts": [
          "mar",
          "ket"
        ],
        "note": "Ar remains a useful unit."
      }
    ],
    "sentences": [
      "The farmer can see a rainbow."
    ],
    "exceptions": "Teacher and farmer end in an unstressed er; it may differ from stressed er.",
    "prerequisites": [
      "l065"
    ]
  },
  {
    "id": "l067",
    "stage": 6,
    "title": "Ea can be short e or long a",
    "code": "ea=/e/ or /long a/",
    "rule": "Ea is often long e, but it has short e in head and long a in great.",
    "tip": "Group words by their actual vowel; do not guess all ea words from one rule.",
    "words": [
      "head",
      "bread",
      "dead",
      "thread",
      "spread",
      "dread",
      "ready",
      "heavy",
      "weather",
      "feather",
      "great",
      "break",
      "steak"
    ],
    "examples": [
      {
        "word": "head",
        "parts": [
          "h",
          "ea",
          "d"
        ],
        "note": "Ea has short e."
      },
      {
        "word": "great",
        "parts": [
          "g",
          "r",
          "ea",
          "t"
        ],
        "note": "Ea has long a."
      }
    ],
    "sentences": [
      "The bread is ready."
    ],
    "exceptions": "Read in the past tense also has short e. Several ea+r pronunciations were introduced earlier.",
    "prerequisites": [
      "l066"
    ]
  },
  {
    "id": "l068",
    "stage": 6,
    "title": "Ie and ei can spell long e",
    "code": "ie ei=/long e/",
    "rule": "Ie and ei can both spell long e. Use the whole word and its known meaning.",
    "tip": "The saying “i before e” has many exceptions and cannot determine pronunciation.",
    "words": [
      "field",
      "shield",
      "chief",
      "thief",
      "brief",
      "grief",
      "piece",
      "niece",
      "ceiling",
      "receive",
      "deceive",
      "perceive",
      "seize",
      "either",
      "neither"
    ],
    "examples": [
      {
        "word": "field",
        "parts": [
          "f",
          "ie",
          "l",
          "d"
        ],
        "note": "Ie has long e."
      },
      {
        "word": "ceiling",
        "parts": [
          "c",
          "ei",
          "l",
          "ing"
        ],
        "note": "Ei has long e."
      }
    ],
    "sentences": [
      "The chief can see a field."
    ],
    "exceptions": "Either and neither also have accepted long-i pronunciations. Friend has short e.",
    "prerequisites": [
      "l067"
    ]
  },
  {
    "id": "l069",
    "stage": 6,
    "title": "Ei, eigh, ey, and aigh for long a",
    "code": "ei eigh ey aigh",
    "rule": "Several less common spellings represent long a. Learn them in word families.",
    "tip": "Use eight, vein, they, and straight as anchors.",
    "words": [
      "eight",
      "weight",
      "freight",
      "sleigh",
      "neigh",
      "neighbor",
      "vein",
      "rein",
      "reign",
      "beige",
      "they",
      "obey",
      "prey",
      "grey",
      "straight"
    ],
    "examples": [
      {
        "word": "eight",
        "parts": [
          "eigh",
          "t"
        ],
        "note": "Eigh spells long a."
      },
      {
        "word": "straight",
        "parts": [
          "s",
          "t",
          "r",
          "aigh",
          "t"
        ],
        "note": "Aigh spells long a."
      }
    ],
    "sentences": [
      "They weigh the freight."
    ],
    "exceptions": "Height has long i. Eye has long i. Grey and gray are alternative spellings.",
    "prerequisites": [
      "l068"
    ]
  },
  {
    "id": "l070",
    "stage": 6,
    "title": "Final y and ey for long e",
    "code": "y ey=/long e/",
    "rule": "At the end of many unstressed syllables, y and ey have the vowel heard at the end of happy.",
    "tip": "This is different from the long-i y in my.",
    "words": [
      "happy",
      "baby",
      "funny",
      "sunny",
      "silly",
      "city",
      "pony",
      "candy",
      "key",
      "monkey",
      "donkey",
      "valley",
      "honey",
      "turkey",
      "chimney",
      "journey"
    ],
    "examples": [
      {
        "word": "happy",
        "parts": [
          "hap",
          "py"
        ],
        "note": "Final y has the happy vowel."
      },
      {
        "word": "monkey",
        "parts": [
          "mon",
          "key"
        ],
        "note": "Final ey has the happy vowel."
      }
    ],
    "sentences": [
      "The happy baby has a funny toy."
    ],
    "exceptions": "The happy vowel varies across accents. Key is stressed long e; money contains an irregular o as well.",
    "prerequisites": [
      "l069"
    ]
  },
  {
    "id": "l071",
    "stage": 6,
    "title": "More sounds of ou",
    "code": "ou=/oo/ /u/ /long o/; ould",
    "rule": "Ou has several pronunciations: soup, touch, soul, and could show four useful patterns.",
    "tip": "Learn a small family, then contrast it with another family.",
    "words": [
      "soup",
      "group",
      "youth",
      "route",
      "touch",
      "young",
      "double",
      "trouble",
      "country",
      "cousin",
      "couple",
      "rough",
      "tough",
      "soul",
      "shoulder",
      "could",
      "should",
      "would"
    ],
    "examples": [
      {
        "word": "soup",
        "parts": [
          "s",
          "ou",
          "p"
        ],
        "note": "Ou has the vowel in moon."
      },
      {
        "word": "touch",
        "parts": [
          "t",
          "ou",
          "ch"
        ],
        "note": "Ou has the vowel in cup."
      },
      {
        "word": "could",
        "parts": [
          "c",
          "ould"
        ],
        "note": "Ould has the vowel in could; l is silent."
      }
    ],
    "sentences": [
      "The young child could eat soup."
    ],
    "exceptions": "Route has two common pronunciations. Ou is especially variable in borrowed words.",
    "prerequisites": [
      "l070"
    ]
  },
  {
    "id": "l072",
    "stage": 6,
    "title": "Ow has two common sounds",
    "code": "ow in snow and cow",
    "rule": "Ow can have the vowel in snow or cow. The spelling alone does not always decide.",
    "tip": "Read the word, check meaning, and try the other vowel if needed.",
    "words": [
      "snow",
      "show",
      "grow",
      "slow",
      "own",
      "bowl",
      "row",
      "bow",
      "cow",
      "now",
      "town",
      "brown",
      "crown",
      "allow",
      "flower",
      "towel"
    ],
    "examples": [
      {
        "word": "snow",
        "parts": [
          "s",
          "n",
          "ow"
        ],
        "note": "Long o."
      },
      {
        "word": "cow",
        "parts": [
          "c",
          "ow"
        ],
        "note": "The vowel in cow."
      }
    ],
    "sentences": [
      "A brown cow stood in the snow."
    ],
    "exceptions": "Bow and row each have different pronunciations for different meanings. Use a sentence.",
    "prerequisites": [
      "l071"
    ]
  },
  {
    "id": "l073",
    "stage": 6,
    "title": "U, o, and oo beyond their first sounds",
    "code": "u=/short oo/; o=/u/; oo=/u/",
    "rule": "U has the vowel in book in put and pull. O has the vowel in cup in son. Oo has that vowel in blood and flood.",
    "tip": "Learn the unexpected vowel with the regular consonants.",
    "words": [
      "put",
      "pull",
      "push",
      "full",
      "bull",
      "bush",
      "cushion",
      "son",
      "come",
      "some",
      "done",
      "love",
      "money",
      "mother",
      "brother",
      "blood",
      "flood"
    ],
    "examples": [
      {
        "word": "put",
        "parts": [
          "p",
          "u",
          "t"
        ],
        "note": "U has the book vowel."
      },
      {
        "word": "son",
        "parts": [
          "s",
          "o",
          "n"
        ],
        "note": "O has the cup vowel."
      },
      {
        "word": "blood",
        "parts": [
          "b",
          "l",
          "oo",
          "d"
        ],
        "note": "Oo has the cup vowel."
      }
    ],
    "sentences": [
      "Some blood is on the cloth."
    ],
    "exceptions": "Northern English accents handle these vowels differently. Woman and women have additional vowel changes.",
    "prerequisites": [
      "l072"
    ]
  },
  {
    "id": "l074",
    "stage": 6,
    "title": "A after w and qu",
    "code": "wa qua",
    "rule": "After w or qu, a may have the vowel heard in want rather than the one in cat.",
    "tip": "Listen to the whole word in the learner’s accent; do not force a single global a sound.",
    "words": [
      "was",
      "want",
      "wash",
      "watch",
      "wasp",
      "wand",
      "wallet",
      "wander",
      "swan",
      "swamp",
      "squash",
      "quality",
      "quantity",
      "quarrel"
    ],
    "examples": [
      {
        "word": "want",
        "parts": [
          "w",
          "a",
          "nt"
        ],
        "note": "A as in want."
      },
      {
        "word": "squash",
        "parts": [
          "s",
          "qu",
          "a",
          "sh"
        ],
        "note": "A changes after /w/ in many accents."
      }
    ],
    "sentences": [
      "A swan can swim in a swamp."
    ],
    "exceptions": "Wag, wax, and quack keep the cat vowel. Water varies by accent.",
    "prerequisites": [
      "l073"
    ]
  },
  {
    "id": "l075",
    "stage": 6,
    "title": "Al, all, alk, alm, and alt",
    "code": "al all alk alm alt",
    "rule": "A before l often changes vowel quality. L is silent in some word families, including talk and calm.",
    "tip": "Read the family aloud, then identify which letters are not separately heard.",
    "words": [
      "all",
      "ball",
      "call",
      "fall",
      "tall",
      "small",
      "salt",
      "halt",
      "walk",
      "talk",
      "chalk",
      "stalk",
      "calm",
      "palm",
      "balm",
      "half",
      "calf"
    ],
    "examples": [
      {
        "word": "talk",
        "parts": [
          "t",
          "a",
          "l",
          "k"
        ],
        "note": "L is silent in talk."
      },
      {
        "word": "calm",
        "parts": [
          "c",
          "a",
          "l",
          "m"
        ],
        "note": "L may be silent or pronounced depending on dialect."
      }
    ],
    "sentences": [
      "We can walk by a tall wall."
    ],
    "exceptions": "Calm and palm vary by accent; half and calf also have dialect-dependent vowels. Do not impose silent l universally.",
    "prerequisites": [
      "l074"
    ]
  },
  {
    "id": "l076",
    "stage": 6,
    "title": "Or after w; ar after w",
    "code": "wor; war",
    "rule": "Or after w often has the vowel in word. Ar after w often has the vowel in war.",
    "tip": "Compare fork with work, and car with war.",
    "words": [
      "word",
      "work",
      "worm",
      "world",
      "worst",
      "worth",
      "worthy",
      "worship",
      "war",
      "warm",
      "ward",
      "warn",
      "wart",
      "swarm",
      "reward"
    ],
    "examples": [
      {
        "word": "work",
        "parts": [
          "w",
          "or",
          "k"
        ],
        "note": "Or as in work."
      },
      {
        "word": "war",
        "parts": [
          "w",
          "ar"
        ],
        "note": "Ar as in war."
      }
    ],
    "sentences": [
      "The worm is in the warm soil."
    ],
    "exceptions": "Wore, worn, and sword follow a different pattern. Sward and warm vary across accents.",
    "prerequisites": [
      "l075"
    ]
  },
  {
    "id": "l077",
    "stage": 6,
    "title": "Ear and our before r",
    "code": "ear=/er/; our=/or/ /er/",
    "rule": "Ear can sound like er in learn. Our has different patterns in four, journey, and sour.",
    "tip": "Use word families and meaning to select the vowel.",
    "words": [
      "learn",
      "earn",
      "earth",
      "early",
      "heard",
      "search",
      "pearl",
      "yearn",
      "four",
      "pour",
      "court",
      "source",
      "journey",
      "journal",
      "courtesy",
      "sour",
      "hour",
      "flour"
    ],
    "examples": [
      {
        "word": "learn",
        "parts": [
          "l",
          "ear",
          "n"
        ],
        "note": "Ear as in learn."
      },
      {
        "word": "four",
        "parts": [
          "f",
          "our"
        ],
        "note": "Our as in four."
      }
    ],
    "sentences": [
      "I heard the first bird early."
    ],
    "exceptions": "Our and hour have one or two syllables across speakers. Flour and flower can be homophones.",
    "prerequisites": [
      "l076"
    ]
  },
  {
    "id": "l078",
    "stage": 6,
    "title": "Ch can spell k or sh",
    "code": "ch=/k/ or /sh/",
    "rule": "Besides the sound in chin, ch can spell /k/ in school and /sh/ in chef.",
    "tip": "Word history helps: many Greek-based words use /k/; some French loans use /sh/.",
    "words": [
      "school",
      "scholar",
      "chorus",
      "chord",
      "echo",
      "ache",
      "anchor",
      "chaos",
      "character",
      "chemistry",
      "chef",
      "chic",
      "chute",
      "machine",
      "brochure",
      "parachute"
    ],
    "examples": [
      {
        "word": "school",
        "parts": [
          "s",
          "ch",
          "oo",
          "l"
        ],
        "note": "Ch spells /k/."
      },
      {
        "word": "chef",
        "parts": [
          "ch",
          "e",
          "f"
        ],
        "note": "Ch spells /sh/."
      }
    ],
    "sentences": [
      "The chef is at the school."
    ],
    "exceptions": "These are helpful historical patterns, not guarantees for every word.",
    "prerequisites": [
      "l077"
    ]
  },
  {
    "id": "l079",
    "stage": 6,
    "title": "Ph and gh can spell f",
    "code": "ph gh=/f/",
    "rule": "Ph often spells /f/. Gh spells /f/ in a smaller group of words.",
    "tip": "Learn gh words as families because gh is silent or different elsewhere.",
    "words": [
      "phone",
      "photo",
      "phonics",
      "graph",
      "dolphin",
      "elephant",
      "alphabet",
      "phrase",
      "sphere",
      "laugh",
      "cough",
      "rough",
      "tough",
      "enough",
      "orphan"
    ],
    "examples": [
      {
        "word": "phone",
        "parts": [
          "ph",
          "o",
          "n",
          "e"
        ],
        "note": "Ph spells /f/."
      },
      {
        "word": "rough",
        "parts": [
          "r",
          "ou",
          "gh"
        ],
        "note": "Gh spells /f/; ou has the cup vowel."
      }
    ],
    "sentences": [
      "The dolphin is in the photo."
    ],
    "exceptions": "Gh is silent in night, but /g/ in ghost. Cough and laugh have accent-dependent vowels.",
    "prerequisites": [
      "l078"
    ]
  },
  {
    "id": "l080",
    "stage": 6,
    "title": "Silent first letters: kn, gn, wr",
    "code": "kn gn wr",
    "rule": "At the beginning of these familiar words, kn sounds like n, gn like n, and wr like r.",
    "tip": "Look at the spelling while saying the word; the first written letter is not separately spoken.",
    "words": [
      "knee",
      "kneel",
      "knew",
      "know",
      "knot",
      "knife",
      "knight",
      "gnaw",
      "gnat",
      "gnome",
      "gnash",
      "write",
      "wrong",
      "wrap",
      "wrist",
      "wreck",
      "wrinkle"
    ],
    "examples": [
      {
        "word": "knee",
        "parts": [
          "kn",
          "ee"
        ],
        "note": "K is silent."
      },
      {
        "word": "wrist",
        "parts": [
          "wr",
          "i",
          "s",
          "t"
        ],
        "note": "W is silent."
      }
    ],
    "sentences": [
      "I know the knot is wrong."
    ],
    "exceptions": "G is pronounced in some gn words from other languages and at morpheme boundaries.",
    "prerequisites": [
      "l079"
    ]
  },
  {
    "id": "l081",
    "stage": 6,
    "title": "Silent letters near word endings",
    "code": "mb mn bt; silent t l",
    "rule": "Some common words contain a consonant letter that is not separately pronounced.",
    "tip": "Mark the unexpected letter, then read and spell the whole word.",
    "words": [
      "lamb",
      "thumb",
      "climb",
      "comb",
      "bomb",
      "dumb",
      "autumn",
      "column",
      "hymn",
      "debt",
      "doubt",
      "subtle",
      "listen",
      "castle",
      "whistle",
      "often",
      "salmon",
      "yolk"
    ],
    "examples": [
      {
        "word": "lamb",
        "parts": [
          "l",
          "a",
          "mb"
        ],
        "note": "B is silent."
      },
      {
        "word": "debt",
        "parts": [
          "d",
          "e",
          "bt"
        ],
        "note": "B is silent."
      }
    ],
    "sentences": [
      "The lamb is by the castle."
    ],
    "exceptions": "Often is accepted with or without /t/. Bombard and autumnal can restore a consonant absent in the base word.",
    "prerequisites": [
      "l080"
    ]
  },
  {
    "id": "l082",
    "stage": 6,
    "title": "Silent gh, h, and w",
    "code": "gh; silent h w",
    "rule": "Gh is silent in many vowel spellings. H or w is silent in a smaller set of common words.",
    "tip": "Notice the entire word; the remaining vowel spelling may be unusual.",
    "words": [
      "night",
      "light",
      "sigh",
      "high",
      "weigh",
      "though",
      "through",
      "honest",
      "honor",
      "hour",
      "heir",
      "ghost",
      "rhyme",
      "rhythm",
      "sword",
      "answer",
      "two",
      "who"
    ],
    "examples": [
      {
        "word": "night",
        "parts": [
          "n",
          "igh",
          "t"
        ],
        "note": "Gh belongs to the long-i spelling."
      },
      {
        "word": "hour",
        "parts": [
          "h",
          "ou",
          "r"
        ],
        "note": "H is silent."
      }
    ],
    "sentences": [
      "An honest knight has a sword."
    ],
    "exceptions": "Ghost has pronounced /g/. Herb has silent h in many American accents but pronounced h in many British accents.",
    "prerequisites": [
      "l081"
    ]
  },
  {
    "id": "l083",
    "stage": 6,
    "title": "More spellings for s and k",
    "code": "ce ci cy sc; que ch ck",
    "rule": "The sounds /s/ and /k/ have several spellings. Use letters and word families to read them.",
    "tip": "Ce at the end often gives /s/. Que at the end of some borrowed words gives /k/.",
    "words": [
      "face",
      "fence",
      "dance",
      "since",
      "city",
      "cycle",
      "science",
      "scene",
      "scent",
      "scissors",
      "skate",
      "school",
      "antique",
      "unique",
      "plaque",
      "mosque"
    ],
    "examples": [
      {
        "word": "fence",
        "parts": [
          "f",
          "e",
          "n",
          "ce"
        ],
        "note": "Ce gives final /s/."
      },
      {
        "word": "unique",
        "parts": [
          "u",
          "nique"
        ],
        "note": "Final que gives /k/."
      }
    ],
    "sentences": [
      "The unique plaque is by the fence."
    ],
    "exceptions": "Sc has /sk/ in skate but /s/ in scene. Ocean and special use another sound taught next.",
    "prerequisites": [
      "l082"
    ]
  },
  {
    "id": "l084",
    "stage": 6,
    "title": "S, z, ss, and se have alternatives",
    "code": "s=/z/; ss se=/s/ or /z/; z=/z/",
    "rule": "S may spell /s/ or /z/. The sound of a final se is not determined by the e alone.",
    "tip": "Compare use as a noun with use as a verb.",
    "words": [
      "is",
      "has",
      "his",
      "as",
      "rose",
      "nose",
      "these",
      "please",
      "raise",
      "phase",
      "wise",
      "lose",
      "loose",
      "house",
      "use",
      "close",
      "dessert",
      "scissors"
    ],
    "examples": [
      {
        "word": "rose",
        "parts": [
          "r",
          "o",
          "se"
        ],
        "note": "Se is voiced /z/."
      },
      {
        "word": "loose",
        "parts": [
          "l",
          "oo",
          "se"
        ],
        "note": "Se is unvoiced /s/."
      }
    ],
    "sentences": [
      "Please close the door."
    ],
    "exceptions": "House, use, and close change final sound with meaning or grammar. Dessert and desert also differ in stress and meaning.",
    "prerequisites": [
      "l083"
    ]
  },
  {
    "id": "l085",
    "stage": 6,
    "title": "Sh and zh in longer words",
    "code": "ti ci si ssi=/sh/ or /zh/",
    "rule": "Ti, ci, si, and ssi can spell the sh sound in longer words. Si can also spell the voiced sound in vision.",
    "tip": "Learn whole endings such as tion, cian, sion, and ssion; compare their actual sounds.",
    "words": [
      "nation",
      "station",
      "action",
      "motion",
      "special",
      "social",
      "musician",
      "ocean",
      "mission",
      "passion",
      "vision",
      "division",
      "decision",
      "occasion",
      "measure",
      "pleasure",
      "usual",
      "treasure"
    ],
    "examples": [
      {
        "word": "nation",
        "parts": [
          "na",
          "tion"
        ],
        "note": "Tion commonly sounds like shun."
      },
      {
        "word": "vision",
        "parts": [
          "vi",
          "sion"
        ],
        "note": "Sion has the voiced sound in vision."
      }
    ],
    "sentences": [
      "The musician has a special mission."
    ],
    "exceptions": "Tion is not always shun: question has a ch-like sound. Sion can be sh or zh; do not apply one rule to all words.",
    "prerequisites": [
      "l084"
    ]
  },
  {
    "id": "l086",
    "stage": 6,
    "title": "Ough and augh families",
    "code": "ough augh",
    "rule": "Ough has many pronunciations. Learn small related groups and check the word in a sentence.",
    "tip": "Compare though, through, thought, rough, cough, and bough.",
    "words": [
      "though",
      "dough",
      "although",
      "through",
      "thorough",
      "thought",
      "bought",
      "brought",
      "fought",
      "sought",
      "rough",
      "tough",
      "enough",
      "cough",
      "trough",
      "bough",
      "plough",
      "drought",
      "ought",
      "taught",
      "caught",
      "daughter",
      "laugh"
    ],
    "examples": [
      {
        "word": "though",
        "parts": [
          "th",
          "ough"
        ],
        "note": "Long o."
      },
      {
        "word": "rough",
        "parts": [
          "r",
          "ough"
        ],
        "note": "The vowel in cup plus /f/."
      },
      {
        "word": "bough",
        "parts": [
          "b",
          "ough"
        ],
        "note": "The vowel in cow."
      }
    ],
    "sentences": [
      "Though it is rough, we can get through."
    ],
    "exceptions": "Thorough, borough, and hiccough differ across accents and spellings. Ough is not one dependable sound.",
    "prerequisites": [
      "l085"
    ]
  },
  {
    "id": "l087",
    "stage": 6,
    "title": "Ture, sure, and dge-like changes",
    "code": "-ture -sure; consonant+yod",
    "rule": "Some consonants combine with a following y-like sound, producing ch or zh in ordinary speech.",
    "tip": "Read common endings as units, then listen to the normal spoken word.",
    "words": [
      "picture",
      "nature",
      "future",
      "creature",
      "mixture",
      "furniture",
      "capture",
      "adventure",
      "measure",
      "treasure",
      "pleasure",
      "closure",
      "soldier",
      "education",
      "gradual",
      "individual"
    ],
    "examples": [
      {
        "word": "picture",
        "parts": [
          "pic",
          "ture"
        ],
        "note": "Ture commonly has a ch-like sound."
      },
      {
        "word": "measure",
        "parts": [
          "mea",
          "sure"
        ],
        "note": "Sure has the voiced sound in vision."
      }
    ],
    "sentences": [
      "The picture shows a creature in nature."
    ],
    "exceptions": "Educate, tune, and similar words vary across accents. Mature has more than one accepted pronunciation.",
    "prerequisites": [
      "l086"
    ]
  },
  {
    "id": "l088",
    "stage": 7,
    "title": "Find familiar prefixes",
    "code": "un- re- dis- mis- pre-",
    "rule": "A prefix adds meaning before a base. Read the prefix and base, then blend the word.",
    "tip": "Use meaning to check pronunciation after attending to the letters.",
    "words": [
      "unfair",
      "undo",
      "unhappy",
      "unlock",
      "redo",
      "reread",
      "replay",
      "refill",
      "dislike",
      "disconnect",
      "misspell",
      "misread",
      "preheat",
      "preview",
      "preschool"
    ],
    "examples": [
      {
        "word": "unfair",
        "parts": [
          "un",
          "fair"
        ],
        "note": "Un often means not."
      },
      {
        "word": "reread",
        "parts": [
          "re",
          "read"
        ],
        "note": "Re often means again."
      }
    ],
    "sentences": [
      "We can reread an unclear word."
    ],
    "exceptions": "Re in reread is not pronounced like re in ready. A familiar letter sequence is not always a prefix.",
    "prerequisites": [
      "l087"
    ]
  },
  {
    "id": "l089",
    "stage": 7,
    "title": "More prefixes and connecting sounds",
    "code": "in- im- il- ir-; con- com-; sub- trans-",
    "rule": "Related prefixes may change spelling to fit the next consonant. Their vowels often become unstressed.",
    "tip": "Recognize the base and the meaning while reading the whole word.",
    "words": [
      "inactive",
      "impossible",
      "illegal",
      "irregular",
      "incorrect",
      "incomplete",
      "connect",
      "combine",
      "collect",
      "submarine",
      "subway",
      "transport",
      "transfer",
      "interact",
      "introduce"
    ],
    "examples": [
      {
        "word": "impossible",
        "parts": [
          "im",
          "possible"
        ],
        "note": "Im is a form of a negative prefix."
      },
      {
        "word": "transport",
        "parts": [
          "trans",
          "port"
        ],
        "note": "Trans often means across."
      }
    ],
    "sentences": [
      "An irregular pattern is not impossible to learn."
    ],
    "exceptions": "Not every initial in means not: inside has a different structure.",
    "prerequisites": [
      "l088"
    ]
  },
  {
    "id": "l090",
    "stage": 7,
    "title": "Common meaning endings",
    "code": "-ful -less -ness -ly -ment",
    "rule": "Read a familiar base and its suffix. These endings often form unstressed syllables.",
    "tip": "Ful in a suffix has one l; fully contains the suffix plus ly.",
    "words": [
      "helpful",
      "useful",
      "careful",
      "careless",
      "fearless",
      "endless",
      "kindness",
      "darkness",
      "quickly",
      "slowly",
      "sadly",
      "payment",
      "movement",
      "enjoyment",
      "hopeful"
    ],
    "examples": [
      {
        "word": "helpful",
        "parts": [
          "help",
          "ful"
        ],
        "note": "Ful means full of or having."
      },
      {
        "word": "kindness",
        "parts": [
          "kind",
          "ness"
        ],
        "note": "Ness makes a noun."
      }
    ],
    "sentences": [
      "A careful reader can read slowly."
    ],
    "exceptions": "A suffix may slightly change a base pronunciation. Ful is normally unstressed.",
    "prerequisites": [
      "l089"
    ]
  },
  {
    "id": "l091",
    "stage": 7,
    "title": "People and comparison endings",
    "code": "-er -or -ist; -er -est",
    "rule": "Er and or can name a person. Er and est can compare qualities. Read the base and ending.",
    "tip": "Use context to decide which meaning fits.",
    "words": [
      "teacher",
      "farmer",
      "reader",
      "painter",
      "actor",
      "sailor",
      "visitor",
      "artist",
      "dentist",
      "pianist",
      "faster",
      "fastest",
      "smaller",
      "smallest",
      "brighter",
      "brightest"
    ],
    "examples": [
      {
        "word": "teacher",
        "parts": [
          "teach",
          "er"
        ],
        "note": "A person who teaches."
      },
      {
        "word": "fastest",
        "parts": [
          "fast",
          "est"
        ],
        "note": "The highest degree of fast."
      }
    ],
    "sentences": [
      "The fastest runner is a careful reader."
    ],
    "exceptions": "The base may change spelling: happy becomes happiest, and run becomes runner.",
    "prerequisites": [
      "l090"
    ]
  },
  {
    "id": "l092",
    "stage": 7,
    "title": "Able, ible, ous, al, and ive",
    "code": "-able -ible -ous -al -ive",
    "rule": "These common suffixes help you recognize and read longer words. Their vowels are often reduced.",
    "tip": "Read the meaningful parts, then say the word naturally rather than stressing every syllable.",
    "words": [
      "readable",
      "washable",
      "portable",
      "possible",
      "visible",
      "terrible",
      "famous",
      "nervous",
      "dangerous",
      "musical",
      "natural",
      "personal",
      "active",
      "creative",
      "massive"
    ],
    "examples": [
      {
        "word": "readable",
        "parts": [
          "read",
          "able"
        ],
        "note": "Able usually forms weak syllables."
      },
      {
        "word": "dangerous",
        "parts": [
          "danger",
          "ous"
        ],
        "note": "Ous is an unstressed ending."
      }
    ],
    "sentences": [
      "The washable label is readable."
    ],
    "exceptions": "The spellings able and ible are not interchangeable. Ive does not automatically make the preceding vowel long.",
    "prerequisites": [
      "l091"
    ]
  },
  {
    "id": "l093",
    "stage": 7,
    "title": "Schwa: a weak unstressed vowel",
    "code": "schwa /ə/",
    "rule": "An unstressed vowel often becomes a short relaxed sound, called schwa. Many vowel letters can spell it.",
    "tip": "First identify the word and stressed syllable; then say the weak syllable naturally.",
    "words": [
      "about",
      "ago",
      "away",
      "sofa",
      "comma",
      "banana",
      "support",
      "supply",
      "lemon",
      "melon",
      "pencil",
      "animal",
      "family",
      "holiday",
      "problem"
    ],
    "examples": [
      {
        "word": "about",
        "parts": [
          "a",
          "bout"
        ],
        "note": "The first a is unstressed."
      },
      {
        "word": "sofa",
        "parts": [
          "so",
          "fa"
        ],
        "note": "The final a is unstressed."
      }
    ],
    "sentences": [
      "A banana is on the sofa."
    ],
    "exceptions": "Schwa cannot reliably tell you how to spell a word. Pencil and other words can have weak /i/ or syllabic consonants instead, depending on accent.",
    "prerequisites": [
      "l092"
    ]
  },
  {
    "id": "l094",
    "stage": 7,
    "title": "Weak endings and syllabic consonants",
    "code": "-en -on -an -el -il; syllabic n l",
    "rule": "In weak syllables, different vowel spellings may sound alike, or n and l may carry the syllable.",
    "tip": "Use meaning and the written word to remember the spelling; do not invent a fully stressed vowel.",
    "words": [
      "button",
      "cotton",
      "kitten",
      "mitten",
      "lesson",
      "person",
      "ribbon",
      "wagon",
      "dozen",
      "golden",
      "seven",
      "open",
      "travel",
      "level",
      "pencil",
      "fossil"
    ],
    "examples": [
      {
        "word": "button",
        "parts": [
          "but",
          "ton"
        ],
        "note": "The ending may be a syllabic n."
      },
      {
        "word": "travel",
        "parts": [
          "trav",
          "el"
        ],
        "note": "The final vowel is weak."
      }
    ],
    "sentences": [
      "The kitten has a ribbon."
    ],
    "exceptions": "Speech varies. Do not mark a natural reduced vowel wrong because it differs from an exaggerated spelling pronunciation.",
    "prerequisites": [
      "l093"
    ]
  },
  {
    "id": "l095",
    "stage": 7,
    "title": "Stress changes a word’s sound",
    "code": "word stress",
    "rule": "One syllable is stronger than the others. Stress can change vowel quality and sometimes the meaning of a word.",
    "tip": "Say the word in a sentence. If a decoded word sounds unfamiliar, try a different stress.",
    "words": [
      "record",
      "present",
      "object",
      "permit",
      "conduct",
      "produce",
      "protest",
      "subject",
      "address",
      "contract",
      "increase",
      "decrease",
      "import",
      "export"
    ],
    "examples": [
      {
        "word": "record",
        "parts": [
          "re",
          "cord"
        ],
        "note": "A noun and a verb may have different stress."
      },
      {
        "word": "present",
        "parts": [
          "pre",
          "sent"
        ],
        "note": "A gift versus to offer something."
      }
    ],
    "sentences": [
      "I will record a new record."
    ],
    "exceptions": "Stress patterns are tendencies, not a universal noun–verb rule. Some words have accent-dependent alternatives.",
    "prerequisites": [
      "l094"
    ]
  },
  {
    "id": "l096",
    "stage": 7,
    "title": "Prefixes do not always set stress",
    "code": "unstressed prefixes; flexible vowels",
    "rule": "Recognize a prefix, but let the whole word’s established pronunciation guide stress and weak vowels.",
    "tip": "Compare rewrite with return and preview with prevent.",
    "words": [
      "rewrite",
      "return",
      "replay",
      "repair",
      "recall",
      "receive",
      "preview",
      "prevent",
      "prepare",
      "predict",
      "inform",
      "invite",
      "include",
      "contain",
      "complete",
      "compare"
    ],
    "examples": [
      {
        "word": "rewrite",
        "parts": [
          "re",
          "write"
        ],
        "note": "Re is clearly spoken here."
      },
      {
        "word": "return",
        "parts": [
          "re",
          "turn"
        ],
        "note": "The prefix is weak in many accents."
      }
    ],
    "sentences": [
      "We can prepare to rewrite the story."
    ],
    "exceptions": "A prefix spelling does not force one vowel or one stress pattern.",
    "prerequisites": [
      "l095"
    ]
  },
  {
    "id": "l097",
    "stage": 7,
    "title": "Meaning families explain changing vowels",
    "code": "sign/signature; heal/health",
    "rule": "Related words can keep similar spelling while their sounds change. Meaning helps connect the family.",
    "tip": "Read the full derived word; do not simply concatenate the spoken base and suffix.",
    "words": [
      "sign",
      "signal",
      "signature",
      "design",
      "heal",
      "health",
      "healthy",
      "steal",
      "stealth",
      "nation",
      "national",
      "nature",
      "natural",
      "electric",
      "electricity",
      "photograph",
      "photography"
    ],
    "examples": [
      {
        "word": "signal",
        "parts": [
          "sign",
          "al"
        ],
        "note": "G is heard although it is silent in sign."
      },
      {
        "word": "health",
        "parts": [
          "heal",
          "th"
        ],
        "note": "The vowel changes from heal."
      }
    ],
    "sentences": [
      "A healthy reader can notice word families."
    ],
    "exceptions": "These relationships explain spelling without making every derived pronunciation predictable.",
    "prerequisites": [
      "l096"
    ]
  },
  {
    "id": "l098",
    "stage": 7,
    "title": "Common Latin roots",
    "code": "port form struct spect tract dict scrib",
    "rule": "Meaningful roots recur in longer words. Read the root with prefixes and suffixes.",
    "tip": "Use known roots as landmarks, not as a replacement for reading all letters.",
    "words": [
      "transport",
      "portable",
      "reform",
      "formation",
      "construct",
      "instruction",
      "inspect",
      "spectator",
      "attract",
      "attraction",
      "predict",
      "dictionary",
      "describe",
      "inscription"
    ],
    "examples": [
      {
        "word": "transport",
        "parts": [
          "trans",
          "port"
        ],
        "note": "Port relates to carrying."
      },
      {
        "word": "inspect",
        "parts": [
          "in",
          "spect"
        ],
        "note": "Spect relates to looking."
      }
    ],
    "sentences": [
      "The instructor can describe the structure."
    ],
    "exceptions": "Root variants and stress shifts occur. Meaning supports but does not uniquely determine pronunciation.",
    "prerequisites": [
      "l097"
    ]
  },
  {
    "id": "l099",
    "stage": 7,
    "title": "Common Greek combining forms",
    "code": "phon graph photo tele bio geo micro",
    "rule": "Greek-based parts recur in scientific vocabulary. Read each part and then the whole word.",
    "tip": "Explain the meaning after decoding: photo relates to light; phon to sound.",
    "words": [
      "phonics",
      "telephone",
      "microphone",
      "photograph",
      "telegraph",
      "geography",
      "biology",
      "geology",
      "microscope",
      "microscopic",
      "biography",
      "autograph",
      "phoneme",
      "graphic"
    ],
    "examples": [
      {
        "word": "microphone",
        "parts": [
          "micro",
          "phone"
        ],
        "note": "Micro plus phone."
      },
      {
        "word": "photograph",
        "parts": [
          "photo",
          "graph"
        ],
        "note": "Photo plus graph."
      }
    ],
    "sentences": [
      "A microphone can record a voice."
    ],
    "exceptions": "Stress can shift in related forms: photograph, photography, photographic.",
    "prerequisites": [
      "l098"
    ]
  },
  {
    "id": "l100",
    "stage": 7,
    "title": "The ti, ci, and si endings in families",
    "code": "-tion -sion -cian -tial -cial -cious -tious",
    "rule": "Recognize the recurring ending, then inspect the base and the stressed syllable before it.",
    "tip": "Read examples aloud; do not label every sion ending with the same consonant sound.",
    "words": [
      "action",
      "invention",
      "education",
      "attention",
      "expansion",
      "tension",
      "division",
      "revision",
      "musician",
      "electrician",
      "partial",
      "initial",
      "official",
      "artificial",
      "precious",
      "cautious",
      "ambitious"
    ],
    "examples": [
      {
        "word": "revision",
        "parts": [
          "re",
          "vi",
          "sion"
        ],
        "note": "Sion has the voiced consonant here."
      },
      {
        "word": "tension",
        "parts": [
          "ten",
          "sion"
        ],
        "note": "Sion has sh here."
      }
    ],
    "sentences": [
      "The electrician paid attention."
    ],
    "exceptions": "Ssion usually has sh. Tion after s can have ch as in question. Pronunciation and stress must be learned with each family.",
    "prerequisites": [
      "l099"
    ]
  },
  {
    "id": "l101",
    "stage": 7,
    "title": "Long-word decoding routine",
    "code": "prefix + base + suffix; stress",
    "rule": "Find familiar meaningful parts and vowel spellings. Read each part, blend, adjust stress, and check meaning.",
    "tip": "If the word is unfamiliar in speech, use a reliable dictionary’s audio and meaning; do not keep guessing.",
    "words": [
      "misunderstanding",
      "unhelpfulness",
      "unpredictability",
      "international",
      "transportation",
      "reconstruction",
      "photographic",
      "communication",
      "responsibility",
      "uncomfortable",
      "pronunciation",
      "identification"
    ],
    "examples": [
      {
        "word": "unhelpfulness",
        "parts": [
          "un",
          "help",
          "ful",
          "ness"
        ],
        "note": "Find meaningful pieces."
      },
      {
        "word": "transportation",
        "parts": [
          "trans",
          "port",
          "ation"
        ],
        "note": "Blend, then apply normal stress."
      }
    ],
    "sentences": [
      "The explanation improves communication."
    ],
    "exceptions": "Meaning parts are not always identical to syllable boundaries. This is a flexible procedure, not a fixed splitting algorithm.",
    "prerequisites": [
      "l100"
    ]
  },
  {
    "id": "l102",
    "stage": 8,
    "title": "Less common long vowels",
    "code": "a; e; i; o; u in special positions",
    "rule": "Single vowel letters sometimes have long sounds in closed-looking patterns. Learn useful families and exceptions.",
    "tip": "Compare find with wind, and most with lost.",
    "words": [
      "find",
      "kind",
      "mind",
      "blind",
      "wild",
      "child",
      "mild",
      "most",
      "post",
      "host",
      "both",
      "old",
      "cold",
      "gold",
      "told",
      "roll",
      "poll",
      "toll"
    ],
    "examples": [
      {
        "word": "find",
        "parts": [
          "f",
          "i",
          "n",
          "d"
        ],
        "note": "I is long before nd here."
      },
      {
        "word": "most",
        "parts": [
          "m",
          "o",
          "s",
          "t"
        ],
        "note": "O is long here."
      }
    ],
    "sentences": [
      "The child can find the gold."
    ],
    "exceptions": "Wind, give, lost, cost, and many other words break simple letter-position rules. Do not generalize to every consonant cluster.",
    "prerequisites": [
      "l101"
    ]
  },
  {
    "id": "l103",
    "stage": 8,
    "title": "Unusual vowel spellings",
    "code": "ui eu ieu oe eau eo ae",
    "rule": "English borrows vowel spellings from other languages. Use examples and reliable pronunciation references.",
    "tip": "Group a few words at a time and connect spelling, spoken form, and meaning.",
    "words": [
      "fruit",
      "suit",
      "juice",
      "cruise",
      "build",
      "guide",
      "feud",
      "neutral",
      "deuce",
      "view",
      "lieu",
      "toe",
      "foe",
      "doe",
      "shoe",
      "canoe",
      "beau",
      "beauty",
      "people",
      "leopard",
      "aesthetic"
    ],
    "examples": [
      {
        "word": "fruit",
        "parts": [
          "f",
          "r",
          "ui",
          "t"
        ],
        "note": "Ui has the vowel in moon."
      },
      {
        "word": "build",
        "parts": [
          "b",
          "ui",
          "l",
          "d"
        ],
        "note": "Ui has short i."
      },
      {
        "word": "beauty",
        "parts": [
          "b",
          "eau",
          "ty"
        ],
        "note": "Eau has the sound in beauty."
      }
    ],
    "sentences": [
      "People can view the beautiful fruit."
    ],
    "exceptions": "Guide has long i; shoe has /oo/; leopard has short e. Ae and oe are especially variable in loans and alternate spellings.",
    "prerequisites": [
      "l102"
    ]
  },
  {
    "id": "l104",
    "stage": 8,
    "title": "W as part of vowel spellings",
    "code": "aw ew ow; ou variants; oul",
    "rule": "W can participate in vowel spellings rather than acting as the consonant in wet. Some rarer patterns require whole-word learning.",
    "tip": "Keep the entire spelling unit in view and compare it with known words.",
    "words": [
      "draw",
      "straw",
      "grew",
      "crew",
      "snow",
      "brown",
      "sew",
      "sewing",
      "few",
      "new",
      "could",
      "should",
      "would",
      "soul",
      "mould",
      "poultry",
      "buoy",
      "buoyant"
    ],
    "examples": [
      {
        "word": "sew",
        "parts": [
          "s",
          "ew"
        ],
        "note": "Ew has long o here."
      },
      {
        "word": "buoy",
        "parts": [
          "b",
          "uoy"
        ],
        "note": "Buoy has more than one accepted pronunciation."
      }
    ],
    "sentences": [
      "We could sew a new coat."
    ],
    "exceptions": "Mould/mold are regional spellings. Buoy may sound like boy or have two syllables. These are reference words, not evidence of a new universal rule.",
    "prerequisites": [
      "l103"
    ]
  },
  {
    "id": "l105",
    "stage": 8,
    "title": "Soft g, hard g, and gu",
    "code": "g ge gi gy; gu gue",
    "rule": "G often softens before e, i, or y, but many words keep hard g. U can help mark hard g in some spellings.",
    "tip": "Contrast gem and get. Read the whole word rather than relying on one letter.",
    "words": [
      "gem",
      "giant",
      "gym",
      "gentle",
      "get",
      "give",
      "gift",
      "girl",
      "gear",
      "geese",
      "guess",
      "guest",
      "guide",
      "guilt",
      "guitar",
      "vague",
      "league",
      "tongue",
      "rogue"
    ],
    "examples": [
      {
        "word": "get",
        "parts": [
          "g",
          "e",
          "t"
        ],
        "note": "Hard g despite e."
      },
      {
        "word": "guess",
        "parts": [
          "gu",
          "e",
          "ss"
        ],
        "note": "U is not a separate vowel here."
      }
    ],
    "sentences": [
      "The guest can play a guitar."
    ],
    "exceptions": "Argue has a pronounced u sound. Gu does not always function in the same way, as in language and penguin.",
    "prerequisites": [
      "l104"
    ]
  },
  {
    "id": "l106",
    "stage": 8,
    "title": "X and unusual consonant values",
    "code": "x=/ks/ /gz/ /z/; q; zz",
    "rule": "X usually spells /ks/, but can spell /gz/ or /z/. Borrowed words may use q without u or zz for an affricate.",
    "tip": "Use exact examples; these patterns are not equally productive.",
    "words": [
      "box",
      "six",
      "extra",
      "exit",
      "exam",
      "exact",
      "exist",
      "example",
      "xylophone",
      "xenon",
      "xylem",
      "taxi",
      "pizza",
      "intermezzo",
      "Iraq",
      "Qatar",
      "qi"
    ],
    "examples": [
      {
        "word": "exam",
        "parts": [
          "e",
          "x",
          "a",
          "m"
        ],
        "note": "X commonly has /gz/."
      },
      {
        "word": "xylophone",
        "parts": [
          "x",
          "y",
          "lo",
          "phone"
        ],
        "note": "Initial x has /z/."
      }
    ],
    "sentences": [
      "The exam has an extra example."
    ],
    "exceptions": "Exit has accepted variants. Names such as Iraq and Qatar vary by community and language; use the person’s or place’s preferred pronunciation.",
    "prerequisites": [
      "l105"
    ]
  },
  {
    "id": "l107",
    "stage": 8,
    "title": "Greek silent consonants",
    "code": "ps pn pt; rh; ch",
    "rule": "Some Greek-derived spellings retain consonant letters not pronounced in English.",
    "tip": "Find the familiar spoken word and map the whole spelling explicitly.",
    "words": [
      "psychology",
      "psychic",
      "psalm",
      "pseudonym",
      "pneumonia",
      "pneumatic",
      "pterodactyl",
      "pterosaur",
      "rhythm",
      "rhyme",
      "rhetoric",
      "rhino",
      "chrome",
      "chlorine",
      "architect"
    ],
    "examples": [
      {
        "word": "psychology",
        "parts": [
          "ps",
          "y",
          "chol",
          "ogy"
        ],
        "note": "Initial p is silent."
      },
      {
        "word": "pneumonia",
        "parts": [
          "pn",
          "eu",
          "mon",
          "ia"
        ],
        "note": "Initial p is silent."
      }
    ],
    "sentences": [
      "The psychologist can explain a pseudonym."
    ],
    "exceptions": "English and source-language pronunciations differ. In prefixes such as pseudo-, pronunciation remains word-dependent.",
    "prerequisites": [
      "l106"
    ]
  },
  {
    "id": "l108",
    "stage": 8,
    "title": "French ch, qu, and final consonants",
    "code": "ch=/sh/; qu=/k/; silent endings",
    "rule": "Some French loans retain French-looking spellings and silent final consonants.",
    "tip": "Learn spelling and pronunciation together; do not apply the pattern to all similar-looking words.",
    "words": [
      "chef",
      "chalet",
      "champagne",
      "machine",
      "chic",
      "boutique",
      "unique",
      "antique",
      "critique",
      "ballet",
      "buffet",
      "bouquet",
      "depot",
      "debris",
      "rendezvous",
      "faux",
      "coup"
    ],
    "examples": [
      {
        "word": "ballet",
        "parts": [
          "b",
          "al",
          "l",
          "et"
        ],
        "note": "Final t is silent in ballet."
      },
      {
        "word": "bouquet",
        "parts": [
          "bou",
          "quet"
        ],
        "note": "Final t is silent; qu spells /k/."
      }
    ],
    "sentences": [
      "The chef brought a bouquet."
    ],
    "exceptions": "Buffet has distinct noun and verb pronunciations. Some anglicized words and accents pronounce endings differently.",
    "prerequisites": [
      "l107"
    ]
  },
  {
    "id": "l109",
    "stage": 8,
    "title": "French vowels and voiced sh",
    "code": "eau; oi; ge=/zh/",
    "rule": "French loans add less common vowel spellings and the voiced sound heard in beige.",
    "tip": "Use recorded dictionary pronunciation and connect it to the written form.",
    "words": [
      "beau",
      "plateau",
      "bureau",
      "chateau",
      "tableau",
      "reservoir",
      "memoir",
      "repertoire",
      "croissant",
      "beige",
      "rouge",
      "genre",
      "mirage",
      "garage",
      "camouflage",
      "prestige"
    ],
    "examples": [
      {
        "word": "beige",
        "parts": [
          "b",
          "eige"
        ],
        "note": "Final ge has the voiced sound in vision."
      },
      {
        "word": "plateau",
        "parts": [
          "plate",
          "au"
        ],
        "note": "Eau represents long o."
      }
    ],
    "sentences": [
      "The beige garage is by the chateau."
    ],
    "exceptions": "Garage, croissant, and several other loans have multiple standard English pronunciations. Accent-sensitive alternatives are valid.",
    "prerequisites": [
      "l108"
    ]
  },
  {
    "id": "l110",
    "stage": 8,
    "title": "Other loanword consonant patterns",
    "code": "German sch; Italian ci ce; Spanish j ll",
    "rule": "English loans and names can retain sounds from their source languages or adopt English pronunciations.",
    "tip": "Learn the established English word and the speaker’s preferred name pronunciation; do not invent one rule for all languages.",
    "words": [
      "schnitzel",
      "schwa",
      "schism",
      "cello",
      "concerto",
      "cappuccino",
      "ciao",
      "jalapeno",
      "tortilla",
      "canyon",
      "lasagna",
      "gnocchi",
      "yacht",
      "loch",
      "czar",
      "tsar"
    ],
    "examples": [
      {
        "word": "cello",
        "parts": [
          "c",
          "ello"
        ],
        "note": "C has a ch-like sound in this loan."
      },
      {
        "word": "tortilla",
        "parts": [
          "torti",
          "ll",
          "a"
        ],
        "note": "Ll has a y-like sound in this loan."
      }
    ],
    "sentences": [
      "The cello player ate lasagna."
    ],
    "exceptions": "Schism has accepted pronunciations with /sk/ or /s/. Loch and names may preserve sounds absent in some English accents. Diacritics are omitted from quiz forms here.",
    "prerequisites": [
      "l109"
    ]
  },
  {
    "id": "l111",
    "stage": 8,
    "title": "Heteronyms: meaning chooses the sound",
    "code": "same spelling, different pronunciation",
    "rule": "Some words cannot be pronounced uniquely from their spelling alone. Read the sentence and identify the meaning.",
    "tip": "Read both meanings aloud with an adult, then choose the sentence-appropriate one.",
    "words": [
      "read",
      "lead",
      "wind",
      "wound",
      "tear",
      "bow",
      "row",
      "sow",
      "bass",
      "close",
      "does",
      "live",
      "minute",
      "refuse",
      "polish",
      "resume"
    ],
    "examples": [
      {
        "word": "read",
        "parts": [
          "r",
          "ea",
          "d"
        ],
        "note": "Present read rhymes with need; past read rhymes with red."
      },
      {
        "word": "wind",
        "parts": [
          "w",
          "i",
          "n",
          "d"
        ],
        "note": "Moving air versus turning something."
      }
    ],
    "sentences": [
      "I read the book yesterday; I will read it again."
    ],
    "exceptions": "Word-only audio may choose the wrong meaning. Use sentence audio or an adult for these words; do not score one isolated pronunciation as uniquely correct.",
    "prerequisites": [
      "l110"
    ]
  },
  {
    "id": "l112",
    "stage": 8,
    "title": "Homophones: sound does not choose spelling",
    "code": "same sound, different spelling",
    "rule": "Different words can sound alike. Use meaning and the sentence to choose their spellings.",
    "tip": "Reading can be correct even when several spellings share a pronunciation. Dictation needs meaning context.",
    "words": [
      "see",
      "sea",
      "meet",
      "meat",
      "right",
      "write",
      "pair",
      "pear",
      "bare",
      "bear",
      "hear",
      "here",
      "one",
      "won",
      "two",
      "too",
      "to",
      "their",
      "there",
      "they're"
    ],
    "examples": [
      {
        "word": "see",
        "parts": [
          "s",
          "ee"
        ],
        "note": "To look with your eyes."
      },
      {
        "word": "sea",
        "parts": [
          "s",
          "ea"
        ],
        "note": "A large body of salt water."
      }
    ],
    "sentences": [
      "I can see the sea from here."
    ],
    "exceptions": "Dialect affects which pairs are homophones. An isolated spoken-word spelling test must accept alternatives or provide context.",
    "prerequisites": [
      "l111"
    ]
  },
  {
    "id": "l113",
    "stage": 8,
    "title": "Contractions and apostrophes",
    "code": "not; is; have; will; would",
    "rule": "A contraction joins familiar words and omits letters. The apostrophe marks missing letters.",
    "tip": "Expand the contraction, then say its ordinary shortened pronunciation.",
    "words": [
      "can't",
      "don't",
      "isn't",
      "wasn't",
      "it's",
      "he's",
      "she's",
      "we're",
      "they're",
      "I'm",
      "I've",
      "we've",
      "you'll",
      "I'll",
      "I'd",
      "shouldn't",
      "won't"
    ],
    "examples": [
      {
        "word": "can't",
        "parts": [
          "can",
          "'t"
        ],
        "note": "Can not becomes cannot, then can’t."
      },
      {
        "word": "won't",
        "parts": [
          "won",
          "'t"
        ],
        "note": "Will not becomes won’t; its vowel is unexpected."
      }
    ],
    "sentences": [
      "I can’t go, but she’ll be there."
    ],
    "exceptions": "He’s can mean he is or he has; I’d can mean I had or I would. Possessive apostrophes are not always contractions.",
    "prerequisites": [
      "l112"
    ]
  },
  {
    "id": "l114",
    "stage": 8,
    "title": "Weak words in connected speech",
    "code": "a the to of and; strong and weak forms",
    "rule": "Common words often reduce when unstressed in a sentence. Keep their written identity while reading natural speech.",
    "tip": "Decode accurately first. Then reread the sentence with normal phrasing and emphasis.",
    "words": [
      "a",
      "an",
      "the",
      "to",
      "of",
      "and",
      "for",
      "from",
      "can",
      "have",
      "has",
      "was",
      "were",
      "some",
      "than",
      "as",
      "at"
    ],
    "examples": [
      {
        "word": "to",
        "parts": [
          "t",
          "o"
        ],
        "note": "Often weak in “go to bed,” stronger when contrasted."
      },
      {
        "word": "and",
        "parts": [
          "a",
          "n",
          "d"
        ],
        "note": "Often reduced in connected speech."
      }
    ],
    "sentences": [
      "I can go to the shop and get a loaf of bread."
    ],
    "exceptions": "Reduction varies with accent and emphasis. Natural speech need not pronounce every written consonant fully.",
    "prerequisites": [
      "l113"
    ]
  },
  {
    "id": "l115",
    "stage": 8,
    "title": "Accent and dialect flexibility",
    "code": "rhoticity; mergers; vowel shifts",
    "rule": "A spelling can correspond to more than one legitimate English pronunciation. Learn the code in the learner’s speech variety.",
    "tip": "Compare words without labeling a different established accent as an error.",
    "words": [
      "car",
      "park",
      "bird",
      "bath",
      "path",
      "dance",
      "cot",
      "caught",
      "pin",
      "pen",
      "marry",
      "merry",
      "Mary",
      "tune",
      "new",
      "herb",
      "tomato",
      "route",
      "either"
    ],
    "examples": [
      {
        "word": "car",
        "parts": [
          "c",
          "ar"
        ],
        "note": "R may or may not be pronounced before a pause."
      },
      {
        "word": "bath",
        "parts": [
          "b",
          "a",
          "th"
        ],
        "note": "The vowel varies across accents."
      }
    ],
    "sentences": [
      "Mary can take either route to the park."
    ],
    "exceptions": "Speech differences are not decoding failures. Match word audio to the learner’s accent when possible and use an adult’s judgment.",
    "prerequisites": [
      "l114"
    ]
  },
  {
    "id": "l116",
    "stage": 8,
    "title": "Names, abbreviations, and numbers",
    "code": "proper names; initialisms; acronyms",
    "rule": "Names and abbreviations do not always follow ordinary decoding patterns. Some are said letter by letter; others are read as words.",
    "tip": "Use a reliable reference or ask the person. A name’s owner is the best authority on their name.",
    "words": [
      "NASA",
      "NATO",
      "BBC",
      "USA",
      "UK",
      "FBI",
      "DVD",
      "MRI",
      "Dr",
      "Mr",
      "Mrs",
      "St",
      "Jr",
      "March",
      "Sean",
      "Siobhan",
      "Worcester"
    ],
    "examples": [
      {
        "word": "NASA",
        "parts": [
          "N",
          "A",
          "S",
          "A"
        ],
        "note": "NASA is commonly read as a word."
      },
      {
        "word": "FBI",
        "parts": [
          "F",
          "B",
          "I"
        ],
        "note": "FBI is said letter by letter."
      }
    ],
    "sentences": [
      "Dr Smith works with NASA."
    ],
    "exceptions": "St can mean Saint or Street. Names and abbreviations require context. Browser word audio is not authoritative.",
    "prerequisites": [
      "l115"
    ]
  },
  {
    "id": "l117",
    "stage": 8,
    "title": "Rare spellings and dictionary checks",
    "code": "unpredictable high-value exceptions",
    "rule": "Some words keep unusual historical spellings. Map their sounds and letters, learn their meaning, and revisit them.",
    "tip": "Mark the unexpected portion rather than treating the entire word as an unanalyzed picture.",
    "words": [
      "colonel",
      "choir",
      "quay",
      "queue",
      "aisle",
      "island",
      "sword",
      "victuals",
      "women",
      "business",
      "busy",
      "friend",
      "foreign",
      "height",
      "sieve",
      "gauge",
      "gaol",
      "indict",
      "subtle",
      "yacht"
    ],
    "examples": [
      {
        "word": "colonel",
        "parts": [
          "c",
          "olonel"
        ],
        "note": "Colonel sounds like kernel in standard English."
      },
      {
        "word": "queue",
        "parts": [
          "qu",
          "eue"
        ],
        "note": "Queue sounds like the letter Q."
      }
    ],
    "sentences": [
      "The choir stood in the aisle."
    ],
    "exceptions": "Gaol is an alternate spelling of jail. Some words have several accepted pronunciations; consult a reputable dictionary.",
    "prerequisites": [
      "l116"
    ]
  },
  {
    "id": "l118",
    "stage": 8,
    "title": "I and y beyond their first sounds",
    "code": "i=/ee/; y=/short i/ or /long i/",
    "rule": "I can spell long e in borrowed words such as machine. Y often spells short i in Greek-based words such as myth.",
    "tip": "Contrast type with typical, and machine with mint. The whole word and its history help choose the vowel.",
    "words": [
      "machine",
      "police",
      "marine",
      "elite",
      "prestige",
      "ski",
      "taxi",
      "myth",
      "gym",
      "hymn",
      "rhythm",
      "symbol",
      "system",
      "typical",
      "crystal",
      "type",
      "style",
      "cycle",
      "tyrant"
    ],
    "examples": [
      {
        "word": "machine",
        "parts": [
          "ma",
          "chine"
        ],
        "note": "I has long e in the stressed syllable."
      },
      {
        "word": "myth",
        "parts": [
          "m",
          "y",
          "th"
        ],
        "note": "Y has short i."
      }
    ],
    "sentences": [
      "A typical machine has a system."
    ],
    "exceptions": "Taxi ends with an unstressed happy vowel. Tyrant and tyranny show that a related word can change vowel or stress.",
    "prerequisites": [
      "l117"
    ]
  },
  {
    "id": "l119",
    "stage": 8,
    "title": "Unexpected consonants and weak age endings",
    "code": "s=/sh/; z=/zh/; silent medial consonants; -age",
    "rule": "A few words use unexpected consonant sounds or silent medial letters. Age in an unstressed ending often sounds like the ending of village.",
    "tip": "Map the unusual portion directly, then practise reading and spelling the whole word.",
    "words": [
      "sugar",
      "sure",
      "assure",
      "issue",
      "tissue",
      "azure",
      "seizure",
      "muscle",
      "indict",
      "receipt",
      "cupboard",
      "raspberry",
      "Wednesday",
      "mortgage",
      "handsome",
      "village",
      "marriage",
      "package",
      "message",
      "damage",
      "footage"
    ],
    "examples": [
      {
        "word": "sugar",
        "parts": [
          "s",
          "u",
          "g",
          "ar"
        ],
        "note": "Initial s has the sh sound."
      },
      {
        "word": "receipt",
        "parts": [
          "re",
          "cei",
          "pt"
        ],
        "note": "P is silent."
      },
      {
        "word": "village",
        "parts": [
          "vill",
          "age"
        ],
        "note": "An unstressed age ending differs from the word age."
      }
    ],
    "sentences": [
      "The package has a message."
    ],
    "exceptions": "Issue, tissue, azure, and seizure vary in accepted pronunciation. Mortgage has a silent t. Age is long in age and stage, but usually weak in village.",
    "prerequisites": [
      "l118"
    ]
  },
  {
    "id": "l120",
    "stage": 8,
    "title": "Independent decoding and reference strategy",
    "code": "decode → adjust → verify → reread",
    "rule": "Read all the letters, use known code and word parts, adjust stress or a plausible vowel, and check meaning. Verify unfamiliar spoken words in a reliable dictionary.",
    "tip": "After checking, close the reference, read and spell the word from memory, then reread it in a sentence.",
    "words": [
      "unpredictable",
      "misinterpretation",
      "autobiography",
      "photosynthesis",
      "archaeological",
      "pronunciation",
      "conscientious",
      "entrepreneur",
      "silhouette",
      "onomatopoeia",
      "quintessential",
      "hyperbole",
      "epitome",
      "idiosyncratic"
    ],
    "examples": [
      {
        "word": "photosynthesis",
        "parts": [
          "photo",
          "syn",
          "thesis"
        ],
        "note": "Use familiar Greek parts, then verify stress."
      },
      {
        "word": "epitome",
        "parts": [
          "epi",
          "tome"
        ],
        "note": "The final e is pronounced; check a reference."
      }
    ],
    "sentences": [
      "A conscientious reader can verify an unfamiliar pronunciation."
    ],
    "exceptions": "No finite rule list guarantees the pronunciation of every English word, name, loanword, or new coinage. This strategy completes a broad code curriculum; vocabulary and comprehension continue to grow.",
    "prerequisites": [
      "l119"
    ]
  }
];

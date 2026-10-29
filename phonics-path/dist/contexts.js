/**
 * Context resolves pronunciation; isolated browser speech is not an answer key.
 * WORD_CONTEXTS[word] is an array of {sentence, pronunciation, meaning, note?}.
 * The first entry is a default, not the only correct pronunciation of the spelling.
 * Capital letters in respellings mark stress. Rhymes refer to the learner's dialect.
 * All example sentences are original. Cues are approximate American English.
 */
export const WORD_CONTEXTS = {
  read: [
    {sentence:'I will read this book tonight.',pronunciation:'Rhymes with seed: REED.',meaning:'Look at and understand written words; present or future use.'},
    {sentence:'I read this book yesterday.',pronunciation:'Rhymes with bed: RED.',meaning:'Past tense of read.'}
  ],
  lead: [
    {sentence:'Please lead us down the path.',pronunciation:'Rhymes with seed: LEED.',meaning:'Guide or go in front.'},
    {sentence:'The old pipe was made of lead.',pronunciation:'Rhymes with bed: LED.',meaning:'A type of metal.'}
  ],
  wind: [
    {sentence:'The wind blew the leaves away.',pronunciation:'Rhymes with pinned: WIND.',meaning:'Moving air.'},
    {sentence:'Wind the string around the spool.',pronunciation:'Rhymes with find: WYND.',meaning:'Wrap or turn around something.'}
  ],
  wound: [
    {sentence:'The nurse cleaned the wound.',pronunciation:'Rhymes with spooned: WOOND.',meaning:'An injury.'},
    {sentence:'She wound the string around the spool.',pronunciation:'Rhymes with sound: WOWND.',meaning:'Past tense of wind, meaning wrap or turn.'}
  ],
  dove: [
    {sentence:'The dove is a gentle bird.',pronunciation:'Rhymes with love: DUV.',meaning:'A kind of bird.'},
    {sentence:'She dove into the pool.',pronunciation:'Rhymes with drove: DOHV.',meaning:'A past-tense form of dive; dived is also standard.'}
  ],
  tear: [
    {sentence:'Do not tear the paper.',pronunciation:'Rhymes with bear: TAIR.',meaning:'Rip something.'},
    {sentence:'A tear ran down her cheek.',pronunciation:'Rhymes with near: TEER.',meaning:'A drop from an eye.'}
  ],
  bow: [
    {sentence:'Tie the ribbon in a bow.',pronunciation:'Rhymes with go: BOH.',meaning:'A tied loop; also an archery bow.'},
    {sentence:'The actor will bow after the play.',pronunciation:'Rhymes with cow: BOW.',meaning:'Bend the head or body; also the front of a boat.'}
  ],
  row: [
    {sentence:'We can row the boat to shore.',pronunciation:'Rhymes with go: ROH.',meaning:'Move a boat using oars; also a line of things.'},
    {sentence:'The two neighbors had a noisy row.',pronunciation:'Rhymes with cow: ROW.',meaning:'A quarrel; this use is especially common in British English.'}
  ],
  bass: [
    {sentence:'The bass made a deep sound in the song.',pronunciation:'Rhymes with face: BAYS.',meaning:'A low musical sound or an instrument producing it.'},
    {sentence:'We saw a bass swimming in the lake.',pronunciation:'Rhymes with mass: BASS.',meaning:'A kind of fish.'}
  ],
  close: [
    {sentence:'Please close the door.',pronunciation:'Rhymes with those: KLOHZ; the final sound is z.',meaning:'Shut something.'},
    {sentence:'The shop is close to our home.',pronunciation:'KLOHS; long o followed by the sound s, as in coast without t.',meaning:'Near.'}
  ],
  live: [
    {sentence:'We live near the park.',pronunciation:'Rhymes with give: LIV.',meaning:'Reside or be alive.'},
    {sentence:'The band will play live music.',pronunciation:'Rhymes with five: LYVE.',meaning:'Performed in person as it happens; also alive.'}
  ],
  use: [
    {sentence:'You may use my pencil.',pronunciation:'YOOZ; the final sound is z.',meaning:'Do something with a tool or resource.'},
    {sentence:'The box has one use: holding pencils.',pronunciation:'YOOSS; the final sound is s, as in loose.',meaning:'A purpose or application.'}
  ],
  refuse: [
    {sentence:'I refuse to tell a lie.',pronunciation:'rih-FYOOZ; stress the second syllable, with a final z sound.',meaning:'Say no or decline.'},
    {sentence:'The truck collected the refuse.',pronunciation:'REF-yooss; stress the first syllable, with a final s sound.',meaning:'Rubbish or waste.'}
  ],
  object: [
    {sentence:'That round object is a ball.',pronunciation:'AHB-jekt; stress the first syllable.',meaning:'A thing.'},
    {sentence:'I object to that unfair rule.',pronunciation:'ub-JEKT; stress the second syllable.',meaning:'Disagree or protest.'}
  ],
  present: [
    {sentence:'She gave me a present.',pronunciation:'PREZ-unt; stress the first syllable.',meaning:'A gift; also being here now.'},
    {sentence:'I will present my plan to the class.',pronunciation:'prih-ZENT; stress the second syllable.',meaning:'Show or introduce something.'}
  ],
  record: [
    {sentence:'Keep a record of each score.',pronunciation:'REK-erd; stress the first syllable.',meaning:'Stored information or an account of something.'},
    {sentence:'We will record the song.',pronunciation:'rih-KORD; stress the second syllable.',meaning:'Capture or write something down.'}
  ],
  produce: [
    {sentence:'The shop sells fresh produce.',pronunciation:'PROH-doos; stress the first syllable.',meaning:'Fruit and vegetables.'},
    {sentence:'These trees produce sweet fruit.',pronunciation:'pruh-DOOS; stress the second syllable.',meaning:'Make or grow something.'}
  ],
  permit: [
    {sentence:'We need a permit to park here.',pronunciation:'PER-mit; stress the first syllable.',meaning:'An official document giving permission.'},
    {sentence:'The rules permit quiet talking.',pronunciation:'per-MIT; stress the second syllable.',meaning:'Allow.'}
  ],
  conduct: [
    {sentence:'His conduct during the game was fair.',pronunciation:'KAHN-dukt; stress the first syllable.',meaning:'Behavior.'},
    {sentence:'She will conduct the choir.',pronunciation:'kun-DUKT; stress the second syllable.',meaning:'Direct or lead.'}
  ],
  project: [
    {sentence:'Our project is a model bridge.',pronunciation:'PRAH-jekt; stress the first syllable.',meaning:'A planned piece of work.'},
    {sentence:'The lamp will project a shape onto the wall.',pronunciation:'pruh-JEKT; stress the second syllable.',meaning:'Cast an image or extend outward.'}
  ],
  minute: [
    {sentence:'Please wait one minute.',pronunciation:'MIN-it; stress the first syllable.',meaning:'Sixty seconds.'},
    {sentence:'A minute speck of dust lay on the glass.',pronunciation:'my-NOOT; stress the second syllable. my-NYOOT is also valid.',meaning:'Extremely small.'}
  ],
  desert: [
    {sentence:'The cactus grows in the desert.',pronunciation:'DEZ-ert; stress the first syllable.',meaning:'A very dry region.'},
    {sentence:'A loyal friend will not desert you.',pronunciation:'dih-ZERT; stress the second syllable.',meaning:'Abandon or leave.'}
  ],
  subject: [
    {sentence:'The subject of this book is birds.',pronunciation:'SUB-jekt; stress the first syllable.',meaning:'A topic.'},
    {sentence:'Do not subject the plants to extreme heat.',pronunciation:'sub-JEKT; stress the second syllable.',meaning:'Cause to experience something.'}
  ],
  separate: [
    {sentence:'Put the toys in separate boxes.',pronunciation:'SEP-er-it; stress the first syllable, with a reduced final vowel.',meaning:'Apart or distinct.'},
    {sentence:'Separate the red blocks from the blue blocks.',pronunciation:'SEP-uh-rayt; stress the first syllable, ending like rate.',meaning:'Divide or move apart.'}
  ],
  content: [
    {sentence:'The content of this book concerns birds.',pronunciation:'KAHN-tent; stress the first syllable.',meaning:'The material or information in something.'},
    {sentence:'The child felt content after a good meal.',pronunciation:'kun-TENT; stress the second syllable.',meaning:'Satisfied.'}
  ],
  invalid: [
    {sentence:'The expired ticket is invalid.',pronunciation:'in-VAL-id; stress the second syllable.',meaning:'Not valid.'},
    {sentence:'The old story called the sick man an invalid.',pronunciation:'IN-vuh-lid; stress the first syllable.',meaning:'A dated noun for someone affected by illness or disability.',note:'This older label can be offensive; explain it when reading historical text rather than using it to describe a person today.'}
  ],
  entrance: [
    {sentence:'The entrance to the park is on this street.',pronunciation:'EN-truns; stress the first syllable.',meaning:'A way in.'},
    {sentence:'The beautiful music can entrance a listener.',pronunciation:'en-TRANS; stress the second syllable; trance rhymes with dance.',meaning:'Captivate or hold attention.'}
  ],
  digest: [
    {sentence:'This digest gives a short summary of the news.',pronunciation:'DYE-jest; stress the first syllable.',meaning:'A collection of summaries.'},
    {sentence:'Our bodies digest food.',pronunciation:'dih-JEST or dye-JEST; stress the second syllable.',meaning:'Break down food; also understand information.'}
  ],
  polish: [
    {sentence:'Please polish the silver spoon.',pronunciation:'PAH-lish; first vowel as in hot in many American accents.',meaning:'Make a surface smooth or shiny.'},
    {sentence:'Her Polish cousin lives in Warsaw.',pronunciation:'POH-lish; first syllable rhymes with go.',meaning:'From or relating to Poland.',note:'This nationality word is capitalized: Polish. Capitalization is part of the clue.'}
  ],
  resume: [
    {sentence:'We will resume the game after lunch.',pronunciation:'rih-ZOOM; stress the second syllable.',meaning:'Begin again after stopping.'},
    {sentence:'She sent a resume with her job application.',pronunciation:'REZ-uh-may; three syllables, with the main stress first.',meaning:'A summary of education and work experience.',note:'The noun is also written résumé or resumé; pronunciation varies somewhat.'}
  ],
  learned: [
    {sentence:'I learned a new song yesterday.',pronunciation:'LURND; one syllable.',meaning:'Past tense of learn.'},
    {sentence:'The learned scholar explained the old text.',pronunciation:'LUR-nid; two syllables, stress first.',meaning:'Having much knowledge.'}
  ],
  blessed: [
    {sentence:'The priest blessed the family.',pronunciation:'BLEST; one syllable.',meaning:'Past tense of bless.'},
    {sentence:'They remembered a blessed day of peace.',pronunciation:'BLESS-id is a two-syllable adjective form; BLEST can also be valid.',meaning:'Holy, favored, or bringing happiness.',note:'The adjective has legitimate variants; do not mark a valid one wrong.'}
  ],
  crooked: [
    {sentence:'A crooked path led through the woods.',pronunciation:'KROOK-id; two syllables, with the vowel in book.',meaning:'Bent or not straight.'},
    {sentence:'She crooked her finger to beckon him.',pronunciation:'KROOKT; one syllable, with the vowel in book.',meaning:'Past tense of crook, meaning bend.'}
  ],
  aged: [
    {sentence:'The aged oak shaded the garden.',pronunciation:'AY-jid; two syllables, stress first.',meaning:'Old or elderly.'},
    {sentence:'The cheese aged in a cool room.',pronunciation:'AYJD; one syllable.',meaning:'Past tense of age, meaning grow older or mature.'}
  ],
  beloved: [
    {sentence:'She held her beloved childhood book.',pronunciation:'bih-LUV-id; three syllables, stress the middle syllable.',meaning:'Much loved.',note:'The two-syllable bih-LUVD is also an accepted adjective pronunciation in some uses.'},
    {sentence:'The teacher was beloved by the whole village.',pronunciation:'bih-LUVD or bih-LUV-id; both are accepted here.',meaning:'Much loved.',note:'This is pronunciation variation, not a clean meaning-based contrast; accept either established form.'}
  ],
  house: [
    {sentence:'The house has a red door.',pronunciation:'HOWSS; rhymes with mouse and ends with s.',meaning:'A building where people live.'},
    {sentence:'This shelter can house six people.',pronunciation:'HOWZ; rhymes with cows and ends with z.',meaning:'Provide a place to stay.'}
  ]
};

WORD_CONTEXTS.sow = [
  {sentence:'We will sow seeds in the soil.',pronunciation:'SOH; rhymes with go.',meaning:'Plant seeds.'},
  {sentence:'The sow feeds her piglets.',pronunciation:'SOW; rhymes with cow.',meaning:'An adult female pig.'}
];
WORD_CONTEXTS.does = [
  {sentence:'She does her work carefully.',pronunciation:'DUZ; rhymes with buzz.',meaning:'Performs or carries out.'},
  {sentence:'Two does stood beside the fawn.',pronunciation:'DOHZ; rhymes with goes.',meaning:'More than one female deer.'}
];

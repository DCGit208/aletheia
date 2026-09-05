import type { CourseModule, Lesson } from "@/lib/data/types";
import { ONE_SOURCE_BOOK_ID, ONE_SOURCE_COURSE_ID } from "@/lib/content/book-one-source-of-truth";

const textbookId = "book-principles-doctrine-christ";

function lesson(
  id: string,
  moduleId: string,
  number: number,
  title: string,
  durationMinutes: number,
  body: string,
): Lesson {
  return {
    id,
    courseId: ONE_SOURCE_COURSE_ID,
    moduleId,
    number,
    title,
    durationMinutes,
    resourceIds: [ONE_SOURCE_BOOK_ID, textbookId],
    body,
  };
}

export const grapheModules: CourseModule[] = [
  {
    id: "mod-graphe-writ",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 1,
    title: "Parts I–II — Writ and experience",
    description: "Graphē, Holy Writ, imprimatur, naturalistic vs ersatz. Book chs. 1–6.",
  },
  {
    id: "mod-graphe-oracles-hearing",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 2,
    title: "Parts III–IV — Oracles and hearing",
    description: "Oracles, first principles → maturity, hearing vs reading. Book chs. 7–10.",
  },
  {
    id: "mod-graphe-diagnosis",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 3,
    title: "Part V — Hebrews 5:11–14",
    description: "Ought, again, milk, strong meat, exercised senses. Book chs. 11–14.",
  },
  {
    id: "mod-graphe-babe-reason",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 4,
    title: "Parts VI–VIII — Apeiros, nēpios, reasonability",
    description: "Unskill, two marks of babes, sound judgment, the warning chain. Book chs. 15–20.",
  },
  {
    id: "mod-graphe-labour",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 5,
    title: "Parts IX–XII — Labour, knowledge, Word drill",
    description:
      "Aridity and tergiversation; scholarly impetus and spoudazō; knowledge chain; Word drill method. Book chs. 21–32.",
  },
];

export const grapheLessons: Lesson[] = [
  lesson(
    "les-graphe-01",
    "mod-graphe-writ",
    1,
    "Graphē and Holy Writ",
    75,
    `Central proposition
There is one authoritative written source for Christian truth: the graphē — Holy Writ.

Read
One Source of Truth, Chapters 1–2.

Word drill
1. Define graphē without inventing a theory of inspiration.
2. Stack the names: Holy Writ · Bible · Scripture · written Word.
3. Write why this book is not Holy Writ.
4. Affirm: the graphē is the premiere convention; this course is not.

Assessment
Fail if the page treats the book or course as the premiere convention.`,
  ),
  lesson(
    "les-graphe-02",
    "mod-graphe-writ",
    2,
    "Imprimatur — persons to nations",
    75,
    `Central proposition
Holy Writ carries unchallenged-unquestionable authority — imprimatur — over persons, organizations, governments, and nations.

Read
One Source of Truth, Chapter 3. John 10:34-36.

Word drill
1. Quote John 10:34-36 in full.
2. Name the charge the Lord answered and the writing He cited.
3. Define imprimatur as the source uses it.
4. Write four lines: person · organization · government · nation under the writing.

Assessment
No political program invented; no exemption for schools or sincerity.`,
  ),
  lesson(
    "les-graphe-03",
    "mod-graphe-writ",
    3,
    "Naturalistic vs ersatz analogical religiousisms",
    90,
    `Central proposition
Naturalistic Christ-ian experience conforms to the writing. Ersatz analogical (nonliteral) religiousisms recruit the writing to justify a likeness.

Read
One Source of Truth, Chapters 4–6.

Word drill
1. Define naturalistic exactly as the source does.
2. Define ersatz · analogical · nonliteral · religiousisms.
3. Answer: Does the experience conform to the writing, or is the writing recruited to justify the experience?
4. Teach “the scripture cannot be broken” as authority reasoning, not a motto.

Assessment
Preserve unusual terms. No softening into “bad religion.”`,
  ),
  lesson(
    "les-graphe-04",
    "mod-graphe-oracles-hearing",
    4,
    "Oracles, first principles, maturity",
    75,
    `Central proposition
This book is a straight issue on the cornerstone — first principles of the Oracles of God — and the path first principles → maturity. It is not a seventh doctrine.

Read
One Source of Truth, Chapters 7–8. Hebrews 5:12; 6:1.

Word drill
1. Name the six first principles in Hebrews order.
2. Explain “leaving” without abandoning.
3. Distinguish skip vs relay vs go on.
4. Affirm in one sentence: this book is not a seventh first principle.

Assessment
Fail if a seventh principle is invented.`,
  ),
  lesson(
    "les-graphe-05",
    "mod-graphe-oracles-hearing",
    5,
    "Hearing from God vs reading words",
    90,
    `Central proposition
The graphē is the premiere convention for hearing from God and spiritual growth. Possessing Scripture is not the same as hearing it.

Read
One Source of Truth, Chapters 9–10. Hebrews 5:11.

Word drill
1. Write the premiere-convention sentence without naming book/course/teacher as the convention.
2. Distinguish seeing / reading / understanding / hearing / knowing / reasoning.
3. Show how Hebrews can diagnose dull hearing among Bible-holders.
4. Name one way you have possessed Scripture without hearing it.

Assessment
No slogan about “heart hearing” that skips the text.`,
  ),
  lesson(
    "les-graphe-06",
    "mod-graphe-diagnosis",
    6,
    "Ought · again · become",
    90,
    `Central proposition
Time creates obligation. Need of milk after that time is recession. “Again” means the beginning was not kept.

Read
One Source of Truth, Chapters 11–12. Hebrews 5:11-12.

Word drill
1. Quote Hebrews 5:11-12 by hand.
2. Reason ought · time · teachers.
3. Reason again · become.
4. Refuse any soft paraphrase that turns indictment into compliment.

Assessment
Severity must stand.`,
  ),
  lesson(
    "les-graphe-07",
    "mod-graphe-diagnosis",
    7,
    "Milk, strong meat, exercised senses",
    90,
    `Central proposition
Milk may be kindness or indictment. Strong meat is the same graphē taken by senses exercised by reason of use to discern good and evil.

Read
One Source of Truth, Chapters 13–14. Hebrews 5:13-14.

Word drill
1. Write both uses of milk.
2. Define use · exercise · senses · discernment from 5:14.
3. Show why despising first principles as childish slogans is already error.
4. Connect unexercised senses to inability to discern.

Assessment
No “different Bible” for strong meat.`,
  ),
  lesson(
    "les-graphe-08",
    "mod-graphe-babe-reason",
    8,
    "Apeiros and the word of righteousness",
    90,
    `Central proposition
Apeiros is diagnostic: inexperienced / ignorant / unskilful in the word of righteousness — not in crowding a room.

Read
One Source of Truth, Chapters 15–16. Hebrews 5:13.

Word drill
1. Define apeiros; name what it is not.
2. Unskilled in what? Answer from the verse.
3. Distinguish access / memory / quotation from skill.
4. Soft copy or hard copy without labour still leaves apeiros.

Assessment
Pass only if “word of righteousness” stays attached to Hebrews 5.`,
  ),
  lesson(
    "les-graphe-09",
    "mod-graphe-babe-reason",
    9,
    "Nēpios — two marks only",
    90,
    `Central proposition
Nēpios is diagnosis for persons and organizations. Two marks only: dull of hearing; unskilled in the Word (basis for salvation).

Read
One Source of Truth, Chapters 17–18.

Word drill
1. Define nēpios without affectionate softening.
2. List the two marks with verses — refuse a third as if the text listed it.
3. Apply both marks to a person-pattern and an organization-pattern without naming a living target.
4. Connect productive living / control / godliness to Word skill — not self-help.

Assessment
Fail if “babe” is treated as endearment or a third mark is invented as if the text listed it.`,
  ),
  lesson(
    "les-graphe-10",
    "mod-graphe-babe-reason",
    10,
    "Reasonability and the warning chain",
    90,
    `Central proposition
Absence of reasonability + unskillfulness → aridity → tergiversation → damnable accepted heresies called doctrines. The graphē remains premiere convention; this course remains the gate.

Read
One Source of Truth, Chapters 19–20. John 8:31-36.

Word drill
1. Define reasonability with the Word as master.
2. Write the warning chain without softening — aridity and tergiversation named; labour chapters open next.
3. Keep John 8:32 inside 8:31-36.
4. One-page bridge: premiere convention; two marks of babes; why sound judgment fails without Word labour.

Assessment
Bridge defense required. Soft “different interpretations” language fails.`,
  ),
  lesson(
    "les-graphe-11",
    "mod-graphe-labour",
    11,
    "Aridity and tergiversation",
    90,
    `Central proposition
Aridity and tergiversation follow when reasonability fails. They attack the premiere convention without always denying it aloud.

Read
One Source of Truth, Chapters 21–22.

Word drill
1. Define aridity exactly as the book uses it.
2. Define tergiversation; refuse a soft synonym that erases desertion.
3. Show how a Bible-holder can affirm Scripture and still go dry or turn aside.
4. Write the warning chain from unskillfulness through aridity and tergiversation without softening.

Assessment
Severity must stand. No sentimental “dry season” that excuses tergiversation.`,
  ),
  lesson(
    "les-graphe-12",
    "mod-graphe-labour",
    12,
    "Scholarly impetus and spoudazō",
    90,
    `Central proposition
Scripture itself demands scholarly impetus. Spoudazō (2 Timothy 2:15) names the labour of an approved workman who rightly divides the word of truth.

Read
One Source of Truth, Chapters 23–25. 2 Timothy 2:15.

Word drill
1. Quote 2 Timothy 2:15 by hand from the KJV.
2. Define spoudazō as the book uses it — not mere busyness.
3. What is an approved workman approved for?
4. Distinguish soft possession of Scripture from hard labour under the writing.

Assessment
Fail if spoudazō is reduced to “try harder” without the word of truth.`,
  ),
  lesson(
    "les-graphe-13",
    "mod-graphe-labour",
    13,
    "Knowledge — perception, learning, reasoning",
    105,
    `Central proposition
Knowledge is not quotation alone. It moves through perception, learning, and reasoning under the graphē, and the Word must be exercised.

Read
One Source of Truth, Chapters 26–30.

Word drill
1. Define knowledge as the book uses it.
2. Trace perception → learning → reasoning → exercise in one page.
3. Show why quotation without that chain leaves the student apeiros.
4. Name one habit that keeps you at citation without knowledge.

Assessment
Pass only if the chain stays under Holy Writ — not psychology as rival court.`,
  ),
  lesson(
    "les-graphe-14",
    "mod-graphe-labour",
    14,
    "From quotation to knowledge",
    75,
    `Central proposition
Quotation is not yet knowledge. The labour is to move from citing the writing to knowing it under the premiere convention.

Read
One Source of Truth, Chapter 31.

Word drill
1. State the difference between quoting Scripture and knowing Scripture.
2. Name one habit that freezes a student at quotation.
3. What must change for quotation to become knowledge?
4. Affirm: this method serves the graphē; it is not the graphē.

Assessment
No technique that bypasses the text.`,
  ),
  lesson(
    "les-graphe-15",
    "mod-graphe-labour",
    15,
    "The Word drill method",
    105,
    `Central proposition
The Word drill method is labour under Holy Writ — not a printed checklist from the oracles, and not Holy Writ itself.

Read
One Source of Truth, Chapter 32.

Word drill
1. State the purpose of the Word drill method in one sentence.
2. Why must the fourteen-step list not be treated as Holy Writ?
3. Apply three steps of the method to Hebrews 6:1–2 and write what you find.
4. Affirm: the graphē remains premiere convention; the method is subordinate labour.

Assessment
Fail if the fourteen steps are treated as Holy Writ.`,
  ),
  lesson(
    "les-graphe-16",
    "mod-graphe-labour",
    16,
    "Capstone — Gate and labour",
    90,
    `Central proposition
The Doctrine of the Graphē is the methodological gate into the six first principles — not a seventh doctrine. Labour under the writing prepares the student for Repentance and the rest.

Read
Review Parts I–XII thesis lines. Especially Chapters 7–8, 18, 20–22, 24, 26, 32.

Word drill
1. Restate the Doctrine of the Graphē without making it a seventh first principle.
2. How do aridity and tergiversation threaten students who already affirm Scripture?
3. What will you carry from spoudazō and the Word drill into Doctrine of Repentance?
4. Final defense (one page): premiere convention; hierarchy of authority; gate not seventh doctrine.

Assessment
Final written defense required. Soft “different interpretations” language fails.`,
  ),
];

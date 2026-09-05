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
2. List the two marks with verses — refuse a third as L2.
3. Apply both marks to a person-pattern and an organization-pattern without naming a living target.
4. Connect productive living / control / godliness to Word skill — not self-help.

Assessment
Fail if “babe” is treated as endearment or a third L2 mark is invented.`,
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
One Source of Truth, Chapters 19–20. John 8:31-36. 2 Timothy 2:15 (named for forward labour).

Word drill
1. Define reasonability with the Word as master.
2. Write the warning chain without softening.
3. Keep John 8:32 inside 8:31-36.
4. Final defense (one page): premiere convention; two marks of babes; knowledge still ahead as perception–learning–reasoning in later expansion; this book/course is gate not seventh doctrine.

Assessment
Final written defense required. Soft “different interpretations” language fails.`,
  ),
];

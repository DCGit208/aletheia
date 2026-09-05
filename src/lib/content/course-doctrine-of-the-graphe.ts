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
    title: "Holy Writ",
    description: "Graphē, imprimatur, naturalistic vs ersatz. Book chs. 1–2.",
  },
  {
    id: "mod-graphe-diagnosis",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 2,
    title: "Diagnosis",
    description: "Hebrews 5:11–14 — ought, again, apeiros, nēpios. Book chs. 3–5.",
  },
  {
    id: "mod-graphe-labour",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 3,
    title: "Labour and knowledge",
    description: "Spoudazō, knowledge chain, truth that frees, gate to the six. Book chs. 6–8.",
  },
];

export const grapheLessons: Lesson[] = [
  lesson(
    "les-graphe-01",
    "mod-graphe-writ",
    1,
    "Graphē — one authoritative writing",
    75,
    `Central proposition
There is one authoritative source by which Christian truth is to be heard, known, reasoned, established, taught, and lived: the graphē — Holy Writ.

Read
One Source of Truth, Chapter 1.

Word drill
1. Quote John 10:35 in full.
2. Define graphē from the chapter — not from a slogan.
3. Name who is under the imprimatur: persons, organizations, governments, nations.
4. Distinguish naturalistic Christ-ian experience from ersatz analogical (nonliteral) religiousisms.
5. Write three sentences proving you have not treated this book as the premiere convention.

Assessment
Pass only if the page keeps Holy Writ as premiere convention and the book as a straight issue under it.`,
  ),
  lesson(
    "les-graphe-02",
    "mod-graphe-writ",
    2,
    "Premiere convention for hearing and growth",
    75,
    `Central proposition
The graphē is the premiere convention for hearing from God and for spiritual growth. First principles → maturity.

Read
One Source of Truth, Chapter 2.

Word drill
1. Write the two movements of growth under the convention.
2. Explain “straight issue on the cornerstone” without making the leaflet or course the convention.
3. Quote Hebrews 5:12. Mark ought / again / become.
4. Teach John 10:34-36 as authority reasoning, not as a motto.

Assessment
Fail the drill if “premiere convention” is assigned to book, course, school, or teacher.`,
  ),
  lesson(
    "les-graphe-03",
    "mod-graphe-diagnosis",
    3,
    "Ought to be teachers — milk and strong meat",
    75,
    `Central proposition
Time creates obligation. Need of milk after that time is recession, not humility.

Read
One Source of Truth, Chapter 3. Hebrews 5:11-14.

Word drill
1. Quote Hebrews 5:11-12.
2. Reason dull of hearing as cause of withheld meat.
3. Distinguish milk as kindness to a newborn from milk as indictment after time.
4. Write what “teach you again” forces you to refuse.

Assessment
No soft paraphrase of ought / again / become.`,
  ),
  lesson(
    "les-graphe-04",
    "mod-graphe-diagnosis",
    4,
    "Apeiros — unskilful in the word of righteousness",
    75,
    `Central proposition
Apeiros is a diagnostic category: inexperienced / ignorant / unskilful in the word of righteousness — not in crowding a room.

Read
One Source of Truth, Chapter 4. Hebrews 5:13-14.

Word drill
1. Define apeiros from the source sense.
2. Unskilled in what? Answer from the verse.
3. Trace the chain: absence of reasonability + unskillfulness → aridity → tergiversation → damnable accepted heresies called doctrines.
4. Name soft copy and hard copy as irrelevant without labour.

Assessment
Pass only if the heresy sentence keeps its severity.`,
  ),
  lesson(
    "les-graphe-05",
    "mod-graphe-diagnosis",
    5,
    "Nēpios — two marks of babes",
    75,
    `Central proposition
Nēpios is diagnosis for persons and organizations. Two marks only: dull of hearing; unskilled in the Word (basis for salvation).

Read
One Source of Truth, Chapter 5.

Word drill
1. Define nēpios without affectionate softening.
2. List the two marks — and refuse a third attributed to the source.
3. Apply both marks to a person and to an organization without naming a living target.
4. Connect the aim: productive living, control, godliness — by Word skill, not slogan.

Assessment
Fail if “babe” is treated as endearment.`,
  ),
  lesson(
    "les-graphe-06",
    "mod-graphe-labour",
    6,
    "Spoudazō — approved workman",
    75,
    `Central proposition
Scripture demands intellectual labour. Spoudazō: speed, effort, promptness, earnestness, diligence, endeavour, labour, study — intellectually. 2 Timothy 2:15.

Read
One Source of Truth, Chapter 6.

Word drill
1. Quote 2 Timothy 2:15.
2. Define spoudazō without reducing it to “try hard.”
3. Reason approved / workman / rightly dividing.
4. Same doctrine at three hours and at eight — difference is labour volume, not gospel.

Assessment
Quotation without reasoning fails.`,
  ),
  lesson(
    "les-graphe-07",
    "mod-graphe-labour",
    7,
    "Knowledge: perception, learning, reasoning",
    90,
    `Central proposition
Knowledge is a mental result of perception and learning and reasoning. Quotation ≠ knowledge. Word exercise and Word drill are the practice.

Read
One Source of Truth, Chapter 7.

Word drill (method)
1. READ Hebrews 5:12.
2. OBSERVE every load-bearing word.
3. DEFINE ought, again, become, milk, strong meat.
4. CONTEXTUALIZE with 5:11 and 5:13-14.
5. REASON a text-supported conclusion.
6. DISTINGUISH what the text says from what you assumed.
7. APPLY one charge to this week’s labour.
8. ARTICULATE the conclusion as you would teach it.

Assessment
Demonstrate perception → learning → reasoning on one cluster. No slogan pass.`,
  ),
  lesson(
    "les-graphe-08",
    "mod-graphe-labour",
    8,
    "Truth makes free — gate to the six",
    90,
    `Central proposition
John 8:31-36: continue in His word → know the truth → truth makes free. This book is the gate into the six first principles — not a seventh principle.

Read
One Source of Truth, Chapter 8. John 8:31-36. Hebrews 6:1-3.

Word drill
1. Keep John 8:32 inside 8:31-36. No cover motto.
2. Name the six first principles in Hebrews order.
3. Explain “leaving” the foundation without abandoning it.
4. Write the architecture: Graphē → hearing → knowledge → skill → discernment → first principles → maturity.
5. Affirm: this course is not the premiere convention; the graphē is.

Assessment
Final written defense: one page — premiere convention, two marks of babes, knowledge chain, and why this is gate not seventh doctrine.`,
  ),
];

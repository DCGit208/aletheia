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
    description: "γραφή (graphē), Holy Writ, written authority, and true experience under Scripture. Book chs. 1–6.",
  },
  {
    id: "mod-graphe-oracles-hearing",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 2,
    title: "Parts III–IV — Oracles and hearing",
    description: "λόγια (logia), the oracles of God; first principles, maturity, hearing, and reading. Book chs. 7–10.",
  },
  {
    id: "mod-graphe-diagnosis",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 3,
    title: "Part V — Hebrews 5:11–14",
    description: "Hebrews 5: ought to be teachers, milk, strong meat, and senses exercised by use. Book chs. 11–14.",
  },
  {
    id: "mod-graphe-babe-reason",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 4,
    title: "Parts VI–VIII — Unskill, babes, and sound judgment",
    description: "ἄπειρος (apeiros), the unskilled; νήπιος (nēpios), the babe; and the need for sound judgment. Book chs. 15–20.",
  },
  {
    id: "mod-graphe-labour",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 5,
    title: "Parts IX–XII — Labour, knowledge, Word drill",
    description:
      "σπουδάζω (spoudazō), diligent labour; knowledge through perception, learning, reasoning, and Word drill. Book chs. 21–32.",
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
There is one authoritative written source for truth: the graphē — Holy Writ.

Read
One Source of Truth, Chapters 1–2.

Word drill
1. Define graphē without inventing a theory of inspiration.
2. Stack the names: Holy Writ · Bible · Scripture · written Word.
3. Write why this book is not Holy Writ.
4. Affirm: the graphē is the primary authority; this course is not.

Assessment
Fail if the page treats the book or course as the primary authority.`,
  ),
  lesson(
    "les-graphe-02",
    "mod-graphe-writ",
    2,
    "Holy Writ carries authority over persons and nations",
    75,
    `Central proposition
Holy Writ carries imprimatur: unchallenged and unquestionable authority over persons, organizations, governments, and nations.

Read
One Source of Truth, Chapter 3. John 10:34-36.

Word drill
1. Quote John 10:34-36 in full.
2. Name the charge the Lord answered and the writing He cited.
3. Define imprimatur as unchallenged authority carried by Holy Writ.
4. Write four lines: person · organization · government · nation under the writing.

Assessment
No political program invented; no exemption for schools or sincerity.`,
  ),
  lesson(
    "les-graphe-03",
    "mod-graphe-writ",
    3,
    "True experience under Scripture",
    90,
    `Central proposition
True Christ-ian experience conforms to the writing. Religious substitutes imitate the language of faith while refusing the authority of Scripture.

Read
One Source of Truth, Chapters 4–6.

Word drill
1. Define true Christ-ian experience as life that follows Christ and conforms to Scripture.
2. Explain the error: a religious substitute borrows Scripture words while refusing Scripture authority.
3. Answer: Does the experience conform to the writing, or is the writing recruited to justify the experience?
4. Teach “the scripture cannot be broken” as authority reasoning, not a motto.

Assessment
Explain the terms clearly. Do not reduce the issue to vague “bad religion.”`,
  ),
  lesson(
    "les-graphe-04",
    "mod-graphe-oracles-hearing",
    4,
    "Oracles, first principles, maturity",
    75,
    `Central proposition
This book gives focused teaching on the cornerstone: the first principles of the λόγια (logia), the oracles of God, and the path from first principles to maturity. It is not a seventh doctrine.

Read
One Source of Truth, Chapters 7–8. Hebrews 5:12; 6:1.

Word drill
1. Name the six first principles in Hebrews order.
2. Explain “leaving” without abandoning.
3. Distinguish skipping the foundation, laying it again, and going on to maturity.
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
The γραφή (graphē) is the primary authority for hearing from God and for spiritual growth. Possessing Scripture is not the same as hearing it.

Read
One Source of Truth, Chapters 9–10. Hebrews 5:11.

Word drill
1. Write the primary-authority sentence without naming book, course, or teacher as the authority.
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
    "When students ought to be teachers",
    90,
    `Central proposition
Hebrews 5 teaches that time creates responsibility. When students still need milk after they ought to be teachers, the foundation has not been kept.

Read
One Source of Truth, Chapters 11–12. Hebrews 5:11-12.

Word drill
1. Quote Hebrews 5:11-12 by hand.
2. Explain ought, time, and teachers from Hebrews 5:12.
3. Explain why “again” means the beginning was not kept.
4. Refuse any paraphrase that turns the warning into a compliment.

Assessment
The warning must remain clear.`,
  ),
  lesson(
    "les-graphe-07",
    "mod-graphe-diagnosis",
    7,
    "Milk, strong meat, exercised senses",
    90,
    `Central proposition
Milk may be kindness for a new student or indictment for one who should already be mature. Strong meat is the same γραφή (graphē) handled by senses trained through use to discern good and evil.

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
    "ἄπειρος (apeiros): unskilled in the word of righteousness",
    90,
    `Central proposition
ἄπειρος (apeiros) is diagnostic: inexperienced, ignorant, or unskilled in the word of righteousness. It is not measured by crowd size or religious activity.

Read
One Source of Truth, Chapters 15–16. Hebrews 5:13.

Word drill
1. Define ἄπειρος (apeiros); name what it is not.
2. Unskilled in what? Answer from the verse.
3. Distinguish access / memory / quotation from skill.
4. A digital Bible or printed Bible without labour still leaves a student ἄπειρος (apeiros).

Assessment
Pass only if “word of righteousness” stays attached to Hebrews 5.`,
  ),
  lesson(
    "les-graphe-09",
    "mod-graphe-babe-reason",
    9,
    "νήπιος (nēpios): the babe and the two marks",
    90,
    `Central proposition
νήπιος (nēpios) diagnoses immaturity in persons and organizations. The two marks are dull hearing and unskillfulness in the Word, the basis for salvation.

Read
One Source of Truth, Chapters 17–18.

Word drill
1. Define νήπιος (nēpios) without turning the warning into affection.
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
    "Sound judgment under Scripture",
    90,
    `Central proposition
When sound judgment is absent and Scripture remains unhandled, dryness and doctrinal turning aside follow. The γραφή (graphē) remains the primary authority, and this course remains the gate into the six principles.

Read
One Source of Truth, Chapters 19–20. John 8:31-36.

Word drill
1. Define sound judgment with the Word as master.
2. Write the warning clearly: unskillfulness can produce dryness and doctrinal turning aside; the labour chapters open next.
3. Keep John 8:32 inside 8:31-36.
4. One-page bridge: primary authority; two marks of babes; why sound judgment fails without Word labour.

Assessment
Bridge defense required. Vague “different interpretations” language is not enough.`,
  ),
  lesson(
    "les-graphe-11",
    "mod-graphe-labour",
    11,
    "Dryness and doctrinal turning aside",
    90,
    `Central proposition
Dryness and doctrinal turning aside follow when sound judgment fails. They attack the primary authority without always denying it aloud.

Read
One Source of Truth, Chapters 21–22.

Word drill
1. Define aridity as spiritual and doctrinal dryness.
2. Define tergiversation as turning aside or shifting allegiance; do not erase the danger.
3. Show how a Bible-holder can affirm Scripture and still go dry or turn aside.
4. Write the warning chain from unskillfulness through dryness and doctrinal turning aside.

Assessment
The warning must remain clear. No sentimental “dry season” that excuses tergiversation.`,
  ),
  lesson(
    "les-graphe-12",
    "mod-graphe-labour",
    12,
    "σπουδάζω (spoudazō): diligent labour in the Word",
    90,
    `Central proposition
Scripture itself demands serious study. σπουδάζω (spoudazō) in 2 Timothy 2:15 names the diligent labour of an approved workman who rightly divides the word of truth.

Read
One Source of Truth, Chapters 23–25. 2 Timothy 2:15.

Word drill
1. Quote 2 Timothy 2:15 by hand from the KJV.
2. Define σπουδάζω (spoudazō) as diligent labour in the Word, not mere busyness.
3. What is an approved workman approved for?
4. Distinguish passive possession of Scripture from diligent labour under the writing.

Assessment
Fail if σπουδάζω (spoudazō) is reduced to “try harder” without the word of truth.`,
  ),
  lesson(
    "les-graphe-13",
    "mod-graphe-labour",
    13,
    "Knowledge — perception, learning, reasoning",
    105,
    `Central proposition
Knowledge is not quotation alone. It moves through perception, learning, and reasoning under the γραφή (graphē), and the Word must be exercised.

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
Quotation is not yet knowledge. The labour is to move from citing the writing to knowing it under the primary authority of Scripture.

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
4. Affirm: the graphē remains the primary authority; the method is subordinate labour.

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
The Doctrine of the Graphē is the gate into the six first principles, not a seventh doctrine. Labour under the writing prepares the student for Repentance and the rest.

Read
Review Parts I–XII thesis lines. Especially Chapters 7–8, 18, 20–22, 24, 26, 32.

Word drill
1. Restate the Doctrine of the Graphē without making it a seventh first principle.
2. How do dryness and doctrinal turning aside threaten students who already affirm Scripture?
3. What will you carry from σπουδάζω (spoudazō) and the Word drill into Repentance from Dead Works?
4. Final defense (one page): primary authority; hierarchy of authority; gate not seventh doctrine.

Assessment
Final written defense required. Vague “different interpretations” language is not enough.`,
  ),
];

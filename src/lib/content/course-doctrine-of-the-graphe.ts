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

/**
 * The course is a pedagogical pathway through the canonical 85-chapter Work.
 * It is intentionally not a chapter-by-chapter duplicate of the book.
 */
export const grapheModules: CourseModule[] = [
  {
    id: "mod-graphe-truth",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 1,
    title: "Movement I — Truth and the possibility of knowledge",
    description: "Read the opening investigation as an argument: truth, reality, knowledge, evidence, reasoning, sound judgment, reasonability, and ultimate authority. Reference: Chapters 1–8.",
  },
  {
    id: "mod-graphe-god-bible",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 2,
    title: "Movements II–III — God, revelation, Bible, Graphē",
    description: "Trace the argument from the ground of truth through God, revelation, the Bible as written record, and γραφή (graphē). Reference: Chapters 9–22.",
  },
  {
    id: "mod-graphe-revelation-authentication",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 3,
    title: "Movements IV–V — Revelation and authentication",
    description: "Follow how divine communication reaches written testimony and how the biblical claim is authenticated through evidence, witness, prophecy, coherence, transmission, and cumulative warrant. Reference: Chapters 23–42.",
  },
  {
    id: "mod-graphe-christ-scripture",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 4,
    title: "Movements VI–VIII — Christ, Scripture, canon, and the verdict of the Graphē",
    description: "Examine Christ, apostolic testimony, canon, inspiration, infallibility, John 10:34–36, and the conclusion that the Graphē is the primary written authority. Reference: Chapters 43–65.",
  },
  {
    id: "mod-graphe-labour-gate",
    courseId: ONE_SOURCE_COURSE_ID,
    number: 5,
    title: "Movements IX–X — Mishandling, scholarly labour, and the Gate",
    description: "Distinguish text from interpretation, diagnose doctrinal turning aside and unskillfulness, then develop scholarly labour and readiness for the Six First Principles. Reference: Chapters 66–85.",
  },
];

export const grapheLessons: Lesson[] = [
  lesson(
    "les-graphe-01",
    "mod-graphe-truth",
    1,
    "Truth before conclusion",
    90,
    `Central proposition
The investigation begins with truth itself before it asks the reader to accept a theological conclusion.

Reference
One Source of Truth, Chapters 1–3.

Word drill
1. Distinguish truth, belief, assertion, opinion, convention, and error.
2. State the difference between what is actually the case and a person's acceptance of a proposition.
3. Explain why sincerity and repetition do not create truth.
4. Write the governing movement: Truth → Reality → Knowledge → Evidence → Warrant.

Assessment
Give a one-page account of a claim, its supporting evidence, and the distinction between believing it and establishing it.`,
  ),
  lesson(
    "les-graphe-02",
    "mod-graphe-truth",
    2,
    "Knowledge, evidence, and rational warrant",
    90,
    `Central proposition
A warranted conclusion requires more than assertion. Knowledge, evidence, testimony, inference, and rational warrant must be distinguished.

Reference
One Source of Truth, Chapters 4–6.

Word drill
1. Define evidence and testimony in the terms of the investigation.
2. Distinguish evidence from the authority of the conclusion it supports.
3. Trace evidence → analysis → inference → conclusion.
4. Identify one conclusion that would be stronger than its evidence permits.

Assessment
Build one Claim → Definition → Evidence → Analysis → Inference → Conclusion chain without importing an unsupported premise.`,
  ),
  lesson(
    "les-graphe-03",
    "mod-graphe-truth",
    3,
    "Reasonability and ultimate authority",
    90,
    `Central proposition
Reason and sound judgment are required for examining claims, but reason itself cannot simply be assumed to be the final authority when competing claims exist.

Reference
One Source of Truth, Chapters 7–8. Isaiah 1:18.

Word drill
1. Explain what Isaiah 1:18 contributes to the investigation.
2. Distinguish reason as an instrument of judgment from an asserted ultimate court.
3. State the problem of ultimate authority in one paragraph.
4. Name the question that must be answered before later claims about Scripture can function as conclusions.

Assessment
Defend why the course begins by establishing the question of authority rather than merely declaring the answer.`,
  ),
  lesson(
    "les-graphe-04",
    "mod-graphe-god-bible",
    4,
    "God, truth, and revelation",
    90,
    `Central proposition
The investigation moves from truth to its ultimate ground, then asks how God is known without replacing revelation with speculation.

Reference
One Source of Truth, Chapters 9–14.

Word drill
1. Distinguish the ontological, epistemological, evidential, and hermeneutical questions.
2. State what the manuscript establishes about God as truthful, faithful, immutable, and incapable of lying.
3. Distinguish revelation from human commentary about revelation.
4. Explain why human accounts about God must themselves be tested.

Assessment
Produce a structured summary that separates what is established by the biblical record from what a commentator merely says about it.`,
  ),
  lesson(
    "les-graphe-05",
    "mod-graphe-god-bible",
    5,
    "What kind of record is the Bible?",
    90,
    `Central proposition
Before calling the Bible an authoritative revelation, the investigation establishes what kind of written record it is and what kinds of testimony it contains.

Reference
One Source of Truth, Chapters 15–19.

Word drill
1. Describe the Bible as a body of writings and historical testimony.
2. Distinguish direct eyewitness testimony from received or investigated testimony.
3. Identify the kinds of claims the biblical record makes about its own origin.
4. Explain why historical claims must be treated as claims capable of evidential examination.

Assessment
Write a two-page evidence map: record → source of testimony → claim → possible examination.`,
  ),
  lesson(
    "les-graphe-06",
    "mod-graphe-god-bible",
    6,
    "Graphē, Holy Writ, and Scripture",
    90,
    `Central proposition
γραφή (graphē, G1124) names writing and, in biblical usage, Scripture/Holy Writ. The course must distinguish the written authority from books written about it.

Reference
One Source of Truth, Chapters 20–22. John 10:35.

Word drill
1. Define γραφή (graphē) from the manuscript's lexical and biblical treatment.
2. Keep these designations related without flattening them: graphē · Holy Writ · Scripture · Bible · written Word.
3. Explain why this course is not Holy Writ.
4. State what is meant by written authority.

Assessment
Defend the distinction: the Graphē is the authoritative written record; the Aletheia book and course are subordinate works that study it.`,
  ),
  lesson(
    "les-graphe-07",
    "mod-graphe-revelation-authentication",
    7,
    "How revelation reaches written testimony",
    90,
    `Central proposition
The manuscript traces divine communication through speech, angels, prophets, Christ, apostles, visions, dreams, revelation, inspiration, and written testimony.

Reference
One Source of Truth, Chapters 23–32.

Word drill
1. Name the major modes of divine communication examined in the movement.
2. Distinguish revelation, reception, witness, recording, and transmission.
3. Explain the significance of 2 Timothy 3:15–17 and the phrase “all Scripture.”
4. State why the written record cannot be treated as a loose collection of human impressions.

Assessment
Draw the chain from divine communication to written testimony and explain every transition without collapsing distinct categories.`,
  ),
  lesson(
    "les-graphe-08",
    "mod-graphe-revelation-authentication",
    8,
    "Authentication: evidence to warrant",
    90,
    `Central proposition
The claim that the biblical record is authentic must be reasoned through cumulative evidence rather than asserted because the record says so.

Reference
One Source of Truth, Chapters 33–42.

Word drill
1. Define authentication.
2. Distinguish eyewitness evidence, miracles, prophecy, unity, external corroboration, transmission, and cumulative convergence.
3. Explain why one isolated argument is not the whole case.
4. Trace evidence → rational warrant without circularly assuming the conclusion.

Assessment
Build a cumulative evidential outline and mark every place where an inference is stronger than the evidence.`,
  ),
  lesson(
    "les-graphe-09",
    "mod-graphe-christ-scripture",
    9,
    "Christ as historical and apostolic witness",
    90,
    `Central proposition
Jesus Christ is examined first as a historical figure and central witness before the argument moves to His theological significance and treatment of Scripture.

Reference
One Source of Truth, Chapters 43–47.

Word drill
1. Separate historical claims about Christ from later conclusions about Christ.
2. Identify the role of apostolic testimony.
3. Explain why eyewitness testimony matters to the evidential case.
4. State what must be established before Christ can function as the decisive witness in the argument.

Assessment
Write a concise historical-evidential brief on Christ using only claims established by the assigned chapters.`,
  ),
  lesson(
    "les-graphe-10",
    "mod-graphe-christ-scripture",
    10,
    "Christ, Scripture, and apostolic authority",
    90,
    `Central proposition
Christ's relationship to Scripture and the apostles is central to the authority argument, but the course must not confuse apostolic testimony with every later interpretation of it.

Reference
One Source of Truth, Chapters 48–50.

Word drill
1. Identify ways Christ received, quoted, interpreted, and appealed to Scripture.
2. Distinguish Christ's confirmation of Scripture from later doctrinal systems.
3. Explain the evidential role of apostolic testimony concerning Christ.
4. State why apostolic authority matters to the New Testament witness.

Assessment
Defend the distinction between Christ's treatment of the written record and an interpreter's claim about Christ's treatment of it.`,
  ),
  lesson(
    "les-graphe-11",
    "mod-graphe-christ-scripture",
    11,
    "Canon, inspiration, and infallibility",
    90,
    `Central proposition
Canon, prophetic and apostolic authority, revelation, inspiration, and infallibility are related but distinct questions.

Reference
One Source of Truth, Chapters 51–58.

Word drill
1. Distinguish the scriptural corpus from the process of canon recognition.
2. Distinguish revelation, inspiration, and canon.
3. Explain what the manuscript argues inspiration guarantees.
4. Trace the premises leading toward the infallibility of the written record.

Assessment
Create a four-column distinction table: Revelation | Inspiration | Canon | Infallibility.`,
  ),
  lesson(
    "les-graphe-12",
    "mod-graphe-christ-scripture",
    12,
    "The scripture cannot be broken",
    90,
    `Central proposition
John 10:34–36 must be read as an argument. Christ's appeal to what is written culminates in the statement that the scripture cannot be broken.

Reference
One Source of Truth, Chapters 59–65. John 10:34–36; Psalm 82:6; John 17:17.

Word drill
1. Read John 10:34–36 as a complete argumentative unit.
2. Examine Christ's citation of Psalm 82:6 in context.
3. Explain what “the scripture cannot be broken” contributes to the argument.
4. Connect John 17:17 — “thy word is truth” — to the established authority argument.

Assessment
Write the reasoning chain that earns the conclusion that the Graphē is the primary written authority. Do not state the conclusion as a premise.`,
  ),
  lesson(
    "les-graphe-13",
    "mod-graphe-labour-gate",
    13,
    "Text, interpretation, and secondary authorities",
    90,
    `Central proposition
Scriptural authority does not make every human interpretation of Scripture authoritative. The text and the interpreter must remain distinct.

Reference
One Source of Truth, Chapters 66–70.

Word drill
1. Distinguish the authority of the text from the fallibility of the interpreter.
2. Identify how perception, context, inference, tradition, philosophy, institution, and experience can distort handling.
3. Explain when a secondary source becomes a primary authority.
4. State why a course, teacher, commentary, or tradition must remain under the Graphē.

Assessment
Take one interpretation and separate: biblical text | inference | synthesis | pedagogical method | institutional claim.`,
  ),
  lesson(
    "les-graphe-14",
    "mod-graphe-labour-gate",
    14,
    "Turning aside, accepted heresies, and unskillfulness",
    90,
    `Central proposition
The manuscript diagnoses doctrinal turning aside, accepted heresies, aridity, and unskillfulness as failures that can occur among people who possess Scripture.

Reference
One Source of Truth, Chapters 71–73. Hebrews 5:11–14.

Word drill
1. Explain how erroneous teaching can become normalized without becoming true.
2. Define aridity as the manuscript uses the term; do not turn it into a generic emotional “dry season.”
3. Define ἄπειρος (apeiros) as unskillfulness/inexperience in the word of righteousness.
4. Connect unskillfulness to the Hebrews diagnosis without inventing extra marks.

Assessment
Defend the distinction between possessing Scripture, quoting Scripture, understanding Scripture, and being skilled in the word of righteousness.`,
  ),
  lesson(
    "les-graphe-15",
    "mod-graphe-labour-gate",
    15,
    "Scholarly labour: from perception to rightly dividing",
    105,
    `Central proposition
The final movement turns authority into disciplined labour: perception, learning, understanding, reasoning, quotation, knowledge, diligence, exercise, maturity, skill, and rightly dividing.

Reference
One Source of Truth, Chapters 74–84. 2 Timothy 2:15.

Word drill
1. Trace perception → learning → understanding → reasoning → knowledge.
2. Explain why quotation is not ignorance and why quotation alone is not complete understanding.
3. Define σπουδάζω (spoudazō, G4704) in its range of diligence, endeavour, labour, and study.
4. Explain the approved workman and rightly dividing the word of truth.
5. Identify the disciplines required for responsible biblical interpretation.

Assessment
Produce a written study showing the full labour chain on one biblical passage, clearly separating text, observation, inference, and conclusion.`,
  ),
  lesson(
    "les-graphe-16",
    "mod-graphe-labour-gate",
    16,
    "Capstone — Graphē as Gate, not seventh principle",
    90,
    `Central proposition
Chapter 85 closes the canonical Work by showing why the Doctrine of the Graphē prepares the learner for the Six First Principles without becoming a seventh principle.

Reference
One Source of Truth, Chapter 85, with review of Chapters 65, 66, 73, and 82–84.

Word drill
1. State the conclusion that the Graphē is the primary written authority without making this book or course Holy Writ.
2. Explain the difference between a canonical Work, a course, a handbook, and a first principle.
3. Name the six first principles in Hebrews 6:1–2.
4. Explain the sequence: Graphē → Doctrine of the Graphē → Preparation → Readiness → Six First Principles.
5. Defend why the Graphē Gate is not a seventh first principle.

Assessment
Final written defense required: establish the authority argument, preserve the Book/Course distinction, and explain why the learner is now ready to enter the Six First Principles.`,
  ),
];

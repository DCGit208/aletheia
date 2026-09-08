export interface ExamQuestion {
  id: string;
  prompt: string;
}

export interface WrittenExam {
  id: string;
  courseId?: string;
  title: string;
  subtitle: string;
  instructions: string;
  questions: ExamQuestion[];
}

const labour =
  "Write from the Scripture set, not from a heading. The Walk: one tight page per question. Intensive: three pages per question. Same doctrine. A certificate later will ask more than a click.";

export const courseExams: WrittenExam[] = [
  {
    id: "exam-fs-repentance",
    courseId: "course-fs-repentance",
    title: "Course 1 examination",
    subtitle: "Repentance from Dead Works",
    instructions: labour,
    questions: [
      { id: "q1", prompt: "Where are you still a hearer who must be taught the oracles again? Name the time you have already had. Write Hebrews 5:12 and reason it." },
      { id: "q2", prompt: "Name your dullness of hearing. Name where you are apeiros in the word of righteousness." },
      { id: "q3", prompt: "Write the seven words for repent with one text each. Distinguish metanoia from metamellomai. Do not invent an eighth." },
      { id: "q4", prompt: "Where have you treated Hell-avoidance as if it were metanoia? Use Luke 16:19-31 (not Matthew 16) and Revelation 20:10-15 as consequence, not as the definition." },
      { id: "q5", prompt: "Name the two old things that must pass. Give the old-man Scripture set and the outward-sin lists without merging them." },
      { id: "q6", prompt: "How does the blood of Christ purge the conscience from dead works (Hebrews 9:14)? Why is there no other name (Acts 4:12)?" },
      { id: "q7", prompt: "Have you received Him? Write the confession Romans 10:9 actually asks, with John 1:12-13." },
    ],
  },
  {
    id: "exam-fs-faith",
    courseId: "course-fs-faith",
    title: "Course 2 examination",
    subtitle: "Faith Toward God",
    instructions: labour,
    questions: [
      { id: "q1", prompt: "Why did Jesus come? Answer from Romans 3:23-24 and 1 Corinthians 11:7 in terms of glory and true nature, not a slogan." },
      { id: "q2", prompt: "Has man been justified? Show apolutrōsis in Romans 3:24. What must you stop adding to “freely”?" },
      { id: "q3", prompt: "You are the δικαιοσύνη (dikaiosynē) of God in Christ (2 Corinthians 5:21). According to Hebrews 1:8, what does that make you? Reason from the Scripture set. Do not invent a title." },
      { id: "q4", prompt: "Who is heir of God? What does heir mean? Write Galatians 4:7 and Romans 8:17." },
      { id: "q5", prompt: "How would you liken John 17:20-23? Write the likeness from the words. Do not reduce it to a merger." },
      { id: "q6", prompt: "What does Genesis 1:26-28 actually say, and what does it not say? Teach it as written. Mark the TLB as a gloss." },
    ],
  },
  {
    id: "exam-fs-baptisms",
    courseId: "course-fs-baptisms",
    title: "Course 3 examination",
    subtitle: "The Doctrine of Baptisms",
    instructions: labour,
    questions: [
      { id: "q1", prompt: "Name the seven baptisms in Scripture and the three essential for believers, in doctrinal order. Why does “one baptism” not cancel water and Spirit?" },
      { id: "q2", prompt: "Name the three agents with their texts." },
      { id: "q3", prompt: "Is it the water that saves, or what it figures? Answer from 1 Peter 3:21 and 1 Corinthians 1:17-18 together." },
      { id: "q4", prompt: "Hold Galatians 3:26 and 3:27 in one paragraph." },
      { id: "q5", prompt: "Who is the Spirit sent into (Galatians 4:6)? What is the prerequisite of Spirit baptism?" },
      { id: "q6", prompt: "Teach 2 Timothy 1:7 with Genesis 9:2 and Deuteronomy 11:25. You are the fear and dread. Not James 2:9. Do not soften. Do not boast without the Scripture set." },
      { id: "q7", prompt: "What is “Mine” in John 16:14-15 as this school ties it to Genesis 1:26-28?" },
    ],
  },
  {
    id: "exam-fs-hands",
    courseId: "course-fs-hands",
    title: "Course 4 examination",
    subtitle: "Laying on of Hands",
    instructions: labour,
    questions: [
      { id: "q1", prompt: "Write the nine occasions with their texts. No tenth." },
      { id: "q2", prompt: "Which earlier principles must already be laid before you treat hands as if they were the foundation?" },
      { id: "q3", prompt: "Name one practice you will not treat as a foundation. If it is one of the nine, keep it resultant. If it is a tenth, put it down." },
      { id: "q4", prompt: "Why is Simon’s money in Acts 8:17-24 part of the ninth occasion?" },
    ],
  },
  {
    id: "exam-fs-resurrection",
    courseId: "course-fs-resurrection",
    title: "Course 5 examination",
    subtitle: "Resurrection of the Dead",
    instructions: labour,
    questions: [
      { id: "q1", prompt: "Separate spiritual resurrection from material resurrection in one page a babe can follow." },
      { id: "q2", prompt: "Why can new birth not be postponed past death? Use Hebrews 9:27 and Revelation 22:11 only. Do not use 1 Corinthians 15:19 or Ecclesiastes 11:1 as this lock." },
      { id: "q3", prompt: "Who comes forth in John 5:28-29, and to what two resurrections?" },
      { id: "q4", prompt: "Place both material issues on the resurrection order. A thousand years between them. Which texts carry the doctrine (not Revelation 10)?" },
      { id: "q5", prompt: "Rapture 2 is not the second advent. State the difference in this sentence: tribulation seven years after rapture 2; advent with the saints after tribulation, ushering the Millennium." },
      { id: "q6", prompt: "Name the five companies: who, when, texts. Do not merge Company 2 and the advent. 144,000 is Revelation 7:1-8." },
      { id: "q7", prompt: "Why is Matthew 9:25 not the same as 1 Corinthians 15:20-23? Where are the Matthew 27 saints now, according to this school?" },
      { id: "q8", prompt: "Who is not in the first resurrection? When are they raised?" },
    ],
  },
  {
    id: "exam-fs-judgment",
    courseId: "course-fs-judgment",
    title: "Course 6 examination",
    subtitle: "Eternal Judgment",
    instructions: labour,
    questions: [
      { id: "q1", prompt: "Whom does “whosoever” in Revelation 20:15 refuse to exempt? Write Acts 10:34 with the verse." },
      { id: "q2", prompt: "Teach Exodus 32:32-33, Psalm 69:20-28 (Judas), and Revelation 3:5 as one Scripture set on blotting." },
      { id: "q3", prompt: "Define death as cutting off from Genesis 1:26-28 without using only “stopped breathing.”" },
      { id: "q4", prompt: "Give one text for each of the three deaths. Do not collapse them." },
      { id: "q5", prompt: "The soul and spirit are immortal. What then is raised from the dust?" },
      { id: "q6", prompt: "For each of the five prisons: who is there, who is not, what Scripture, what relation to the Millennium and the lake? None is the grave." },
      { id: "q7", prompt: "Paradise is now empty of the righteous. Where do the righteous go at death now, and why?" },
    ],
  },
];

export const yearFinal: WrittenExam = {
  id: "exam-fs-final",
  title: "Week 52 final",
  subtitle: "Foundation School — the six stones",
  instructions:
    "This is the integration of the year, not a seventh doctrine. Write from the Scripture sets. The Walk: one tight page per question. Intensive: three pages per question. Recite the resurrection order and the five prisons without flattening either teaching.",
  questions: [
    { id: "f1", prompt: "Name the six first principles in Hebrews’ order. What does “leaving” them mean, and what does it not mean?" },
    { id: "f2", prompt: "Metanoia versus metamellomai. The two old things. Christ the only way. Receive Him." },
    { id: "f3", prompt: "Pistis as credence. Genesis 1:26-28 as written. Free justification. Who is heir?" },
    { id: "f4", prompt: "Seven baptisms; three for believers; three agents. One baptism that saves. Water as figure. Spirit as witness. You are the fear and dread (Genesis 9:2; Deuteronomy 11:25)." },
    { id: "f5", prompt: "Nine occasions of hands. Resultant. No tenth." },
    { id: "f6", prompt: "Write the resurrection order and the five companies with texts. Rapture 2 is not the second advent. Spiritual resurrection is this life only (Hebrews 9:27; Revelation 22:11)." },
    { id: "f7", prompt: "Three deaths. Five prisons, none the grave. Book of life. Gehenna is not the grave. Paradise is empty of the righteous." },
    { id: "f8", prompt: "Teach the year to a babe in eight short paragraphs, then stand behind the same eight before a teacher. Do not submit a feeling in the place of the Scripture set." },
  ],
};

export function getExamForCourse(courseId: string) {
  return courseExams.find((exam) => exam.courseId === courseId) ?? null;
}

export function getExam(id: string) {
  if (id === yearFinal.id) return yearFinal;
  return courseExams.find((exam) => exam.id === id) ?? null;
}

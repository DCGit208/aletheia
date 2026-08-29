import type { Book, BookChapter, Course, CourseModule, Lesson, Program, School } from "@/lib/data/types";

const achu = { id: "author-achu", displayName: "Dr. Coach Achu Gustave" };

const leaflet = "book-aletheia-libraries-1";

const principleIds = [
  "course-fs-repentance",
  "course-fs-faith",
  "course-fs-baptisms",
  "course-fs-hands",
  "course-fs-resurrection",
  "course-fs-judgment",
] as const;

function course(
  id: (typeof principleIds)[number],
  title: string,
  subtitle: string,
  description: string,
  lessonCount: number,
): Course {
  return {
    id,
    title,
    subtitle,
    description,
    instructor: achu,
    category: "Foundation",
    difficulty: "introductory",
    durationMinutes: 180,
    coverTone: "ink",
    status: "published",
    accessLevel: "free",
    learningPathIds: [],
    prerequisiteCourseIds: [],
    certificateEligible: false,
    moduleCount: 1,
    lessonCount,
  };
}

export const foundationSchools: School[] = [
  {
    id: "school-foundation",
    title: "Foundation School",
    subtitle: "Principles of the Doctrine of Christ",
    description:
      "Hebrews 5:12–6:3. The first principles of the oracles of God: from milk to meat, from babe to teacher. One curriculum. Two ways to walk the year.",
    coverTone: "ink",
    status: "published",
    courseIds: [...principleIds],
    programIds: ["program-foundation-year", "program-foundation-intensive"],
    resourceBookIds: [leaflet],
  },
];

export const foundationPrograms: Program[] = [
  {
    id: "program-foundation-year",
    schoolId: "school-foundation",
    title: "Academic Year",
    subtitle: "Six principles across fifty-two weeks",
    description:
      "The Foundation School year. Each first principle occupies about eight to nine weeks. About three hours of study each week. Same teaching as the intensive — a different pace.",
    kind: "academic_year",
    durationWeeks: 52,
    hoursPerWeek: 3,
    unitWeeks: [9, 9, 8, 8, 9, 9],
    accessLevel: "free",
    status: "published",
    certificateEligible: true,
  },
  {
    id: "program-foundation-intensive",
    schoolId: "school-foundation",
    title: "One-Year Intensive",
    subtitle: "The same year, denser labour",
    description:
      "The same six principles and the same fifty-two weeks, with about eight hours of study each week. Not a second syllabus. A fuller load for those who will treat the year as a charge.",
    kind: "intensive",
    durationWeeks: 52,
    hoursPerWeek: 8,
    unitWeeks: [9, 9, 8, 8, 9, 9],
    accessLevel: "free",
    status: "published",
    certificateEligible: true,
  },
];

export const foundationBooks: Book[] = [
  {
    id: leaflet,
    title: "Principles of the Doctrine of Christ",
    subtitle: "Aletheia Libraries 1 — Foundation School leaflet",
    description:
      "A concise definition for true Christian experience. Hebrews 5:11–6:3: repentance from dead works, faith toward God, the doctrine of baptisms, laying on of hands, resurrection of the dead, and eternal judgment. The study leaflet of Foundation School.",
    authors: [achu],
    contributors: [],
    publisher: "Aletheia Libraries",
    publishedAt: "2015-01-01",
    language: "en",
    edition: "Leaflet",
    categories: ["Truth", "Formation"],
    tags: ["hebrews", "foundation", "first-principles", "libraries"],
    coverTone: "ink",
    status: "published",
    accessLevel: "public",
    previewChapterIds: ["ch-lib1-intro", "ch-lib1-repentance"],
    chapterCount: 7,
  },
];

export const foundationChapters: BookChapter[] = [
  {
    id: "ch-lib1-intro",
    bookId: leaflet,
    number: 1,
    title: "First principles of the oracles of God",
    body: `Hebrews 5:12 — “For when for the time ye ought to be teachers, ye have need that one teach you again which be the first principles of the oracles of God; and are become such as have need of milk, and not of strong meat.”

This leaflet is the cornerstone of Foundation School: the premiere convention for hearing from God and for spiritual growth — from first principles to maturity.

Two marks of babes: dull of hearing, and unskilled (Greek apeiros) in the word of righteousness. Skill here is not performance. It is spoudazo: diligence, labour, study.

Truth makes free. John 8:32.

The six principles of Hebrews 6:1–2 follow. They are not slogans. They are the foundation that is not to be laid again once it has been laid.`,
  },
  {
    id: "ch-lib1-repentance",
    bookId: leaflet,
    number: 2,
    title: "Repentance from dead works",
    body: `Hebrews 6:1 — “not laying again the foundation of repentance from dead works…”

Metanoia specifies remorse for guilt including reformation: a real change of mind and attitude over sin and its cause, not merely its consequence.

Nekros ergon — dead works — names two “old things” that must pass: the spirit, nature, and power of sin (the old man), and outward sin. The wages thereof is death. Romans 6:23.

The only way out of sin unto true repentance is Christ Jesus. “Therefore if any man be in Christ, he is a new creature.” 2 Corinthians 5:17. “Neither is there salvation in any other.” Acts 4:12.

Receive Him: John 1:12; Romans 10:8–9. Salvation from sin is the salvation you need, sin being the cause of all death and depravity.`,
  },
  {
    id: "ch-lib1-faith",
    bookId: leaflet,
    number: 3,
    title: "Faith toward God",
    body: `Hebrews 6:1 — “and of faith toward God.”

Pistis: credence. Faith defines our state as children of God — acceptance and adoption as sons. Galatians 4:5–7; Romans 8:15; Ephesians 1:5.

This approval rests on true nature from creation: Genesis 1:26–27. Man made in the image and likeness of God. Why did Jesus come? All have sinned and come short of that glory. Romans 3:23–24.

Justification is free, through the redemption (apolutrosis) that is in Christ Jesus. You are the righteousness of God in Christ. 2 Corinthians 5:21.

Further reading in the house: The Doctrine of Man. Who is heir of God? What does oneness in John 17:20–23 mean for a son?`,
  },
  {
    id: "ch-lib1-baptisms",
    bookId: leaflet,
    number: 4,
    title: "The doctrine of baptisms",
    body: `Hebrews 6:2 — “Of the doctrine of baptisms.”

Baptismos: washing. Ephesians 5:26; 1 Peter 1:23. The Word is the agency of new birth.

Three essential baptisms for believers, among seven mentioned in Scripture:

1. Baptism into Christ and His body at repentance and new birth — “one baptism” (Ephesians 4:5). This is the baptism that saves the soul. Galatians 3:27; Romans 6:3–7.

2. Water baptism after one is saved. It symbolizes the death, burial, and resurrection of Christ. 1 Peter 3:21. The water does not save. Faith in Christ saves. 1 Corinthians 1:17–18; Galatians 3:26.

3. Baptism in the Holy Spirit. The witness of sonship. “Because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father.” Galatians 4:6–7. Prerequisite: new birth. The Spirit guides into all truth. John 16:13–14.`,
  },
  {
    id: "ch-lib1-hands",
    bookId: leaflet,
    number: 5,
    title: "Laying on of hands",
    body: `Hebrews 6:2 — “and of laying on of hands.”

Scripture records laying on of hands for blessing, offering, ordaining, imparting the Spirit, blessing children, healing, miracles, imparting gifts, and imparting Spirit baptism.

It is viable as you actualize the more grounding, elementary things of the faith. It plays a resultant role. It is not a substitute for the foundation.`,
  },
  {
    id: "ch-lib1-resurrection",
    bookId: leaflet,
    number: 6,
    title: "Resurrection of the dead",
    body: `Hebrews 6:2 — “and of resurrection of the dead.”

Two kinds: spiritual and material.

Spiritual resurrection is the new birth: quickened from death in trespasses and sins. Ephesians 2:1–6. It takes place only in this life. After this life, the possibility of new birth has passed. Hebrews 9:27.

Material resurrection is the resurrection of the body. John 5:28–29: they that have done good, unto the resurrection of life; they that have done evil, unto the resurrection of damnation.

Christ is the firstfruits of them that slept. 1 Corinthians 15. Those who have part in the first resurrection reign with Him. Revelation 20:4–6.`,
  },
  {
    id: "ch-lib1-judgment",
    bookId: leaflet,
    number: 7,
    title: "Eternal judgment",
    body: `Hebrews 6:2 — “and of eternal judgment.”

Matthew 25:46; Revelation 20:11–15. Whosoever was not found written in the book of life was cast into the lake of fire. This is the second death.

Three kinds of death in Scripture: physical (inner man separated from the body), spiritual (man separated from God because of sin), and the second death (eternal separation in the lake of fire). The soul and spirit of man is immortal. Resurrection concerns the body.

The underworld is not one room. Scripture distinguishes Tartarus, Paradise (now empty of the righteous since Christ ascended), hell, the abyss, and the lake of fire.

This principle closes the foundation. It is not laid to produce fear as a product. It is laid so that a people will not treat judgment as a rumour.`,
  },
];

export const foundationCourses: Course[] = [
  course(
    "course-fs-repentance",
    "Repentance from Dead Works",
    "Hebrews 6:1",
    "Metanoia: a change of mind over sin and its cause, not only its consequence. Christ is the way out of dead works.",
    2,
  ),
  course(
    "course-fs-faith",
    "Faith Toward God",
    "Hebrews 6:1",
    "Pistis as sonship. Image, likeness, justification, and the heir.",
    2,
  ),
  course(
    "course-fs-baptisms",
    "The Doctrine of Baptisms",
    "Hebrews 6:2",
    "Into Christ, in water as sign, and in the Spirit as witness of sonship.",
    2,
  ),
  course(
    "course-fs-hands",
    "Laying on of Hands",
    "Hebrews 6:2",
    "Blessing, ordaining, healing, gifts — resultant, not a substitute for the foundation.",
    2,
  ),
  course(
    "course-fs-resurrection",
    "Resurrection of the Dead",
    "Hebrews 6:2",
    "Spiritual resurrection now; material resurrection of the body. Christ the firstfruits.",
    2,
  ),
  course(
    "course-fs-judgment",
    "Eternal Judgment",
    "Hebrews 6:2",
    "The book of life, kinds of death, and the prisons of the underworld — studied, not sloganized.",
    2,
  ),
];

export const foundationModules: CourseModule[] = principleIds.map((courseId, index) => ({
  id: `mod-fs-${index + 1}`,
  courseId,
  number: 1,
  title: "Study",
  description: "Read the leaflet. Then write what you will practice.",
}));

const lessonPairs: { courseId: (typeof principleIds)[number]; chapterId: string; read: string; write: string }[] = [
  {
    courseId: "course-fs-repentance",
    chapterId: "ch-lib1-repentance",
    read: "Read the leaflet chapter on repentance from dead works. Name the two “old things” that must pass, and why consequence alone is not repentance.",
    write: "Write one page: where have you treated regret as if it were metanoia? What would reformation look like this week?",
  },
  {
    courseId: "course-fs-faith",
    chapterId: "ch-lib1-faith",
    read: "Read faith toward God. How does Genesis 1:26–27 govern Romans 3:23–24?",
    write: "Write six sentences on sonship that you could stand behind without performance.",
  },
  {
    courseId: "course-fs-baptisms",
    chapterId: "ch-lib1-baptisms",
    read: "Distinguish the three baptisms. Which one saves the soul, and why is water a sign rather than the power?",
    write: "State, in your own words, why Galatians 3:26–27 and 1 Corinthians 1:17–18 must be held together.",
  },
  {
    courseId: "course-fs-hands",
    chapterId: "ch-lib1-hands",
    read: "List the biblical occasions of laying on of hands. Which of them depend on the earlier principles already being laid?",
    write: "Name one resultant practice you will not treat as a foundation.",
  },
  {
    courseId: "course-fs-resurrection",
    chapterId: "ch-lib1-resurrection",
    read: "Separate spiritual resurrection from material resurrection. Why can new birth not be postponed past this life?",
    write: "Write a short public paragraph on 1 Corinthians 15:20–23 that a babe could follow.",
  },
  {
    courseId: "course-fs-judgment",
    chapterId: "ch-lib1-judgment",
    read: "Read eternal judgment. Distinguish the three deaths and the five prisons named in the leaflet.",
    write: "What would it cost you to speak of judgment without spectacle and without denial?",
  },
];

export const foundationLessons: Lesson[] = lessonPairs.flatMap((pair, index) => {
  const moduleId = `mod-fs-${index + 1}`;
  return [
    {
      id: `les-fs-${index + 1}a`,
      courseId: pair.courseId,
      moduleId,
      number: 1,
      title: "Read",
      durationMinutes: 40,
      resourceIds: [leaflet],
      body: pair.read,
    },
    {
      id: `les-fs-${index + 1}b`,
      courseId: pair.courseId,
      moduleId,
      number: 2,
      title: "Write",
      durationMinutes: 35,
      resourceIds: [leaflet],
      body: pair.write,
    },
  ];
});

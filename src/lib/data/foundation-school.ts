import { baptismsLessons, baptismsModules } from "@/lib/content/course-baptisms";
import { faithLessons, faithModules } from "@/lib/content/course-faith";
import { handsLessons, handsModules } from "@/lib/content/course-hands";
import { judgmentLessons, judgmentModules } from "@/lib/content/course-judgment";
import { repentanceLessons, repentanceModules } from "@/lib/content/course-repentance";
import { resurrectionLessons, resurrectionModules } from "@/lib/content/course-resurrection";
import {
  grapheLessons,
  grapheModules,
  oneSourceBook,
  oneSourceChapters,
  oneSourceCourse,
} from "@/lib/data/one-source-of-truth";
import { ONE_SOURCE_BOOK_ID } from "@/lib/content/book-one-source-of-truth";
import { textbookChapter1Body, textbookChapter1Title } from "@/lib/content/textbook-ch1";
import { textbookChapter2Body, textbookChapter2Title } from "@/lib/content/textbook-ch2";
import { textbookChapter3Body, textbookChapter3Title } from "@/lib/content/textbook-ch3";
import { textbookChapter4Body, textbookChapter4Title } from "@/lib/content/textbook-ch4";
import { textbookChapter5Body, textbookChapter5Title } from "@/lib/content/textbook-ch5";
import { textbookChapter6Body, textbookChapter6Title } from "@/lib/content/textbook-ch6";
import { textbookChapter7Body, textbookChapter7Title } from "@/lib/content/textbook-ch7";
import type { Book, BookChapter, Course, CourseModule, Lesson, Program, School } from "@/lib/data/types";

const achu = { id: "author-achu", displayName: "Dr. Coach Achu Gustave" };

const textbook = "book-principles-doctrine-christ";

const principleIds = [
  "course-fs-repentance",
  "course-fs-faith",
  "course-fs-baptisms",
  "course-fs-hands",
  "course-fs-resurrection",
  "course-fs-judgment",
] as const;

export const foundationSchoolIntroduction = {
  lead:
    "Foundation School is the first house of study in Aletheia. It begins where Hebrews begins: with the first principles of the oracles of God, then trains the student to leave milk without leaving the foundation.",
  sections: [
    {
      title: "Why the school begins with the graphē",
      body: [
        "Before doctrine can be tested, taught, or lived, the authority for truth must be settled. That authority is the γραφή (graphē): Holy Writ, the Bible, Scripture, the written Word.",
        "The graphē is not one voice among many. It is the written court before which persons, organizations, governments, nations, traditions, experiences, and teachers must stand.",
      ],
    },
    {
      title: "The problem the leaflet identifies",
      body: [
        "The Aletheia Libraries 1 leaflet warns that believers can remain unskilled in the word of righteousness even when they possess Scripture. Hebrews calls that condition ἄπειρος (apeiros): inexperienced or unskilled.",
        "Such a person remains νήπιος (nēpios): a babe, immature in hearing and unable to handle strong meat. Foundation School exists to answer that condition with Scripture, reason, written labour, and tested doctrine.",
      ],
    },
    {
      title: "What the year teaches",
      body: [
        "The school teaches the six principles named in Hebrews 6:1-2: repentance from dead works, faith toward God, the doctrine of baptisms, laying on of hands, resurrection of the dead, and eternal judgment.",
        "These are not disconnected topics. They are the foundation by which a student learns to hear, distinguish, reason, write, practice, and teach without replacing Scripture with slogans.",
      ],
    },
    {
      title: "How the student labours",
      body: [
        "The leaflet uses σπουδάζω (spoudazō): diligence, earnest effort, labour, and study. Foundation School turns that charge into a weekly discipline of reading, word drill, Scripture writing, distinctions, and written responses.",
        "The Walk and The Intensive follow the same curriculum. The Intensive adds more labour; it does not create another doctrine or a second school.",
      ],
    },
  ],
  terms: [
    {
      term: "γραφή",
      transliteration: "graphē",
      meaning: "Holy Writ: the written authority by which truth is known and tested.",
    },
    {
      term: "λόγια",
      transliteration: "logia",
      meaning: "Oracles: the sayings of God entrusted to be taught and obeyed.",
    },
    {
      term: "ἄπειρος",
      transliteration: "apeiros",
      meaning: "Unskilled or inexperienced in the word of righteousness.",
    },
    {
      term: "νήπιος",
      transliteration: "nēpios",
      meaning: "A babe: immature, still needing milk when maturity is required.",
    },
    {
      term: "σπουδάζω",
      transliteration: "spoudazō",
      meaning: "Diligent effort: labour, study, and earnest attention to the Word.",
    },
  ],
  outcomes: [
    "Students know why Scripture is the court for truth.",
    "Students can explain each first principle from its governing texts.",
    "Students can identify the error each lesson refuses.",
    "Students practice doctrine through written labour, not passive consumption.",
    "Students move from milk toward maturity without inventing a seventh foundation.",
  ],
} as const;

function course(
  id: (typeof principleIds)[number],
  title: string,
  subtitle: string,
  description: string,
  lessonCount: number,
  moduleCount = 1,
  durationMinutes = 180,
  productId?: string,
): Course {
  return {
    id,
    title,
    subtitle,
    description,
    instructor: achu,
    category: "Foundation",
    difficulty: "introductory",
    durationMinutes,
    coverTone: "ink",
    status: "published",
    accessLevel: "entitled",
    productId,
    learningPathIds: [],
    prerequisiteCourseIds: [],
    certificateEligible: true,
    moduleCount,
    lessonCount,
  };
}

export const foundationSchools: School[] = [
  {
    id: "school-foundation",
    title: "Foundation School",
    subtitle: "Principles of the Doctrine of Christ",
    description:
      "A 52-week school of first principles from Hebrews 5:12-6:3. Begin with the graphē, then walk the six foundations from milk toward maturity.",
    coverTone: "ink",
    status: "published",
    courseIds: [oneSourceCourse.id, ...principleIds],
    programIds: ["program-foundation-year", "program-foundation-intensive"],
    resourceBookIds: [ONE_SOURCE_BOOK_ID, textbook],
  },
];

export const foundationYearGrantIds = [ONE_SOURCE_BOOK_ID, textbook, oneSourceCourse.id, ...principleIds] as const;

export const foundationPrograms: Program[] = [
  {
    id: "program-foundation-year",
    schoolId: "school-foundation",
    title: "The Walk",
    subtitle: "The three-hour walk of the year.",
    description:
      "The ordinary cadence of Foundation School: about three hours each week for fifty-two weeks. The Walk begins with the graphē, then carries the six first principles in order with the textbook. Same doctrine as The Intensive; lighter weekly labour.",
    kind: "year",
    durationWeeks: 52,
    hoursPerWeek: 3,
    unitWeeks: [9, 9, 8, 8, 9, 9],
    accessLevel: "entitled",
    status: "published",
    productId: "product-foundation-year",
    certificateEligible: true,
  },
  {
    id: "program-foundation-intensive",
    schoolId: "school-foundation",
    title: "The Intensive",
    subtitle: "The same walk. About eight hours a week.",
    description:
      "The same fifty-two-week order at about eight hours each week. The Intensive begins with the graphē, then carries the same six first principles and textbook with fuller writing, drill, and examination labour.",
    kind: "intensive",
    durationWeeks: 52,
    hoursPerWeek: 8,
    unitWeeks: [9, 9, 8, 8, 9, 9],
    accessLevel: "entitled",
    status: "published",
    productId: "product-foundation-intensive",
    certificateEligible: true,
  },
];

export const foundationBooks: Book[] = [
  oneSourceBook,
  {
    id: textbook,
    title: "The Principles of the Doctrine of Christ",
    subtitle: "Foundations for Christian Understanding & Maturity",
    description:
      "The Foundation School textbook. Seven chapters: the oracles, the six first principles, chronology, and eternal judgment. One Source of Truth — The Doctrine of the Graphē is the standalone volume on the written authority. Aletheia Publications. Truth · Knowledge · Maturity.",
    authors: [achu],
    contributors: [],
    publisher: "Aletheia Publications",
    publishedAt: "2026-08-29",
    language: "en",
    edition: "First",
    categories: ["Truth", "Formation"],
    tags: ["hebrews", "foundation", "first-principles", "textbook"],
    coverTone: "earth",
    coverImage: "/covers/principles-doctrine-christ.jpg",
    status: "published",
    accessLevel: "entitled",
    previewChapterIds: ["ch-pdc-1"],
    productId: "product-principles-doctrine-christ",
    chapterCount: 7,
  },
];

export const foundationChapters: BookChapter[] = [
  ...oneSourceChapters,
  {
    id: "ch-pdc-1",
    bookId: textbook,
    number: 1,
    title: textbookChapter1Title,
    body: textbookChapter1Body,
  },
  {
    id: "ch-pdc-2",
    bookId: textbook,
    number: 2,
    title: textbookChapter2Title,
    body: textbookChapter2Body,
  },
  {
    id: "ch-pdc-3",
    bookId: textbook,
    number: 3,
    title: textbookChapter3Title,
    body: textbookChapter3Body,
  },
  {
    id: "ch-pdc-4",
    bookId: textbook,
    number: 4,
    title: textbookChapter4Title,
    body: textbookChapter4Body,
  },
  {
    id: "ch-pdc-5",
    bookId: textbook,
    number: 5,
    title: textbookChapter5Title,
    body: textbookChapter5Body,
  },
  {
    id: "ch-pdc-6",
    bookId: textbook,
    number: 6,
    title: textbookChapter6Title,
    body: textbookChapter6Body,
  },
  {
    id: "ch-pdc-7",
    bookId: textbook,
    number: 7,
    title: textbookChapter7Title,
    body: textbookChapter7Body,
  },
];

export const foundationCourses: Course[] = [
  oneSourceCourse,
  course(
    "course-fs-repentance",
    "Repentance from Dead Works",
    "Hebrews 6:1 · 9 weeks · 17 lessons",
    "Metanoia: a change of mind over sin and its cause, not only its consequence. Christ is the way out of dead works. Read Chapters 1–2, then walk the seventeen lessons.",
    17,
    3,
    1290,
    "product-course-repentance",
  ),
  course(
    "course-fs-faith",
    "Faith Toward God",
    "Hebrews 6:1 · 9 weeks · 17 lessons",
    "Pistis as credence that defines sons. Image, likeness, free justification, and the heir. Read Chapter 3, then walk the seventeen lessons.",
    17,
    3,
    1290,
    "product-course-faith",
  ),
  course(
    "course-fs-baptisms",
    "The Doctrine of Baptisms",
    "Hebrews 6:2 · 8 weeks · 16 lessons",
    "Three essential baptisms among seven in Scripture. Only baptism into Christ saves the soul. Water is the figure after salvation. The Spirit is witness of the son. Read Chapter 4, then walk the sixteen lessons.",
    16,
    3,
    1215,
    "product-course-baptisms",
  ),
  course(
    "course-fs-hands",
    "Laying on of Hands",
    "Hebrews 6:2 · 8 weeks · 12 lessons",
    "Nine biblical occasions. Resultant, not a substitute for the foundation. Read Chapter 5, then walk the twelve lessons.",
    12,
    3,
    915,
    "product-course-hands",
  ),
  course(
    "course-fs-resurrection",
    "Resurrection of the Dead",
    "Hebrews 6:2 · 9 weeks · 18 lessons",
    "Two kinds. Two bodily issues a thousand years apart. Five companies in the first resurrection. Rapture 2 is not the second advent. Read Chapter 6, then walk the eighteen lessons.",
    18,
    3,
    1365,
    "product-course-resurrection",
  ),
  course(
    "course-fs-judgment",
    "Eternal Judgment",
    "Hebrews 6:2 · 9 weeks · 15 lessons",
    "Eternal punishment, the book of life, three deaths, and five prisons — none of them the grave. Read Chapter 7, then walk the fifteen lessons. Week 52 integrates the year.",
    15,
    3,
    1140,
    "product-course-judgment",
  ),
];

export const foundationModules: CourseModule[] = [
  ...grapheModules,
  ...repentanceModules,
  ...faithModules,
  ...baptismsModules,
  ...handsModules,
  ...resurrectionModules,
  ...judgmentModules,
];

export const foundationLessons: Lesson[] = [
  ...grapheLessons,
  ...repentanceLessons,
  ...faithLessons,
  ...baptismsLessons,
  ...handsLessons,
  ...resurrectionLessons,
  ...judgmentLessons,
];

import { baptismsLessons, baptismsModules } from "@/lib/content/course-baptisms";
import { faithLessons, faithModules } from "@/lib/content/course-faith";
import { handsLessons, handsModules } from "@/lib/content/course-hands";
import { judgmentLessons, judgmentModules } from "@/lib/content/course-judgment";
import { repentanceLessons, repentanceModules } from "@/lib/content/course-repentance";
import { resurrectionLessons, resurrectionModules } from "@/lib/content/course-resurrection";
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
      "Hebrews 5:12–6:3. The first principles of the oracles of God: from milk to meat, from babe to teacher. One curriculum. Two ways to walk the year.",
    coverTone: "ink",
    status: "published",
    courseIds: [...principleIds],
    programIds: ["program-foundation-year", "program-foundation-intensive"],
    resourceBookIds: [textbook],
  },
];

export const foundationYearGrantIds = [textbook, ...principleIds] as const;

export const foundationPrograms: Program[] = [
  {
    id: "program-foundation-year",
    schoolId: "school-foundation",
    title: "The Walk",
    subtitle: "The three-hour walk of the year.",
    description:
      "The ordinary cadence of Foundation School: about three hours each week, fifty-two weeks, the six first principles in order. Same teaching as The Intensive — a different labour. The $400 purchase grants the six courses and the textbook. It does not grant the companion library.",
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
      "The same six principles and the same fifty-two weeks, with about eight hours each week. Not a second syllabus. A fuller load on the same walk. The $400 purchase grants the six courses and the textbook. It does not grant the companion library.",
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
  {
    id: textbook,
    title: "The Principles of the Doctrine of Christ",
    subtitle: "Foundations for Christian Understanding & Maturity",
    description:
      "The Foundation School textbook. Seven chapters: the oracles, the six first principles, chronology, and eternal judgment. Aletheia Publications. Truth · Knowledge · Maturity.",
    authors: [achu],
    contributors: [],
    publisher: "Aletheia Publications",
    publishedAt: "2026-08-29",
    language: "en",
    edition: "First",
    categories: ["Truth", "Formation"],
    tags: ["hebrews", "foundation", "first-principles", "textbook"],
    coverTone: "ink",
    coverImage: "/covers/principles-doctrine-christ.jpg",
    status: "published",
    accessLevel: "entitled",
    previewChapterIds: ["ch-pdc-1"],
    productId: "product-principles-doctrine-christ",
    chapterCount: 7,
  },
];

export const foundationChapters: BookChapter[] = [
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
  ...repentanceModules,
  ...faithModules,
  ...baptismsModules,
  ...handsModules,
  ...resurrectionModules,
  ...judgmentModules,
];

export const foundationLessons: Lesson[] = [
  ...repentanceLessons,
  ...faithLessons,
  ...baptismsLessons,
  ...handsLessons,
  ...resurrectionLessons,
  ...judgmentLessons,
];

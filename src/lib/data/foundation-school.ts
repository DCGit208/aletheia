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

export const foundationHandbookBookId = "book-principles-doctrine-christ";
export const foundationGateCourseId = oneSourceCourse.id;

export const foundationPrincipleCourseIds = [
  "course-fs-repentance",
  "course-fs-faith",
  "course-fs-baptisms",
  "course-fs-hands",
  "course-fs-resurrection",
  "course-fs-judgment",
] as const;

export const foundationSchoolIntroduction = {
  lead:
    "Foundation School is the first house of study in Aletheia. It begins with the written authority for truth, then walks the six first principles named in Hebrews 6:1-2 so the student can leave milk without leaving the foundation.",
  scriptures: [
    {
      reference: "Hebrews 5:12-14",
      text:
        "For when for the time ye ought to be teachers, ye have need that one teach you again which be the first principles of the oracles of God; and are become such as have need of milk, and not of strong meat. For every one that useth milk is unskilful in the word of righteousness: for he is a babe. But strong meat belongeth to them that are of full age, even those who by reason of use have their senses exercised to discern both good and evil.",
      point:
        "The school answers the condition of possessing Scripture while remaining unskilled in the word of righteousness.",
    },
    {
      reference: "Hebrews 6:1-2",
      text:
        "Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God, of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment.",
      point:
        "The six courses are not invented categories. They are the named foundation from which the student must go on to maturity.",
    },
    {
      reference: "2 Timothy 2:15",
      text:
        "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.",
      point:
        "The approved workman studies, labours, and rightly handles the word of truth.",
    },
  ],
  sections: [
    {
      title: "1. The entrance: the graphē",
      body: [
        "Before doctrine can be tested, taught, or lived, the authority for truth must be settled. That authority is the γραφή (graphē, G1124): Holy Writ, the Bible, the written Word.",
        "The Graphē gate is therefore first. It is not counted as one of the six first principles; it establishes the court by which the six principles are read, reasoned, corrected, and obeyed.",
      ],
    },
    {
      title: "2. The problem: unskilled hearing",
      body: [
        "Hebrews 5:12-14 teaches that a person may have time, religious exposure, and access to Scripture, yet still need the first principles taught again. The problem is not the absence of a Bible; it is unskilled handling of the word of righteousness.",
        "Hebrews calls that condition ἄπειρος (apeiros, G552): without experience, unskilled. It also calls the person νήπιος (nēpios, G3516): a babe who still needs milk when strong meat is required.",
      ],
    },
    {
      title: "3. The foundation: six first principles",
      body: [
        "The school teaches the six principles named in Hebrews 6:1-2: repentance from dead works, faith toward God, the doctrine of baptisms, laying on of hands, resurrection of the dead, and eternal judgment.",
        "These are not disconnected topics, slogans, or a private syllabus. They are the foundation by which a student learns to hear, distinguish, reason, write, practice, and teach under Scripture.",
      ],
    },
    {
      title: "4. The labour: study before God",
      body: [
        "In 2 Timothy 2:15, the word translated \"study\" is σπουδάζω (spoudazō, G4704): to make effort, be earnest, be diligent, labour, and study. Foundation School turns that charge into weekly reading, word drill, Scripture writing, distinctions, and written responses.",
        "The Walk and The Intensive follow the same curriculum. The Intensive adds fuller labour; it does not create another doctrine, another foundation, or a second school.",
      ],
    },
    {
      title: "5. The books and the courses",
      body: [
        "One Source of Truth — The Doctrine of the Graphē is the gate book and course: it establishes Holy Writ as the written authority for truth. The Principles of the Doctrine of Christ is the school handbook: a concise reference included with the Foundation School program.",
        "The six courses must still be complete courses. A student should not need to leave a lesson, read a handbook chapter elsewhere, and return before the doctrine becomes intelligible. Independent $100 doctrinal books serve readers who want expanded standalone treatment beyond the school course.",
      ],
    },
  ],
  terms: [
    {
      term: "γραφή",
      transliteration: "graphē",
      strong: "G1124",
      anchor: "2 Timothy 3:16; John 10:35",
      meaning: "Scripture, Holy Writ: the written authority by which truth is known, tested, taught, and obeyed.",
    },
    {
      term: "λόγια",
      transliteration: "logia",
      strong: "G3051",
      anchor: "Hebrews 5:12",
      meaning: "Oracles: the sayings of God, entrusted to be taught, learned, and obeyed.",
    },
    {
      term: "ἄπειρος",
      transliteration: "apeiros",
      strong: "G552",
      anchor: "Hebrews 5:13",
      meaning: "Unskilled or inexperienced in the word of righteousness.",
    },
    {
      term: "νήπιος",
      transliteration: "nēpios",
      strong: "G3516",
      anchor: "Hebrews 5:13",
      meaning: "A babe: immature in hearing, still needing milk when maturity is required.",
    },
    {
      term: "σπουδάζω",
      transliteration: "spoudazō",
      strong: "G4704",
      anchor: "2 Timothy 2:15",
      meaning: "Diligent effort: to make effort, be earnest, labour, study, and rightly handle the word of truth.",
    },
  ],
  outcomes: [
    "Students know why Scripture is the court for truth before any doctrine is examined.",
    "Students can explain each first principle from its governing Scriptures.",
    "Students can identify the error each lesson refuses.",
    "Students practice doctrine through written labour, not passive consumption or slogans.",
    "Students understand the role of the gate course, the handbook, the six courses, and independent books.",
    "Students move from milk toward maturity without inventing a seventh foundation.",
  ],
} as const;

function course(
  id: (typeof foundationPrincipleCourseIds)[number],
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
      "A 52-week school of first principles from Hebrews 5:12-6:3. Enter through the graphē, then walk the six Hebrews 6 foundations from milk toward maturity.",
    coverTone: "ink",
    status: "published",
    courseIds: [...foundationPrincipleCourseIds],
    programIds: ["program-foundation-year", "program-foundation-intensive"],
    resourceBookIds: [ONE_SOURCE_BOOK_ID, foundationHandbookBookId],
  },
];

export const foundationYearGrantIds = [
  ONE_SOURCE_BOOK_ID,
  foundationHandbookBookId,
  foundationGateCourseId,
  ...foundationPrincipleCourseIds,
] as const;

export const foundationPrograms: Program[] = [
  {
    id: "program-foundation-year",
    schoolId: "school-foundation",
    title: "The Walk",
    subtitle: "The three-hour walk of the year.",
    description:
      "The ordinary cadence of Foundation School: about three hours each week for fifty-two weeks. The Walk begins with the Graphē gate, then carries the six Hebrews 6 first principles as complete courses. The school handbook supports the course; it does not replace the lessons.",
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
      "The same fifty-two-week order at about eight hours each week. The Intensive begins with the Graphē gate, then walks the same six first principles with fuller writing, drill, and examination labour. It is a deeper load, not another doctrine or a second syllabus.",
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
    id: foundationHandbookBookId,
    title: "The Principles of the Doctrine of Christ",
    subtitle: "Foundations for Christian Understanding & Maturity",
    description:
      "The Foundation School handbook for the six Hebrews 6 first principles. It is included with The Walk and The Intensive as a concise reference beside the complete courses. The independent doctrinal books remain deeper standalone publications for extended reading; the courses do not require them before a lesson can be understood.",
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
    bookId: foundationHandbookBookId,
    number: 1,
    title: textbookChapter1Title,
    body: textbookChapter1Body,
  },
  {
    id: "ch-pdc-2",
    bookId: foundationHandbookBookId,
    number: 2,
    title: textbookChapter2Title,
    body: textbookChapter2Body,
  },
  {
    id: "ch-pdc-3",
    bookId: foundationHandbookBookId,
    number: 3,
    title: textbookChapter3Title,
    body: textbookChapter3Body,
  },
  {
    id: "ch-pdc-4",
    bookId: foundationHandbookBookId,
    number: 4,
    title: textbookChapter4Title,
    body: textbookChapter4Body,
  },
  {
    id: "ch-pdc-5",
    bookId: foundationHandbookBookId,
    number: 5,
    title: textbookChapter5Title,
    body: textbookChapter5Body,
  },
  {
    id: "ch-pdc-6",
    bookId: foundationHandbookBookId,
    number: 6,
    title: textbookChapter6Title,
    body: textbookChapter6Body,
  },
  {
    id: "ch-pdc-7",
    bookId: foundationHandbookBookId,
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
    "Metanoia: a change of mind over sin and its cause, not only its consequence. Christ is the way out of dead works. A complete seventeen-lesson course with the school handbook as supporting reference.",
    17,
    3,
    1290,
    "product-course-repentance",
  ),
  course(
    "course-fs-faith",
    "Faith Toward God",
    "Hebrews 6:1 · 9 weeks · 17 lessons",
    "Pistis as credence that defines sons. Image, likeness, free justification, and the heir. A complete seventeen-lesson course with the school handbook as supporting reference.",
    17,
    3,
    1290,
    "product-course-faith",
  ),
  course(
    "course-fs-baptisms",
    "The Doctrine of Baptisms",
    "Hebrews 6:2 · 8 weeks · 16 lessons",
    "Three essential baptisms among seven in Scripture. Only baptism into Christ saves the soul. Water is the figure after salvation. The Spirit is witness of the son. A complete sixteen-lesson course with the school handbook as supporting reference.",
    16,
    3,
    1215,
    "product-course-baptisms",
  ),
  course(
    "course-fs-hands",
    "Laying on of Hands",
    "Hebrews 6:2 · 8 weeks · 12 lessons",
    "Nine biblical occasions. Resultant, not a substitute for the foundation. A complete twelve-lesson course with the school handbook as supporting reference.",
    12,
    3,
    915,
    "product-course-hands",
  ),
  course(
    "course-fs-resurrection",
    "Resurrection of the Dead",
    "Hebrews 6:2 · 9 weeks · 18 lessons",
    "Two kinds. Two bodily issues a thousand years apart. Five companies in the first resurrection. Rapture 2 is not the second advent. A complete eighteen-lesson course with the school handbook as supporting reference.",
    18,
    3,
    1365,
    "product-course-resurrection",
  ),
  course(
    "course-fs-judgment",
    "Eternal Judgment",
    "Hebrews 6:2 · 9 weeks · 15 lessons",
    "Eternal punishment, the book of life, three deaths, and five prisons — none of them the grave. A complete fifteen-lesson course with the school handbook as supporting reference. Week 52 integrates the year.",
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

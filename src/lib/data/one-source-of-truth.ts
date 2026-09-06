import {
  ONE_SOURCE_BOOK_ID,
  ONE_SOURCE_COURSE_ID,
  ONE_SOURCE_PRODUCT_ID,
  oneSourceBookSubtitle,
  oneSourceBookTag,
  oneSourceBookTitle,
  oneSourceChapters,
} from "@/lib/content/book-one-source-of-truth";
import { grapheLessons, grapheModules } from "@/lib/content/course-doctrine-of-the-graphe";
import type { Book, Course } from "@/lib/data/types";

const achu = { id: "author-achu", displayName: "Dr. Coach Achu Gustave" };

/** Standalone book — Doctrine of the Graphē. */
export const oneSourceBook: Book = {
  id: ONE_SOURCE_BOOK_ID,
  title: oneSourceBookTitle,
  subtitle: `${oneSourceBookSubtitle} · ${oneSourceBookTag}`,
  description:
    "Before Christianity can speak authoritatively about what man should believe, how he should live, how he should grow, or how he should hear from God, it must establish the authority by which those claims are known. That authority is the Graphē — Holy Writ: one written source, and the premiere convention for hearing from God and for spiritual growth.",
  authors: [achu],
  contributors: [],
  publisher: "Aletheia Publications",
  publishedAt: "2026-09-05",
  language: "en",
  edition: "First",
  categories: ["Truth", "Formation", "Hermeneutics"],
  tags: ["graphē", "holy-writ", "hermeneutics", "epistemology", "foundation"],
  coverTone: "earth",
  coverImage: "/covers/one-source-of-truth.png",
  status: "published",
  accessLevel: "entitled",
  previewChapterIds: [
    "ch-ost-1",
    "ch-ost-2",
    "ch-ost-3",
    "ch-ost-4",
    "ch-ost-5",
    "ch-ost-6",
    "ch-ost-7",
    "ch-ost-8",
    "ch-ost-9",
    "ch-ost-10",
    "ch-ost-11",
    "ch-ost-12",
    "ch-ost-13",
  ],
  productId: ONE_SOURCE_PRODUCT_ID,
  chapterCount: oneSourceChapters.length,
};

export { oneSourceChapters };

/** Companion course — operationalizes the book; not Course 1 of the six. */
export const oneSourceCourse: Course = {
  id: ONE_SOURCE_COURSE_ID,
  title: "One Source of Truth",
  subtitle: "The Doctrine of the Graphē · Word drill course",
  description:
    "Sixteen Word-drill lessons that labour One Source of Truth: the Graphē as premiere convention, Hebrews 5 diagnosis, apeiros and nēpios, aridity and tergiversation, spoudazō, knowledge as perception–learning–reasoning, and the Word drill method. The course is not the convention; Holy Writ is.",
  instructor: achu,
  category: "Foundation",
  difficulty: "introductory",
  durationMinutes: 1410,
  coverTone: "earth",
  coverImage: "/covers/one-source-of-truth.png",
  status: "published",
  accessLevel: "entitled",
  productId: "product-course-doctrine-of-the-graphe",
  learningPathIds: [],
  prerequisiteCourseIds: [],
  certificateEligible: true,
  moduleCount: grapheModules.length,
  lessonCount: grapheLessons.length,
};

export { grapheLessons, grapheModules };

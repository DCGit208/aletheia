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
    "Before Christianity can speak authoritatively about what man should believe, how he should live, how he should grow, or how he should hear from God, it must establish the authority by which those claims are known. That authority is the Graphē — Holy Writ: one written source, and the primary authority for hearing from God and for spiritual growth.",
  authors: [achu],
  contributors: [],
  publisher: "Aletheia Publications",
  publishedAt: "2026-10-04",
  language: "en",
  edition: "Canonical 85-Chapter Manuscript",
  categories: ["Truth", "Formation", "Hermeneutics"],
  tags: ["graphē", "holy-writ", "hermeneutics", "epistemology", "foundation"],
  coverTone: "earth",
  coverImage: "/covers/one-source-of-truth.png",
  status: "published",
  accessLevel: "entitled",
  previewChapterIds: [],
  productId: ONE_SOURCE_PRODUCT_ID,
  chapterCount: 85,
};

export { oneSourceChapters };

/** Companion course — operationalizes the book; not Course 1 of the six. */
export const oneSourceCourse: Course = {
  id: ONE_SOURCE_COURSE_ID,
  title: "One Source of Truth",
  subtitle: "The Doctrine of the Graphē · Word drill course",
  description:
    "Sixteen Word-drill lessons on γραφή (graphē), Holy Writ as the written authority for truth. The course opens Hebrews 5: ἄπειρος (apeiros), the unskilled; νήπιος (nēpios), the babe; and σπουδάζω (spoudazō), diligent labour in the Word. The course is a pedagogical pathway through the complete 85-chapter Work. It serves the Graphē; it does not replace the Work, and it is not a seventh first principle.",
  instructor: achu,
  category: "Foundation",
  difficulty: "introductory",
  durationMinutes: 1455,
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

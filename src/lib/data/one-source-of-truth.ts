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

/** Flagship gate book — not a seventh first principle. */
export const oneSourceBook: Book = {
  id: ONE_SOURCE_BOOK_ID,
  title: oneSourceBookTitle,
  subtitle: `${oneSourceBookSubtitle} · ${oneSourceBookTag}`,
  description:
    "Holy Writ is the premiere convention for hearing from God and for spiritual growth. This volume is a straight issue on the cornerstone: how the graphē governs authority, hearing, knowledge, reasoning, Word labour, discernment, and the path from first principles to maturity. Twenty chapters across Parts I–VIII. Not a seventh doctrine — the methodological gate into the six.",
  authors: [achu],
  contributors: [],
  publisher: "Aletheia Publications",
  publishedAt: "2026-09-05",
  language: "en",
  edition: "First",
  categories: ["Truth", "Formation", "Hermeneutics"],
  tags: ["graphē", "holy-writ", "hermeneutics", "epistemology", "gate", "foundation"],
  coverTone: "earth",
  coverImage: "/covers/one-source-of-truth.png",
  status: "published",
  accessLevel: "entitled",
  previewChapterIds: ["ch-ost-1"],
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
    "Ten competency lessons that train what the book teaches: graphē as premiere convention, Hebrews 5 diagnosis, apeiros and nēpios, spoudazō, knowledge as perception–learning–reasoning, Word drill, and the gate into the six first principles. The course is not the convention; Holy Writ is.",
  instructor: achu,
  category: "Foundation",
  difficulty: "introductory",
  durationMinutes: 660,
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

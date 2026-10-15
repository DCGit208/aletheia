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
  description: `**What makes something true—and how can we know?**

We live among competing claims about what is true. Some are inherited. Others are taught, discovered, interpreted, or accepted because we trust the people who present them. Some become so familiar that questioning them feels unnecessary. Others are defended with such confidence that confidence itself begins to look like evidence.

Yet a claim may be sincerely believed, widely accepted, logically appealing, institutionally endorsed, and repeatedly asserted—and still be false.

The difficulty is not simply that people disagree about truth. It is that **the very grounds on which we accept something as true may themselves require examination.** We may trust a source without having established its reliability, accept an explanation without examining its foundations, or mistake the strength of our conviction for the strength of the evidence behind it.

When competing claims cannot all be true, what determines which one deserves to be accepted? What makes a source authoritative, and on what grounds can that authority itself be established?

These questions reach beyond individual beliefs. They lead us to the foundation upon which claims to truth must stand—and to whether what we accept as knowledge rests on grounds that can withstand examination.

*One Source of Truth — The Doctrine of the Graphē* brings the reader to the foundation of this inquiry: the source and authority of truth, and the grounds upon which it can be known.`,
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

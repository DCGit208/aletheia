/** One Source of Truth — The Doctrine of the Graphē
 * Application adapter for the authoritative 85-chapter manuscript.
 * Canonical prose is preserved in Book Matter/One Source of Truth/.
 */
import type { BookChapter } from "@/lib/data/types";
import part01 from "./one-source-canonical-01.json";
import part02 from "./one-source-canonical-02.json";
import part03 from "./one-source-canonical-03.json";
import part04 from "./one-source-canonical-04.json";
import part05 from "./one-source-canonical-05.json";

export const ONE_SOURCE_BOOK_ID = "book-one-source-of-truth";
export const ONE_SOURCE_PRODUCT_ID = "product-one-source-of-truth";
export const ONE_SOURCE_COURSE_ID = "course-doctrine-of-the-graphe";

export const oneSourceBookTitle = "One Source of Truth";
export const oneSourceBookSubtitle = "The Doctrine of the Graphē";
export const oneSourceBookTag = "A hermeneutical and epistemological foundation";

export const oneSourcePartTitles = [
  "Movement I — Truth and the Possibility of Knowledge",
  "Movement II — God, Truth, and Revelation",
  "Movement III — What Is the Bible?",
  "Movement IV — How the Written Record Was Given",
  "Movement V — How the Claim Is Authenticated",
  "Movement VI — Christ as the Central Witness",
  "Movement VII — Scripture, Canon, and Infallibility",
  "Movement VIII — Christ's Verdict on the Graphē",
  "Movement IX — When Authoritative Truth Is Mishandled",
  "Movement X — The Scholarly Labour of the Graphē",
] as const;

const canonicalParts = [
  ...part01.chapters,
  ...part02.chapters,
  ...part03.chapters,
  ...part04.chapters,
  ...part05.chapters,
] as BookChapter[];

if (canonicalParts.length !== 85 || canonicalParts.some((chapter, index) => chapter.number !== index + 1)) {
  throw new Error("One Source canonical manuscript must contain exactly Chapters 1–85 in order.");
}

export const oneSourceChapters: BookChapter[] = canonicalParts;

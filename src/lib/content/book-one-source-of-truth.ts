/** One Source of Truth — The Doctrine of the Graphē
 * Canonical reader-facing manuscript.
 * The chapter sets are generated directly from the authoritative 85-chapter manuscript in Book Matter/One Source of Truth/.
 */
import type { BookChapter } from "@/lib/data/types";
import { oneSourceChapters01 } from "@/lib/content/one-source/chapter-set-01";
import { oneSourceChapters02 } from "@/lib/content/one-source/chapter-set-02";
import { oneSourceChapters03 } from "@/lib/content/one-source/chapter-set-03";
import { oneSourceChapters04 } from "@/lib/content/one-source/chapter-set-04";
import { oneSourceChapters05 } from "@/lib/content/one-source/chapter-set-05";
import { oneSourceChapters06 } from "@/lib/content/one-source/chapter-set-06";
import { oneSourceChapters07 } from "@/lib/content/one-source/chapter-set-07";
import { oneSourceChapters08 } from "@/lib/content/one-source/chapter-set-08";
import { oneSourceChapters09b } from "@/lib/content/one-source/chapter-set-09b";
import { oneSourceChapters10 } from "@/lib/content/one-source/chapter-set-10";
import { oneSourceChapters11 } from "@/lib/content/one-source/chapter-set-11";
import { oneSourceChapters12 } from "@/lib/content/one-source/chapter-set-12";
import { oneSourceChapters09 } from "@/lib/content/one-source/chapter-set-09";

export const ONE_SOURCE_BOOK_ID = "book-one-source-of-truth";
export const ONE_SOURCE_PRODUCT_ID = "product-one-source-of-truth";
export const ONE_SOURCE_COURSE_ID = "course-doctrine-of-the-graphe";

export const oneSourceBookTitle = "One Source of Truth";
export const oneSourceBookSubtitle = "The Doctrine of the Graphē";
export const oneSourceBookTag = "A rigorous investigation of truth, its ground, divine revelation, the Holy Writ, its authentication, authority, infallibility, and the intellectual labour required to know and rightly handle it";

export const oneSourcePartTitles = [
  "Movement I — Truth and the Possibility of Knowledge",
  "Movement II — God, Truth, and Revelation",
  "Movement III — What Is the Bible?",
  "Movement IV — How the Written Record Was Given",
  "Movement V — Authentication of the Written Record",
  "Movement VI — Christ as Central Witness",
  "Movement VII — Scripture, Canon, and Infallibility",
  "Movement VIII — Christ’s Verdict on the Graphē",
  "Movement IX — Mishandling Authoritative Truth",
  "Movement X — Scholarly Labour and Interpretation",
] as const;

export const oneSourceChapters: BookChapter[] = [
  ...oneSourceChapters01,
  ...oneSourceChapters02,
  ...oneSourceChapters03,
  ...oneSourceChapters04,
  ...oneSourceChapters05,
  ...oneSourceChapters06,
  ...oneSourceChapters07,
  ...oneSourceChapters08,
  ...oneSourceChapters09b,
  ...oneSourceChapters10,
  ...oneSourceChapters11,
  ...oneSourceChapters12,
  ...oneSourceChapters09,
];

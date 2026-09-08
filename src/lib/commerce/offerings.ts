/** Server-trusted prices and grants. The client must never send amounts.
 *  This file is copied into Cloud Functions — keep it free of Next.js path aliases.
 */

export type GrantKind = "book" | "course" | "program";

export interface GrantTarget {
  contentKind: GrantKind;
  contentId: string;
}

export type ShopGroupId = "year" | "textbook" | "courses" | "publications" | "other";

export interface StripeOffer {
  productId: string;
  title: string;
  description: string;
  kind: "book" | "course" | "publication" | "resource" | "bundle" | "program";
  contentId?: string;
  includedContentIds?: string[];
  priceCents: number;
  compareAtCents?: number;
  grants: GrantTarget[];
  coverTone: string;
  coverImage?: string;
  shopGroup: ShopGroupId;
  badge: string;
  kicker: string;
}

const foundationCourses = [
  "course-doctrine-of-the-graphe",
  "course-fs-repentance",
  "course-fs-faith",
  "course-fs-baptisms",
  "course-fs-hands",
  "course-fs-resurrection",
  "course-fs-judgment",
] as const;

const textbook = "book-principles-doctrine-christ";
const oneSourceBook = "book-one-source-of-truth";

function schoolGrants(programId: string): GrantTarget[] {
  return [
    { contentKind: "program", contentId: programId },
    { contentKind: "book", contentId: oneSourceBook },
    { contentKind: "book", contentId: textbook },
    ...foundationCourses.map((contentId) => ({ contentKind: "course" as const, contentId })),
  ];
}

function bookOffer(
  productId: string,
  title: string,
  description: string,
  contentId: string,
  priceCents: number,
  extras: Pick<StripeOffer, "shopGroup" | "badge" | "kicker" | "coverTone" | "coverImage">,
): StripeOffer {
  return {
    productId,
    title,
    description,
    kind: "book",
    contentId,
    priceCents,
    grants: [{ contentKind: "book", contentId }],
    ...extras,
  };
}

function courseOffer(
  productId: string,
  title: string,
  description: string,
  contentId: string,
  extras: Pick<StripeOffer, "shopGroup" | "badge" | "kicker" | "coverTone" | "coverImage"> & {
    priceCents?: number;
    supportGrants?: GrantTarget[];
  },
): StripeOffer {
  const grants = [{ contentKind: "course" as const, contentId }, ...(extras.supportGrants ?? [])];
  return {
    productId,
    title,
    description,
    kind: "course",
    contentId,
    includedContentIds: grants.map((grant) => grant.contentId),
    priceCents: extras.priceCents ?? 10000,
    grants,
    shopGroup: extras.shopGroup,
    badge: extras.badge,
    kicker: extras.kicker,
    coverTone: extras.coverTone,
    coverImage: extras.coverImage,
  };
}

export const STRIPE_OFFERS: Record<string, StripeOffer> = {
  "product-maker-bible": bookOffer(
    "product-maker-bible",
    "MAKER BIBLE — Lordship Edition",
    "A Bible for discovering the Maker, understanding man made in His image, and learning to steward creation as a maker under the Lordship of the Maker.",
    "book-maker-bible",
    15000,
    {
      shopGroup: "publications",
      badge: "Bible",
      kicker: "One book · $150",
      coverTone: "gold",
      coverImage: "/covers/maker-bible-lordship.jpg",
    },
  ),
  "product-foundation-year": {
    productId: "product-foundation-year",
    title: "Foundation School — The Walk",
    description:
      "The 52-week Foundation School program. Grants the Graphē gate book and course, The Principles of the Doctrine of Christ handbook, and all six complete first-principle courses. Does not include Maker Bible or the companion library. $400 instead of à la carte.",
    kind: "program",
    contentId: "program-foundation-year",
    includedContentIds: ["program-foundation-year", oneSourceBook, textbook, ...foundationCourses],
    priceCents: 40000,
    compareAtCents: 80000,
    grants: schoolGrants("program-foundation-year"),
    coverTone: "earth",
    shopGroup: "year",
    badge: "Year",
    kicker: "Year program · gate + six + textbook",
  },
  "product-foundation-intensive": {
    productId: "product-foundation-intensive",
    title: "Foundation School — The Intensive",
    description:
      "The same 52-week Foundation School order at about eight hours a week. Grants the Graphē gate book and course, the school handbook, and all six complete first-principle courses. Fuller labour, not a second syllabus. Does not include Maker Bible or the companion library.",
    kind: "program",
    contentId: "program-foundation-intensive",
    includedContentIds: ["program-foundation-intensive", oneSourceBook, textbook, ...foundationCourses],
    priceCents: 40000,
    compareAtCents: 80000,
    grants: schoolGrants("program-foundation-intensive"),
    coverTone: "gold",
    shopGroup: "year",
    badge: "Year",
    kicker: "Year program · gate + six + textbook",
  },
  "product-one-source-of-truth": bookOffer(
    "product-one-source-of-truth",
    "One Source of Truth — The Doctrine of the Graphē",
    "The gate book for Foundation School. Holy Writ is the written authority for truth, hearing from God, and spiritual growth: one written source, the scripture that cannot be broken, and the writing above the interpreter. Included with The Walk and The Intensive.",
    oneSourceBook,
    10000,
    {
      shopGroup: "textbook",
      badge: "Gate",
      kicker: "Gate book · $100",
      coverTone: "earth",
      coverImage: "/covers/one-source-of-truth.png",
    },
  ),
  "product-course-doctrine-of-the-graphe": courseOffer(
    "product-course-doctrine-of-the-graphe",
    "Course — One Source of Truth (Doctrine of the Graphē)",
    "Sixteen Word-drill lessons on One Source of Truth — The Doctrine of the Graphē. Not one of the six first-principle courses. Included with The Walk and The Intensive.",
    "course-doctrine-of-the-graphe",
    {
      shopGroup: "courses",
      badge: "Gate course",
      kicker: "Word drill · gate",
      coverTone: "earth",
      coverImage: "/covers/one-source-of-truth.png",
      supportGrants: [{ contentKind: "book", contentId: oneSourceBook }],
    },
  ),
  "product-principles-doctrine-christ": bookOffer(
    "product-principles-doctrine-christ",
    "The Principles of the Doctrine of Christ",
    "The Foundation School handbook: a concise reference on the oracles and the six first principles. Included with The Walk, The Intensive, and single Foundation course purchases as support; it does not replace the courses.",
    textbook,
    10000,
    {
      shopGroup: "textbook",
      badge: "Textbook",
      kicker: "Textbook · $100",
      coverTone: "earth",
      coverImage: "/covers/principles-doctrine-christ.jpg",
    },
  ),
  "product-course-repentance": courseOffer(
    "product-course-repentance",
    "Course 1 of 6 — Repentance from Dead Works",
    "Seventeen complete lessons on metanoia: a change of mind over sin and its cause. Includes the Foundation School handbook as supporting reference.",
    "course-fs-repentance",
    {
      shopGroup: "courses",
      badge: "Course 1/6",
      kicker: "Course + handbook",
      coverTone: "ink",
      supportGrants: [{ contentKind: "book", contentId: textbook }],
    },
  ),
  "product-course-faith": courseOffer(
    "product-course-faith",
    "Course 2 of 6 — Faith Toward God",
    "Seventeen complete lessons on pistis, sonship, and the heir. Includes the Foundation School handbook as supporting reference.",
    "course-fs-faith",
    {
      shopGroup: "courses",
      badge: "Course 2/6",
      kicker: "Course + handbook",
      coverTone: "ink",
      supportGrants: [{ contentKind: "book", contentId: textbook }],
    },
  ),
  "product-course-baptisms": courseOffer(
    "product-course-baptisms",
    "Course 3 of 6 — The Doctrine of Baptisms",
    "Sixteen complete lessons on the baptisms in Scripture. Includes the Foundation School handbook as supporting reference.",
    "course-fs-baptisms",
    {
      shopGroup: "courses",
      badge: "Course 3/6",
      kicker: "Course + handbook",
      coverTone: "ink",
      supportGrants: [{ contentKind: "book", contentId: textbook }],
    },
  ),
  "product-course-hands": courseOffer(
    "product-course-hands",
    "Course 4 of 6 — Laying on of Hands",
    "Twelve complete lessons on nine biblical occasions. Includes the Foundation School handbook as supporting reference.",
    "course-fs-hands",
    {
      shopGroup: "courses",
      badge: "Course 4/6",
      kicker: "Course + handbook",
      coverTone: "ink",
      supportGrants: [{ contentKind: "book", contentId: textbook }],
    },
  ),
  "product-course-resurrection": courseOffer(
    "product-course-resurrection",
    "Course 5 of 6 — Resurrection of the Dead",
    "Eighteen complete lessons on two kinds and five companies. Includes the Foundation School handbook as supporting reference.",
    "course-fs-resurrection",
    {
      shopGroup: "courses",
      badge: "Course 5/6",
      kicker: "Course + handbook",
      coverTone: "ink",
      supportGrants: [{ contentKind: "book", contentId: textbook }],
    },
  ),
  "product-course-judgment": courseOffer(
    "product-course-judgment",
    "Course 6 of 6 — Eternal Judgment",
    "Fifteen complete lessons on eternal punishment, three deaths, and five prisons. Includes the Foundation School handbook as supporting reference.",
    "course-fs-judgment",
    {
      shopGroup: "courses",
      badge: "Course 6/6",
      kicker: "Course + handbook",
      coverTone: "ink",
      supportGrants: [{ contentKind: "book", contentId: textbook }],
    },
  ),
  "product-foundations-bundle": {
    productId: "product-foundations-bundle",
    title: "Three Foundational Books",
    description:
      "Companion library only: Beyond AI — Man, The Doctrine of Man, and The Real Man in the Age of AI. Not Foundation School. Not Maker Bible. Regular value $300. Bundle $150.",
    kind: "bundle",
    includedContentIds: ["book-beyond-ai-man", "book-doctrine-of-man", "book-real-man-ai"],
    priceCents: 15000,
    compareAtCents: 30000,
    grants: [
      { contentKind: "book", contentId: "book-beyond-ai-man" },
      { contentKind: "book", contentId: "book-doctrine-of-man" },
      { contentKind: "book", contentId: "book-real-man-ai" },
    ],
    coverTone: "gold",
    coverImage: "/covers/foundations-bundle.jpg",
    shopGroup: "publications",
    badge: "Bundle",
    kicker: "Three companion books",
  },
  "product-beyond-ai-man": bookOffer(
    "product-beyond-ai-man",
    "Beyond AI — Man",
    "Companion book. Digital edition. Cover and thesis are open to preview; full manuscript follows. Not a Foundation School course.",
    "book-beyond-ai-man",
    10000,
    {
      shopGroup: "publications",
      badge: "Book",
      kicker: "Companion book · $100",
      coverTone: "ink",
      coverImage: "/covers/beyond-ai-man.jpg",
    },
  ),
  "product-doctrine-of-man": bookOffer(
    "product-doctrine-of-man",
    "The Doctrine of Man",
    "Companion book. Digital edition of the identity volume. Not the Foundation School textbook.",
    "book-doctrine-of-man",
    10000,
    {
      shopGroup: "publications",
      badge: "Book",
      kicker: "Companion book · $100",
      coverTone: "gold",
      coverImage: "/covers/doctrine-of-man.jpg",
    },
  ),
  "product-real-man-ai": bookOffer(
    "product-real-man-ai",
    "The Real Man in the Age of AI",
    "Companion book. Digital edition on man, Christ, and dominion in the age of AI.",
    "book-real-man-ai",
    10000,
    {
      shopGroup: "publications",
      badge: "Book",
      kicker: "Companion book · $100",
      coverTone: "earth",
      coverImage: "/covers/real-man-age-of-ai.jpg",
    },
  ),
  "product-parables-hidden-treasure": bookOffer(
    "product-parables-hidden-treasure",
    "The Parables of the Hidden Treasure",
    "Companion book. Digital edition. Matthew 13:44.",
    "book-parables-hidden-treasure",
    10000,
    {
      shopGroup: "publications",
      badge: "Book",
      kicker: "Companion book · $100",
      coverTone: "gold",
      coverImage: "/covers/parables-hidden-treasure.jpg",
    },
  ),
  "product-repentance-from-dead-works": bookOffer(
    "product-repentance-from-dead-works",
    "Repentance from Dead Works",
    "Companion book for Course 1 — Repentance from Dead Works. Hebrews 6:1. Eight chapters: metanoia, seven repent-words, cause not consequence, two old things, wages, Christ the way, receive Him.",
    "book-repentance-from-dead-works",
    10000,
    {
      shopGroup: "publications",
      badge: "Book",
      kicker: "Companion book · $100",
      coverTone: "earth",
      coverImage: "/covers/repentance-from-dead-works-chains.png",
    },
  ),
  "product-doctrine-of-faith": bookOffer(
    "product-doctrine-of-faith",
    "Doctrine of Faith",
    "Companion book for Course 2 — Faith Toward God. Eight chapters: pistis, image and likeness, Psalm 82, partakers, glory come short, free justification, heirship, John 17 and the face of Christ.",
    "book-doctrine-of-faith",
    10000,
    {
      shopGroup: "publications",
      badge: "Book",
      kicker: "Companion book · $100",
      coverTone: "earth",
      coverImage: "/covers/doctrine-of-faith-seal.png",
    },
  ),
  "product-doctrine-of-baptism": bookOffer(
    "product-doctrine-of-baptism",
    "Doctrine of Baptism",
    "Companion book for Course 3 — The Doctrine of Baptisms. Born of the Word. Baptized into Christ. Baptized in the Holy Spirit.",
    "book-doctrine-of-baptism",
    10000,
    {
      shopGroup: "publications",
      badge: "Book",
      kicker: "Companion book · $100",
      coverTone: "ink",
      coverImage: "/covers/doctrine-of-baptism-triquetra.png",
    },
  ),
  "product-doctrine-of-laying-on-of-hands": bookOffer(
    "product-doctrine-of-laying-on-of-hands",
    "Doctrine of Laying on of Hands",
    "Companion book for Course 4 — Laying on of Hands. Hebrews 6:2. Resultant ministry, not a substitute for the foundation.",
    "book-doctrine-of-laying-on-of-hands",
    10000,
    {
      shopGroup: "publications",
      badge: "Book",
      kicker: "Companion book · $100",
      coverTone: "earth",
      coverImage: "/covers/doctrine-of-laying-on-of-hands.png",
    },
  ),
  "product-doctrine-of-resurrection": bookOffer(
    "product-doctrine-of-resurrection",
    "Doctrine of Resurrection of the Dead",
    "Companion book for Course 5 — Resurrection of the Dead. Hebrews 6:2. Two kinds. Two bodily issues. Five companies in the first resurrection.",
    "book-doctrine-of-resurrection",
    10000,
    {
      shopGroup: "publications",
      badge: "Book",
      kicker: "Companion book · $100",
      coverTone: "earth",
      coverImage: "/covers/doctrine-of-resurrection-stone.png",
    },
  ),
  "product-doctrine-of-eternal-judgment": bookOffer(
    "product-doctrine-of-eternal-judgment",
    "Doctrine of Eternal Judgment",
    "Companion book for Course 6 — Eternal Judgment. Hebrews 6:2. Once to die, after this the judgment. Eternal punishment, the book of life, three deaths, five prisons.",
    "book-doctrine-of-eternal-judgment",
    10000,
    {
      shopGroup: "publications",
      badge: "Book",
      kicker: "Companion book · $100",
      coverTone: "ink",
      coverImage: "/covers/doctrine-of-eternal-judgment-seal.png",
    },
  ),
  "product-great-deception": bookOffer(
    "product-great-deception",
    "The Great Deception",
    "Companion book. Digital edition. A study of 2 Thessalonians 2:3–12.",
    "book-great-deception",
    10000,
    {
      shopGroup: "publications",
      badge: "Book",
      kicker: "Companion book · $100",
      coverTone: "ink",
      coverImage: "/covers/great-deception.jpg",
    },
  ),
  "product-course-dominion": courseOffer(
    "product-course-dominion",
    "Dominion as Stewardship — course access",
    "The third course on the Aletheia Path. Not a Foundation School principle. $45.",
    "course-dominion",
    {
      shopGroup: "other",
      badge: "Path course",
      kicker: "Aletheia Path · one course",
      coverTone: "earth",
      coverImage: "/covers/real-man-age-of-ai.jpg",
      priceCents: 4500,
    },
  ),
};

export const SHOP_GROUP_ORDER: ShopGroupId[] = ["year", "textbook", "courses", "publications", "other"];

export function getOffer(productId: string): StripeOffer | null {
  return STRIPE_OFFERS[productId] ?? null;
}

export function productsFromOffers() {
  return Object.values(STRIPE_OFFERS).map((offer) => ({
    id: offer.productId,
    title: offer.title,
    description: offer.description,
    kind: offer.kind,
    contentId: offer.contentId,
    includedContentIds: offer.includedContentIds,
    priceCents: offer.priceCents,
    compareAtCents: offer.compareAtCents,
    currency: "USD" as const,
    status: "published" as const,
    coverTone: offer.coverTone,
    coverImage: offer.coverImage,
  }));
}

export function offersForProductIds(productIds: string[]): StripeOffer[] {
  const unique = [...new Set(productIds)];
  return unique.map((id) => {
    const offer = STRIPE_OFFERS[id];
    if (!offer) throw new Error(`Unknown product: ${id}`);
    return offer;
  });
}

export function uniqueGrants(productIds: string[]): GrantTarget[] {
  const seen = new Set<string>();
  const grants: GrantTarget[] = [];
  for (const offer of offersForProductIds(productIds)) {
    for (const grant of offer.grants) {
      const key = `${grant.contentKind}:${grant.contentId}`;
      if (seen.has(key)) continue;
      seen.add(key);
      grants.push(grant);
    }
  }
  return grants;
}

/** Year SKUs only — courses, textbook, and publications stay card-only. */
export const MOMO_YEAR_PRODUCT_IDS = ["product-foundation-year", "product-foundation-intensive"] as const;

export type MomoYearProductId = (typeof MOMO_YEAR_PRODUCT_IDS)[number];

/** $400 at 600 XAF. Not another product’s yearly FCFA figure. */
export const MOMO_YEAR_XAF = 240_000;

export const MOMO_PAYEES = {
  mtn: { number: "237 677 604 100", name: "Achu Gustave Mokom", ussd: "*126#" },
  orange: { number: "237 699 651 555", name: "Achu Gustave Mokom", ussd: "#150#" },
} as const;

export type MomoNetwork = keyof typeof MOMO_PAYEES;

export const MOMO_REVIEWER_EMAILS = [
  "bthedugrp@gmail.com",
  "house_justice@yahoo.com",
  "dr.coachachu@btheducationgroup.org",
] as const;

export function isMomoYearProduct(productId: string): productId is MomoYearProductId {
  return (MOMO_YEAR_PRODUCT_IDS as readonly string[]).includes(productId);
}

export function isMomoEligibleCart(productIds: string[]): boolean {
  return productIds.length === 1 && isMomoYearProduct(productIds[0]);
}

export function formatMomoXaf(amount = MOMO_YEAR_XAF): string {
  return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0")} FCFA`;
}

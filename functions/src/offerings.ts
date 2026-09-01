/** Server-trusted prices and grants. The client must never send amounts. */

export type GrantKind = "book" | "course" | "program";

export interface GrantTarget {
  contentKind: GrantKind;
  contentId: string;
}

export interface StripeOffer {
  productId: string;
  title: string;
  priceCents: number;
  grants: GrantTarget[];
}

const foundationCourses = [
  "course-fs-repentance",
  "course-fs-faith",
  "course-fs-baptisms",
  "course-fs-hands",
  "course-fs-resurrection",
  "course-fs-judgment",
] as const;

const textbook = "book-principles-doctrine-christ";

function schoolGrants(programId: string): GrantTarget[] {
  return [
    { contentKind: "program", contentId: programId },
    { contentKind: "book", contentId: textbook },
    ...foundationCourses.map((contentId) => ({ contentKind: "course" as const, contentId })),
  ];
}

function book(productId: string, title: string, contentId: string, priceCents: number): StripeOffer {
  return {
    productId,
    title,
    priceCents,
    grants: [{ contentKind: "book", contentId }],
  };
}

function course(productId: string, title: string, contentId: string, priceCents = 10000): StripeOffer {
  return {
    productId,
    title,
    priceCents,
    grants: [{ contentKind: "course", contentId }],
  };
}

export const STRIPE_OFFERS: Record<string, StripeOffer> = {
  "product-maker-bible": book(
    "product-maker-bible",
    "MAKER BIBLE — Lordship Edition",
    "book-maker-bible",
    15000,
  ),
  "product-foundation-year": {
    productId: "product-foundation-year",
    title: "Foundation School — The Walk",
    priceCents: 40000,
    grants: schoolGrants("program-foundation-year"),
  },
  "product-foundation-intensive": {
    productId: "product-foundation-intensive",
    title: "Foundation School — The Intensive",
    priceCents: 40000,
    grants: schoolGrants("program-foundation-intensive"),
  },
  "product-foundations-bundle": {
    productId: "product-foundations-bundle",
    title: "Three Foundational Books",
    priceCents: 15000,
    grants: [
      { contentKind: "book", contentId: "book-beyond-ai-man" },
      { contentKind: "book", contentId: "book-doctrine-of-man" },
      { contentKind: "book", contentId: "book-real-man-ai" },
    ],
  },
  "product-beyond-ai-man": book("product-beyond-ai-man", "Beyond AI — Man", "book-beyond-ai-man", 10000),
  "product-doctrine-of-man": book("product-doctrine-of-man", "The Doctrine of Man", "book-doctrine-of-man", 10000),
  "product-real-man-ai": book(
    "product-real-man-ai",
    "The Real Man in the Age of AI",
    "book-real-man-ai",
    10000,
  ),
  "product-parables-hidden-treasure": book(
    "product-parables-hidden-treasure",
    "The Parables of the Hidden Treasure",
    "book-parables-hidden-treasure",
    10000,
  ),
  "product-principles-doctrine-christ": book(
    "product-principles-doctrine-christ",
    "The Principles of the Doctrine of Christ",
    textbook,
    10000,
  ),
  "product-course-repentance": course(
    "product-course-repentance",
    "Repentance from Dead Works",
    "course-fs-repentance",
  ),
  "product-course-faith": course("product-course-faith", "Faith Toward God", "course-fs-faith"),
  "product-course-baptisms": course("product-course-baptisms", "The Doctrine of Baptisms", "course-fs-baptisms"),
  "product-course-hands": course("product-course-hands", "Laying on of Hands", "course-fs-hands"),
  "product-course-resurrection": course(
    "product-course-resurrection",
    "Resurrection of the Dead",
    "course-fs-resurrection",
  ),
  "product-course-judgment": course("product-course-judgment", "Eternal Judgment", "course-fs-judgment"),
  "product-great-deception": book(
    "product-great-deception",
    "The Great Deception",
    "book-great-deception",
    10000,
  ),
  "product-course-dominion": course(
    "product-course-dominion",
    "Dominion as Stewardship — course access",
    "course-dominion",
    4500,
  ),
};

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

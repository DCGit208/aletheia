import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const permissions = {
  "admin.access": ["administrator"],
  "community.create": ["administrator"],
};

function hasPermission(role, permission) {
  if (!role || role === "guest") return false;
  return permissions[permission].includes(role);
}

function canAccessContent({ accessLevel, preview, entitlements, contentKind, contentId }) {
  if (accessLevel === "public" || accessLevel === "free") return true;
  if (preview) return true;
  return entitlements.some((item) => item.contentKind === contentKind && item.contentId === contentId);
}

assert.equal(hasPermission("member", "admin.access"), false);
assert.equal(hasPermission("administrator", "admin.access"), true);
assert.equal(hasPermission("member", "community.create"), false);
assert.equal(
  canAccessContent({
    accessLevel: "entitled",
    preview: false,
    entitlements: [],
    contentKind: "book",
    contentId: "book-doctrine-of-man",
  }),
  false,
);
assert.equal(
  canAccessContent({
    accessLevel: "entitled",
    preview: true,
    entitlements: [],
    contentKind: "book",
    contentId: "book-doctrine-of-man",
  }),
  true,
);

function contentKindForId(contentId) {
  if (contentId.startsWith("course-")) return "course";
  if (contentId.startsWith("program-")) return "program";
  if (contentId.startsWith("article-")) return "article";
  if (contentId.startsWith("journal-")) return "journal";
  return "book";
}

function grantTargetsForProduct(product) {
  if (product.includedContentIds?.length) {
    const ids = [...product.includedContentIds];
    if (product.contentId && !ids.includes(product.contentId)) ids.unshift(product.contentId);
    const seen = new Set();
    return ids
      .map((contentId) => ({ contentKind: contentKindForId(contentId), contentId }))
      .filter((target) => {
        const key = `${target.contentKind}:${target.contentId}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
  }
  if (!product.contentId) return [];
  if (product.kind === "course") return [{ contentKind: "course", contentId: product.contentId }];
  if (product.kind === "program") return [{ contentKind: "program", contentId: product.contentId }];
  return [{ contentKind: "book", contentId: product.contentId }];
}

const yearTargets = grantTargetsForProduct({
  kind: "program",
  contentId: "program-foundation-year",
  includedContentIds: [
    "program-foundation-year",
    "book-principles-doctrine-christ",
    "course-fs-repentance",
    "course-fs-faith",
    "course-fs-baptisms",
    "course-fs-hands",
    "course-fs-resurrection",
    "course-fs-judgment",
  ],
});
assert.equal(yearTargets.length, 8);
assert.equal(yearTargets.filter((item) => item.contentKind === "course").length, 6);
assert.equal(yearTargets.filter((item) => item.contentKind === "book").length, 1);
assert.equal(yearTargets.filter((item) => item.contentKind === "program").length, 1);
assert.deepEqual(
  grantTargetsForProduct({
    kind: "bundle",
    includedContentIds: ["book-beyond-ai-man", "book-doctrine-of-man"],
  }).map((item) => item.contentKind),
  ["book", "book"],
);

const makerTargets = grantTargetsForProduct({
  kind: "book",
  contentId: "book-maker-bible",
});
assert.deepEqual(makerTargets, [{ contentKind: "book", contentId: "book-maker-bible" }]);
assert.equal(
  yearTargets.some((item) => item.contentId === "book-maker-bible"),
  false,
);
assert.equal(
  canAccessContent({
    accessLevel: "entitled",
    preview: true,
    entitlements: [],
    contentKind: "book",
    contentId: "book-maker-bible",
  }),
  true,
);
assert.equal(
  canAccessContent({
    accessLevel: "entitled",
    preview: false,
    entitlements: [],
    contentKind: "course",
    contentId: "course-fs-repentance",
  }),
  false,
);
assert.equal(
  canAccessContent({
    accessLevel: "entitled",
    preview: true,
    entitlements: [],
    contentKind: "book",
    contentId: "book-principles-doctrine-christ",
  }),
  true,
);

const offerings = readFileSync(new URL("../src/lib/commerce/offerings.ts", import.meta.url), "utf8");
const functionsOfferings = readFileSync(new URL("../functions/src/offerings.ts", import.meta.url), "utf8");
assert.equal(offerings, functionsOfferings);
assert.match(offerings, /"product-maker-bible"[\s\S]*15000/);
assert.match(offerings, /"product-foundation-year"[\s\S]*40000/);
assert.match(offerings, /Course 1 of 6 — Repentance from Dead Works/);
assert.match(offerings, /The Principles of the Doctrine of Christ — textbook/);
assert.match(offerings, /Foundation School — The Walk/);
const yearBlock = offerings.slice(
  offerings.indexOf('"product-foundation-year"'),
  offerings.indexOf('"product-principles-doctrine-christ"'),
);
assert.equal(yearBlock.includes("principles-doctrine-christ.jpg"), false);
assert.equal(yearBlock.includes("Course 1 of 6"), false);

function isMomoEligibleCart(ids) {
  return ids.length === 1 && ["product-foundation-year", "product-foundation-intensive"].includes(ids[0]);
}
assert.equal(isMomoEligibleCart(["product-foundation-year"]), true);
assert.equal(isMomoEligibleCart(["product-foundation-intensive"]), true);
assert.equal(isMomoEligibleCart(["product-maker-bible"]), false);
assert.equal(isMomoEligibleCart(["product-course-repentance"]), false);
assert.equal(isMomoEligibleCart(["product-foundation-year", "product-maker-bible"]), false);
assert.match(offerings, /MOMO_YEAR_XAF = 240_000/);
assert.match(offerings, /237 677 604 100/);
assert.match(offerings, /237 699 651 555/);
assert.equal(offerings.includes("SBD"), false);

console.log("access checks passed");

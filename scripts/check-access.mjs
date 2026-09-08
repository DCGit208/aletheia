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

function canReviewPublication(user, contentKind) {
  if (!["book", "journal", "article"].includes(contentKind)) return false;
  if (user?.role === "administrator") return true;
  return user?.email?.trim().toLowerCase() === "r.coachachu@btheducationgroup.org";
}

function canAccessContent({ accessLevel, preview, entitlements, contentKind, contentId, user }) {
  if (accessLevel === "public" || accessLevel === "free") return true;
  if (canReviewPublication(user, contentKind)) return true;
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
    preview: false,
    entitlements: [],
    contentKind: "book",
    contentId: "book-doctrine-of-man",
    user: { email: "r.coachachu@btheducationgroup.org", role: "member" },
  }),
  true,
);
assert.equal(
  canAccessContent({
    accessLevel: "entitled",
    preview: false,
    entitlements: [],
    contentKind: "book",
    contentId: "book-doctrine-of-man",
    user: { email: "any-admin@example.com", role: "administrator" },
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
    user: { email: "r.coachachu@btheducationgroup.org", role: "member" },
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
assert.match(offerings, /The Principles of the Doctrine of Christ/);
assert.match(offerings, /Included with The Walk and The Intensive/);
assert.equal(offerings.includes("This SKU does not enrol"), false);
assert.match(offerings, /"product-repentance-from-dead-works"/);
assert.match(offerings, /repentance-from-dead-works-chains\.png/);
assert.equal(offerings.includes("repentance-from-death-works"), false);
assert.match(offerings, /principles-doctrine-christ\.jpg/);
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

const foundationCourseFiles = [
  "../src/lib/content/course-repentance.ts",
  "../src/lib/content/course-faith.ts",
  "../src/lib/content/course-baptisms.ts",
  "../src/lib/content/course-hands.ts",
  "../src/lib/content/course-resurrection.ts",
  "../src/lib/content/course-judgment.ts",
];
const forbiddenCourseCopy = [
  /cluster/i,
  /\b[A-J][0-9]\b/,
  /\bQ[0-9]+\b/,
  /owner file/i,
  /same cluster/i,
  /source map/i,
  /lesson spine/i,
  /fact set/i,
  /source questions/i,
  /source words/i,
  /this lesson printed/i,
  /printed FTH/i,
  /these passages is/i,
  /these passages holds/i,
  /own questions/i,
  /\bfile one occasion\b/i,
  /backend/i,
  /production notes/i,
  /\bToday [A-J][0-9]\b/,
];
for (const file of foundationCourseFiles) {
  const copy = readFileSync(new URL(file, import.meta.url), "utf8");
  for (const pattern of forbiddenCourseCopy) {
    assert.doesNotMatch(copy, pattern, `${file} exposes internal course-map language: ${pattern}`);
  }
}

const repentanceCopy = readFileSync(new URL("../src/lib/content/course-repentance.ts", import.meta.url), "utf8");
const forbiddenRepentanceCopy = [
  /pillows?/i,
  /premiere convention/i,
  /imprimatur/i,
  /naturalistic/i,
  /ersatz/i,
  /religiousism/i,
  /aridity/i,
  /tergiversation/i,
  /scholarly impetus/i,
  /this piece/i,
  /delineates/i,
  /print error/i,
  /practice named/i,
  /straight issue/i,
  /quarry for mottoes/i,
];
for (const pattern of forbiddenRepentanceCopy) {
  assert.doesNotMatch(repentanceCopy, pattern, `Course 1 still contains opaque student copy: ${pattern}`);
}

const faithCopy = readFileSync(new URL("../src/lib/content/course-faith.ts", import.meta.url), "utf8");
const forbiddenFaithCopy = [
  /pillows?/i,
  /stand behind (it|them) before a teacher/i,
  /practice named/i,
  /set set/i,
  /question is own/i,
  /these passages forces/i,
  /these passages does/i,
  /present tense is stand/i,
  /\. questions must/i,
];
for (const pattern of forbiddenFaithCopy) {
  assert.doesNotMatch(faithCopy, pattern, `Course 2 still contains opaque student copy: ${pattern}`);
}

const baptismsCopy = readFileSync(new URL("../src/lib/content/course-baptisms.ts", import.meta.url), "utf8");
const forbiddenBaptismsCopy = [
  /pillows?/i,
  /premiere/i,
  /naturalistic/i,
  /ersatz/i,
  /religiousism/i,
  /stand behind (it|them) before a teacher/i,
  /practice named/i,
  /definitive line/i,
  /page once printed/i,
  /verse it prints/i,
  /printed citation/i,
  /examination spine/i,
  /relaid/i,
  /these passages does/i,
  /these passages forces/i,
];
for (const pattern of forbiddenBaptismsCopy) {
  assert.doesNotMatch(baptismsCopy, pattern, `Course 3 still contains opaque student copy: ${pattern}`);
}

const handsCopy = readFileSync(new URL("../src/lib/content/course-hands.ts", import.meta.url), "utf8");
const forbiddenHandsCopy = [
  /actualiz/i,
  /fundaments/i,
  /substantively/i,
  /gesture-manual/i,
  /\bfiled\b/i,
  /stand behind (it|them) before a teacher/i,
  /practice named/i,
  /these passages is/i,
  /these passages holds/i,
  /question is own/i,
  /premiere/i,
  /pillows?/i,
  /naturalistic/i,
  /ersatz/i,
  /religiousism/i,
  /examination spine/i,
  /printed verse/i,
  /printed above/i,
];
for (const pattern of forbiddenHandsCopy) {
  assert.doesNotMatch(handsCopy, pattern, `Course 4 still contains opaque student copy: ${pattern}`);
}

const resurrectionCopy = readFileSync(new URL("../src/lib/content/course-resurrection.ts", import.meta.url), "utf8");
const forbiddenResurrectionCopy = [
  /relaid/i,
  /first sentence under/i,
  /dropped print/i,
  /compressed citation/i,
  /\bspine\b/i,
  /files it/i,
  /files this/i,
  /Peter files/i,
  /tank-gospel/i,
  /these passages does/i,
  /these passages forces/i,
  /these passages is/i,
  /these passages holds/i,
  /\. material resurrection remains/,
  /chronology map/i,
  /bad print/i,
  /the print 7:18/i,
  /the this-life lock/i,
];
for (const pattern of forbiddenResurrectionCopy) {
  assert.doesNotMatch(resurrectionCopy, pattern, `Course 5 still contains opaque student copy: ${pattern}`);
}

const judgmentCopy = readFileSync(new URL("../src/lib/content/course-judgment.ts", import.meta.url), "utf8");
const forbiddenJudgmentCopy = [
  /chronology map/i,
  /\bmap\b/i,
  /\bspine\b/i,
  /v1/i,
  /longer Saturday/i,
  /bad print/i,
  /\bprint\b/i,
  /printed/i,
  /dropped print/i,
  /compressed citation/i,
  /relaid/i,
  /\bslang\b/i,
  /thins/i,
  /rumour/i,
  /fear as a product/i,
  /safety-slogans/i,
  /terror-slogans/i,
  /second James lecture/i,
  /one pile called death/i,
  /blotting-religion/i,
  /put that word down/i,
  /five sermons/i,
  /fill a page/i,
  /Stop\./i,
  /ask the question again/i,
  /reopen 11:7/i,
  /reopen the number/i,
  /Matthew 16 is not this narrative/i,
];
for (const pattern of forbiddenJudgmentCopy) {
  assert.doesNotMatch(judgmentCopy, pattern, `Course 6 still contains opaque student copy: ${pattern}`);
}

const foundationIntroCopy = [
  "../src/lib/data/foundation-school.ts",
  "../src/lib/data/one-source-of-truth.ts",
  "../src/lib/content/course-doctrine-of-the-graphe.ts",
]
  .map((file) => readFileSync(new URL(file, import.meta.url), "utf8"))
  .join("\n");
const forbiddenFoundationIntroCopy = [
  /Christian truth/i,
  /premiere convention/i,
  /Naturalistic vs ersatz/i,
  /Ersatz analogical/i,
  /scholarly impetus/i,
  /Aridity and tergiversation/i,
  /chronology map/i,
  /v1 spine/i,
  /compressed manuscript/i,
];
for (const pattern of forbiddenFoundationIntroCopy) {
  assert.doesNotMatch(foundationIntroCopy, pattern, `Foundation School introduction exposes opaque copy: ${pattern}`);
}

console.log("access checks passed");

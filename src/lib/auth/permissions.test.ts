import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { canReviewManualPayments, hasPermission } from "./permissions";
import { canAccessContent, grantTargetsForProduct } from "../access/entitlements";

describe("permissions", () => {
  it("does not grant admin from membership", () => {
    assert.equal(hasPermission("member", "admin.access"), false);
    assert.equal(hasPermission("administrator", "admin.access"), true);
  });

  it("does not let guests create communities", () => {
    assert.equal(hasPermission("guest", "community.create"), false);
    assert.equal(hasPermission("member", "community.create"), false);
    assert.equal(hasPermission("administrator", "community.create"), true);
  });

  it("lets allowlisted emails review Mobile Money without a platform admin role", () => {
    assert.equal(canReviewManualPayments({ role: "member", email: "house_justice@yahoo.com" }), true);
    assert.equal(canReviewManualPayments({ role: "member", email: "student@example.com" }), false);
    assert.equal(canReviewManualPayments({ role: "administrator", email: "anyone@example.com" }), true);
  });
});

describe("entitlements", () => {
  it("allows public content without a grant", () => {
    assert.equal(
      canAccessContent({
        accessLevel: "public",
        preview: false,
        entitlements: [],
        contentKind: "book",
        contentId: "book-great-deception",
      }),
      true,
    );
  });

  it("blocks entitled content without a matching grant", () => {
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
  });

  it("allows a preview chapter without treating paid as true", () => {
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
  });

  it("lets publication reviewers read entitled books without a purchase grant", () => {
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
        contentKind: "course",
        contentId: "course-fs-repentance",
        user: { email: "r.coachachu@btheducationgroup.org", role: "member" },
      }),
      false,
    );
  });

  it("lets the ddr review account open courses, programs, and publications", () => {
    const reviewer = { email: "ddr.coachachu@btheducationgroup.org", role: "member" as const };
    assert.equal(
      canAccessContent({
        accessLevel: "entitled",
        preview: false,
        entitlements: [],
        contentKind: "course",
        contentId: "course-fs-repentance",
        user: reviewer,
      }),
      true,
    );
    assert.equal(
      canAccessContent({
        accessLevel: "entitled",
        preview: false,
        entitlements: [],
        contentKind: "program",
        contentId: "program-foundation-year",
        user: reviewer,
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
        user: reviewer,
      }),
      true,
    );
  });

  it("lets administrators review all entitled publications", () => {
    assert.equal(
      canAccessContent({
        accessLevel: "entitled",
        preview: false,
        entitlements: [],
        contentKind: "journal",
        contentId: "journal-aletheia",
        user: { email: "admin@example.com", role: "administrator" },
      }),
      true,
    );
  });

  it("includes support books with Foundation course products", () => {
    assert.deepEqual(
      grantTargetsForProduct({
        id: "product-course-repentance",
        title: "Course 1 of 6 — Repentance from Dead Works",
        description: "",
        kind: "course",
        contentId: "course-fs-repentance",
        includedContentIds: ["course-fs-repentance", "book-principles-doctrine-christ"],
        priceCents: 10000,
        currency: "USD",
        status: "published",
        coverTone: "ink",
      }),
      [
        { contentKind: "course", contentId: "course-fs-repentance" },
        { contentKind: "book", contentId: "book-principles-doctrine-christ" },
      ],
    );
  });

  it("grants only the Maker Bible book from its product", () => {
    assert.deepEqual(
      grantTargetsForProduct({
        id: "product-maker-bible",
        title: "MAKER BIBLE — Lordship Edition",
        description: "",
        kind: "book",
        contentId: "book-maker-bible",
        priceCents: 15000,
        currency: "USD",
        status: "published",
        coverTone: "gold",
      }),
      [{ contentKind: "book", contentId: "book-maker-bible" }],
    );
  });
});

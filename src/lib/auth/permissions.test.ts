import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { hasPermission } from "./permissions";
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

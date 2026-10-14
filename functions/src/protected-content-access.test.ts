import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { canReadAllProtectedContent, mayReadProtectedContent } from "./protected-content-access.js";

const paidBook = {
  id: "book-principles-doctrine-christ",
  accessLevel: "entitled",
  status: "published",
  previewChapterIds: ["ch-pdc-1"],
};
const oneSourceBook = {
  id: "book-one-source-of-truth",
  accessLevel: "entitled",
  status: "published",
  previewChapterIds: [],
};
const paidCourse = { id: "course-fs-faith", accessLevel: "entitled", status: "published" };

describe("protected content access", () => {
  it("denies paid content without an entitlement", () => {
    assert.equal(
      mayReadProtectedContent({ kind: "course", policy: paidCourse, hasEntitlement: false }),
      false,
    );
  });

  it("allows only preview access for books with a configured preview", () => {
    const options = { kind: "book" as const, policy: paidBook, hasEntitlement: false };
    assert.equal(mayReadProtectedContent(options), true);
    assert.equal(canReadAllProtectedContent(options), false);
  });

  it("denies One Source without an entitlement, including anonymous requests", () => {
    assert.equal(
      mayReadProtectedContent({ kind: "book", policy: oneSourceBook, hasEntitlement: false }),
      false,
    );
  });

  it("allows a verified entitlement", () => {
    assert.equal(
      mayReadProtectedContent({ kind: "book", policy: paidBook, uid: "buyer", hasEntitlement: true }),
      true,
    );
  });

  it("allows administrators across paid books and courses", () => {
    assert.equal(
      mayReadProtectedContent({ kind: "book", policy: paidBook, role: "administrator", hasEntitlement: false }),
      true,
    );
    assert.equal(
      mayReadProtectedContent({ kind: "course", policy: paidCourse, role: "administrator", hasEntitlement: false }),
      true,
    );
  });

  it("does not grant paid access by email without an entitlement", () => {
    assert.equal(
      canReadAllProtectedContent({ kind: "book", policy: paidBook, hasEntitlement: false }),
      false,
    );
    assert.equal(
      canReadAllProtectedContent({ kind: "course", policy: paidCourse, hasEntitlement: false }),
      false,
    );
  });

  it("denies unpublished content even if the caller otherwise qualifies", () => {
    assert.equal(
      mayReadProtectedContent({
        kind: "book",
        policy: { ...paidBook, status: "draft" },
        role: "administrator",
        hasEntitlement: true,
      }),
      false,
    );
    assert.equal(
      mayReadProtectedContent({
        kind: "book",
        policy: { ...paidBook, status: "draft" },
        hasEntitlement: false,
      }),
      false,
    );
  });
});

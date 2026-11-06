import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { canReadAllProtectedContent, mayReadProtectedContent, selectReadableBookChapters } from "./protected-content-access.js";

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
const doctrineOfFaithBook = {
  id: "book-doctrine-of-faith",
  accessLevel: "entitled",
  status: "published",
  previewChapterIds: ["ch-faith-1"],
};
const doctrineOfFaithChapters = Array.from({ length: 10 }, (_, index) => ({
  id: "ch-faith-" + (index + 1),
  bookId: "book-doctrine-of-faith",
}));

describe("protected content access", () => {
  it("returns only Chapter 1 to visitors and all ten chapters to entitled readers", () => {
    const anonymous = {
      kind: "book" as const,
      policy: doctrineOfFaithBook,
      hasEntitlement: false,
    };
    const entitled = {
      kind: "book" as const,
      policy: doctrineOfFaithBook,
      uid: "entitled-reader",
      hasEntitlement: true,
    };
    assert.deepEqual(
      selectReadableBookChapters(doctrineOfFaithChapters, doctrineOfFaithBook, anonymous).map((chapter) => chapter.id),
      ["ch-faith-1"],
    );
    assert.deepEqual(
      selectReadableBookChapters(doctrineOfFaithChapters, doctrineOfFaithBook, entitled).map((chapter) => chapter.id),
      doctrineOfFaithChapters.map((chapter) => chapter.id),
    );
  });

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

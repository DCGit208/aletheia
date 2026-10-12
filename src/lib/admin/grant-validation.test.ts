import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { normalizeGrantTarget } from "../../../functions/src/grant-validation.js";

describe("admin grant validation", () => {
  it("accepts valid content grant targets", () => {
    assert.deepEqual(normalizeGrantTarget("book", "book-doctrine-of-man"), {
      contentKind: "book",
      contentId: "book-doctrine-of-man",
    });
    assert.deepEqual(normalizeGrantTarget("program", "program-foundation-year"), {
      contentKind: "program",
      contentId: "program-foundation-year",
    });
  });

  it("rejects mismatched content kinds and missing ids", () => {
    assert.throws(() => normalizeGrantTarget("book", "course-doctrine-of-man"), /match the book kind/i);
    assert.throws(() => normalizeGrantTarget("course", ""), /Content id is required/i);
    assert.throws(() => normalizeGrantTarget("author", "book-doctrine-of-man"), /book, course, or program/i);
  });
});

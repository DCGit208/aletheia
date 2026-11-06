import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const companion = readFileSync(new URL("src/lib/content/companion-faith.ts", root), "utf8");
const index = readFileSync(new URL("src/lib/data/protected-content-index.ts", root), "utf8");
const catalog = readFileSync(new URL("src/lib/data/catalog.ts", root), "utf8");
const archive = readFileSync(new URL("Book Matter/Doctrine of Faith/15_LEGACY_EIGHT_CHAPTER_COMPANION_ARCHIVE.md", root), "utf8");
const manuscript = readFileSync(new URL("Book Matter/Doctrine of Faith/14_THE_DOCTRINE_OF_FAITH_BOOK_I_PUBLICATION_MANUSCRIPT.md", root), "utf8");

const ids = [...companion.matchAll(/"id":\s*"(ch-faith-\d+)"/g)].map((match) => match[1]);
const titles = [...companion.matchAll(/"title":\s*"([^"]+)"/g)].map((match) => match[1]);
assert.equal(ids.length, 10, "Book I must contain exactly ten reader chapters.");
assert.deepEqual(ids, Array.from({ length: 10 }, (_, i) => \`ch-faith-\${i + 1}\`));
assert.equal(titles.length, 10, "Every reader chapter must have a title.");

const chapterHeadings = [...manuscript.matchAll(/^# Chapter (\d+) — ([^\n]+)\n/gm)];
assert.equal(chapterHeadings.length, 10, "The publication manuscript must contain exactly ten chapters.");
const manuscriptBodies = chapterHeadings.map((heading, i) => {
  const start = heading.index + heading[0].length;
  let end = i + 1 < chapterHeadings.length ? chapterHeadings[i + 1].index : manuscript.indexOf("\n# Bibliography and Reference Works", start);
  if (end < 0) end = manuscript.length;
  return manuscript.slice(start, end).replace(/\n+---\s*$/, "").trim();
});
const readerBodies = [...companion.matchAll(/"body":\s*("(?:\\.|[^"\\])*")/g)].map((match) => JSON.parse(match[1]));
assert.deepEqual(readerBodies, manuscriptBodies, "The entitled reader text must match the controlled publication manuscript chapter for chapter.");
for (const id of ids) assert.ok(index.includes(\`"id":"\${id}"\`), \`Generated reader index is missing \${id}.\`);
for (const title of titles) assert.ok(index.includes(JSON.stringify(title)), \`Generated reader index title mismatch: \${title}\`);

const bookStart = catalog.indexOf('id: "book-doctrine-of-faith"');
assert.notEqual(bookStart, -1, "Book I catalog entry must exist.");
const bookEnd = catalog.indexOf("\n    },", bookStart);
const book = catalog.slice(bookStart, bookEnd);
assert.match(book, /status:\s*"published"/);
assert.match(book, /accessLevel:\s*"entitled"/);
assert.match(book, /previewChapterIds:\s*\["ch-faith-1"\]/);
assert.match(book, /chapterCount:\s*10/);
assert.ok(archive.includes("pre-revision eight-chapter"), "Legacy companion archive must be preserved.");

console.log("Doctrine of Faith publication integrity passed: 10 chapters, exact manuscript/reader parity, matching index, entitled access, one preview chapter, legacy archive preserved.");

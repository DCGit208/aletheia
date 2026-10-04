import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const manuscriptDir = path.join(root, "Book Matter", "One Source of Truth");
const contentDir = path.join(root, "src", "lib", "content");

function fail(message) {
  console.error(`One Source migration QA failed: ${message}`);
  process.exit(1);
}

const sourceFiles = fs
  .readdirSync(manuscriptDir)
  .filter((name) => /^\d+_Chapter_\d+_.+\.md$/.test(name))
  .map((name) => {
    const match = name.match(/^\d+_Chapter_(\d+)_/);
    return { name, number: Number(match?.[1]) };
  })
  .sort((a, b) => a.number - b.number);

if (sourceFiles.length !== 85) fail(`expected 85 chapter files, found ${sourceFiles.length}`);

const sourceNumbers = sourceFiles.map((file) => file.number);
const expectedNumbers = Array.from({ length: 85 }, (_, index) => index + 1);
if (sourceNumbers.some((number, index) => number !== expectedNumbers[index])) {
  fail(`source chapter sequence is ${sourceNumbers.join(",")}`);
}

const partitionNames = [
  "one-source-canonical-01.json",
  "one-source-canonical-02.json",
  "one-source-canonical-03.json",
  "one-source-canonical-04.json",
  "one-source-canonical-05.json",
];

const chapters = partitionNames.flatMap((name) => {
  const file = JSON.parse(fs.readFileSync(path.join(contentDir, name), "utf8"));
  if (file.chapterCount !== file.chapters.length) {
    fail(`${name} chapterCount does not match its chapter array`);
  }
  return file.chapters;
});

if (chapters.length !== 85) fail(`expected 85 application chapters, found ${chapters.length}`);

const appNumbers = chapters.map((chapter) => chapter.number);
if (appNumbers.some((number, index) => number !== expectedNumbers[index])) {
  fail(`application chapter sequence is ${appNumbers.join(",")}`);
}

const ids = chapters.map((chapter) => chapter.id);
if (new Set(ids).size !== ids.length) fail("duplicate application chapter IDs found");

for (const [index, source] of sourceFiles.entries()) {
  const chapter = chapters[index];
  const sourceText = fs.readFileSync(path.join(manuscriptDir, source.name), "utf8");
  const lines = sourceText.split("\n");
  const chapterLine = lines.findIndex((line) => line === `# Chapter ${source.number}`);
  if (chapterLine < 0) fail(`could not locate chapter heading in ${source.name}`);

  const titleLine = lines[chapterLine + 1];
  const title = titleLine?.replace(/^# /, "").trim();
  const body = lines.slice(chapterLine + 2).join("\n").replace(/^\n+/, "");

  if (chapter.number !== source.number) fail(`application chapter ${chapter.number} does not match ${source.name}`);
  if (chapter.id !== `ch-ost-${source.number}`) fail(`unexpected ID for Chapter ${source.number}: ${chapter.id}`);
  if (chapter.title !== title) fail(`title mismatch for Chapter ${source.number}`);
  if (chapter.body !== body) fail(`body mismatch for Chapter ${source.number}`);
}

const forbiddenHandbook = chapters.some((chapter) => chapter.body.includes("book-principles-doctrine-christ"));
if (forbiddenHandbook) fail("One Source chapter body contains an implicit Foundation handbook dependency");

console.log("One Source migration QA passed: 85 source chapters, 85 application chapters, exact titles/bodies, unique IDs, no handbook dependency.");

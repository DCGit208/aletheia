/* eslint-disable @typescript-eslint/no-require-imports -- Load application TypeScript modules to generate the server-only manifest. */
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");

const root = path.resolve(__dirname, "..");
const originalResolveFilename = Module._resolveFilename;
let ts;
for (const candidate of [
  path.join(root, "node_modules/typescript"),
  path.join(root, "functions/node_modules/typescript"),
]) {
  if (fs.existsSync(path.join(candidate, "lib/typescript.js"))) {
    ts = require(candidate);
    break;
  }
}
if (!ts) throw new Error("TypeScript is required to generate protected content.");

require.extensions[".ts"] = (module, filename) => {
  const source = fs.readFileSync(filename, "utf8");
  const result = ts.transpileModule(source, {
    compilerOptions: {
      esModuleInterop: true,
      module: ts.ModuleKind.CommonJS,
      resolveJsonModule: true,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: filename,
  });
  module._compile(result.outputText, filename);
};

Module._resolveFilename = function resolveFilename(request, parent, isMain, options) {
  const resolvedRequest = request.startsWith("@/")
    ? path.resolve(root, "src", request.slice(2))
    : request;
  return originalResolveFilename.call(this, resolvedRequest, parent, isMain, options);
};

const foundation = require(path.join(root, "src/lib/data/foundation-school.ts"));
const repentance = require(path.join(root, "src/lib/content/companion-repentance.ts"));
const faith = require(path.join(root, "src/lib/content/companion-faith.ts"));
const { catalog } = require(path.join(root, "src/lib/data/catalog.ts"));
const { ONE_SOURCE_BOOK_ID } = require(path.join(root, "src/lib/content/book-one-source-of-truth.ts"));

const protectedChapters = [
  ...repentance.repentanceCompanionChapters,
  ...faith.faithCompanionChapters,
  ...foundation.foundationChapters,
];
const protectedLessons = foundation.foundationLessons;

const metadata = {
  oneSourceBookId: foundation.foundationBooks[0].id,
  foundationHandbookBookId: foundation.foundationHandbookBookId,
  foundationGateCourseId: foundation.foundationGateCourseId,
  foundationPrincipleCourseIds: foundation.foundationPrincipleCourseIds,
  foundationSchoolIntroduction: foundation.foundationSchoolIntroduction,
  foundationSchools: foundation.foundationSchools,
  foundationYearGrantIds: foundation.foundationYearGrantIds,
  foundationPrograms: foundation.foundationPrograms,
  foundationBooks: foundation.foundationBooks.map((book) =>
    book.id === ONE_SOURCE_BOOK_ID ? { ...book, previewChapterIds: [] } : book,
  ),
  foundationCourses: foundation.foundationCourses,
  foundationModules: foundation.foundationModules,
};

const protectedBookIds = new Set(protectedChapters.map((chapter) => chapter.bookId));
const foundationBookIds = new Set(foundation.foundationBooks.map((book) => book.id));
const bookPolicies = [
  ...catalog.books.filter((book) => !foundationBookIds.has(book.id)),
  ...foundation.foundationBooks,
]
  .filter((book) => protectedBookIds.has(book.id))
  .map(({ id, accessLevel, status, previewChapterIds }) => ({
    id,
    accessLevel,
    status,
    previewChapterIds: id === ONE_SOURCE_BOOK_ID ? [] : previewChapterIds,
  }));
const policies = [...new Map(bookPolicies.map((policy) => [policy.id, policy])).values()];

const contentData = {
  books: policies,
  courses: foundation.foundationCourses.map(({ id, accessLevel, status }) => ({ id, accessLevel, status })),
  chapters: protectedChapters,
  lessons: protectedLessons,
};

const chapterIndex = protectedChapters.map(({ id, bookId, number, title }) => ({
  id,
  bookId,
  number,
  title,
  body: "",
}));
const lessonIndex = protectedLessons.map(({ id, courseId, moduleId, number, title, durationMinutes, resourceIds }) => ({
  id,
  courseId,
  moduleId,
  number,
  title,
  body: "",
  durationMinutes,
  resourceIds,
}));

function writeJson(relativePath, value) {
  fs.writeFileSync(path.join(root, relativePath), `${JSON.stringify(value, null, 2)}\n`);
}

function writeFoundationMetadata() {
  const lines = [
    'import type { Book, Course, CourseModule, Program, School } from "./types";',
    `export const ONE_SOURCE_BOOK_ID = ${JSON.stringify(metadata.oneSourceBookId)} as const;`,
    `export const foundationHandbookBookId = ${JSON.stringify(metadata.foundationHandbookBookId)};`,
    `export const foundationGateCourseId = ${JSON.stringify(metadata.foundationGateCourseId)};`,
    `export const foundationPrincipleCourseIds = ${JSON.stringify(metadata.foundationPrincipleCourseIds)} as const;`,
    `export const foundationSchoolIntroduction = ${JSON.stringify(metadata.foundationSchoolIntroduction)};`,
    `export const foundationSchools: School[] = ${JSON.stringify(metadata.foundationSchools)};`,
    `export const foundationYearGrantIds = ${JSON.stringify(metadata.foundationYearGrantIds)} as const;`,
    `export const foundationPrograms: Program[] = ${JSON.stringify(metadata.foundationPrograms)};`,
    `export const foundationBooks: Book[] = ${JSON.stringify(metadata.foundationBooks)};`,
    `export const foundationCourses: Course[] = ${JSON.stringify(metadata.foundationCourses)};`,
    `export const foundationModules: CourseModule[] = ${JSON.stringify(metadata.foundationModules)};`,
    "",
  ];
  fs.writeFileSync(path.join(root, "src/lib/data/foundation-school-metadata.ts"), `${lines.join("\n")}`);
}

function writeContentIndex() {
  const source = [
    'import type { BookChapter, Lesson } from "./types";',
    `export const protectedChapterIndex: BookChapter[] = ${JSON.stringify(chapterIndex)};`,
    `export const protectedLessonIndex: Lesson[] = ${JSON.stringify(lessonIndex)};`,
    "",
  ].join("\n");
  fs.writeFileSync(path.join(root, "src/lib/data/protected-content-index.ts"), source);
}

writeJson("functions/src/protected-content-data.json", contentData);
writeFoundationMetadata();
writeContentIndex();
console.log(
  `Generated protected content: ${protectedChapters.length} chapters, ${protectedLessons.length} lessons.`,
);

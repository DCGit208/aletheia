import { catalog } from "@/lib/data/catalog";
import type {
  Article,
  Book,
  BookChapter,
  Board,
  Community,
  ContentKind,
  Course,
  CourseModule,
  Journal,
  JournalIssue,
  LearningPath,
  Lesson,
  Product,
  Program,
  School,
  SearchResult,
  Topic,
} from "@/lib/data/types";
import { getFirebaseDb } from "@/lib/firebase/client";
import { collection, getDocs, limit, query, where } from "firebase/firestore";

const PAGE = 12;

export interface PageResult<T> {
  items: T[];
  hasMore: boolean;
}

function published<T extends { status: string }>(items: T[]): T[] {
  return items.filter((item) => item.status === "published");
}

export function getHomeComposition() {
  return catalog.home;
}

export function listAnnouncements() {
  const ids = catalog.home.announcementIds;
  return catalog.announcements.filter((item) => ids.includes(item.id) && item.status === "published");
}

export function listCourses(page = 0): PageResult<Course> {
  const items = published(catalog.courses);
  const start = page * PAGE;
  return { items: items.slice(start, start + PAGE), hasMore: start + PAGE < items.length };
}

export function getCourse(id: string) {
  return published(catalog.courses).find((item) => item.id === id) ?? null;
}

export function listPaths(): LearningPath[] {
  return published(catalog.paths);
}

export function getPath(id: string) {
  return published(catalog.paths).find((item) => item.id === id) ?? null;
}

export function listSchools(): School[] {
  return published(catalog.schools);
}

export function getSchool(id: string) {
  return published(catalog.schools).find((item) => item.id === id) ?? null;
}

export function listPrograms(schoolId?: string): Program[] {
  return published(catalog.programs).filter((item) => !schoolId || item.schoolId === schoolId);
}

export function getProgram(id: string) {
  return published(catalog.programs).find((item) => item.id === id) ?? null;
}

export function listSchoolCourses(schoolId: string): Course[] {
  const school = getSchool(schoolId);
  if (!school) return [];
  return school.courseIds.map((id) => getCourse(id)).filter((item): item is Course => Boolean(item));
}

export function listModules(courseId: string): CourseModule[] {
  return catalog.modules.filter((item) => item.courseId === courseId).sort((a, b) => a.number - b.number);
}

export function listLessons(courseId: string): Lesson[] {
  return catalog.lessons.filter((item) => item.courseId === courseId).sort((a, b) => a.number - b.number);
}

export function getLesson(id: string) {
  return catalog.lessons.find((item) => item.id === id) ?? null;
}

export function listBooks(page = 0): PageResult<Book> {
  const items = published(catalog.books);
  const start = page * PAGE;
  return { items: items.slice(start, start + PAGE), hasMore: start + PAGE < items.length };
}

export function getBook(id: string) {
  return published(catalog.books).find((item) => item.id === id) ?? null;
}

export function listChapters(bookId: string): BookChapter[] {
  return catalog.chapters.filter((item) => item.bookId === bookId).sort((a, b) => a.number - b.number);
}

export function getChapter(id: string) {
  return catalog.chapters.find((item) => item.id === id) ?? null;
}

export function listJournals(): Journal[] {
  return published(catalog.journals);
}

export function getJournal(id: string) {
  return published(catalog.journals).find((item) => item.id === id) ?? null;
}

export function listIssues(journalId: string): JournalIssue[] {
  return published(catalog.issues).filter((item) => item.journalId === journalId);
}

export function getIssue(id: string) {
  return published(catalog.issues).find((item) => item.id === id) ?? null;
}

export function listArticles(): Article[] {
  return published(catalog.articles);
}

export function getArticle(id: string) {
  return published(catalog.articles).find((item) => item.id === id) ?? null;
}

export function listCommunities(): Community[] {
  return published(catalog.communities);
}

export function getCommunity(id: string) {
  return published(catalog.communities).find((item) => item.id === id) ?? null;
}

export function listBoards(communityId: string): Board[] {
  return catalog.boards.filter((item) => item.communityId === communityId);
}

export function getBoard(id: string) {
  return catalog.boards.find((item) => item.id === id) ?? null;
}

export function listTopics(communityId: string, boardId?: string): Topic[] {
  return published(catalog.topics).filter(
    (item) => item.communityId === communityId && (!boardId || item.boardId === boardId),
  );
}

export function getTopic(id: string) {
  return published(catalog.topics).find((item) => item.id === id) ?? null;
}

export function listPosts(topicId: string) {
  return catalog.posts.filter((item) => item.topicId === topicId);
}

export function listProducts(page = 0): PageResult<Product> {
  const items = published(catalog.products);
  const start = page * PAGE;
  return { items: items.slice(start, start + PAGE), hasMore: start + PAGE < items.length };
}

export function getProduct(id: string) {
  return published(catalog.products).find((item) => item.id === id) ?? null;
}

export function getProductForContent(contentId: string) {
  return published(catalog.products).find((item) => item.contentId === contentId) ?? null;
}

export function getAuthor(id: string) {
  return catalog.authors.find((item) => item.id === id) ?? null;
}

export function searchCatalog(term: string, kind?: ContentKind): SearchResult[] {
  const q = term.trim().toLowerCase();
  if (q.length < 2) return [];

  const results: SearchResult[] = [];
  const push = (item: SearchResult) => {
    if (!kind || item.kind === kind) results.push(item);
  };

  for (const course of published(catalog.courses)) {
    if (`${course.title} ${course.subtitle ?? ""} ${course.description}`.toLowerCase().includes(q)) {
      push({ id: course.id, kind: "course", title: course.title, subtitle: course.subtitle, href: `/learn/courses/${course.id}` });
    }
  }
  for (const school of published(catalog.schools)) {
    if (`${school.title} ${school.subtitle ?? ""} ${school.description}`.toLowerCase().includes(q)) {
      push({ id: school.id, kind: "school", title: school.title, subtitle: school.subtitle, href: `/learn/schools/${school.id}` });
    }
  }
  for (const program of published(catalog.programs)) {
    if (`${program.title} ${program.subtitle ?? ""} ${program.description}`.toLowerCase().includes(q)) {
      push({ id: program.id, kind: "program", title: program.title, subtitle: program.subtitle, href: `/learn/programs/${program.id}` });
    }
  }
  for (const path of published(catalog.paths)) {
    if (`${path.title} ${path.description}`.toLowerCase().includes(q)) {
      push({ id: path.id, kind: "path", title: path.title, href: `/learn/paths/${path.id}` });
    }
  }
  for (const book of published(catalog.books)) {
    if (`${book.title} ${book.subtitle ?? ""} ${book.description}`.toLowerCase().includes(q)) {
      push({ id: book.id, kind: "book", title: book.title, subtitle: book.subtitle, href: `/publications/books/${book.id}` });
    }
  }
  for (const journal of published(catalog.journals)) {
    if (`${journal.title} ${journal.description}`.toLowerCase().includes(q)) {
      push({ id: journal.id, kind: "journal", title: journal.title, href: `/publications/journals/${journal.id}` });
    }
  }
  for (const article of published(catalog.articles)) {
    if (`${article.title} ${article.abstract}`.toLowerCase().includes(q)) {
      push({ id: article.id, kind: "article", title: article.title, href: `/publications/articles/${article.id}` });
    }
  }
  for (const topic of published(catalog.topics)) {
    if (`${topic.title} ${topic.excerpt}`.toLowerCase().includes(q)) {
      push({ id: topic.id, kind: "topic", title: topic.title, href: `/community/topic/${topic.id}` });
    }
  }
  for (const product of published(catalog.products)) {
    if (`${product.title} ${product.description}`.toLowerCase().includes(q)) {
      push({ id: product.id, kind: "product", title: product.title, href: `/shop/${product.id}` });
    }
  }

  return results.slice(0, PAGE);
}

/**
 * Production search must stay on the server (Cloud Functions / Firestore queries).
 * This helper exists so a future adapter can replace local filtering without
 * downloading the catalog to the browser.
 */
export async function searchRemote(term: string, kind?: ContentKind): Promise<SearchResult[] | null> {
  const db = getFirebaseDb();
  if (!db || term.trim().length < 2) return null;
  const q = query(
    collection(db, "searchIndex"),
    where("tokens", "array-contains", term.trim().toLowerCase()),
    limit(PAGE),
  );
  const snap = await getDocs(q);
  return snap.docs
    .map((doc) => doc.data() as SearchResult)
    .filter((item) => !kind || item.kind === kind);
}

import { courseExams, yearFinal } from "@/lib/content/exams";
import { catalog } from "@/lib/data/catalog";

function published<T extends { id: string; status?: string }>(items: T[]) {
  return items.filter((item) => !("status" in item) || item.status === "published");
}

export function productParams() {
  return published(catalog.products).map((item) => ({ productId: item.id }));
}

export function schoolParams() {
  return published(catalog.schools).map((item) => ({ schoolId: item.id }));
}

export function programParams() {
  return published(catalog.programs).map((item) => ({ programId: item.id }));
}

export function courseParams() {
  return published(catalog.courses).map((item) => ({ courseId: item.id }));
}

export function lessonParams() {
  return catalog.lessons.map((item) => ({ courseId: item.courseId, lessonId: item.id }));
}

export function examParams() {
  return [...courseExams, yearFinal].map((item) => ({ examId: item.id }));
}

export function bookParams() {
  return published(catalog.books).map((item) => ({ bookId: item.id }));
}

export function pathParams() {
  return published(catalog.paths).map((item) => ({ pathId: item.id }));
}

export function articleParams() {
  return published(catalog.articles).map((item) => ({ articleId: item.id }));
}

export function journalParams() {
  return published(catalog.journals).map((item) => ({ journalId: item.id }));
}

export function issueParams() {
  return published(catalog.issues).map((item) => ({ journalId: item.journalId, issueId: item.id }));
}

export function communityParams() {
  return published(catalog.communities).map((item) => ({ communityId: item.id }));
}

export function boardParams() {
  return catalog.boards.map((item) => ({ communityId: item.communityId, boardId: item.id }));
}

export function topicParams() {
  return published(catalog.topics).map((item) => ({ topicId: item.id }));
}

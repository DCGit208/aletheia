import type { Bookmark, Enrollment, Entitlement, Order, ProgramEnrollment, ReadingProgress } from "@/lib/data/types";

const prefix = "aletheia";

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(`${prefix}.${key}`);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(`${prefix}.${key}`, JSON.stringify(value));
  } catch {
    // Private browsing and quota errors must not swallow the in-memory cart.
  }
}

export function loadEntitlements(userId: string): Entitlement[] {
  return read<Entitlement[]>(`entitlements.${userId}`, []);
}

export function saveEntitlements(userId: string, items: Entitlement[]) {
  write(`entitlements.${userId}`, items);
}

export function loadEnrollments(userId: string): Enrollment[] {
  return read<Enrollment[]>(`enrollments.${userId}`, []);
}

export function saveEnrollments(userId: string, items: Enrollment[]) {
  write(`enrollments.${userId}`, items);
}

export function loadProgramEnrollments(userId: string): ProgramEnrollment[] {
  return read<ProgramEnrollment[]>(`programEnrollments.${userId}`, []);
}

export function saveProgramEnrollments(userId: string, items: ProgramEnrollment[]) {
  write(`programEnrollments.${userId}`, items);
}

export function loadOrders(userId: string): Order[] {
  return read<Order[]>(`orders.${userId}`, []);
}

export function saveOrders(userId: string, items: Order[]) {
  write(`orders.${userId}`, items);
}

export function loadBookmarks(userId: string): Bookmark[] {
  return read<Bookmark[]>(`bookmarks.${userId}`, []);
}

export function saveBookmarks(userId: string, items: Bookmark[]) {
  write(`bookmarks.${userId}`, items);
}

export function loadProgress(userId: string): ReadingProgress[] {
  return read<ReadingProgress[]>(`progress.${userId}`, []);
}

export function saveProgress(userId: string, items: ReadingProgress[]) {
  write(`progress.${userId}`, items);
}

export function loadCart(): string[] {
  return read<string[]>("cart", []);
}

export function saveCart(productIds: string[]) {
  write("cart", productIds);
}

export function loadExamAnswers(userId: string, examId: string): Record<string, string> {
  return read<Record<string, string>>(`exam.${userId}.${examId}`, {});
}

export function saveExamAnswers(userId: string, examId: string, answers: Record<string, string>) {
  write(`exam.${userId}.${examId}`, answers);
}

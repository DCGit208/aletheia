"use client";

import { createContext, useContext, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { useAuth } from "@/lib/auth/provider";
import { makeEntitlement, grantTargetsForProduct } from "@/lib/access/entitlements";
import { getProduct, getProgram, getSchool } from "@/lib/data/repository";
import type { Bookmark, ContentKind, Enrollment, Entitlement, Order, ProgramEnrollment, ReadingProgress } from "@/lib/data/types";
import {
  loadBookmarks,
  loadCart,
  loadEnrollments,
  loadEntitlements,
  loadOrders,
  loadProgramEnrollments,
  loadProgress,
  saveBookmarks,
  saveCart,
  saveEnrollments,
  saveEntitlements,
  saveOrders,
  saveProgramEnrollments,
  saveProgress,
} from "@/lib/storage/local-state";
import { createClientStore } from "@/lib/storage/client-store";
import { track } from "@/lib/analytics/events";
import { saveOfflineProgress } from "@/lib/reader/offline-db";

interface UserLibraryValue {
  entitlements: Entitlement[];
  enrollments: Enrollment[];
  programEnrollments: ProgramEnrollment[];
  orders: Order[];
  bookmarks: Bookmark[];
  progress: ReadingProgress[];
  cart: string[];
  enroll: (courseId: string) => void;
  enrollInProgram: (programId: string) => void;
  completeLesson: (courseId: string, lessonId: string) => void;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  checkout: () => Order | null;
  toggleBookmark: (kind: ContentKind, targetId: string, label: string) => void;
  setReadingProgress: (bookId: string, chapterId: string, percent: number) => void;
}

const UserLibraryContext = createContext<UserLibraryValue | null>(null);

const EMPTY_ENTITLEMENTS: Entitlement[] = [];
const EMPTY_ENROLLMENTS: Enrollment[] = [];
const EMPTY_PROGRAM_ENROLLMENTS: ProgramEnrollment[] = [];
const EMPTY_ORDERS: Order[] = [];
const EMPTY_BOOKMARKS: Bookmark[] = [];
const EMPTY_PROGRESS: ReadingProgress[] = [];
const EMPTY_CART: string[] = [];

function usePersisted<T>(_key: string, read: () => T, write: (value: T) => void, serverValue: T) {
  const store = useMemo(() => createClientStore(read, write), [read, write]);
  const value = useSyncExternalStore(store.subscribe, store.getSnapshot, () => serverValue);
  return [value, store.set] as const;
}

export function UserLibraryProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const userId = user?.uid ?? "guest";

  const readEntitlements = useMemo(() => () => loadEntitlements(userId), [userId]);
  const writeEntitlements = useMemo(() => (value: Entitlement[]) => saveEntitlements(userId, value), [userId]);
  const readEnrollments = useMemo(() => () => loadEnrollments(userId), [userId]);
  const writeEnrollments = useMemo(() => (value: Enrollment[]) => saveEnrollments(userId, value), [userId]);
  const readProgramEnrollments = useMemo(() => () => loadProgramEnrollments(userId), [userId]);
  const writeProgramEnrollments = useMemo(
    () => (value: ProgramEnrollment[]) => saveProgramEnrollments(userId, value),
    [userId],
  );
  const readOrders = useMemo(() => () => loadOrders(userId), [userId]);
  const writeOrders = useMemo(() => (value: Order[]) => saveOrders(userId, value), [userId]);
  const readBookmarks = useMemo(() => () => loadBookmarks(userId), [userId]);
  const writeBookmarks = useMemo(() => (value: Bookmark[]) => saveBookmarks(userId, value), [userId]);
  const readProgress = useMemo(() => () => loadProgress(userId), [userId]);
  const writeProgress = useMemo(() => (value: ReadingProgress[]) => saveProgress(userId, value), [userId]);

  const [entitlements, setEntitlements] = usePersisted(
    `entitlements.${userId}`,
    readEntitlements,
    writeEntitlements,
    EMPTY_ENTITLEMENTS,
  );
  const [enrollments, setEnrollments] = usePersisted(
    `enrollments.${userId}`,
    readEnrollments,
    writeEnrollments,
    EMPTY_ENROLLMENTS,
  );
  const [programEnrollments, setProgramEnrollments] = usePersisted(
    `programEnrollments.${userId}`,
    readProgramEnrollments,
    writeProgramEnrollments,
    EMPTY_PROGRAM_ENROLLMENTS,
  );
  const [orders, setOrders] = usePersisted(`orders.${userId}`, readOrders, writeOrders, EMPTY_ORDERS);
  const [bookmarks, setBookmarks] = usePersisted(`bookmarks.${userId}`, readBookmarks, writeBookmarks, EMPTY_BOOKMARKS);
  const [progress, setProgress] = usePersisted(`progress.${userId}`, readProgress, writeProgress, EMPTY_PROGRESS);
  const [cart, setCart] = usePersisted("cart", loadCart, saveCart, EMPTY_CART);

  const value = useMemo<UserLibraryValue>(
    () => ({
      entitlements,
      enrollments,
      programEnrollments,
      orders,
      bookmarks,
      progress,
      cart,
      enroll(courseId) {
        if (!user) return;
        const existing = enrollments.find((item) => item.courseId === courseId);
        if (existing) return;
        const next = [
          ...enrollments,
          { id: `${user.uid}:${courseId}`, userId: user.uid, courseId, startedAt: new Date().toISOString(), completedLessonIds: [] },
        ];
        setEnrollments(next);
        const granted = [...entitlements, makeEntitlement(user.uid, "course", courseId, "enrollment")];
        setEntitlements(granted);
        track({ name: "course_enroll", courseId });
      },
      enrollInProgram(programId) {
        if (!user) return;
        const program = getProgram(programId);
        const school = program ? getSchool(program.schoolId) : null;
        if (!program || !school) return;
        if (programEnrollments.some((item) => item.schoolId === school.id)) return;
        setProgramEnrollments([
          ...programEnrollments,
          {
            id: `${user.uid}:${program.id}`,
            userId: user.uid,
            schoolId: school.id,
            programId: program.id,
            startedAt: new Date().toISOString(),
          },
        ]);
        const granted = [...entitlements];
        if (!granted.some((item) => item.contentKind === "program" && item.contentId === program.id)) {
          granted.push(makeEntitlement(user.uid, "program", program.id, "enrollment"));
        }
        for (const courseId of school.courseIds) {
          if (!granted.some((item) => item.contentKind === "course" && item.contentId === courseId)) {
            granted.push(makeEntitlement(user.uid, "course", courseId, "enrollment"));
          }
        }
        setEntitlements(granted);
        track({ name: "program_enroll", programId: program.id });
      },
      completeLesson(courseId, lessonId) {
        if (!user) return;
        setEnrollments(
          enrollments.map((item) =>
            item.courseId === courseId && !item.completedLessonIds.includes(lessonId)
              ? { ...item, completedLessonIds: [...item.completedLessonIds, lessonId] }
              : item,
          ),
        );
        track({ name: "lesson_complete", lessonId, courseId });
      },
      addToCart(productId) {
        setCart(cart.includes(productId) ? cart : [...cart, productId]);
        track({ name: "shop_add", productId });
      },
      removeFromCart(productId) {
        setCart(cart.filter((id) => id !== productId));
      },
      checkout() {
        if (!user || cart.length === 0) return null;
        const products = cart.map((id) => getProduct(id)).filter(Boolean);
        const totalCents = products.reduce((sum, product) => sum + (product?.priceCents ?? 0), 0);
        const order: Order = {
          id: crypto.randomUUID(),
          userId: user.uid,
          productIds: cart,
          totalCents,
          currency: "USD",
          status: "paid",
          createdAt: new Date().toISOString(),
        };
        setOrders([order, ...orders]);
        const granted = [...entitlements];
        for (const product of products) {
          if (!product) continue;
          for (const target of grantTargetsForProduct(product)) {
            if (!granted.some((item) => item.contentKind === target.contentKind && item.contentId === target.contentId)) {
              granted.push(makeEntitlement(user.uid, target.contentKind, target.contentId, "purchase"));
            }
          }
        }
        setEntitlements(granted);
        setCart([]);
        track({ name: "order_placed", orderId: order.id });
        return order;
      },
      toggleBookmark(kind, targetId, label) {
        if (!user) return;
        const existing = bookmarks.find((item) => item.targetId === targetId && item.kind === kind);
        setBookmarks(
          existing
            ? bookmarks.filter((item) => item.id !== existing.id)
            : [
                ...bookmarks,
                {
                  id: crypto.randomUUID(),
                  userId: user.uid,
                  kind,
                  targetId,
                  label,
                  createdAt: new Date().toISOString(),
                },
              ],
        );
      },
      setReadingProgress(bookId, chapterId, percent) {
        if (!user) return;
        const record: ReadingProgress = {
          userId: user.uid,
          bookId,
          chapterId,
          percent,
          updatedAt: new Date().toISOString(),
        };
        setProgress([...progress.filter((item) => item.bookId !== bookId), record]);
        void saveOfflineProgress(record);
        track({ name: "reading_progress", bookId, percent });
      },
    }),
    [
      bookmarks,
      cart,
      enrollments,
      entitlements,
      orders,
      programEnrollments,
      progress,
      setBookmarks,
      setCart,
      setEnrollments,
      setEntitlements,
      setOrders,
      setProgramEnrollments,
      setProgress,
      user,
    ],
  );

  return <UserLibraryContext.Provider value={value}>{children}</UserLibraryContext.Provider>;
}

export function useUserLibrary() {
  const ctx = useContext(UserLibraryContext);
  if (!ctx) throw new Error("useUserLibrary must be used within UserLibraryProvider");
  return ctx;
}

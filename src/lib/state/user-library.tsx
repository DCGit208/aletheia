"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { useAuth } from "@/lib/auth/provider";
import { makeEntitlement, grantTargetsForProduct, holdsEntitlement } from "@/lib/access/entitlements";
import { isLiveCheckout } from "@/lib/commerce/mode";
import { redirectToStripeCheckout } from "@/lib/commerce/stripe-client";
import { getCourse, getProduct, getProgram, getSchool } from "@/lib/data/repository";
import { getFirebaseDb } from "@/lib/firebase/client";
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
  clearCart: () => void;
  checkout: () => Order | null;
  pay: () => Promise<Order | null>;
  toggleBookmark: (kind: ContentKind, targetId: string, label: string) => void;
  setReadingProgress: (bookId: string, chapterId: string, percent: number, scrollPercent?: number) => void;
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

  useEffect(() => {
    if (!user || user.source !== "firebase") return;
    const db = getFirebaseDb();
    if (!db) return;
    const unsubscribe = onSnapshot(collection(db, "usersPrivate", user.uid, "entitlements"), (snap) => {
      setEntitlements(snap.docs.map((item) => item.data() as Entitlement));
    });
    return unsubscribe;
  }, [setEntitlements, user]);

  useEffect(() => {
    if (!user || user.source !== "firebase") return;
    const db = getFirebaseDb();
    if (!db) return;
    const unsubscribe = onSnapshot(collection(db, "usersPrivate", user.uid, "orders"), (snap) => {
      setOrders(snap.docs.map((item) => orderFromFirestore(item.id, item.data(), user.uid)));
    });
    return unsubscribe;
  }, [setOrders, user]);

  const value = useMemo<UserLibraryValue>(() => {
    const checkout = (): Order | null => {
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
        source: "local",
        createdAt: new Date().toISOString(),
      };
      setOrders([order, ...orders]);
      const granted = [...entitlements];
      let nextProgramEnrollments = [...programEnrollments];
      for (const product of products) {
        if (!product) continue;
        for (const target of grantTargetsForProduct(product)) {
          if (!granted.some((item) => item.contentKind === target.contentKind && item.contentId === target.contentId)) {
            granted.push(makeEntitlement(user.uid, target.contentKind, target.contentId, "purchase"));
          }
        }
        if (product.kind === "program" && product.contentId) {
          const program = getProgram(product.contentId);
          const school = program ? getSchool(program.schoolId) : null;
          if (program && school && !nextProgramEnrollments.some((item) => item.schoolId === school.id)) {
            nextProgramEnrollments = [
              ...nextProgramEnrollments,
              {
                id: `${user.uid}:${program.id}`,
                userId: user.uid,
                schoolId: school.id,
                programId: program.id,
                startedAt: new Date().toISOString(),
              },
            ];
            if (!granted.some((item) => item.contentKind === "program" && item.contentId === program.id)) {
              granted.push(makeEntitlement(user.uid, "program", program.id, "purchase"));
            }
          }
        }
      }
      setEntitlements(granted);
      setProgramEnrollments(nextProgramEnrollments);
      setCart([]);
      track({ name: "order_placed", orderId: order.id });
      return order;
    };

    const pay = async (): Promise<Order | null> => {
      if (!user || cart.length === 0) return null;
      if (isLiveCheckout(user)) {
        if (user.source !== "firebase") {
          throw new Error("Card payment requires an Aletheia account created with email, not a local demo session.");
        }
        await redirectToStripeCheckout(cart, window.location.origin);
        return null;
      }
      return checkout();
    };

    return {
      entitlements,
      enrollments,
      programEnrollments,
      orders,
      bookmarks,
      progress,
      cart,
      enroll(courseId) {
        if (!user) return;
        const course = getCourse(courseId);
        if (!course) return;
        const paid = course.accessLevel === "entitled" || course.accessLevel === "private";
        if (paid && !holdsEntitlement(entitlements, "course", courseId)) return;
        const existing = enrollments.find((item) => item.courseId === courseId);
        if (existing) return;
        const next = [
          ...enrollments,
          { id: `${user.uid}:${courseId}`, userId: user.uid, courseId, startedAt: new Date().toISOString(), completedLessonIds: [] },
        ];
        setEnrollments(next);
        if (!paid && !holdsEntitlement(entitlements, "course", courseId)) {
          setEntitlements([...entitlements, makeEntitlement(user.uid, "course", courseId, "enrollment")]);
        }
        track({ name: "course_enroll", courseId });
      },
      enrollInProgram(programId) {
        if (!user) return;
        const program = getProgram(programId);
        const school = program ? getSchool(program.schoolId) : null;
        if (!program || !school) return;
        if (program.accessLevel === "entitled" && !holdsEntitlement(entitlements, "program", program.id)) return;
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
      clearCart() {
        setCart([]);
      },
      checkout,
      pay,
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
      setReadingProgress(bookId, chapterId, percent, scrollPercent) {
        if (!user) return;
        const record: ReadingProgress = {
          userId: user.uid,
          bookId,
          chapterId,
          percent,
          scrollPercent,
          updatedAt: new Date().toISOString(),
        };
        setProgress([...progress.filter((item) => item.bookId !== bookId), record]);
        void saveOfflineProgress(record);
        track({ name: "reading_progress", bookId, percent });
      },
    };
  },
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

function orderFromFirestore(id: string, data: Record<string, unknown>, userId: string): Order {
  const createdAt = data.createdAt as { toDate?: () => Date } | string | undefined;
  let created = new Date().toISOString();
  if (typeof createdAt === "string") created = createdAt;
  else if (createdAt && typeof createdAt.toDate === "function") created = createdAt.toDate().toISOString();
  const network = data.network === "orange" ? "orange" : data.network === "mtn" ? "mtn" : undefined;
  const source = data.source === "momo" || data.source === "stripe" || data.source === "local" ? data.source : undefined;
  const status =
    data.status === "paid" || data.status === "failed" || data.status === "refunded" || data.status === "pending"
      ? data.status
      : "pending";
  return {
    id: typeof data.id === "string" ? data.id : id,
    userId: typeof data.userId === "string" ? data.userId : userId,
    productIds: Array.isArray(data.productIds)
      ? data.productIds.filter((item): item is string => typeof item === "string")
      : [],
    totalCents: typeof data.totalCents === "number" ? data.totalCents : 0,
    currency: data.currency === "XAF" ? "XAF" : "USD",
    status,
    createdAt: created,
    source,
    amountXaf: typeof data.amountXaf === "number" ? data.amountXaf : undefined,
    reference: typeof data.reference === "string" ? data.reference : undefined,
    network,
  };
}

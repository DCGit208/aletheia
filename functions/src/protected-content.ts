import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { HttpsError, onCall } from "firebase-functions/v2/https";
import contentData from "./protected-content-data.json";
import {
  canReadAllProtectedContent,
  mayReadProtectedContent,
  type ProtectedContentKind,
  type ProtectedContentPolicy,
} from "./protected-content-access.js";

const REGION = "us-central1";

export const getProtectedContent = onCall({ region: REGION, cors: true }, async (request) => {
  const kind = request.data?.kind;
  const contentId = typeof request.data?.contentId === "string" ? request.data.contentId : "";
  const itemId = typeof request.data?.itemId === "string" ? request.data.itemId : "";
  if ((kind !== "book" && kind !== "course") || !contentId) {
    throw new HttpsError("invalid-argument", "A content kind and identifier are required.");
  }

  const policies =
    kind === "book"
      ? (contentData.books as ProtectedContentPolicy[])
      : (contentData.courses as ProtectedContentPolicy[]);
  const policy = policies.find((candidate) => candidate.id === contentId);
  if (!policy) throw new HttpsError("not-found", "Content not found.");

  const uid = request.auth?.uid;
  const token = request.auth?.token;
  const role = typeof token?.aletheiaRole === "string" ? token.aletheiaRole : "";
  let hasEntitlement = false;
  if (uid) {
    const account = await getAuth().getUser(uid);
    if (account.disabled) throw new HttpsError("permission-denied", "This account is disabled.");
    const entitlement = await getFirestore()
      .doc(`usersPrivate/${uid}/entitlements/${uid}:${kind}:${contentId}`)
      .get();
    const data = entitlement.data();
    hasEntitlement =
      entitlement.exists &&
      data?.userId === uid &&
      data?.contentKind === kind &&
      data?.contentId === contentId;
  }

  const access = {
    kind: kind as ProtectedContentKind,
    policy,
    uid,
    role,
    hasEntitlement,
  };
  const allowed = mayReadProtectedContent(access);
  const previewOnly = !canReadAllProtectedContent(access);
  if (!allowed) throw new HttpsError(uid ? "permission-denied" : "unauthenticated", "Purchase or sign in to access this content.");

  if (kind === "book") {
    const previewChapterIds = policy.previewChapterIds ?? [];
    const chapters = contentData.chapters.filter(
      (chapter) =>
        chapter.bookId === contentId &&
        (!previewOnly || previewChapterIds.includes(chapter.id)),
    );
    if (chapters.length === 0) throw new HttpsError("not-found", "Book content not found.");
    return { chapters };
  }

  const courseLessons = contentData.lessons.filter((lesson) => lesson.courseId === contentId);
  const lessons = itemId ? courseLessons.filter((lesson) => lesson.id === itemId) : courseLessons;
  if (lessons.length === 0) throw new HttpsError("not-found", "Course content not found.");
  return { lessons };
});

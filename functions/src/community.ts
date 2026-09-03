import { FieldValue, getFirestore, Timestamp } from "firebase-admin/firestore";
import { HttpsError, onCall } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";
import { ensureVapid, listBoardWatcherUids, notifyUsers, vapidPrivateKey } from "./notify.js";

const REGION = "us-central1";

export const COMMONS_ID = "commons";

export const KNOWN_BOARDS: Record<
  string,
  { title: string; communityId: string; allowMemberTopics: boolean }
> = {
  "board-announce": { title: "Announcements", communityId: COMMONS_ID, allowMemberTopics: false },
  "board-studies": { title: "Studies", communityId: COMMONS_ID, allowMemberTopics: true },
  "board-general": { title: "General", communityId: COMMONS_ID, allowMemberTopics: true },
  "board-projects": { title: "Projects", communityId: COMMONS_ID, allowMemberTopics: true },
};

const CATALOG_TOPICS: Record<
  string,
  { communityId: string; boardId: string; title: string; excerpt: string; authorName: string }
> = {
  "topic-welcome": {
    communityId: COMMONS_ID,
    boardId: "board-announce",
    title: "Welcome to the Commons",
    excerpt: "How this community is governed, and why not every member administers a group.",
    authorName: "Aletheia Faculty",
  },
  "topic-attention": {
    communityId: COMMONS_ID,
    boardId: "board-studies",
    title: "Attention as a first assignment",
    excerpt: "Students of Foundations of Truth are posting their source work here.",
    authorName: "Dr. Coach Achu Gustave",
  },
  "topic-name": {
    communityId: COMMONS_ID,
    boardId: "board-studies",
    title: "Stories of a received name",
    excerpt: "Optional sharing from the Identity Formed course.",
    authorName: "Dr. Coach Achu Gustave",
  },
  "topic-city": {
    communityId: COMMONS_ID,
    boardId: "board-general",
    title: "What would a steward ask of this platform?",
    excerpt: "A public thread on auditable power.",
    authorName: "Member",
  },
  "topic-projects-open": {
    communityId: COMMONS_ID,
    boardId: "board-projects",
    title: "What is a project here?",
    excerpt: "Projects are work the house is doing — not a separate app.",
    authorName: "Aletheia Faculty",
  },
};

function requireMember(request: { auth?: { uid: string; token: Record<string, unknown> } }) {
  if (!request.auth?.uid) throw new HttpsError("unauthenticated", "Sign in to take part in the Commons.");
  return request.auth;
}

function isAdministrator(auth: { token: Record<string, unknown> }) {
  return auth.token.aletheiaRole === "administrator";
}

function displayNameOf(auth: { token: Record<string, unknown> }) {
  const name = auth.token.name;
  if (typeof name === "string" && name.trim().length > 0) return name.trim().slice(0, 80);
  const email = auth.token.email;
  if (typeof email === "string" && email.includes("@")) return email.split("@")[0].slice(0, 80);
  return "Member";
}

export function topicPath(topicId: string) {
  return CATALOG_TOPICS[topicId] ? `/community/topic/${topicId}` : `/community/talk?id=${encodeURIComponent(topicId)}`;
}

export function productTopicId(productId: string) {
  return `topic-product-${productId}`;
}

async function ensureTopicDoc(topicId: string) {
  const db = getFirestore();
  const ref = db.doc(`topics/${topicId}`);
  const snap = await ref.get();
  if (snap.exists) return snap;
  const catalog = CATALOG_TOPICS[topicId];
  if (!catalog) return snap;
  await ref.set({
    id: topicId,
    communityId: catalog.communityId,
    boardId: catalog.boardId,
    title: catalog.title,
    excerpt: catalog.excerpt,
    authorName: catalog.authorName,
    authorUid: "catalog",
    replyCount: 0,
    pinned: topicId === "topic-welcome",
    locked: false,
    status: "published",
    updatedAt: FieldValue.serverTimestamp(),
  });
  return ref.get();
}

async function notifyBoardWatchers(input: {
  boardId: string;
  authorUid: string;
  topicId: string;
  title: string;
  authorName: string;
  body: string;
}) {
  if (!input.boardId) return;
  try {
    ensureVapid(vapidPrivateKey.value());
    const watchers = (await listBoardWatcherUids(input.boardId)).filter((uid) => uid !== input.authorUid);
    if (watchers.length === 0) return;
    await notifyUsers(watchers, {
      title: input.title,
      body: `${input.authorName}: ${input.body.slice(0, 160)}`,
      href: topicPath(input.topicId),
      kind: "board_post",
    });
  } catch (error) {
    logger.warn("board watcher notify failed", {
      boardId: input.boardId,
      message: error instanceof Error ? error.message : String(error),
    });
  }
}

export const createDiscussion = onCall(
  { region: REGION, cors: true, secrets: [vapidPrivateKey] },
  async (request) => {
  const auth = requireMember(request);
  const title = typeof request.data?.title === "string" ? request.data.title.trim() : "";
  const body = typeof request.data?.body === "string" ? request.data.body.trim() : "";
  const boardId = typeof request.data?.boardId === "string" ? request.data.boardId.trim() : "";
  const productId = typeof request.data?.productId === "string" ? request.data.productId.trim() : "";
  if (title.length < 3 || title.length > 120) throw new HttpsError("invalid-argument", "Give the thread a title.");
  if (body.length < 1 || body.length > 8000) throw new HttpsError("invalid-argument", "Write the opening post.");

  const known = KNOWN_BOARDS[boardId];
  const db = getFirestore();
  const boardSnap = known ? null : await db.doc(`boards/${boardId}`).get();
  const communityId = known?.communityId ?? (typeof boardSnap?.data()?.communityId === "string" ? boardSnap.data()?.communityId : "");
  if (!communityId) throw new HttpsError("not-found", "Unknown board.");
  const allowMemberTopics = known ? known.allowMemberTopics : true;
  if (!allowMemberTopics && !isAdministrator(auth)) {
    throw new HttpsError("permission-denied", "Only administrators open threads on Announcements.");
  }

  const topicId = productId ? productTopicId(productId) : db.collection("topics").doc().id;
  const topicRef = db.doc(`topics/${topicId}`);
  const existing = await topicRef.get();
  if (existing.exists && productId) {
    return { success: true as const, topicId, href: topicPath(topicId), already: true as const };
  }

  const authorName = displayNameOf(auth);
  const postRef = db.collection("posts").doc();
  const batch = db.batch();
  batch.set(topicRef, {
    id: topicId,
    communityId,
    boardId,
    title,
    excerpt: body.slice(0, 240),
    authorName,
    authorUid: auth.uid,
    replyCount: 0,
    pinned: false,
    locked: false,
    status: "published",
    productId: productId || null,
    updatedAt: FieldValue.serverTimestamp(),
    createdAt: FieldValue.serverTimestamp(),
  });
  batch.set(postRef, {
    id: postRef.id,
    topicId,
    boardId,
    authorUid: auth.uid,
    authorName,
    body,
    createdAt: Timestamp.now(),
  });
  await batch.commit();
  await notifyBoardWatchers({
    boardId,
    authorUid: auth.uid,
    topicId,
    title,
    authorName,
    body,
  });
  return { success: true as const, topicId, href: topicPath(topicId), already: false as const };
});

export const postToTopic = onCall(
  { region: REGION, cors: true, secrets: [vapidPrivateKey] },
  async (request) => {
  const auth = requireMember(request);
  const topicId = typeof request.data?.topicId === "string" ? request.data.topicId.trim() : "";
  const body = typeof request.data?.body === "string" ? request.data.body.trim() : "";
  if (!topicId) throw new HttpsError("invalid-argument", "Missing discussion.");
  if (body.length < 1 || body.length > 8000) throw new HttpsError("invalid-argument", "Write a reply.");

  const topicSnap = await ensureTopicDoc(topicId);
  if (!topicSnap.exists) throw new HttpsError("not-found", "Discussion not found.");
  const topic = topicSnap.data() ?? {};
  if (topic.locked === true) throw new HttpsError("failed-precondition", "This discussion is locked.");
  if (topic.status && topic.status !== "published") {
    throw new HttpsError("not-found", "Discussion not found.");
  }

  const db = getFirestore();
  const postRef = db.collection("posts").doc();
  await postRef.set({
    id: postRef.id,
    topicId,
    boardId: topic.boardId ?? "",
    authorUid: auth.uid,
    authorName: displayNameOf(auth),
    body,
    createdAt: Timestamp.now(),
  });
  await topicSnap.ref.update({
    replyCount: FieldValue.increment(1),
    updatedAt: FieldValue.serverTimestamp(),
  });
  await notifyBoardWatchers({
    boardId: typeof topic.boardId === "string" ? topic.boardId : "",
    authorUid: auth.uid,
    topicId,
    title: typeof topic.title === "string" && topic.title.length > 0 ? topic.title : "New post",
    authorName: displayNameOf(auth),
    body,
  });
  return { success: true as const, postId: postRef.id };
});

export const watchBoard = onCall({ region: REGION, cors: true }, async (request) => {
  const auth = requireMember(request);
  const boardId = typeof request.data?.boardId === "string" ? request.data.boardId.trim() : "";
  const watch = request.data?.watch !== false;
  if (!boardId) throw new HttpsError("invalid-argument", "Missing board.");
  if (!KNOWN_BOARDS[boardId]) {
    const board = await getFirestore().doc(`boards/${boardId}`).get();
    if (!board.exists) throw new HttpsError("not-found", "Unknown board.");
  }
  const ref = getFirestore().doc(`boards/${boardId}/watchers/${auth.uid}`);
  if (watch) {
    await ref.set({ uid: auth.uid, createdAt: FieldValue.serverTimestamp() });
  } else {
    await ref.delete();
  }
  return { success: true as const, watch };
});

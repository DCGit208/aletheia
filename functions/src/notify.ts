import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import { logger } from "firebase-functions";
import { defineSecret } from "firebase-functions/params";
import webpush from "web-push";

export const vapidPrivateKey = defineSecret("VAPID_PRIVATE_KEY");

export const VAPID_PUBLIC_KEY =
  "BAco4Gx0uhaEqNS6SywUb5qpfCtvtsdvQgUiuzfHNzghvJz9LrXK5--mQ51zmTaMK9M8LkqJc4CPAf4JbHmbPgY";

const FOUNDING_ADMIN_UID = "dhVjAIKRJTb6XiyUAq7fVsGJp1a2";

let vapidReady = false;

export function ensureVapid(privateKey: string) {
  if (vapidReady) return;
  webpush.setVapidDetails("mailto:bthedugrp@gmail.com", VAPID_PUBLIC_KEY, privateKey);
  vapidReady = true;
}

export type NotifyPayload = {
  title: string;
  body: string;
  href: string;
  kind: string;
};

export async function writeInAppNotification(uid: string, payload: NotifyPayload) {
  const db = getFirestore();
  await db.collection("usersPrivate").doc(uid).collection("notifications").add({
    title: payload.title,
    body: payload.body,
    href: payload.href,
    kind: payload.kind,
    read: false,
    createdAt: Timestamp.now(),
  });
}

export async function sendWebPush(uid: string, payload: NotifyPayload) {
  const db = getFirestore();
  const snap = await db.collection("usersPrivate").doc(uid).collection("pushSubscriptions").get();
  const json = JSON.stringify({
    title: payload.title,
    body: payload.body,
    href: payload.href,
    kind: payload.kind,
  });
  await Promise.all(
    snap.docs.map(async (docSnap) => {
      const sub = docSnap.data() as {
        endpoint?: string;
        keys?: { p256dh?: string; auth?: string };
      };
      if (!sub.endpoint || !sub.keys?.p256dh || !sub.keys?.auth) return;
      try {
        await webpush.sendNotification(
          {
            endpoint: sub.endpoint,
            keys: { p256dh: sub.keys.p256dh, auth: sub.keys.auth },
          },
          json,
        );
      } catch (error) {
        const status = (error as { statusCode?: number }).statusCode;
        if (status === 404 || status === 410) {
          await docSnap.ref.delete();
        } else {
          logger.warn("web-push failed", { uid, status });
        }
      }
    }),
  );
}

export async function notifyUsers(uids: string[], payload: NotifyPayload) {
  const unique = [...new Set(uids.filter(Boolean))];
  for (let i = 0; i < unique.length; i += 15) {
    const slice = unique.slice(i, i + 15);
    await Promise.all(
      slice.map(async (uid) => {
        await writeInAppNotification(uid, payload);
        await sendWebPush(uid, payload);
      }),
    );
  }
}

export async function listAdministratorUids(): Promise<string[]> {
  const result = await getAuth().listUsers(100);
  const fromClaims = result.users
    .filter((user) => user.customClaims?.aletheiaRole === "administrator")
    .map((user) => user.uid);
  return [...new Set([...fromClaims, FOUNDING_ADMIN_UID])];
}

export async function notifyAdministrators(payload: NotifyPayload) {
  await notifyUsers(await listAdministratorUids(), payload);
}

export async function listBoardWatcherUids(boardId: string): Promise<string[]> {
  const db = getFirestore();
  const snap = await db.collection("boards").doc(boardId).collection("watchers").limit(400).get();
  return snap.docs.map((docSnap) => docSnap.id);
}

export async function listMemberUids(limit = 400): Promise<string[]> {
  const result = await getAuth().listUsers(Math.min(limit, 1000));
  return result.users.filter((user) => !user.disabled).map((user) => user.uid);
}

export async function notifyQuietly(uids: string[], payload: NotifyPayload) {
  try {
    await notifyUsers(uids, payload);
  } catch (error) {
    logger.warn("notify failed", { kind: payload.kind, message: error instanceof Error ? error.message : String(error) });
  }
}

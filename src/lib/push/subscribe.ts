"use client";

import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase/client";
import { VAPID_PUBLIC_KEY } from "./vapid";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  const output = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i += 1) output[i] = raw.charCodeAt(i);
  return output;
}

function subscriptionId(endpoint: string) {
  return btoa(endpoint).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "").slice(0, 88);
}

export async function enablePushAlerts(uid: string) {
  if (typeof window === "undefined" || !("serviceWorker" in navigator) || !("PushManager" in window)) {
    throw new Error("This browser cannot show home-screen alerts.");
  }
  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    throw new Error("Allow notifications in the browser to receive board and payment alerts.");
  }
  await navigator.serviceWorker.register("/sw.js");
  const registration = await navigator.serviceWorker.ready;
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
  });
  const json = subscription.toJSON();
  if (!json.endpoint || !json.keys?.p256dh || !json.keys?.auth) {
    throw new Error("The browser did not return a complete push subscription.");
  }
  const db = getFirebaseDb();
  if (!db) throw new Error("Firebase is not connected.");
  const id = subscriptionId(json.endpoint);
  await setDoc(doc(db, "usersPrivate", uid, "pushSubscriptions", id), {
    endpoint: json.endpoint,
    keys: { p256dh: json.keys.p256dh, auth: json.keys.auth },
    userAgent: navigator.userAgent,
    createdAt: new Date().toISOString(),
  });
  return id;
}

export async function disablePushAlerts(uid: string) {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
  const registration = await navigator.serviceWorker.ready;
  const subscription = await registration.pushManager.getSubscription();
  if (!subscription) return;
  const endpoint = subscription.endpoint;
  await subscription.unsubscribe();
  const db = getFirebaseDb();
  if (!db) return;
  await deleteDoc(doc(db, "usersPrivate", uid, "pushSubscriptions", subscriptionId(endpoint)));
}

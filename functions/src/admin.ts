import { getAuth } from "firebase-admin/auth";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { HttpsError, onCall } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";
import { normalizeGrantTarget } from "../../src/lib/admin/grant-validation";
import { getOffer, isMomoYearProduct, uniqueGrants, type GrantKind } from "./offerings.js";
import { ensureVapid, listMemberUids, notifyUsers, vapidPrivateKey } from "./notify.js";

const REGION = "us-central1";
const FOUNDING_ADMIN_EMAIL = "dr.coachachu@btheducationgroup.org";
const ASSIGNABLE_ROLES = [
  "member",
  "student",
  "author",
  "contributor",
  "moderator",
  "administrator",
] as const;
type AssignableRole = (typeof ASSIGNABLE_ROLES)[number];
const GRANT_KINDS: GrantKind[] = ["book", "course", "program"];

function isAdministrator(auth: { token: Record<string, unknown> } | undefined): boolean {
  return auth?.token.aletheiaRole === "administrator";
}

function requireAdmin(request: { auth?: { uid: string; token: Record<string, unknown> } }) {
  if (!request.auth?.uid) throw new HttpsError("unauthenticated", "Sign in first.");
  if (!isAdministrator(request.auth)) {
    throw new HttpsError("permission-denied", "Administrator only.");
  }
  return request.auth;
}

function actorEmail(auth: { token: Record<string, unknown> }): string {
  return typeof auth.token.email === "string" ? auth.token.email : "";
}

function isoTimestamp(value: unknown): string | null {
  if (value && typeof value === "object" && "toDate" in value) {
    const date = (value as { toDate?: () => Date }).toDate?.();
    if (date instanceof Date) return date.toISOString();
  }
  return null;
}

async function writeAudit(input: {
  actorUid: string;
  actorEmail: string;
  action: string;
  target: string;
  detail: string;
}) {
  await getFirestore().collection("auditLogs").add({
    ...input,
    createdAt: FieldValue.serverTimestamp(),
  });
}

function roleFromClaims(claims: Record<string, unknown> | undefined): string {
  const role = claims?.aletheiaRole;
  return typeof role === "string" && role.length > 0 ? role : "member";
}

export const listMembers = onCall({ region: REGION, cors: true }, async (request) => {
  requireAdmin(request);
  const result = await getAuth().listUsers(100);
  const members = result.users.map((user) => ({
    uid: user.uid,
    email: user.email ?? "",
    displayName: user.displayName ?? user.email ?? "Member",
    role: roleFromClaims(user.customClaims),
    disabled: user.disabled,
    createdAt: user.metadata.creationTime ?? null,
    lastSignInAt: user.metadata.lastSignInTime ?? null,
  }));
  members.sort((a, b) => a.email.localeCompare(b.email));
  return { members };
});

export const lookupMember = onCall({ region: REGION, cors: true }, async (request) => {
  requireAdmin(request);
  const email = typeof request.data?.email === "string" ? request.data.email.trim().toLowerCase() : "";
  const uidArg = typeof request.data?.uid === "string" ? request.data.uid.trim() : "";
  if (!email && !uidArg) throw new HttpsError("invalid-argument", "Enter an email.");

  const auth = getAuth();
  const user = email ? await auth.getUserByEmail(email) : await auth.getUser(uidArg);
  const db = getFirestore();
  const [ents, orders, programs] = await Promise.all([
    db.collection(`usersPrivate/${user.uid}/entitlements`).get(),
    db.collection(`usersPrivate/${user.uid}/orders`).get(),
    db.collection(`usersPrivate/${user.uid}/programEnrollments`).get(),
  ]);

  return {
    member: {
      uid: user.uid,
      email: user.email ?? "",
      displayName: user.displayName ?? user.email ?? "Member",
      role: roleFromClaims(user.customClaims),
      disabled: user.disabled,
      createdAt: user.metadata.creationTime ?? null,
      lastSignInAt: user.metadata.lastSignInTime ?? null,
    },
    entitlements: ents.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        contentKind: data.contentKind ?? "",
        contentId: data.contentId ?? "",
        source: data.source ?? "",
        grantedAt: isoTimestamp(data.grantedAt),
      };
    }),
    orders: orders.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        productIds: Array.isArray(data.productIds) ? data.productIds : [],
        status: data.status ?? "",
        source: data.source ?? "",
        totalCents: data.totalCents ?? 0,
        currency: data.currency ?? "USD",
        amountXaf: data.amountXaf ?? null,
        reference: data.reference ?? null,
        createdAt: isoTimestamp(data.createdAt),
      };
    }),
    programEnrollments: programs.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        programId: data.programId ?? "",
        schoolId: data.schoolId ?? "",
        startedAt: isoTimestamp(data.startedAt),
      };
    }),
  };
});

export const setMemberRole = onCall({ region: REGION, cors: true }, async (request) => {
  const actor = requireAdmin(request);
  const uid = typeof request.data?.uid === "string" ? request.data.uid : "";
  const role = request.data?.role;
  if (!uid) throw new HttpsError("invalid-argument", "Missing member.");
  if (!ASSIGNABLE_ROLES.includes(role as AssignableRole)) {
    throw new HttpsError("invalid-argument", "That role cannot be assigned.");
  }
  const auth = getAuth();
  const user = await auth.getUser(uid);
  const email = (user.email ?? "").toLowerCase();
  if (email === FOUNDING_ADMIN_EMAIL && role !== "administrator") {
    throw new HttpsError("failed-precondition", "The founding administrator cannot be demoted.");
  }
  if (uid === actor.uid && role !== "administrator") {
    throw new HttpsError("failed-precondition", "You cannot remove your own administrator role.");
  }
  await auth.setCustomUserClaims(uid, { ...(user.customClaims ?? {}), aletheiaRole: role });
  await writeAudit({
    actorUid: actor.uid,
    actorEmail: actorEmail(actor),
    action: "role.set",
    target: email || uid,
    detail: `${roleFromClaims(user.customClaims)} → ${role}`,
  });
  return { success: true as const, role };
});

export const setMemberDisabled = onCall({ region: REGION, cors: true }, async (request) => {
  const actor = requireAdmin(request);
  const uid = typeof request.data?.uid === "string" ? request.data.uid : "";
  const disabled = request.data?.disabled === true;
  if (!uid) throw new HttpsError("invalid-argument", "Missing member.");
  if (uid === actor.uid) throw new HttpsError("failed-precondition", "You cannot disable your own sign-in.");
  const auth = getAuth();
  const user = await auth.getUser(uid);
  if ((user.email ?? "").toLowerCase() === FOUNDING_ADMIN_EMAIL && disabled) {
    throw new HttpsError("failed-precondition", "The founding administrator cannot be disabled.");
  }
  await auth.updateUser(uid, { disabled });
  await writeAudit({
    actorUid: actor.uid,
    actorEmail: actorEmail(actor),
    action: disabled ? "member.disable" : "member.enable",
    target: user.email ?? uid,
    detail: disabled ? "disabled" : "enabled",
  });
  return { success: true as const, disabled };
});

async function writeGrants(uid: string, grants: { contentKind: GrantKind; contentId: string }[], productIds: string[]) {
  const db = getFirestore();
  const batch = db.batch();
  for (const grant of grants) {
    const entitlementId = `${uid}:${grant.contentKind}:${grant.contentId}`;
    batch.set(
      db.doc(`usersPrivate/${uid}/entitlements/${entitlementId}`),
      {
        id: entitlementId,
        userId: uid,
        contentKind: grant.contentKind,
        contentId: grant.contentId,
        source: "administrator_grant",
        grantedAt: FieldValue.serverTimestamp(),
      },
      { merge: true },
    );
  }
  for (const productId of productIds) {
    const offer = getOffer(productId);
    if (!isMomoYearProduct(productId) || !offer?.contentId) continue;
    const programId = offer.contentId;
    batch.set(
      db.doc(`usersPrivate/${uid}/programEnrollments/${uid}:${programId}`),
      {
        id: `${uid}:${programId}`,
        userId: uid,
        schoolId: "school-foundation",
        programId,
        startedAt: FieldValue.serverTimestamp(),
      },
      { merge: true },
    );
  }
  await batch.commit();
}

export const grantProductAccess = onCall({ region: REGION, cors: true }, async (request) => {
  const actor = requireAdmin(request);
  const uid = typeof request.data?.uid === "string" ? request.data.uid.trim() : "";
  const productId = typeof request.data?.productId === "string" ? request.data.productId.trim() : "";
  if (!uid || !productId) throw new HttpsError("invalid-argument", "Member and product are required.");
  const offer = getOffer(productId);
  if (!offer) throw new HttpsError("not-found", `Unknown product: ${productId}`);
  const grants = uniqueGrants([productId]);
  if (grants.length === 0) {
    throw new HttpsError("failed-precondition", `Product ${productId} does not grant access.`);
  }
  await writeGrants(uid, grants, [productId]);
  const user = await getAuth().getUser(uid);
  await writeAudit({
    actorUid: actor.uid,
    actorEmail: actorEmail(actor),
    action: "access.grantProduct",
    target: user.email ?? uid,
    detail: productId,
  });
  return { success: true as const, grants };
});

export const grantContentAccess = onCall({ region: REGION, cors: true }, async (request) => {
  const actor = requireAdmin(request);
  const uid = typeof request.data?.uid === "string" ? request.data.uid.trim() : "";
  if (!uid) throw new HttpsError("invalid-argument", "Member is required.");
  let grant: { contentKind: GrantKind; contentId: string };
  try {
    grant = normalizeGrantTarget(request.data?.contentKind, request.data?.contentId);
  } catch (error) {
    throw new HttpsError("invalid-argument", error instanceof Error ? error.message : "Invalid content grant.");
  }
  await writeGrants(uid, [grant], []);
  const user = await getAuth().getUser(uid);
  await writeAudit({
    actorUid: actor.uid,
    actorEmail: actorEmail(actor),
    action: "access.grantContent",
    target: user.email ?? uid,
    detail: `${grant.contentKind}:${grant.contentId}`,
  });
  return { success: true as const };
});

export const revokeContentAccess = onCall({ region: REGION, cors: true }, async (request) => {
  const actor = requireAdmin(request);
  const uid = typeof request.data?.uid === "string" ? request.data.uid.trim() : "";
  const entitlementId = typeof request.data?.entitlementId === "string" ? request.data.entitlementId.trim() : "";
  if (!uid || !entitlementId) throw new HttpsError("invalid-argument", "Missing entitlement.");

  const db = getFirestore();
  const entitlementRef = db.doc(`usersPrivate/${uid}/entitlements/${entitlementId}`);
  const snap = await entitlementRef.get();
  if (!snap.exists) throw new HttpsError("not-found", "Entitlement not found.");

  const entitlementData = snap.data() ?? {};
  let grant: { contentKind: GrantKind; contentId: string };
  try {
    grant = normalizeGrantTarget(entitlementData.contentKind, entitlementData.contentId);
  } catch (error) {
    throw new HttpsError("invalid-argument", error instanceof Error ? error.message : "Invalid entitlement grant.");
  }
  const batch = db.batch();
  batch.delete(entitlementRef);
  if (grant.contentKind === "program") {
    batch.delete(db.doc(`usersPrivate/${uid}/programEnrollments/${uid}:${grant.contentId}`));
  }
  await batch.commit();

  const user = await getAuth().getUser(uid);
  await writeAudit({
    actorUid: actor.uid,
    actorEmail: actorEmail(actor),
    action: "access.revoke",
    target: user.email ?? uid,
    detail: `${grant.contentKind}:${grant.contentId}`,
  });
  return { success: true as const };
});

export const listAllOrders = onCall({ region: REGION, cors: true }, async (request) => {
  requireAdmin(request);
  const users = await getAuth().listUsers(100);
  const db = getFirestore();
  const rows: Array<Record<string, unknown>> = [];
  for (const user of users.users) {
    const snap = await db.collection(`usersPrivate/${user.uid}/orders`).get();
    for (const doc of snap.docs) {
      const data = doc.data();
      rows.push({
        id: doc.id,
        uid: user.uid,
        email: user.email ?? "",
        productIds: Array.isArray(data.productIds) ? data.productIds : [],
        status: data.status ?? "",
        source: data.source ?? "",
        totalCents: data.totalCents ?? 0,
        currency: data.currency ?? "USD",
        amountXaf: data.amountXaf ?? null,
        reference: data.reference ?? null,
        createdAt: isoTimestamp(data.createdAt),
      });
    }
  }
  rows.sort((a, b) => String(b.createdAt ?? "").localeCompare(String(a.createdAt ?? "")));
  return { orders: rows.slice(0, 80) };
});

export const listAuditLogs = onCall({ region: REGION, cors: true }, async (request) => {
  requireAdmin(request);
  const snap = await getFirestore().collection("auditLogs").orderBy("createdAt", "desc").limit(80).get();
  return {
    logs: snap.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        actorEmail: data.actorEmail ?? "",
        action: data.action ?? "",
        target: data.target ?? "",
        detail: data.detail ?? "",
        createdAt: isoTimestamp(data.createdAt),
      };
    }),
  };
});

export const publishAnnouncement = onCall({ region: REGION, cors: true }, async (request) => {
  const actor = requireAdmin(request);
  const title = typeof request.data?.title === "string" ? request.data.title.trim() : "";
  const body = typeof request.data?.body === "string" ? request.data.body.trim() : "";
  const important = request.data?.important === true;
  if (title.length < 3 || title.length > 120) throw new HttpsError("invalid-argument", "Title is required.");
  if (body.length < 3 || body.length > 2000) throw new HttpsError("invalid-argument", "Body is required.");
  const ref = getFirestore().collection("announcements").doc();
  await ref.set({
    id: ref.id,
    title,
    body,
    important,
    status: "published",
    publishedAt: FieldValue.serverTimestamp(),
    createdBy: actor.uid,
  });
  await writeAudit({
    actorUid: actor.uid,
    actorEmail: actorEmail(actor),
    action: "announcement.publish",
    target: ref.id,
    detail: title,
  });
  return { success: true as const, id: ref.id };
});

export const listAdminAnnouncements = onCall({ region: REGION, cors: true }, async (request) => {
  requireAdmin(request);
  const snap = await getFirestore().collection("announcements").get();
  const announcements = snap.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title ?? "",
      body: data.body ?? "",
      status: data.status ?? "",
      important: data.important === true,
      publishedAt: isoTimestamp(data.publishedAt),
    };
  });
  announcements.sort((a, b) => String(b.publishedAt ?? "").localeCompare(String(a.publishedAt ?? "")));
  return { announcements };
});

export const archiveAnnouncement = onCall({ region: REGION, cors: true }, async (request) => {
  const actor = requireAdmin(request);
  const id = typeof request.data?.id === "string" ? request.data.id : "";
  if (!id) throw new HttpsError("invalid-argument", "Missing announcement.");
  await getFirestore().doc(`announcements/${id}`).update({ status: "archived" });
  await writeAudit({
    actorUid: actor.uid,
    actorEmail: actorEmail(actor),
    action: "announcement.archive",
    target: id,
    detail: "archived",
  });
  return { success: true as const };
});

export const listOpenReports = onCall({ region: REGION, cors: true }, async (request) => {
  requireAdmin(request);
  const snap = await getFirestore().collection("reports").where("status", "==", "open").get();
  return {
    reports: snap.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        reporterUid: data.reporterUid ?? "",
        targetPath: data.targetPath ?? "",
        reason: data.reason ?? "",
        status: data.status ?? "",
        createdAt: isoTimestamp(data.createdAt),
      };
    }),
  };
});

export const resolveReport = onCall({ region: REGION, cors: true }, async (request) => {
  const actor = requireAdmin(request);
  const id = typeof request.data?.id === "string" ? request.data.id : "";
  if (!id) throw new HttpsError("invalid-argument", "Missing report.");
  await getFirestore().doc(`reports/${id}`).update({
    status: "resolved",
    resolvedAt: FieldValue.serverTimestamp(),
    resolvedBy: actor.uid,
  });
  await writeAudit({
    actorUid: actor.uid,
    actorEmail: actorEmail(actor),
    action: "report.resolve",
    target: id,
    detail: "resolved",
  });
  return { success: true as const };
});

export const createCommunity = onCall({ region: REGION, cors: true }, async (request) => {
  const actor = requireAdmin(request);
  const title = typeof request.data?.title === "string" ? request.data.title.trim() : "";
  const description = typeof request.data?.description === "string" ? request.data.description.trim() : "";
  if (title.length < 3 || title.length > 80) throw new HttpsError("invalid-argument", "Title is required.");
  if (description.length < 3 || description.length > 500) {
    throw new HttpsError("invalid-argument", "Description is required.");
  }
  const db = getFirestore();
  const communityRef = db.collection("communities").doc();
  const boardRef = db.collection("boards").doc();
  const batch = db.batch();
  batch.set(communityRef, {
    id: communityRef.id,
    title,
    description,
    status: "published",
    memberCount: 0,
    createdBy: actor.uid,
    createdAt: FieldValue.serverTimestamp(),
  });
  batch.set(boardRef, {
    id: boardRef.id,
    communityId: communityRef.id,
    title: "General",
    description: "Opening board.",
    topicCount: 0,
    status: "published",
  });
  await batch.commit();
  await writeAudit({
    actorUid: actor.uid,
    actorEmail: actorEmail(actor),
    action: "community.create",
    target: communityRef.id,
    detail: title,
  });
  return { success: true as const, id: communityRef.id };
});

const UPDATE_KINDS = ["notice", "book", "course", "program", "project"] as const;
type UpdateKind = (typeof UPDATE_KINDS)[number];

function defaultUpdateHref(kind: UpdateKind) {
  switch (kind) {
    case "book":
      return "/publications/books";
    case "course":
      return "/learn/courses";
    case "program":
      return "/learn/schools/school-foundation";
    case "project":
      return "/community/commons/board-projects";
    default:
      return "/";
  }
}

export const getAdminOverview = onCall({ region: REGION, cors: true }, async (request) => {
  requireAdmin(request);
  const users = await getAuth().listUsers(100);
  const db = getFirestore();
  let paidOrderCount = 0;
  let revenueUsdCents = 0;
  for (const user of users.users) {
    const snap = await db.collection(`usersPrivate/${user.uid}/orders`).get();
    for (const doc of snap.docs) {
      const data = doc.data();
      if (data.status !== "paid") continue;
      paidOrderCount += 1;
      if (data.currency === "XAF") continue;
      revenueUsdCents += typeof data.totalCents === "number" ? data.totalCents : 0;
    }
  }
  const pendingMomo = await db.collection("manualPayments").where("status", "==", "pending").get();
  return {
    memberCount: users.users.length,
    paidOrderCount,
    pendingMomoCount: pendingMomo.size,
    revenueUsdCents,
  };
});

export const broadcastUpdate = onCall(
  { region: REGION, cors: true, secrets: [vapidPrivateKey], timeoutSeconds: 120 },
  async (request) => {
    const actor = requireAdmin(request);
    const title = typeof request.data?.title === "string" ? request.data.title.trim() : "";
    const body = typeof request.data?.body === "string" ? request.data.body.trim() : "";
    const important = request.data?.important === true;
    const notify = request.data?.notify !== false;
    const kindRaw = typeof request.data?.kind === "string" ? request.data.kind : "notice";
    const kind = (UPDATE_KINDS as readonly string[]).includes(kindRaw) ? (kindRaw as UpdateKind) : "notice";
    const hrefRaw = typeof request.data?.href === "string" ? request.data.href.trim() : "";
    const href = hrefRaw.startsWith("/") ? hrefRaw : defaultUpdateHref(kind);
    if (title.length < 3 || title.length > 120) throw new HttpsError("invalid-argument", "Title is required.");
    if (body.length < 3 || body.length > 2000) throw new HttpsError("invalid-argument", "Body is required.");

    const ref = getFirestore().collection("announcements").doc();
    await ref.set({
      id: ref.id,
      title,
      body,
      important,
      kind,
      href,
      status: "published",
      publishedAt: FieldValue.serverTimestamp(),
      createdBy: actor.uid,
    });
    await writeAudit({
      actorUid: actor.uid,
      actorEmail: actorEmail(actor),
      action: "update.broadcast",
      target: ref.id,
      detail: `${kind}:${title}`,
    });

    if (notify) {
      try {
        ensureVapid(vapidPrivateKey.value());
        const uids = await listMemberUids();
        await notifyUsers(uids, {
          title,
          body: body.slice(0, 180),
          href,
          kind: `update_${kind}`,
        });
      } catch (error) {
        logger.warn("broadcast notify failed", { message: error instanceof Error ? error.message : String(error) });
      }
    }

    return { success: true as const, id: ref.id };
  },
);

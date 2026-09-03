import { httpsCallable } from "firebase/functions";
import { getFirebaseFunctions } from "@/lib/firebase/client";

function functionsOrThrow() {
  const functions = getFirebaseFunctions();
  if (!functions) throw new Error("Administration requires a signed-in Aletheia account.");
  return functions;
}

function call<Req, Res>(name: string) {
  return httpsCallable<Req, Res>(functionsOrThrow(), name);
}

export interface AdminMember {
  uid: string;
  email: string;
  displayName: string;
  role: string;
  disabled: boolean;
  createdAt: string | null;
  lastSignInAt: string | null;
}

export interface AdminEntitlement {
  id: string;
  contentKind: string;
  contentId: string;
  source: string;
  grantedAt: string | null;
}

export interface AdminOrder {
  id: string;
  uid?: string;
  email?: string;
  productIds: string[];
  status: string;
  source: string;
  totalCents: number;
  currency: string;
  amountXaf: number | null;
  reference: string | null;
  createdAt: string | null;
}

export async function listMembers(): Promise<AdminMember[]> {
  const result = await call<Record<string, never>, { members: AdminMember[] }>("listMembers")({});
  return result.data.members ?? [];
}

export async function lookupMember(email: string) {
  const result = await call<
    { email: string },
    {
      member: AdminMember;
      entitlements: AdminEntitlement[];
      orders: AdminOrder[];
      programEnrollments: { id: string; programId: string; schoolId: string; startedAt: string | null }[];
    }
  >("lookupMember")({ email });
  return result.data;
}

export async function setMemberRole(uid: string, role: string) {
  await call<{ uid: string; role: string }, { success: true }>("setMemberRole")({ uid, role });
}

export async function setMemberDisabled(uid: string, disabled: boolean) {
  await call<{ uid: string; disabled: boolean }, { success: true }>("setMemberDisabled")({ uid, disabled });
}

export async function grantProductAccess(uid: string, productId: string) {
  await call<{ uid: string; productId: string }, { success: true }>("grantProductAccess")({ uid, productId });
}

export async function grantContentAccess(uid: string, contentKind: string, contentId: string) {
  await call<{ uid: string; contentKind: string; contentId: string }, { success: true }>("grantContentAccess")({
    uid,
    contentKind,
    contentId,
  });
}

export async function revokeContentAccess(uid: string, entitlementId: string) {
  await call<{ uid: string; entitlementId: string }, { success: true }>("revokeContentAccess")({ uid, entitlementId });
}

export async function listAllOrders(): Promise<AdminOrder[]> {
  const result = await call<Record<string, never>, { orders: AdminOrder[] }>("listAllOrders")({});
  return result.data.orders ?? [];
}

export async function listAuditLogs() {
  const result = await call<
    Record<string, never>,
    { logs: { id: string; actorEmail: string; action: string; target: string; detail: string; createdAt: string | null }[] }
  >("listAuditLogs")({});
  return result.data.logs ?? [];
}

export async function publishAnnouncement(title: string, body: string, important: boolean) {
  await call<{ title: string; body: string; important: boolean }, { success: true }>("publishAnnouncement")({
    title,
    body,
    important,
  });
}

export async function listAdminAnnouncements() {
  const result = await call<
    Record<string, never>,
    { announcements: { id: string; title: string; body: string; status: string; important: boolean; publishedAt: string | null }[] }
  >("listAdminAnnouncements")({});
  return result.data.announcements ?? [];
}

export async function archiveAnnouncement(id: string) {
  await call<{ id: string }, { success: true }>("archiveAnnouncement")({ id });
}

export async function listOpenReports() {
  const result = await call<
    Record<string, never>,
    { reports: { id: string; reporterUid: string; targetPath: string; reason: string; status: string; createdAt: string | null }[] }
  >("listOpenReports")({});
  return result.data.reports ?? [];
}

export async function resolveReport(id: string) {
  await call<{ id: string }, { success: true }>("resolveReport")({ id });
}

export async function createCommunity(title: string, description: string) {
  await call<{ title: string; description: string }, { success: true; id: string }>("createCommunity")({
    title,
    description,
  });
}

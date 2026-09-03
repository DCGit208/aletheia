import { MOMO_REVIEWER_EMAILS } from "@/lib/commerce/offerings";
import type { UserRole } from "@/lib/data/types";

export const PERMISSIONS = {
  "admin.access": ["administrator"],
  "content.publish": ["administrator"],
  "content.manage": ["administrator"],
  "community.create": ["administrator"],
  "community.moderate": ["administrator", "moderator"],
  "community.post": [
    "member",
    "student",
    "author",
    "contributor",
    "moderator",
    "administrator",
  ],
  "commerce.manage": ["administrator"],
  "roles.assign": ["administrator"],
} as const;

export type Permission = keyof typeof PERMISSIONS;

export function hasPermission(role: UserRole | undefined, permission: Permission): boolean {
  if (!role || role === "guest") return false;
  return (PERMISSIONS[permission] as readonly UserRole[]).includes(role);
}

export function canReviewManualPayments(user?: { role?: UserRole; email?: string } | null): boolean {
  if (hasPermission(user?.role, "admin.access")) return true;
  const email = user?.email?.trim().toLowerCase() ?? "";
  return (MOMO_REVIEWER_EMAILS as readonly string[]).includes(email);
}

import type { AccessLevel, Entitlement, EntitlementSource } from "@/lib/data/types";

export function canAccessContent(options: {
  accessLevel: AccessLevel;
  preview: boolean;
  entitlements: Entitlement[];
  contentKind: Entitlement["contentKind"];
  contentId: string;
}): boolean {
  if (options.accessLevel === "public" || options.accessLevel === "free") return true;
  if (options.preview) return true;
  if (options.accessLevel === "private") {
    return options.entitlements.some(
      (item) => item.contentKind === options.contentKind && item.contentId === options.contentId,
    );
  }
  return options.entitlements.some(
    (item) => item.contentKind === options.contentKind && item.contentId === options.contentId,
  );
}

export function makeEntitlement(
  userId: string,
  contentKind: Entitlement["contentKind"],
  contentId: string,
  source: EntitlementSource,
): Entitlement {
  return {
    id: `${userId}:${contentKind}:${contentId}`,
    userId,
    contentKind,
    contentId,
    source,
    grantedAt: new Date().toISOString(),
  };
}

import type { AccessLevel, Entitlement, EntitlementSource, Product } from "@/lib/data/types";

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

export function holdsEntitlement(
  entitlements: Entitlement[],
  contentKind: Entitlement["contentKind"],
  contentId: string,
): boolean {
  return entitlements.some((item) => item.contentKind === contentKind && item.contentId === contentId);
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

export function contentKindForId(contentId: string): Entitlement["contentKind"] {
  if (contentId.startsWith("course-")) return "course";
  if (contentId.startsWith("program-")) return "program";
  if (contentId.startsWith("article-")) return "article";
  if (contentId.startsWith("journal-")) return "journal";
  return "book";
}

export function grantTargetsForProduct(product: Product): { contentKind: Entitlement["contentKind"]; contentId: string }[] {
  if (product.includedContentIds?.length) {
    const ids = [...product.includedContentIds];
    if (product.contentId && !ids.includes(product.contentId)) ids.unshift(product.contentId);
    return uniqueTargets(ids.map((contentId) => ({ contentKind: contentKindForId(contentId), contentId })));
  }
  if (!product.contentId) return [];
  if (product.kind === "course") return [{ contentKind: "course", contentId: product.contentId }];
  if (product.kind === "program") return [{ contentKind: "program", contentId: product.contentId }];
  return [{ contentKind: "book", contentId: product.contentId }];
}

function uniqueTargets(targets: { contentKind: Entitlement["contentKind"]; contentId: string }[]) {
  const seen = new Set<string>();
  return targets.filter((target) => {
    const key = `${target.contentKind}:${target.contentId}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

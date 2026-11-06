export type ProtectedContentKind = "book" | "course";

export interface ProtectedContentPolicy {
  id: string;
  accessLevel: string;
  status: string;
  previewChapterIds?: string[];
}

export interface ProtectedContentAccess {
  kind: ProtectedContentKind;
  policy: ProtectedContentPolicy;
  uid?: string;
  role?: string;
  hasEntitlement: boolean;
}

export function canReadAllProtectedContent(options: ProtectedContentAccess): boolean {
  const { policy } = options;
  if (policy.status !== "published") return false;
  if (policy.accessLevel === "public" || policy.accessLevel === "free") return true;
  if (options.role === "administrator") return true;

  return options.hasEntitlement;
}

export function mayReadProtectedContent(options: ProtectedContentAccess): boolean {
  return (
    canReadAllProtectedContent(options) ||
    (options.kind === "book" &&
      options.policy.status === "published" &&
      options.policy.accessLevel === "entitled" &&
      (options.policy.previewChapterIds?.length ?? 0) > 0)
  );
}

export function selectReadableBookChapters<T extends { id: string; bookId: string }>(
  chapters: T[],
  policy: ProtectedContentPolicy,
  options: ProtectedContentAccess,
): T[] {
  const previewOnly = !canReadAllProtectedContent(options);
  const previewChapterIds = policy.previewChapterIds ?? [];
  return chapters.filter(
    (chapter) =>
      chapter.bookId === policy.id &&
      (!previewOnly || previewChapterIds.includes(chapter.id)),
  );
}

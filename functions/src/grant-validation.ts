export type GrantKind = "book" | "course" | "program";

export function normalizeGrantKind(value: unknown): GrantKind | null {
  return value === "book" || value === "course" || value === "program" ? value : null;
}

export function normalizeGrantTarget(
  kind: unknown,
  contentId: unknown,
): { contentKind: GrantKind; contentId: string } {
  const grantKind = normalizeGrantKind(kind);
  if (!grantKind) {
    throw new Error("Content kind must be book, course, or program.");
  }

  const normalizedId = typeof contentId === "string" ? contentId.trim() : "";
  if (!normalizedId) {
    throw new Error("Content id is required.");
  }

  if (!normalizedId.startsWith(`${grantKind}-`)) {
    throw new Error(`Content id must match the ${grantKind} kind.`);
  }

  return { contentKind: grantKind, contentId: normalizedId };
}

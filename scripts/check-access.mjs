import assert from "node:assert/strict";

const permissions = {
  "admin.access": ["administrator"],
  "community.create": ["administrator"],
};

function hasPermission(role, permission) {
  if (!role || role === "guest") return false;
  return permissions[permission].includes(role);
}

function canAccessContent({ accessLevel, preview, entitlements, contentKind, contentId }) {
  if (accessLevel === "public" || accessLevel === "free") return true;
  if (preview) return true;
  return entitlements.some((item) => item.contentKind === contentKind && item.contentId === contentId);
}

assert.equal(hasPermission("member", "admin.access"), false);
assert.equal(hasPermission("administrator", "admin.access"), true);
assert.equal(hasPermission("member", "community.create"), false);
assert.equal(
  canAccessContent({
    accessLevel: "entitled",
    preview: false,
    entitlements: [],
    contentKind: "book",
    contentId: "book-doctrine-of-man",
  }),
  false,
);
assert.equal(
  canAccessContent({
    accessLevel: "entitled",
    preview: true,
    entitlements: [],
    contentKind: "book",
    contentId: "book-doctrine-of-man",
  }),
  true,
);

console.log("access checks passed");

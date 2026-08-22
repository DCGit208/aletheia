export const PRIMARY_NAV = [
  { id: "home", href: "/", messageKey: "nav.home" },
  { id: "learn", href: "/learn", messageKey: "nav.learn" },
  { id: "publications", href: "/publications", messageKey: "nav.publications" },
  { id: "community", href: "/community", messageKey: "nav.community" },
  { id: "shop", href: "/shop", messageKey: "nav.shop" },
  { id: "account", href: "/account", messageKey: "nav.account" },
] as const;

export type PrimaryNavId = (typeof PRIMARY_NAV)[number]["id"];

export function resolvePrimaryNav(pathname: string): PrimaryNavId {
  if (pathname === "/" || pathname.startsWith("/search") || pathname.startsWith("/sign-")) {
    return "home";
  }
  if (pathname.startsWith("/learn") || pathname.startsWith("/account/learning") || pathname.startsWith("/account/library")) {
    return pathname.startsWith("/account") ? "account" : "learn";
  }
  if (pathname.startsWith("/publications")) return "publications";
  if (pathname.startsWith("/community")) return "community";
  if (pathname.startsWith("/shop")) return "shop";
  if (pathname.startsWith("/account") || pathname.startsWith("/admin")) return "account";
  return "home";
}

export const BRAND = {
  master: "ALETHEIA WORLD",
  platform: "ALETHEIA",
  publications: "ALETHEIA PUBLICATIONS",
  positioning: "TRUTH • IDENTITY • DOMINION",
  domains: {
    /** Parent house site (Firebase Hosting site `aletheia-landing`). */
    master: "https://aletheiaworld.org",
    /** Live PWA. Prefer this URL in user-facing copy. */
    app: "https://app.aletheiaworld.org",
    /** Firebase default Hosting URL for the same PWA. */
    appCurrent: "https://aletheia-world.web.app",
    /** Live; kept as an alias of `app`. */
    appFuture: "https://app.aletheiaworld.org",
  },
} as const;

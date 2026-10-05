export type ReaderThemeKey = "parchment" | "paper" | "night" | "sage";

export interface ReaderHighlight {
  bookId: string;
  chapterId: string;
  text: string;
}

export interface ReaderSettings {
  theme: ReaderThemeKey;
  highlights: ReaderHighlight[];
}

export const DEFAULT_READER_SETTINGS: ReaderSettings = {
  theme: "parchment",
  highlights: [],
};

export const READER_THEMES: Record<ReaderThemeKey, {
  label: string;
  background: string;
  ink: string;
  heading: string;
  muted: string;
  accent: string;
  border: string;
  highlight: string;
}> = {
  parchment: {
    label: "Parchment",
    background: "#f3eee4",
    ink: "#1a1712",
    heading: "#302719",
    muted: "#4a4033",
    accent: "#6a542c",
    border: "rgba(26, 23, 18, .16)",
    highlight: "#f5d977",
  },
  paper: {
    label: "Paper",
    background: "#ffffff",
    ink: "#171717",
    heading: "#171717",
    muted: "#454545",
    accent: "#334b72",
    border: "rgba(23, 23, 23, .16)",
    highlight: "#ffe36e",
  },
  night: {
    label: "Night",
    background: "#17191d",
    ink: "#f2eee7",
    heading: "#fffaf0",
    muted: "#d0c8bb",
    accent: "#e4c27b",
    border: "rgba(242, 238, 231, .2)",
    highlight: "#66551f",
  },
  sage: {
    label: "Sage",
    background: "#edf2e8",
    ink: "#1b271d",
    heading: "#213226",
    muted: "#405344",
    accent: "#496d51",
    border: "rgba(27, 39, 29, .17)",
    highlight: "#d7e889",
  },
};

const STORAGE_PREFIX = "aletheia.readerSettings.";

export function loadReaderSettings(userId: string): ReaderSettings {
  if (typeof window === "undefined") return DEFAULT_READER_SETTINGS;
  try {
    const raw = window.localStorage.getItem(`${STORAGE_PREFIX}${userId}`);
    if (!raw) return DEFAULT_READER_SETTINGS;
    const value = JSON.parse(raw) as Partial<ReaderSettings>;
    const theme = value.theme && value.theme in READER_THEMES ? value.theme as ReaderThemeKey : "parchment";
    const highlights = Array.isArray(value.highlights)
      ? value.highlights.filter((item): item is ReaderHighlight =>
          Boolean(item) &&
          typeof item.bookId === "string" &&
          typeof item.chapterId === "string" &&
          typeof item.text === "string" &&
          item.text.length > 0 &&
          item.text.length <= 240)
      : [];
    return { theme, highlights };
  } catch {
    return DEFAULT_READER_SETTINGS;
  }
}

export function saveReaderSettings(userId: string, settings: ReaderSettings) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(`${STORAGE_PREFIX}${userId}`, JSON.stringify(settings));
  } catch {
    // Private browsing and storage quotas must not interrupt reading.
  }
}

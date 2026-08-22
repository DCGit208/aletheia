"use client";

import { createContext, useContext, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { messages, type MessageKey } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/data/types";
import { createClientStore } from "@/lib/storage/client-store";

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: MessageKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function readLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("aletheia.locale");
  return stored === "fr" ? "fr" : "en";
}

const localeStore = createClientStore<Locale>(readLocale, (locale) => {
  window.localStorage.setItem("aletheia.locale", locale);
  document.documentElement.lang = locale;
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(localeStore.subscribe, localeStore.getSnapshot, () => "en" as Locale);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale: (next) => localeStore.set(next),
      t: (key) => messages[locale][key] ?? messages.en[key],
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

"use client";

import { AuthProvider } from "@/lib/auth/provider";
import { I18nProvider } from "@/lib/i18n/provider";
import { UserLibraryProvider } from "@/lib/state/user-library";
import { AppShell } from "@/components/layout/app-shell";
import { ServiceWorkerRegister } from "@/components/pwa/sw-register";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <AuthProvider>
        <UserLibraryProvider>
          <ServiceWorkerRegister />
          <AppShell>{children}</AppShell>
          <Toaster />
        </UserLibraryProvider>
      </AuthProvider>
    </I18nProvider>
  );
}

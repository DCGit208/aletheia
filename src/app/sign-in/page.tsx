"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PageIntro } from "@/components/content/page-intro";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { isFirebaseConfigured } from "@/lib/firebase/config";

export default function SignInPage() {
  const { t } = useI18n();
  const { signIn } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  return (
    <div className="mx-auto max-w-md">
      <PageIntro title={t("auth.signInTitle")} />
      {!isFirebaseConfigured() ? (
        <p className="mb-4 text-sm text-muted-foreground">
          Local accounts: member@aletheia.local or admin@aletheia.local, password aletheia.
        </p>
      ) : null}
      <form
        className="space-y-4"
        onSubmit={async (event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          setPending(true);
          setError(null);
          try {
            await signIn(String(data.get("email")), String(data.get("password")));
            router.push("/account");
          } catch (err) {
            setError(err instanceof Error ? err.message : t("state.error"));
          } finally {
            setPending(false);
          }
        }}
      >
        <div className="space-y-1.5">
          <Label htmlFor="email">{t("auth.email")}</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password">{t("auth.password")}</Label>
          <Input id="password" name="password" type="password" autoComplete="current-password" required />
        </div>
        {error ? <p className="text-sm text-destructive">{error}</p> : null}
        <Button type="submit" disabled={pending}>
          {t("auth.submit")}
        </Button>
      </form>
      <p className="mt-6 text-sm">
        {t("auth.needAccount")}{" "}
        <Link href="/sign-up" className="underline">
          {t("auth.signUpTitle")}
        </Link>
      </p>
    </div>
  );
}

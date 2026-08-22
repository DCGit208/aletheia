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

export default function SignUpPage() {
  const { t } = useI18n();
  const { signUp } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  return (
    <div className="mx-auto max-w-md">
      <PageIntro title={t("auth.signUpTitle")} />
      <form
        className="space-y-4"
        onSubmit={async (event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          setPending(true);
          setError(null);
          try {
            await signUp({
              email: String(data.get("email")),
              password: String(data.get("password")),
              displayName: String(data.get("displayName")),
            });
            router.push("/account");
          } catch (err) {
            setError(err instanceof Error ? err.message : t("state.error"));
          } finally {
            setPending(false);
          }
        }}
      >
        <div className="space-y-1.5">
          <Label htmlFor="displayName">{t("auth.displayName")}</Label>
          <Input id="displayName" name="displayName" required autoComplete="name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">{t("auth.email")}</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password">{t("auth.password")}</Label>
          <Input id="password" name="password" type="password" required autoComplete="new-password" minLength={6} />
        </div>
        {error ? <p className="text-sm text-destructive">{error}</p> : null}
        <Button type="submit" disabled={pending}>
          {t("auth.submit")}
        </Button>
      </form>
      <p className="mt-6 text-sm">
        {t("auth.haveAccount")}{" "}
        <Link href="/sign-in" className="underline">
          {t("nav.signIn")}
        </Link>
      </p>
    </div>
  );
}

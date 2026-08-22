"use client";

import Link from "next/link";
import { AuthForm } from "@/components/auth/auth-form";
import { PageIntro } from "@/components/content/page-intro";
import { useI18n } from "@/lib/i18n/provider";
import { isFirebaseConfigured } from "@/lib/firebase/config";

export default function SignInPage() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-md">
      <PageIntro title={t("auth.signInTitle")} />
      {!isFirebaseConfigured() ? (
        <p className="mb-4 text-sm text-muted-foreground">
          Local accounts: member@aletheia.local or admin@aletheia.local, password aletheia.
        </p>
      ) : null}
      <AuthForm mode="sign-in" />
      <p className="mt-6 text-sm">
        {t("auth.needAccount")}{" "}
        <Link href="/sign-up" className="underline">
          {t("auth.signUpTitle")}
        </Link>
      </p>
    </div>
  );
}

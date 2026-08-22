"use client";

import Link from "next/link";
import { AuthForm } from "@/components/auth/auth-form";
import { PageIntro } from "@/components/content/page-intro";
import { useI18n } from "@/lib/i18n/provider";

export default function SignUpPage() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-md">
      <PageIntro title={t("auth.signUpTitle")} />
      <AuthForm mode="sign-up" />
      <p className="mt-6 text-sm">
        {t("auth.haveAccount")}{" "}
        <Link href="/sign-in" className="underline">
          {t("nav.signIn")}
        </Link>
      </p>
    </div>
  );
}

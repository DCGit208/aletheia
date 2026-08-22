"use client";

import Link from "next/link";
import { PageIntro } from "@/components/content/page-intro";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";

export default function ProfilePage() {
  const { t } = useI18n();
  const { user } = useAuth();
  if (!user) {
    return (
      <div>
        <PageIntro title={t("account.profile")} lead={t("state.signedOut")} />
        <Link href="/sign-in">{t("nav.signIn")}</Link>
      </div>
    );
  }
  return (
    <div>
      <PageIntro title={t("account.profile")} />
      <dl className="max-w-md space-y-3">
        <div>
          <dt className="text-xs tracking-wide text-muted-foreground uppercase">Name</dt>
          <dd>{user.displayName}</dd>
        </div>
        <div>
          <dt className="text-xs tracking-wide text-muted-foreground uppercase">Email</dt>
          <dd>{user.email}</dd>
        </div>
        <div>
          <dt className="text-xs tracking-wide text-muted-foreground uppercase">Role</dt>
          <dd>{user.role}</dd>
        </div>
        <div>
          <dt className="text-xs tracking-wide text-muted-foreground uppercase">Source</dt>
          <dd>{user.source === "firebase" ? "Firebase Authentication" : "Local foundation session"}</dd>
        </div>
      </dl>
    </div>
  );
}

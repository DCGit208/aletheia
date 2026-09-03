"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useInstallPrompt } from "@/lib/pwa/install";
import { useI18n } from "@/lib/i18n/provider";

export function InstallCard() {
  const { t } = useI18n();
  const { standalone, ios, canPrompt, install } = useInstallPrompt();

  if (standalone) {
    return (
      <p className="text-sm text-muted-foreground">{t("pwa.installed")}</p>
    );
  }

  return (
    <div className="rounded-2xl bg-card px-4 py-4">
      <p className="font-heading text-lg">{t("pwa.installTitle")}</p>
      <p className="mt-2 text-sm text-muted-foreground">
        {ios ? t("pwa.installIos") : canPrompt ? t("pwa.installLead") : t("pwa.installMenu")}
      </p>
      {canPrompt ? (
        <Button
          type="button"
          className="mt-3"
          onClick={() => {
            void install()
              .then((ok) => {
                if (ok) toast.success(t("pwa.installed"));
              })
              .catch(() => toast.error(t("state.error")));
          }}
        >
          {t("pwa.installAction")}
        </Button>
      ) : null}
    </div>
  );
}

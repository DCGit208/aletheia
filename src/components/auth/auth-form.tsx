"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-11 w-full min-w-0 rounded-full border border-input bg-white/4 px-4 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

export function AuthForm({ mode }: { mode: "sign-in" | "sign-up" }) {
  const { t } = useI18n();
  const { signIn, signUp } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    setPending(true);
    setError(null);
    try {
      if (mode === "sign-in") {
        await signIn(email, password);
      } else {
        await signUp({ email, password, displayName });
      }
      router.push("/account");
    } catch (err) {
      setError(err instanceof Error ? err.message : t("state.error"));
    } finally {
      setPending(false);
    }
  }

  return (
    <form method="post" action="/account" className="space-y-4" onSubmit={handleSubmit}>
      {mode === "sign-up" ? (
        <div className="space-y-1.5">
          <Label htmlFor="displayName">{t("auth.displayName")}</Label>
          <input
            id="displayName"
            name="displayName"
            className={fieldClass}
            autoComplete="name"
            required
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
          />
        </div>
      ) : null}
      <div className="space-y-1.5">
        <Label htmlFor="email">{t("auth.email")}</Label>
        <input
          id="email"
          name="email"
          type="email"
          className={fieldClass}
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="password">{t("auth.password")}</Label>
        <input
          id="password"
          name="password"
          type="password"
          className={fieldClass}
          autoComplete={mode === "sign-in" ? "current-password" : "new-password"}
          required
          minLength={6}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <button type="submit" className={cn(buttonVariants({ size: "lg" }), "h-11 w-full justify-center rounded-full")} disabled={pending}>
        {t("auth.submit")}
      </button>
    </form>
  );
}

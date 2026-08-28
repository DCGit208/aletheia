import type { ReactNode } from "react";
import { SectionHeader } from "@/components/content/section-header";

export function Rail({
  kicker,
  title,
  href,
  actionLabel,
  children,
}: {
  kicker?: string;
  title: string;
  href?: string;
  actionLabel?: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-8">
      <SectionHeader kicker={kicker} title={title} href={href} actionLabel={actionLabel} />
      <div className="rail">{children}</div>
    </section>
  );
}

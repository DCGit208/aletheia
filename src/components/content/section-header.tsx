import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SectionHeader({
  title,
  href,
  actionLabel,
}: {
  title: string;
  href?: string;
  actionLabel?: string;
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-3">
      <h2 className="font-heading text-xl tracking-wide md:text-2xl">{title}</h2>
      {href ? (
        <Link href={href} className={cn(buttonVariants({ variant: "link", size: "sm" }), "px-0")}>
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}

import Link from "next/link";
import { Cover } from "@/components/content/cover";
import { cn } from "@/lib/utils";

export function ContentCard({
  href,
  title,
  subtitle,
  meta,
  tone,
  image,
  imageFit,
  badge,
  layout = "poster",
}: {
  href: string;
  title: string;
  subtitle?: string;
  meta?: string;
  tone?: string;
  image?: string;
  imageFit?: "contain" | "cover";
  badge?: string;
  layout?: "poster" | "tile";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group block shrink-0 snap-start focus-visible:outline-none",
        layout === "poster" ? "w-[42vw] max-w-[168px] min-w-[132px]" : "w-full",
      )}
    >
      <Cover
        title={title}
        subtitle={badge}
        tone={tone}
        image={image}
        fit={imageFit}
        compact
        className="shadow-[0_10px_28px_oklch(0_0_0_/_0.35)]"
      />
      <div className="mt-2.5 space-y-0.5">
        <h3 className="line-clamp-2 font-heading text-[0.95rem] leading-snug">{title}</h3>
        {subtitle ? <p className="line-clamp-1 text-xs text-muted-foreground">{subtitle}</p> : null}
        {meta ? <p className="text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">{meta}</p> : null}
      </div>
    </Link>
  );
}

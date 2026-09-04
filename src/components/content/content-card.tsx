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
  emphasizePrice = false,
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
  emphasizePrice?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group block shrink-0 snap-start rounded-2xl transition-transform duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "active:scale-[0.985]",
        layout === "poster" ? "w-[42vw] max-w-[168px] min-w-[132px]" : "w-full",
      )}
    >
      <Cover
        title={title}
        tone={tone}
        image={image}
        fit={imageFit}
        badge={badge}
        compact
        className="shadow-[0_10px_28px_oklch(0_0_0_/_0.35)] transition-[box-shadow,transform] duration-300 group-hover:shadow-[0_16px_36px_oklch(0_0_0_/_0.48)]"
      />
      <div className="mt-2.5 space-y-0.5">
        <h3 className="line-clamp-2 font-heading text-[0.95rem] leading-snug transition-colors group-hover:text-primary">
          {title}
        </h3>
        {subtitle ? (
          <p
            className={cn(
              "line-clamp-1",
              emphasizePrice
                ? "font-heading text-sm tracking-wide text-primary"
                : "text-xs text-muted-foreground",
            )}
          >
            {subtitle}
          </p>
        ) : null}
        {meta ? <p className="text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">{meta}</p> : null}
      </div>
    </Link>
  );
}

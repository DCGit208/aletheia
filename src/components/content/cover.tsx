import Image from "next/image";
import { cn } from "@/lib/utils";

const tones: Record<string, string> = {
  ink: "from-[#14110d] via-[#2a2118] to-[#6a542c]",
  gold: "from-[#2a2114] via-[#7a5a28] to-[#e0c07a]",
  earth: "from-[#17110c] via-[#3d2b1c] to-[#8a5a32]",
};

export function Cover({
  title,
  subtitle,
  tone = "ink",
  image,
  fit = "contain",
  className,
  compact = false,
  badge,
}: {
  title: string;
  subtitle?: string;
  tone?: string;
  image?: string;
  fit?: "contain" | "cover";
  className?: string;
  compact?: boolean;
  badge?: string;
}) {
  const chip = badge ?? (image ? subtitle : undefined);

  if (image) {
    return (
      <div
        className={cn(
          "cover-frame relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#0c0a08]",
          className,
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 560px) 50vw, 220px"
          className={cn(
            "cover-reveal",
            fit === "cover" ? "object-cover object-center" : "object-contain object-center",
          )}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_18%,transparent_40%,oklch(0_0_0_/_0.38)_100%)]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/25"
        />
        {chip ? (
          <span className="absolute top-2.5 left-2.5 z-10 rounded-full bg-[oklch(0.12_0.01_62_/_0.82)] px-2 py-0.5 text-[0.58rem] tracking-[0.14em] text-primary uppercase backdrop-blur-md">
            {chip}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "cover-frame relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl bg-linear-to-br p-3.5 text-white",
        tones[tone] ?? tones.ink,
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_10%,rgba(255,255,255,0.16),transparent_55%)]" />
      <span className="pointer-events-none absolute inset-x-4 top-4 h-px bg-primary/50" />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/20"
      />
      {chip ? (
        <span className="absolute top-2.5 left-2.5 z-10 rounded-full bg-black/35 px-2 py-0.5 text-[0.58rem] tracking-[0.14em] text-primary uppercase backdrop-blur-md">
          {chip}
        </span>
      ) : null}
      <p className={cn("relative font-heading leading-[1.05] tracking-wide", compact ? "text-[0.95rem]" : "text-lg")}>
        {title}
      </p>
      {subtitle && !badge ? (
        <p className="relative mt-1.5 text-[0.62rem] tracking-[0.16em] text-white/65 uppercase">{subtitle}</p>
      ) : null}
    </div>
  );
}

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
}: {
  title: string;
  subtitle?: string;
  tone?: string;
  image?: string;
  fit?: "contain" | "cover";
  className?: string;
  compact?: boolean;
}) {
  if (image) {
    return (
      <div className={cn("relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#0c0a08]", className)}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 560px) 50vw, 220px"
          className={fit === "cover" ? "object-cover object-center" : "object-contain object-center"}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl bg-linear-to-br p-3.5 text-white",
        tones[tone] ?? tones.ink,
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_10%,rgba(255,255,255,0.16),transparent_55%)]" />
      <span className="pointer-events-none absolute inset-x-4 top-4 h-px bg-primary/50" />
      <p className={cn("relative font-heading leading-[1.05] tracking-wide", compact ? "text-[0.95rem]" : "text-lg")}>
        {title}
      </p>
      {subtitle ? (
        <p className="relative mt-1.5 text-[0.62rem] tracking-[0.16em] text-white/65 uppercase">{subtitle}</p>
      ) : null}
    </div>
  );
}

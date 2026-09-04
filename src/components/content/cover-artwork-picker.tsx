"use client";

import Image from "next/image";
import { useState } from "react";
import type { CoverArtwork } from "@/lib/data/types";
import { cn } from "@/lib/utils";

function Frame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("cover-frame relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#0c0a08]", className)}>
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_18%,transparent_40%,oklch(0_0_0_/_0.32)_100%)]"
      />
      <span aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/25" />
    </div>
  );
}

export function CoverArtworkPicker({
  artworks,
  defaultImage,
  title,
}: {
  artworks: CoverArtwork[];
  defaultImage?: string;
  title: string;
}) {
  const [selected, setSelected] = useState(artworks[0]?.id ?? "");
  const active = artworks.find((a) => a.id === selected) ?? artworks[0];
  const src = active?.image ?? defaultImage;

  if (artworks.length <= 1 && src) {
    return (
      <Frame className="shadow-[0_20px_48px_oklch(0_0_0_/_0.45)]">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 560px) 80vw, 320px"
          className="cover-reveal object-contain object-center"
        />
      </Frame>
    );
  }

  return (
    <div>
      <Frame className="shadow-[0_20px_48px_oklch(0_0_0_/_0.45)]">
        {src ? (
          <Image
            key={src}
            src={src}
            alt={`${title} — ${active?.label}`}
            fill
            sizes="(max-width: 560px) 80vw, 320px"
            className="cover-reveal object-contain object-center"
          />
        ) : null}
      </Frame>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {artworks.map((artwork) => (
          <button
            key={artwork.id}
            type="button"
            aria-label={artwork.label}
            aria-pressed={artwork.id === selected}
            onClick={() => setSelected(artwork.id)}
            className={cn(
              "relative size-16 shrink-0 overflow-hidden rounded-xl transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
              artwork.id === selected
                ? "ring-2 ring-primary scale-[1.02]"
                : "ring-1 ring-white/10 opacity-65 hover:opacity-100",
            )}
          >
            <Image
              src={artwork.image}
              alt={artwork.label}
              fill
              sizes="64px"
              className="pointer-events-none object-cover object-center"
            />
          </button>
        ))}
      </div>
      <p className="mt-2 text-center text-xs tracking-wide text-muted-foreground">
        {active?.label} edition
      </p>
    </div>
  );
}

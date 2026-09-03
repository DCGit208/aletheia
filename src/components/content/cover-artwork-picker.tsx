"use client";

import Image from "next/image";
import { useState } from "react";
import type { CoverArtwork } from "@/lib/data/types";
import { cn } from "@/lib/utils";

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
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#0c0a08]">
        <Image src={src} alt={title} fill sizes="(max-width: 560px) 80vw, 320px" className="object-contain object-center" />
      </div>
    );
  }

  return (
    <div>
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#0c0a08]">
        {src ? (
          <Image src={src} alt={`${title} — ${active?.label}`} fill sizes="(max-width: 560px) 80vw, 320px" className="object-contain object-center" />
        ) : null}
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {artworks.map((artwork) => (
          <button
            key={artwork.id}
            type="button"
            aria-label={artwork.label}
            onClick={() => setSelected(artwork.id)}
            className={cn(
              "relative size-16 shrink-0 overflow-hidden rounded-lg ring-2 transition-all",
              artwork.id === selected ? "ring-primary" : "ring-transparent opacity-60 hover:opacity-100",
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
      <p className="mt-2 text-center text-xs text-muted-foreground">{active?.label} edition</p>
    </div>
  );
}

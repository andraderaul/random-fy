"use client";

import { useRef } from "react";
import type { Artist } from "@/features/discover/types";
import { DownloadButton } from "@/components/download-button";

function getArtistSizeClass(index: number): string {
  if (index === 0) return "text-5xl font-extrabold";
  if (index <= 2) return "text-3xl font-bold";
  if (index <= 5) return "text-xl font-semibold";
  return "text-sm font-medium";
}

interface FestivalPosterProps {
  artists: Artist[];
}

export function FestivalPoster({ artists }: FestivalPosterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const sorted = [...artists].sort((a, b) => b.popularity - a.popularity);

  async function handleDownload() {
    if (!ref.current) return;
    const { default: html2canvas } = await import("html2canvas");
    const canvas = await html2canvas(ref.current, { useCORS: true });
    const link = document.createElement("a");
    link.download = "my-random-fy-festival.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  return (
    <div className="flex flex-col gap-3 items-center">
      <div
        ref={ref}
        className="bg-linear-to-b from-amber-100 via-yellow-50 to-amber-100 p-8 text-center w-80 flex flex-col gap-6"
      >
        <div className="flex flex-col gap-1">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500">
            randomfest
          </p>
          <p className="text-2xl font-extrabold tracking-tight text-gray-900">
            {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          {sorted.map((artist, i) => (
            <p key={artist.id} className={`text-gray-900 ${getArtistSizeClass(i)}`}>
              {artist.name}
            </p>
          ))}
        </div>
      </div>

      <div data-html2canvas-ignore>
        <DownloadButton label="Download poster" onClick={handleDownload} />
      </div>
    </div>
  );
}

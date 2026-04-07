"use client";

import { useRef } from "react";
import type { CollageItem } from "@/features/collage/types";
import { DownloadButton } from "@/components/download-button";

interface CollageGridProps {
  artists: CollageItem[];
}

export function CollageGrid({ artists }: CollageGridProps) {
  const ref = useRef<HTMLDivElement>(null);

  async function handleDownload() {
    if (!ref.current) return;
    const { default: html2canvas } = await import("html2canvas");
    const canvas = await html2canvas(ref.current, { useCORS: true });
    const link = document.createElement("a");
    link.download = "my-random-fy-collage.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  return (
    <div className="flex flex-col gap-3 items-center">
      <div ref={ref} className="grid grid-cols-4 gap-1">
        {artists.map((item) => (
          <div key={item.artistName} className="aspect-square w-full overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.artistName}
              className="aspect-square object-cover w-full"
              crossOrigin="anonymous"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        ))}
      </div>

      <div data-html2canvas-ignore>
        <DownloadButton label="Download collage" onClick={handleDownload} />
      </div>
    </div>
  );
}

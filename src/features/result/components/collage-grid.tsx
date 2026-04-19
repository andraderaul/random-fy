"use client";

import { useRef, useState } from "react";
import type { CollageItem } from "@/lib/types/spotify";

interface CollageGridProps {
  artists: CollageItem[];
}

const sectionLabelClass =
  "text-xs font-medium uppercase tracking-[0.2em] text-muted";

const downloadLinkClass =
  "text-xs font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

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
    <section className="flex w-full flex-col gap-4">
      <div className="flex w-full items-baseline justify-between gap-4 p-4">
        <p className={sectionLabelClass}>Your collage</p>
        <button
          type="button"
          onClick={handleDownload}
          className={downloadLinkClass}
          data-html2canvas-ignore
        >
          Download ↓
        </button>
      </div>

      <div
        className="rounded-3xl border border-subtle bg-surface p-2 shadow-sm sm:p-2.5"
        ref={ref}
      >
        <div className="grid w-full grid-cols-5 gap-1.5 sm:gap-2">
          {artists.map((item) => (
            <CollageTile key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CollageTile({ item }: { item: CollageItem }) {
  const [failed, setFailed] = useState(!item.imageUrl);
  const initial = item.artistName.charAt(0).toUpperCase();

  if (failed) {
    return (
      <div
        className="flex aspect-square w-full items-center justify-center rounded-xl bg-surface-muted text-lg font-semibold text-muted ring-1 ring-inset ring-subtle"
        aria-label={item.artistName}
      >
        {initial}
      </div>
    );
  }

  return (
    <div className="aspect-square w-full overflow-hidden rounded-xl bg-surface-muted ring-1 ring-inset ring-subtle">
      <img
        src={item.imageUrl}
        alt={item.artistName}
        className="aspect-square h-full w-full object-cover"
        crossOrigin="anonymous"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

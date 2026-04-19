"use client";

import { useRef } from "react";
import { Wordmark } from "@/components/ui";
import { cn } from "@/lib/cn";
import { getCalendarYear } from "@/lib/dates";
import type { Artist } from "@/lib/types/spotify";

function getArtistSizeClass(index: number): string {
  if (index === 0) return "text-4xl font-extrabold leading-tight sm:text-5xl";
  if (index <= 2) return "text-2xl font-bold leading-snug sm:text-3xl";
  if (index <= 5) return "text-lg font-semibold leading-snug sm:text-xl";
  return "text-xs font-medium leading-snug sm:text-sm";
}

/** Closing act: slightly larger than the wall tier for visual separation. */
const closingNameClass =
  "text-sm font-semibold leading-snug text-[#f5f5f5] sm:text-base";

interface LineupPartition {
  headline: Artist | null;
  row2: Artist[];
  row3: Artist[];
  wall: Artist[];
  closing: Artist | null;
}

function partitionLineup(artists: Artist[]): LineupPartition {
  if (artists.length === 0) {
    return { headline: null, row2: [], row3: [], wall: [], closing: null };
  }

  const headline = artists[0] ?? null;
  const row2 = artists.slice(1, Math.min(3, artists.length));
  const row3 = artists.slice(3, Math.min(6, artists.length));

  if (artists.length < 7) {
    const afterRow3 = 1 + row2.length + row3.length;
    const remainder = artists.slice(afterRow3);
    return { headline, row2, row3, wall: remainder, closing: null };
  }

  const tail = artists.slice(6);
  if (tail.length <= 1) {
    return { headline, row2, row3, wall: [], closing: tail[0] ?? null };
  }

  return {
    headline,
    row2,
    row3,
    wall: tail.slice(0, -1),
    closing: tail[tail.length - 1]!,
  };
}

const sectionLabelClass =
  "text-xs font-medium uppercase tracking-[0.2em] text-[#a3a3a3]";

const downloadLinkClass =
  "text-xs font-medium uppercase tracking-[0.18em] text-[#a3a3a3] transition-colors hover:text-[#f5f5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40";

interface FestivalPosterProps {
  artists: Artist[];
}

export function FestivalPoster({ artists }: FestivalPosterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const sorted = [...artists].sort((a, b) => b.popularity - a.popularity);
  const { headline, row2, row3, wall, closing } = partitionLineup(sorted);

  async function handleDownload() {
    if (!ref.current) return;
    const { default: html2canvas } = await import("html2canvas");
    const canvas = await html2canvas(ref.current, {
      useCORS: true,
      backgroundColor: "#0a100d",
    });
    const link = document.createElement("a");
    link.download = "my-random-fy-festival.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  return (
    <section className="flex w-full flex-col gap-4">
      <div className="flex w-full items-baseline justify-between gap-4 p-4">
        <p className={sectionLabelClass}>Your festival lineup</p>
        <button
          type="button"
          onClick={handleDownload}
          className={downloadLinkClass}
          data-html2canvas-ignore
        >
          Download ↓
        </button>
      </div>

      <div className="flex justify-center">
        <div
          ref={ref}
          className="relative flex w-full max-w-md flex-col gap-6 overflow-hidden rounded-3xl px-8 py-10 text-center text-[#f5f5f5] sm:px-10 sm:py-12"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#132a1f_0%,#0a0f0c_42%,#050807_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,rgba(34,197,94,0.18)_0%,transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
            aria-hidden
          />

          <div className="relative flex flex-col gap-2">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-[#a3a3a3]">
              Randomfest
            </p>
            <p className="font-display text-5xl font-bold leading-none tracking-tight text-[#fafafa] sm:text-6xl md:text-7xl">
              {getCalendarYear()}
            </p>
          </div>

          <div className="relative flex flex-col gap-5 font-display tracking-tight">
            {headline ? (
              <p
                className={cn(
                  "text-balance text-[#f5f5f5]",
                  getArtistSizeClass(0),
                )}
              >
                {headline.name}
              </p>
            ) : null}

            {row2.length > 0 ? (
              <div
                className={cn(
                  "flex w-full flex-row items-baseline gap-3",
                  row2.length >= 2 ? "justify-between" : "justify-center",
                )}
              >
                {row2.map((artist, i) => {
                  const globalIndex = 1 + i;
                  return (
                    <p
                      key={artist.id}
                      className={cn(
                        "min-w-0 max-w-[48%] text-balance text-[#f5f5f5]",
                        row2.length >= 2
                          ? i === 0
                            ? "text-left"
                            : "text-right"
                          : "text-center",
                        getArtistSizeClass(globalIndex),
                      )}
                    >
                      {artist.name}
                    </p>
                  );
                })}
              </div>
            ) : null}

            {row3.length > 0 ? (
              <div
                className={cn(
                  "flex w-full flex-row items-baseline gap-2 sm:gap-3",
                  row3.length >= 2 ? "justify-between" : "justify-center",
                )}
              >
                {row3.map((artist, i) => {
                  const globalIndex = 3 + i;
                  return (
                    <p
                      key={artist.id}
                      className={cn(
                        "min-w-0 flex-1 text-balance text-[#f5f5f5]",
                        row3.length === 3
                          ? i === 0
                            ? "text-left"
                            : i === 1
                              ? "text-center"
                              : "text-right"
                          : row3.length === 2
                            ? i === 0
                              ? "text-left"
                              : "text-right"
                            : "text-center",
                        getArtistSizeClass(globalIndex),
                      )}
                    >
                      {artist.name}
                    </p>
                  );
                })}
              </div>
            ) : null}

            {wall.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-1.5 px-0.5 font-display">
                {wall.map((artist) => (
                  <span
                    key={artist.id}
                    className={cn(
                      "text-balance text-[#f5f5f5]",
                      getArtistSizeClass(6),
                    )}
                  >
                    {artist.name}
                  </span>
                ))}
              </div>
            ) : null}

            {closing ? (
              <p
                className={cn("font-display tracking-tight", closingNameClass)}
              >
                {closing.name}
              </p>
            ) : null}
          </div>

          <div className="relative pt-2 opacity-80">
            <Wordmark size="sm" className="text-[#f5f5f5]" />
          </div>
        </div>
      </div>
    </section>
  );
}

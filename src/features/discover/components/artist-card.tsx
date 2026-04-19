import Image from "next/image";
import { HeartIcon, XIcon } from "@/components/icons";
import { NavLink } from "@/components/nav-link";
import { cn } from "@/lib/cn";
import { dislikeArtistAction, likeArtistAction } from "../actions";
import type { Artist, DiscoverSearchParams, Track } from "../types";
import {
  discoverCardRadiusClass,
  discoverCardShellClipClass,
} from "./discover-card-surface";
import { AudioPlayer } from "./audio-player";

const posterBaseClass = cn(
  "pointer-events-none absolute inset-0",
  discoverCardRadiusClass,
  "bg-[radial-gradient(ellipse_115%_92%_at_50%_6%,#7f1d1d_0%,#450a0a_36%,#141212_100%)]",
);

const posterWarmCenterClass = cn(
  "pointer-events-none absolute inset-0",
  discoverCardRadiusClass,
  "bg-[radial-gradient(ellipse_72%_52%_at_50%_40%,rgba(248,113,113,0.14)_0%,transparent_62%)]",
);

const posterVignetteClass = cn(
  "pointer-events-none absolute inset-0",
  discoverCardRadiusClass,
  "bg-linear-to-b from-black/30 via-transparent to-black/90",
);

const posterEdgeClass = cn(
  "pointer-events-none absolute inset-0",
  discoverCardRadiusClass,
  "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.35)]",
);

const cardFrameClass = cn(
  "isolate w-full",
  discoverCardRadiusClass,
  "shadow-[0_20px_56px_-14px_rgb(0_0_0/0.5),0_8px_24px_-8px_rgb(0_0_0/0.35)] ring-1 ring-black/20 animate-discover-card",
);

const cardShellClass = cn(
  "relative aspect-3/4 min-h-0 w-full max-h-[min(54dvh,calc(100dvh-21rem))] overflow-hidden",
  discoverCardRadiusClass,
  discoverCardShellClipClass,
  "sm:max-h-[min(58dvh,calc(100dvh-20rem))]",
);

const heroTitleClass =
  "line-clamp-3 text-balance text-center font-display text-3xl font-bold leading-[1.12] tracking-tight text-rose-50 sm:text-4xl sm:leading-[1.1] md:text-5xl";

const heroGlowClass =
  "[text-shadow:0_0_52px_rgba(254,205,211,0.42),0_0_100px_rgba(254,205,211,0.14),0_4px_32px_rgb(0_0_0/0.78)]";

const eyebrowClass =
  "font-sans text-[0.7rem] font-medium uppercase tracking-[0.2em] text-stone-400/85";

const trackSecondaryClass =
  "truncate font-display text-base font-normal leading-snug text-stone-100 sm:text-lg";

interface ArtistCardProps {
  artist: Artist;
  track: Track;
  state: DiscoverSearchParams;
}

export function ArtistCard({ artist, track, state }: ArtistCardProps) {
  const likeWithArgs = likeArtistAction.bind(
    null,
    artist.id,
    track.id,
    track.albumImageUrl,
    state,
  );
  const dislikeWithArgs = dislikeArtistAction.bind(null, artist.id, state);

  const genreEyebrow =
    artist.genres.length > 0 ? artist.genres[0].toUpperCase() : null;

  return (
    <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col items-center gap-2">
      <div className="flex min-h-0 w-full min-w-0 flex-1 items-center justify-center">
        <div className="relative max-h-full min-h-0 w-full min-w-0">
          <div className={cardFrameClass}>
            <div className={cardShellClass}>
              <div className={posterBaseClass} aria-hidden />

              {track.albumImageUrl ? (
                <div
                  className={cn(
                    "absolute inset-0 overflow-hidden",
                    discoverCardRadiusClass,
                  )}
                  aria-hidden
                >
                  <Image
                    src={track.albumImageUrl}
                    alt=""
                    fill
                    className="scale-110 object-cover opacity-[0.22] blur-xs"
                    sizes="(max-width: 448px) 100vw, 448px"
                    priority
                  />
                </div>
              ) : null}

              <div className={posterWarmCenterClass} aria-hidden />
              <div className={posterVignetteClass} aria-hidden />
              <div className={posterEdgeClass} aria-hidden />

              <div
                className={cn(
                  "absolute inset-0 z-10 flex flex-col",
                  discoverCardRadiusClass,
                )}
              >
                <div className="flex flex-1 flex-col items-center justify-center px-5 pb-4 pt-10 sm:px-6 sm:pb-5 sm:pt-14">
                  <p className={cn(heroTitleClass, heroGlowClass)}>
                    {track.name}
                  </p>
                </div>

                <div className="flex min-w-0 flex-col gap-1.5 px-5 pb-5 pt-0 text-left sm:gap-2 sm:px-6 sm:pb-6 sm:pt-1">
                  {genreEyebrow ? (
                    <span className={eyebrowClass}>{genreEyebrow}</span>
                  ) : null}
                  <NavLink
                    external
                    href={artist.spotifyUrl}
                    preset="none"
                    className="font-display text-2xl font-bold tracking-tight text-white drop-shadow-[0_2px_16px_rgb(0_0_0/0.5)] hover:underline sm:text-3xl md:text-4xl"
                  >
                    {artist.name}
                  </NavLink>
                  <span className={trackSecondaryClass}>{track.name}</span>
                </div>
              </div>

              <div className="absolute right-4 top-4 z-20">
                <AudioPlayer
                  previewUrl={track.previewUrl ?? null}
                  className="h-10 w-10 border-white/12 bg-black/55 shadow-none backdrop-blur-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-5 pb-0.5">
        <form action={dislikeWithArgs}>
          <button
            type="submit"
            aria-label="Pass"
            className="flex h-12 w-12 shrink-0 appearance-none items-center justify-center overflow-hidden rounded-full border border-border bg-card text-muted-foreground transition-all hover:scale-105 hover:bg-secondary active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
          >
            <XIcon size={20} />
          </button>
        </form>

        <form action={likeWithArgs}>
          <button
            type="submit"
            aria-label="Like"
            className="flex h-16 w-16 shrink-0 appearance-none items-center justify-center overflow-hidden rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-all hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
          >
            <HeartIcon size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}

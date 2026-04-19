import {
  discoverCardRadiusClass,
  discoverCardShellClipClass,
} from "./discover-card-surface";

const skeletonPosterBase = `pointer-events-none absolute inset-0 ${discoverCardRadiusClass} bg-[radial-gradient(ellipse_115%_92%_at_50%_6%,#7f1d1d_0%,#450a0a_36%,#141212_100%)]`;

const skeletonPosterWarm = `pointer-events-none absolute inset-0 ${discoverCardRadiusClass} bg-[radial-gradient(ellipse_72%_52%_at_50%_40%,rgba(248,113,113,0.14)_0%,transparent_62%)]`;

const skeletonVignette = `pointer-events-none absolute inset-0 ${discoverCardRadiusClass} bg-linear-to-b from-black/30 via-transparent to-black/90`;

const skeletonFrameClass = `isolate w-full ${discoverCardRadiusClass} shadow-[0_20px_56px_-14px_rgb(0_0_0/0.5),0_8px_24px_-8px_rgb(0_0_0/0.35)] ring-1 ring-black/20 animate-pulse`;

const skeletonShellClass = `relative aspect-3/4 min-h-0 w-full max-h-[min(54dvh,calc(100dvh-21rem))] overflow-hidden ${discoverCardRadiusClass} ${discoverCardShellClipClass} sm:max-h-[min(58dvh,calc(100dvh-20rem))]`;

export function ArtistCardSkeleton() {
  return (
    <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col items-center gap-2 overflow-hidden">
      <div className="flex min-h-0 w-full min-w-0 flex-1 items-center justify-center overflow-hidden">
        <div className="relative max-h-full min-h-0 w-full min-w-0">
          <div className={skeletonFrameClass}>
            <div className={skeletonShellClass}>
              <div className={skeletonPosterBase} aria-hidden />
              <div className={skeletonPosterWarm} aria-hidden />
              <div className={skeletonVignette} aria-hidden />
              <div
                className={`pointer-events-none absolute inset-0 ${discoverCardRadiusClass} shadow-[inset_0_0_0_1px_rgba(0,0,0,0.35)]`}
                aria-hidden
              />

              <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-black/45 ring-1 ring-white/10" />

              <div
                className={`absolute inset-0 flex flex-col ${discoverCardRadiusClass}`}
              >
                <div className="flex flex-1 flex-col items-center justify-center px-5 pt-10 sm:px-6 sm:pt-14">
                  <div className="h-9 w-[85%] max-w-[260px] rounded-lg bg-rose-100/15" />
                  <div className="mt-3 h-9 w-[65%] max-w-[200px] rounded-lg bg-rose-100/12" />
                </div>

                <div className="flex flex-col gap-1.5 px-5 pb-5 pt-0 sm:gap-2 sm:px-6 sm:pb-6 sm:pt-1">
                  <div className="h-3 w-20 rounded bg-stone-400/25" />
                  <div className="h-9 w-[75%] max-w-[220px] rounded-lg bg-white/12" />
                  <div className="h-5 w-[55%] max-w-[160px] rounded bg-rose-50/12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-center gap-5 pb-0.5">
        <div className="h-12 w-12 shrink-0 rounded-full border border-subtle bg-surface" />
        <div className="h-16 w-16 shrink-0 rounded-full bg-linear-to-br from-[#6ee7b7]/45 to-[#34d399]/35 shadow-[0_0_44px_-8px_rgba(110,231,183,0.45),0_14px_28px_-10px_rgba(0,0,0,0.35)]" />
      </div>
    </div>
  );
}

import { Suspense } from "react";
import { DiscoverContent } from "@/features/discover/components/discover-content";
import { ArtistCardSkeleton } from "@/features/discover/components/artist-card.skeleton";
import { ProgressCounter } from "@/features/discover/components/progress-counter";
import { parseDiscoverParams } from "@/features/discover/session";
import type { DiscoverSearchParams } from "@/features/discover/types";

const discoverGlowTop =
  "pointer-events-none absolute left-1/2 top-0 h-[min(78vmin,480px)] w-[min(96vw,760px)] -translate-x-1/2 -translate-y-[42%] rounded-full bg-primary/14 blur-[120px]";

interface DiscoverPageProps {
  searchParams: Promise<DiscoverSearchParams>;
}

export default async function DiscoverPage({
  searchParams,
}: DiscoverPageProps) {
  const params = await searchParams;
  const { liked } = parseDiscoverParams(params);

  return (
    <main className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className={discoverGlowTop} />
      </div>

      <div className="relative z-10 flex h-full min-h-0 flex-1 flex-col items-center overflow-hidden px-4 py-2 sm:py-3">
        <div className="flex h-full min-h-0 w-full max-w-md flex-1 flex-col gap-2 sm:gap-3">
          <div className="shrink-0">
            <ProgressCounter
              likedParam={params.liked ?? ""}
              albumsParam={params.albums ?? ""}
              likedCount={liked.length}
            />
          </div>

          <div className="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
            <Suspense fallback={<ArtistCardSkeleton />}>
              <DiscoverContent searchParams={params} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}

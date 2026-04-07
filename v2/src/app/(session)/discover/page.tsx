import { Suspense } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getDiscoverSeed } from "@/features/discover/cookies";
import { getArtistTrack } from "@/features/discover/queries/get-artist-track";
import { getRelatedArtists } from "@/features/discover/queries/get-related-artists";
import { getTopArtists } from "@/features/discover/queries/get-top-artists";
import { parseDiscoverParams, pickSeed } from "@/features/discover/session";
import type { DiscoverSearchParams } from "@/features/discover/types";
import { ArtistCard } from "@/features/discover/components/artist-card";
import { ArtistCardSkeleton } from "@/features/discover/components/artist-card.skeleton";
import { ProgressCounter } from "@/features/discover/components/progress-counter";

const MAX_LIKED = 20;

interface DiscoverPageProps {
  searchParams: Promise<DiscoverSearchParams>;
}

async function DiscoverContent({
  searchParams,
}: {
  searchParams: DiscoverSearchParams;
}) {
  const market = (await headers()).get("x-origin-id") ?? "US";
  const { liked, seen, tracks } = parseDiscoverParams(searchParams);

  if (liked.length >= MAX_LIKED) {
    redirect(
      `/result?liked=${searchParams.liked ?? ""}&albums=${searchParams.albums ?? ""}`,
    );
  }

  const seedId = await getDiscoverSeed();

  if (!seedId) {
    const topArtists = await getTopArtists();
    const seed = pickSeed(topArtists, seen);

    if (!seed) {
      return (
        <p className="text-gray-500">
          No more artists to discover. Try again later.
        </p>
      );
    }

    const initParams = new URLSearchParams({ seed: seed.id });
    if (searchParams.liked) {
      initParams.set("liked", searchParams.liked);
    }
    if (searchParams.seen) {
      initParams.set("seen", searchParams.seen);
    }
    if (searchParams.tracks) {
      initParams.set("tracks", searchParams.tracks);
    }
    if (searchParams.albums) {
      initParams.set("albums", searchParams.albums);
    }

    redirect(`/api/discover/init?${initParams.toString()}`);
  }

  let candidates = await getRelatedArtists(seedId);

  if (candidates.length === 0) {
    candidates = await getTopArtists();
  }

  const next = pickSeed(candidates, seen);

  if (!next) {
    return (
      <p className="text-gray-500">
        No more artists to discover. Try again later.
      </p>
    );
  }

  const track = await getArtistTrack(next.id, tracks, market);

  if (!track) {
    return (
      <p className="text-gray-500">
        No track available for this artist. Try again later.
      </p>
    );
  }

  return <ArtistCard artist={next} track={track} state={searchParams} />;
}

export default async function DiscoverPage({
  searchParams,
}: DiscoverPageProps) {
  const params = await searchParams;
  const { liked } = parseDiscoverParams(params);

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-4">
      <Suspense fallback={<ArtistCardSkeleton />}>
        <DiscoverContent searchParams={params} />
      </Suspense>

      <ProgressCounter
        likedParam={params.liked ?? ""}
        albumsParam={params.albums ?? ""}
        likedCount={liked.length}
      />
    </main>
  );
}

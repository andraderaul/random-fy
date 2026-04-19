import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getAccessToken } from "@/features/auth";
import { getArtistTrack } from "@/lib/spotify/queries/get-artist-track";
import { getRelatedArtists } from "@/lib/spotify/queries/get-related-artists";
import { getDiscoverSeed } from "../cookies";
import { getTopArtists } from "../queries/get-top-artists";
import { parseDiscoverParams, pickSeed } from "../session";
import type { DiscoverSearchParams } from "../types";
import { ArtistCard } from "./artist-card";

const MAX_LIKED = 20;

interface DiscoverContentProps {
  searchParams: DiscoverSearchParams;
}

export async function DiscoverContent({ searchParams }: DiscoverContentProps) {
  const market = (await headers()).get("x-origin-id") ?? "US";
  const { liked, seen, tracks } = parseDiscoverParams(searchParams);

  if (liked.length >= MAX_LIKED) {
    redirect(
      `/result?liked=${searchParams.liked ?? ""}&albums=${searchParams.albums ?? ""}`,
    );
  }

  const accessToken = await getAccessToken();
  if (!accessToken) {
    redirect("/login");
  }

  const seedId = await getDiscoverSeed();

  if (!seedId) {
    const topArtists = await getTopArtists(accessToken);
    const seed = pickSeed(topArtists, seen);

    if (!seed) {
      return (
        <p className="text-gray-500">
          No more artists to discover. Try again later.
        </p>
      );
    }

    const initParams = new URLSearchParams({ seed: seed.id });
    if (searchParams.liked) initParams.set("liked", searchParams.liked);
    if (searchParams.seen) initParams.set("seen", searchParams.seen);
    if (searchParams.tracks) initParams.set("tracks", searchParams.tracks);
    if (searchParams.albums) initParams.set("albums", searchParams.albums);

    redirect(`/api/discover/init?${initParams.toString()}`);
  }

  let candidates = await getRelatedArtists(seedId, accessToken);

  if (candidates.length === 0) {
    candidates = await getTopArtists(accessToken);
  }

  const next = pickSeed(candidates, seen);

  if (!next) {
    return (
      <p className="text-gray-500">
        No more artists to discover. Try again later.
      </p>
    );
  }

  const track = await getArtistTrack(next.id, tracks, accessToken, market);

  if (!track) {
    return (
      <p className="text-gray-500">
        No track available for this artist. Try again later.
      </p>
    );
  }

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col pb-2">
      <ArtistCard
        key={`${next.id}-${track.id}`}
        artist={next}
        track={track}
        state={searchParams}
      />
    </div>
  );
}

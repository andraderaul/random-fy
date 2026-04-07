"use server";

import { redirect } from "next/navigation";
import { getRelatedArtists } from "@/features/discover/queries/get-related-artists";
import { getArtistTrack } from "@/features/discover/queries/get-artist-track";
import { serializeLikedPairs } from "@/features/discover/session";

export async function selectArtistAction(artistId: string): Promise<never> {
  const relatedArtists = await getRelatedArtists(artistId);

  const results = await Promise.all(
    relatedArtists.map(async (artist) => {
      const track = await getArtistTrack(artist.id, []);
      return { artist, track };
    }),
  );

  const pairs = results
    .filter(({ track }) => track !== null)
    .map(({ artist, track }) => ({
      artistId: artist.id,
      trackId: track!.id,
    }));

  redirect(`/result?liked=${serializeLikedPairs(pairs)}`);
}

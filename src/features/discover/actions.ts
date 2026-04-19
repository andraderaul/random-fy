"use server";

import { redirect } from "next/navigation";
import { clearDiscoverSeed, setDiscoverSeed } from "./cookies";
import {
  buildDiscoverUrl,
  parseAlbumImageUrls,
  parseIds,
  parseLikedPairs,
} from "./session";
import type { DiscoverSearchParams } from "./types";

export async function likeArtistAction(
  artistId: string,
  trackId: string,
  albumImageUrl: string,
  state: DiscoverSearchParams,
): Promise<never> {
  const liked = parseLikedPairs(state.liked);
  const seen = parseIds(state.seen);
  const tracks = parseIds(state.tracks);
  const albums = parseAlbumImageUrls(state.albums);

  const newLiked = [...liked, { artistId, trackId }];
  const newSeen = seen.includes(artistId) ? seen : [...seen, artistId];
  const newAlbums = [...albums, albumImageUrl];

  await setDiscoverSeed(artistId);

  redirect(
    buildDiscoverUrl({ liked: newLiked, seen: newSeen, tracks, albums: newAlbums }),
  );
}

export async function dislikeArtistAction(
  artistId: string,
  state: DiscoverSearchParams,
): Promise<never> {
  const liked = parseLikedPairs(state.liked);
  const seen = parseIds(state.seen);
  const tracks = parseIds(state.tracks);
  const albums = parseAlbumImageUrls(state.albums);

  const newSeen = seen.includes(artistId) ? seen : [...seen, artistId];

  redirect(buildDiscoverUrl({ liked, seen: newSeen, tracks, albums }));
}

export async function endSessionAction(
  likedParam: string,
  albumsParam: string,
): Promise<never> {
  await clearDiscoverSeed();
  redirect(`/result?liked=${likedParam}&albums=${albumsParam}`);
}

import type { Artist, LikedPair } from "@/lib/types/spotify";
import type { DiscoverSearchParams } from "./types";

export {
  parseIds,
  serializeIds,
  parseLikedPairs,
  serializeLikedPairs,
  parseAlbumImageUrls,
} from "@/lib/session";

import {
  parseLikedPairs,
  parseIds,
  parseAlbumImageUrls,
  serializeLikedPairs,
  serializeIds,
} from "@/lib/session";

export function pickSeed(artists: Artist[], seen: string[]): Artist | null {
  const seenSet = new Set(seen);
  const candidates = artists.filter((a) => !seenSet.has(a.id));
  if (candidates.length === 0) return null;
  const index = Math.floor(Math.random() * candidates.length);
  return candidates[index] ?? null;
}

export function buildDiscoverUrl(state: {
  liked: LikedPair[];
  seen: string[];
  tracks: string[];
  albums?: string[];
}): string {
  const params = new URLSearchParams();

  if (state.liked.length > 0) {
    params.set("liked", serializeLikedPairs(state.liked));
  }
  if (state.seen.length > 0) {
    params.set("seen", serializeIds(state.seen));
  }
  if (state.tracks.length > 0) {
    params.set("tracks", serializeIds(state.tracks));
  }
  if (state.albums && state.albums.length > 0) {
    params.set("albums", state.albums.join("|"));
  }

  const query = params.toString();
  return query ? `/discover?${query}` : "/discover";
}

export function parseDiscoverParams(searchParams: DiscoverSearchParams): {
  liked: LikedPair[];
  seen: string[];
  tracks: string[];
  albums: string[];
} {
  return {
    liked: parseLikedPairs(searchParams.liked),
    seen: parseIds(searchParams.seen),
    tracks: parseIds(searchParams.tracks),
    albums: parseAlbumImageUrls(searchParams.albums),
  };
}

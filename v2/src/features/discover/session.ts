import type { Artist, DiscoverSearchParams, LikedPair } from "./types";

export function parseIds(param?: string): string[] {
  if (!param) return [];
  return param
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
}

export function serializeIds(ids: string[]): string {
  return ids.join(",");
}

/** Parse `liked` param into structured pairs. Entries without `:` are treated as legacy artist-only IDs. */
export function parseLikedPairs(param?: string): LikedPair[] {
  if (!param) return [];
  return param
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const colonIndex = entry.indexOf(":");
      if (colonIndex === -1) return { artistId: entry, trackId: "" };
      return {
        artistId: entry.slice(0, colonIndex),
        trackId: entry.slice(colonIndex + 1),
      };
    });
}

export function serializeLikedPairs(pairs: LikedPair[]): string {
  return pairs.map((p) => `${p.artistId}:${p.trackId}`).join(",");
}

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
  albums: string[];
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
  if (state.albums.length > 0) {
    params.set("albums", state.albums.join("|"));
  }

  const query = params.toString();
  return query ? `/discover?${query}` : "/discover";
}

export function parseAlbumImageUrls(param?: string): string[] {
  if (!param) return [];
  return param.split("|").filter(Boolean);
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

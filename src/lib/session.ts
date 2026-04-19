import type { LikedPair } from "./types/spotify";

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

export function parseAlbumImageUrls(param?: string): string[] {
  if (!param) return [];
  return param.split("|").filter(Boolean);
}

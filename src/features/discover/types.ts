import type { Artist } from "@/lib/types/spotify";

export type {
  Artist,
  Track,
  LikedPair,
  ResultSearchParams,
} from "@/lib/types/spotify";

export interface SessionState {
  liked: Artist[];
  seen: Set<string>;
  seed: Artist | null;
}

export interface DiscoverSearchParams {
  liked?: string;
  seen?: string;
  tracks?: string;
  albums?: string;
}

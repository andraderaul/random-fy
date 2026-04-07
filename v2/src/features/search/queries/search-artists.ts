import { spotifyFetch } from "@/lib/spotify/client";
import type { Artist } from "@/features/discover/types";

interface SpotifyArtist {
  id: string;
  name: string;
  images: { url: string; width: number; height: number }[];
  external_urls: { spotify: string };
  popularity: number;
  genres: string[];
}

interface SearchResponse {
  artists: {
    items: (SpotifyArtist | null)[];
  };
}

function mapArtist(raw: SpotifyArtist): Artist {
  return {
    id: raw.id,
    name: raw.name,
    imageUrl: raw.images[0]?.url ?? "",
    spotifyUrl: raw.external_urls.spotify,
    popularity: raw.popularity,
    genres: raw.genres,
  };
}

export async function searchArtists(query: string): Promise<Artist[]> {
  const data = await spotifyFetch<SearchResponse>(
    `/search?q=${encodeURIComponent(query)}&type=artist&limit=10`,
  );
  return data.artists.items.filter(Boolean).map(mapArtist);
}

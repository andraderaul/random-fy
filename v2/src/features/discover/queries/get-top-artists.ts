import { spotifyFetch } from "@/lib/spotify/client";
import type { Artist } from "../types";

interface SpotifyArtist {
  id: string;
  name: string;
  images: { url: string; width: number; height: number }[];
  external_urls: { spotify: string };
  popularity: number;
  genres: string[];
}

interface TopArtistsResponse {
  items: SpotifyArtist[];
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

export async function getTopArtists(): Promise<Artist[]> {
  const data = await spotifyFetch<TopArtistsResponse>(
    "/me/top/artists?limit=50",
  );
  return data.items.map(mapArtist);
}

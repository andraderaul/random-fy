import { spotifyFetch } from "@/lib/spotify/client";
import type { Artist } from "@/lib/types/spotify";

interface SpotifyArtist {
  id: string;
  name: string;
  images: { url: string; width: number; height: number }[];
  external_urls: { spotify: string };
  popularity: number;
  genres: string[];
}

interface ArtistsBatchResponse {
  artists: SpotifyArtist[];
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

export async function getArtistsByIds(ids: string[], accessToken: string): Promise<Artist[]> {
  if (ids.length === 0) return [];

  const data = await spotifyFetch<ArtistsBatchResponse>(
    accessToken,
    `/artists?ids=${ids.slice(0, 50).join(",")}`,
  );

  return data.artists
    .filter(Boolean)
    .map(mapArtist)
    .sort((a, b) => b.popularity - a.popularity);
}

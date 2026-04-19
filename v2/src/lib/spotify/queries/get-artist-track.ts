import { spotifyFetch } from "@/lib/spotify/client";
import type { Track } from "@/lib/types/spotify";

interface SpotifyTrack {
  id: string;
  name: string;
  preview_url: string | null;
  external_urls: { spotify: string };
  album: { images: { url: string }[] };
}

interface TopTracksResponse {
  tracks: SpotifyTrack[];
}

function mapTrack(raw: SpotifyTrack): Track {
  return {
    id: raw.id,
    name: raw.name,
    previewUrl: raw.preview_url,
    spotifyUrl: raw.external_urls.spotify,
    albumImageUrl: raw.album.images[0]?.url ?? "",
  };
}

export async function getArtistTrack(
  artistId: string,
  seenTrackIds: string[],
  accessToken: string,
  market = "US",
): Promise<Track | null> {
  const data = await spotifyFetch<TopTracksResponse>(
    accessToken,
    `/artists/${artistId}/top-tracks?market=${market}`,
  );

  const seenSet = new Set(seenTrackIds);
  const track = data.tracks.find((t) => !seenSet.has(t.id));

  return track ? mapTrack(track) : null;
}

import { spotifyFetch } from "@/lib/spotify/client";
import type { Playlist } from "../types";

interface SpotifyPlaylist {
  id: string;
  name: string;
  external_urls: { spotify: string };
}

export async function createPlaylist(
  userId: string,
  trackIds: string[],
): Promise<Playlist> {
  const playlist = await spotifyFetch<SpotifyPlaylist>(
    `/users/${userId}/playlists`,
    {
      method: "POST",
      body: JSON.stringify({
        name: "My random-fy picks",
        description: "Artists I discovered on random-fy",
        public: true,
      }),
    },
  );

  const uris = trackIds.map((id) => `spotify:track:${id}`);

  await spotifyFetch(`/playlists/${playlist.id}/tracks`, {
    method: "POST",
    body: JSON.stringify({ uris }),
  });

  return {
    id: playlist.id,
    name: playlist.name,
    spotifyUrl: playlist.external_urls.spotify,
    embedUrl: `https://open.spotify.com/embed/playlist/${playlist.id}?theme=0`,
  };
}

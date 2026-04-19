import { spotifyFetch } from "@/lib/spotify/client";
import type { Playlist } from "../types";

interface SpotifyPlaylist {
  id: string;
  name: string;
  external_urls: { spotify: string };
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://randomfy.app";

export async function createPlaylist(
  userId: string,
  trackIds: string[],
  accessToken: string,
): Promise<Playlist> {
  const playlist = await spotifyFetch<SpotifyPlaylist>(
    accessToken,
    `/users/${userId}/playlists`,
    {
      method: "POST",
      body: JSON.stringify({
        name: "Randomfy",
        description: `Created with Randomfy — ${APP_URL}`,
        public: true,
      }),
    },
  );

  const uris = trackIds.map((id) => `spotify:track:${id}`);

  await spotifyFetch(accessToken, `/playlists/${playlist.id}/tracks`, {
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

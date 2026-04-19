import { spotifyFetch } from "@/lib/spotify/client";

interface SpotifyUserProfile {
  id: string;
}

export async function getUserProfile(accessToken: string): Promise<{ id: string }> {
  const data = await spotifyFetch<SpotifyUserProfile>(accessToken, "/me");
  return { id: data.id };
}

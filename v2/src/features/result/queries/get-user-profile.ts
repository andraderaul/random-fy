import { spotifyFetch } from "@/lib/spotify/client";

interface SpotifyUserProfile {
  id: string;
}

export async function getUserProfile(): Promise<{ id: string }> {
  const data = await spotifyFetch<SpotifyUserProfile>("/me");
  return { id: data.id };
}

import { getAccessToken } from "@/features/auth/cookies";

const SPOTIFY_BASE_URL = "https://api.spotify.com/v1";

interface SpotifyFetchOptions extends Omit<RequestInit, "headers"> {
  headers?: Record<string, string>;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
}

/**
 * Authenticated fetch wrapper for the Spotify API.
 * All Spotify calls must go through this client — never call the API directly from client components (RNF 0017).
 */
export async function spotifyFetch<T>(
  path: string,
  options: SpotifyFetchOptions = {},
): Promise<T> {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    throw new Error("Not authenticated");
  }

  const { headers = {}, ...rest } = options;

  const response = await fetch(`${SPOTIFY_BASE_URL}${path}`, {
    ...rest,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Spotify API error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

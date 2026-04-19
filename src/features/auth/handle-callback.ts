import { clearOAuthState, getOAuthState, setTokens } from "./cookies";
import type { SpotifyTokenResponse } from "./types";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

export type HandleCallbackResult =
  | { success: true }
  | { success: false; redirectTo: string };

export async function handleOAuthCallback(
  code: string,
  state: string | null,
): Promise<HandleCallbackResult> {
  const storedState = await getOAuthState();
  await clearOAuthState();

  if (!state || !storedState || state !== storedState) {
    return { success: false, redirectTo: "/login" };
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return { success: false, redirectTo: "/login" };
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64",
  );

  let tokenData: SpotifyTokenResponse;

  try {
    const response = await fetch(SPOTIFY_TOKEN_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
      }),
    });

    if (!response.ok) {
      return { success: false, redirectTo: "/login" };
    }

    tokenData = await response.json();
  } catch {
    return { success: false, redirectTo: "/login" };
  }

  if (!tokenData.refresh_token) {
    return { success: false, redirectTo: "/login" };
  }

  await setTokens(
    tokenData.access_token,
    tokenData.refresh_token,
    tokenData.expires_in,
  );

  return { success: true };
}

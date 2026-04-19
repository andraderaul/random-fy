import { randomUUID } from "crypto";

const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize";
const SCOPES = [
  "user-top-read",
  "playlist-modify-public",
  "user-read-recently-played",
].join(" ");

export function buildSpotifyAuthUrl(): { url: string; state: string } {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  console.log("clientId", clientId);
  console.log("redirectUri", redirectUri);

  if (!clientId || !redirectUri) {
    throw new Error("Missing Spotify OAuth environment variables");
  }

  const state = randomUUID();
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: SCOPES,
    state,
  });

  return { url: `${SPOTIFY_AUTH_URL}?${params.toString()}`, state };
}

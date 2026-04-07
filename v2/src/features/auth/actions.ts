"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { clearTokens } from "./cookies";

const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize";
const SCOPES = [
  "user-top-read",
  "playlist-modify-public",
  "user-read-recently-played",
].join(" ");

export async function loginAction(): Promise<void> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    throw new Error("Missing Spotify OAuth environment variables");
  }

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: SCOPES,
  });

  redirect(`${SPOTIFY_AUTH_URL}?${params.toString()}`);
}

export async function logoutAction(): Promise<void> {
  await clearTokens();
  redirect("/login");
}

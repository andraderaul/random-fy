import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { setTokens } from "@/features/auth/cookies";
import type { SpotifyTokenResponse } from "@/features/auth/types";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return NextResponse.redirect(new URL("/login", request.url));
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
      return NextResponse.redirect(new URL("/login", request.url));
    }

    tokenData = await response.json();
  } catch {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  await setTokens(
    tokenData.access_token,
    tokenData.refresh_token ?? "",
    tokenData.expires_in,
  );

  redirect("/discover");
}

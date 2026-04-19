import { NextResponse } from "next/server";
import { buildSpotifyAuthUrl } from "@/features/auth";
import { OAUTH_STATE_KEY } from "@/features/auth/cookies";

const TEN_MINUTES = 60 * 10;

export async function GET(): Promise<NextResponse> {
  const { url, state } = buildSpotifyAuthUrl();

  const response = NextResponse.redirect(url);
  response.cookies.set(OAUTH_STATE_KEY, state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: TEN_MINUTES,
    path: "/",
  });

  return response;
}

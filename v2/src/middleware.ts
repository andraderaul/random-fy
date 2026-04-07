import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { refreshAccessToken } from "@/features/auth/token";
import {
  ACCESS_TOKEN_KEY,
  EXPIRES_AT_KEY,
  REFRESH_TOKEN_KEY,
} from "@/features/auth/cookies";

const ONE_MINUTE_MS = 60 * 1000;
const THIRTY_DAYS = 60 * 60 * 24 * 30;

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const { cookies } = request;

  const accessToken = cookies.get(ACCESS_TOKEN_KEY)?.value;
  const expiresAtRaw = cookies.get(EXPIRES_AT_KEY)?.value;
  const refreshToken = cookies.get(REFRESH_TOKEN_KEY)?.value;

  if (!accessToken || !refreshToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const expiresAt = expiresAtRaw ? Number(expiresAtRaw) : 0;
  const isExpiringSoon = expiresAt < Date.now() + ONE_MINUTE_MS;

  if (!isExpiringSoon) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/discover", request.url));
    }
    return NextResponse.next();
  }

  const refreshed = await refreshAccessToken(refreshToken);

  if (!refreshed) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    const secure = process.env.NODE_ENV === "production";
    const cookieOptions = {
      httpOnly: true,
      secure,
      path: "/",
    } as const;
    response.cookies.delete({ ...cookieOptions, name: ACCESS_TOKEN_KEY });
    response.cookies.delete({ ...cookieOptions, name: REFRESH_TOKEN_KEY });
    response.cookies.delete({ ...cookieOptions, name: EXPIRES_AT_KEY });
    return response;
  }

  const newExpiresAt = Date.now() + refreshed.expiresIn * 1000;
  const secure = process.env.NODE_ENV === "production";

  const isRoot = request.nextUrl.pathname === "/";
  const response = isRoot
    ? NextResponse.redirect(new URL("/discover", request.url))
    : NextResponse.next();
  response.cookies.set({
    name: ACCESS_TOKEN_KEY,
    value: refreshed.accessToken,
    httpOnly: true,
    secure,
    maxAge: refreshed.expiresIn,
    path: "/",
  });
  response.cookies.set({
    name: EXPIRES_AT_KEY,
    value: String(newExpiresAt),
    httpOnly: true,
    secure,
    maxAge: THIRTY_DAYS,
    path: "/",
  });

  return response;
}

export const config = {
  matcher: ["/", "/discover/:path*", "/search/:path*", "/result/:path*"],
};

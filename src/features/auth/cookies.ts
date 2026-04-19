import { cookies } from "next/headers";

const ACCESS_TOKEN_KEY = "authorization";
const REFRESH_TOKEN_KEY = "refreshToken";
const EXPIRES_AT_KEY = "expiresAt";
const OAUTH_STATE_KEY = "oauthState";

const THIRTY_DAYS = 60 * 60 * 24 * 30;

export async function getAccessToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(ACCESS_TOKEN_KEY)?.value;
}

export async function getRefreshToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(REFRESH_TOKEN_KEY)?.value;
}

export async function getExpiresAt(): Promise<number | undefined> {
  const cookieStore = await cookies();
  const value = cookieStore.get(EXPIRES_AT_KEY)?.value;
  return value ? Number(value) : undefined;
}

export async function setTokens(
  accessToken: string,
  refreshToken: string,
  expiresIn: number,
): Promise<void> {
  const cookieStore = await cookies();
  const secure = process.env.NODE_ENV === "production";
  const expiresAt = Date.now() + expiresIn * 1000;

  cookieStore.set(ACCESS_TOKEN_KEY, accessToken, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    maxAge: expiresIn,
    path: "/",
  });

  cookieStore.set(REFRESH_TOKEN_KEY, refreshToken, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    maxAge: THIRTY_DAYS,
    path: "/",
  });

  cookieStore.set(EXPIRES_AT_KEY, String(expiresAt), {
    httpOnly: true,
    secure,
    sameSite: "lax",
    maxAge: THIRTY_DAYS,
    path: "/",
  });
}

export async function setExpiresAt(expiresAt: number): Promise<void> {
  const cookieStore = await cookies();
  const secure = process.env.NODE_ENV === "production";

  cookieStore.set(EXPIRES_AT_KEY, String(expiresAt), {
    httpOnly: true,
    secure,
    sameSite: "lax",
    maxAge: THIRTY_DAYS,
    path: "/",
  });
}

export async function clearTokens(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ACCESS_TOKEN_KEY);
  cookieStore.delete(REFRESH_TOKEN_KEY);
  cookieStore.delete(EXPIRES_AT_KEY);
}

export async function getOAuthState(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(OAUTH_STATE_KEY)?.value;
}

export async function clearOAuthState(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(OAUTH_STATE_KEY);
}

export { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, EXPIRES_AT_KEY, OAUTH_STATE_KEY };

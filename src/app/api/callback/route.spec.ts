/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { NextRequest } from "next/server";
import { server } from "../../../../test/msw/server";
import { GET } from "./route";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
const BASE_URL = "http://127.0.0.1:3000";
const VALID_STATE = "mock-oauth-state";

jest.mock("next/navigation", () => ({
  redirect: jest.fn((url: string) => {
    throw Object.assign(new Error("NEXT_REDIRECT"), { digest: `NEXT_REDIRECT;${url}` });
  }),
}));

jest.mock("@/features/auth/cookies", () => ({
  setTokens: jest.fn(),
  getOAuthState: jest.fn(),
  clearOAuthState: jest.fn(),
}));

import { redirect } from "next/navigation";
import {
  setTokens,
  getOAuthState,
  clearOAuthState,
} from "@/features/auth/cookies";

const mockRedirect = redirect as jest.MockedFunction<typeof redirect>;
const mockSetTokens = setTokens as jest.MockedFunction<typeof setTokens>;
const mockGetOAuthState = getOAuthState as jest.MockedFunction<
  typeof getOAuthState
>;
const mockClearOAuthState = clearOAuthState as jest.MockedFunction<
  typeof clearOAuthState
>;

beforeEach(() => {
  process.env.SPOTIFY_CLIENT_ID = "test-client-id";
  process.env.SPOTIFY_CLIENT_SECRET = "test-client-secret";
  process.env.SPOTIFY_REDIRECT_URI = "http://127.0.0.1:3000/api/callback";
  mockSetTokens.mockResolvedValue(undefined);
  mockGetOAuthState.mockResolvedValue(VALID_STATE);
  mockClearOAuthState.mockResolvedValue(undefined);
});

afterEach(() => {
  jest.clearAllMocks();
  delete process.env.SPOTIFY_CLIENT_ID;
  delete process.env.SPOTIFY_CLIENT_SECRET;
  delete process.env.SPOTIFY_REDIRECT_URI;
});

function makeRequest(options: { code?: string; state?: string } = {}): NextRequest {
  const url = new URL("/api/callback", BASE_URL);
  if (options.code) url.searchParams.set("code", options.code);
  if (options.state) url.searchParams.set("state", options.state);
  return new NextRequest(url.toString());
}

describe("GET /api/callback", () => {
  it("redirects to /login when code param is missing", async () => {
    const request = makeRequest({ state: VALID_STATE });
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
  });

  it("exchanges code for tokens and redirects to /discover", async () => {
    const request = makeRequest({ code: "valid-code", state: VALID_STATE });

    await expect(GET(request)).rejects.toMatchObject({
      message: "NEXT_REDIRECT",
    });

    expect(mockSetTokens).toHaveBeenCalledWith(
      "mock-access-token",
      "mock-refresh-token",
      3600,
    );
    expect(mockRedirect).toHaveBeenCalledWith("/discover");
    expect(mockClearOAuthState).toHaveBeenCalled();
  });

  it("redirects to /login when state param is missing", async () => {
    const request = makeRequest({ code: "valid-code" });
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
    expect(mockSetTokens).not.toHaveBeenCalled();
  });

  it("redirects to /login when state cookie is missing", async () => {
    mockGetOAuthState.mockResolvedValue(undefined);

    const request = makeRequest({ code: "valid-code", state: VALID_STATE });
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
    expect(mockSetTokens).not.toHaveBeenCalled();
  });

  it("redirects to /login when state does not match stored cookie", async () => {
    const request = makeRequest({ code: "valid-code", state: "wrong-state" });
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
    expect(mockSetTokens).not.toHaveBeenCalled();
    expect(mockClearOAuthState).toHaveBeenCalled();
  });

  it("redirects to /login when Spotify token exchange fails", async () => {
    server.use(
      http.post(SPOTIFY_TOKEN_URL, () =>
        HttpResponse.json({ error: "invalid_grant" }, { status: 400 }),
      ),
    );

    const request = makeRequest({ code: "bad-code", state: VALID_STATE });
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
    expect(mockSetTokens).not.toHaveBeenCalled();
  });

  it("redirects to /login when refresh_token is missing in token response", async () => {
    server.use(
      http.post(SPOTIFY_TOKEN_URL, () =>
        HttpResponse.json({
          access_token: "mock-access-token",
          expires_in: 3600,
          token_type: "Bearer",
        }),
      ),
    );

    const request = makeRequest({ code: "valid-code", state: VALID_STATE });
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
    expect(mockSetTokens).not.toHaveBeenCalled();
  });

  it("redirects to /login when env vars are missing", async () => {
    delete process.env.SPOTIFY_CLIENT_ID;

    const request = makeRequest({ code: "some-code", state: VALID_STATE });
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
  });
});

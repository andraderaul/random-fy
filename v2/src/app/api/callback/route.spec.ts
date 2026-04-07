/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { NextRequest } from "next/server";
import { server } from "../../../../test/msw/server";
import { GET } from "./route";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
const BASE_URL = "http://localhost:3000";

jest.mock("next/navigation", () => ({
  redirect: jest.fn((url: string) => {
    throw Object.assign(new Error("NEXT_REDIRECT"), { digest: `NEXT_REDIRECT;${url}` });
  }),
}));

jest.mock("@/features/auth/cookies", () => ({
  setTokens: jest.fn(),
}));

import { redirect } from "next/navigation";
import { setTokens } from "@/features/auth/cookies";

const mockRedirect = redirect as jest.MockedFunction<typeof redirect>;
const mockSetTokens = setTokens as jest.MockedFunction<typeof setTokens>;

beforeEach(() => {
  process.env.SPOTIFY_CLIENT_ID = "test-client-id";
  process.env.SPOTIFY_CLIENT_SECRET = "test-client-secret";
  process.env.SPOTIFY_REDIRECT_URI = "http://localhost:3000/api/callback";
  mockSetTokens.mockResolvedValue(undefined);
});

afterEach(() => {
  jest.clearAllMocks();
  delete process.env.SPOTIFY_CLIENT_ID;
  delete process.env.SPOTIFY_CLIENT_SECRET;
  delete process.env.SPOTIFY_REDIRECT_URI;
});

function makeRequest(code?: string): NextRequest {
  const url = new URL("/api/callback", BASE_URL);
  if (code) url.searchParams.set("code", code);
  return new NextRequest(url.toString());
}

describe("GET /api/callback", () => {
  it("redirects to /login when code param is missing", async () => {
    const request = makeRequest();
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
  });

  it("exchanges code for tokens and redirects to /discover", async () => {
    const request = makeRequest("valid-code");

    await expect(GET(request)).rejects.toMatchObject({
      message: "NEXT_REDIRECT",
    });

    expect(mockSetTokens).toHaveBeenCalledWith(
      "mock-access-token",
      "mock-refresh-token",
      3600,
    );
    expect(mockRedirect).toHaveBeenCalledWith("/discover");
  });

  it("redirects to /login when Spotify token exchange fails", async () => {
    server.use(
      http.post(SPOTIFY_TOKEN_URL, () =>
        HttpResponse.json({ error: "invalid_grant" }, { status: 400 }),
      ),
    );

    const request = makeRequest("bad-code");
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
    expect(mockSetTokens).not.toHaveBeenCalled();
  });

  it("redirects to /login when env vars are missing", async () => {
    delete process.env.SPOTIFY_CLIENT_ID;

    const request = makeRequest("some-code");
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
  });
});

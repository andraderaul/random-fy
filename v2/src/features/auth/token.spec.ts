/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { server } from "../../../test/msw/server";
import { refreshAccessToken } from "./token";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

beforeEach(() => {
  process.env.SPOTIFY_CLIENT_ID = "test-client-id";
  process.env.SPOTIFY_CLIENT_SECRET = "test-client-secret";
});

afterEach(() => {
  delete process.env.SPOTIFY_CLIENT_ID;
  delete process.env.SPOTIFY_CLIENT_SECRET;
});

describe("refreshAccessToken", () => {
  it("returns new accessToken and expiresIn on success", async () => {
    const result = await refreshAccessToken("valid-refresh-token");

    expect(result).toEqual({
      accessToken: "mock-refreshed-access-token",
      expiresIn: 3600,
    });
  });

  it("returns null when Spotify responds with an error status", async () => {
    const result = await refreshAccessToken("invalid-refresh-token");

    expect(result).toBeNull();
  });

  it("returns null when SPOTIFY_CLIENT_ID is missing", async () => {
    delete process.env.SPOTIFY_CLIENT_ID;

    const result = await refreshAccessToken("any-token");

    expect(result).toBeNull();
  });

  it("returns null when SPOTIFY_CLIENT_SECRET is missing", async () => {
    delete process.env.SPOTIFY_CLIENT_SECRET;

    const result = await refreshAccessToken("any-token");

    expect(result).toBeNull();
  });

  it("returns null when fetch throws a network error", async () => {
    server.use(
      http.post(SPOTIFY_TOKEN_URL, () => {
        throw new Error("Network error");
      }),
    );

    const result = await refreshAccessToken("valid-refresh-token");

    expect(result).toBeNull();
  });
});

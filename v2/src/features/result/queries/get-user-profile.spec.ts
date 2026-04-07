/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { server } from "../../../../test/msw/server";
import { getUserProfile } from "./get-user-profile";

const SPOTIFY_BASE = "https://api.spotify.com/v1";

jest.mock("@/features/auth/cookies", () => ({
  getAccessToken: jest.fn().mockResolvedValue("mock-access-token"),
}));

describe("getUserProfile", () => {
  it("returns the user id from profile", async () => {
    const result = await getUserProfile();

    expect(result).toEqual({ id: "user-123" });
  });

  it("throws when Spotify returns an error", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/me`, () =>
        HttpResponse.json({ error: "Unauthorized" }, { status: 401 }),
      ),
    );

    await expect(getUserProfile()).rejects.toThrow("Spotify API error");
  });
});

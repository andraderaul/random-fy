/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { server } from "../../../../test/msw/server";
import { mockArtist } from "../../../../test/msw/handlers/discover";
import { getTopArtists } from "./get-top-artists";

const SPOTIFY_BASE = "https://api.spotify.com/v1";

jest.mock("@/features/auth/cookies", () => ({
  getAccessToken: jest.fn().mockResolvedValue("mock-access-token"),
}));

describe("getTopArtists", () => {
  it("returns mapped top artists", async () => {
    const result = await getTopArtists();

    expect(result).toHaveLength(3);
    expect(result[0]).toMatchObject({
      id: "top-artist-1",
      name: "Top Artist 1",
      imageUrl: "https://i.scdn.co/image/test.jpg",
      spotifyUrl: "https://open.spotify.com/artist/artist-1",
      popularity: 80,
      genres: ["pop"],
    });
  });

  it("handles artist with no images gracefully", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/me/top/artists`, () =>
        HttpResponse.json({
          items: [mockArtist({ id: "no-image", images: [] })],
        }),
      ),
    );

    const result = await getTopArtists();
    expect(result[0]?.imageUrl).toBe("");
  });

  it("throws when Spotify returns an error", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/me/top/artists`, () =>
        HttpResponse.json({ error: "Unauthorized" }, { status: 401 }),
      ),
    );

    await expect(getTopArtists()).rejects.toThrow("Spotify API error");
  });
});

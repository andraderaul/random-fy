/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { server } from "../../../../test/msw/server";
import { mockArtist } from "../../../../test/msw/handlers/discover";
import { searchArtists } from "./search-artists";

const SPOTIFY_BASE = "https://api.spotify.com/v1";

jest.mock("@/features/auth/cookies", () => ({
  getAccessToken: jest.fn().mockResolvedValue("mock-access-token"),
}));

describe("searchArtists", () => {
  it("returns mapped artists from the search response", async () => {
    const result = await searchArtists("test");

    expect(result).toHaveLength(3);
    expect(result[0]).toMatchObject({
      id: "search-result-1",
      name: "Search Artist 1",
    });
  });

  it("returns empty array when artists.items is empty", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/search`, () =>
        HttpResponse.json({ artists: { items: [] } }),
      ),
    );

    const result = await searchArtists("unknown");
    expect(result).toEqual([]);
  });

  it("filters null items from the response", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/search`, () =>
        HttpResponse.json({
          artists: {
            items: [
              mockArtist({ id: "valid-1", name: "Valid Artist" }),
              null,
              mockArtist({ id: "valid-2", name: "Another Valid Artist" }),
            ],
          },
        }),
      ),
    );

    const result = await searchArtists("test");
    expect(result).toHaveLength(2);
    expect(result.map((a) => a.id)).toEqual(["valid-1", "valid-2"]);
  });

  it("throws when Spotify returns an HTTP error", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/search`, () =>
        HttpResponse.json({ error: "Unauthorized" }, { status: 401 }),
      ),
    );

    await expect(searchArtists("test")).rejects.toThrow("Spotify API error");
  });
});

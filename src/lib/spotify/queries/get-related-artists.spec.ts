/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { server } from "../../../../test/msw/server";
import { mockArtist } from "../../../../test/msw/handlers/discover";
import { getRelatedArtists } from "./get-related-artists";

const SPOTIFY_BASE = "https://api.spotify.com/v1";
const ACCESS_TOKEN = "mock-access-token";

describe("getRelatedArtists", () => {
  it("returns related artists for a given seed", async () => {
    const result = await getRelatedArtists("seed-artist", ACCESS_TOKEN);

    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({
      id: "related-of-seed-artist-1",
      name: "Related Artist 1",
    });
  });

  it("handles related artist with no images gracefully", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists/:id/related-artists`, () =>
        HttpResponse.json({
          artists: [mockArtist({ id: "no-img", images: [] })],
        }),
      ),
    );

    const result = await getRelatedArtists("any", ACCESS_TOKEN);
    expect(result[0]?.imageUrl).toBe("");
  });

  it("throws when Spotify returns an error", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists/:id/related-artists`, () =>
        HttpResponse.json({ error: "Not Found" }, { status: 404 }),
      ),
    );

    await expect(getRelatedArtists("bad-id", ACCESS_TOKEN)).rejects.toThrow(
      "Spotify API error",
    );
  });
});

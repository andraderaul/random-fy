/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { server } from "../../../../test/msw/server";
import { mockSpotifyArtist } from "../../../../test/msw/handlers/result";
import { getArtistsByIds } from "./get-artists-by-ids";

const SPOTIFY_BASE = "https://api.spotify.com/v1";

const token = "mock-access-token";

describe("getArtistsByIds", () => {
  it("returns artists mapped correctly", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists`, () =>
        HttpResponse.json({
          artists: [
            mockSpotifyArtist({ id: "a1", name: "Artist 1", popularity: 90, genres: ["rock"] }),
          ],
        }),
      ),
    );

    const result = await getArtistsByIds(["a1"], token);

    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      id: "a1",
      name: "Artist 1",
      imageUrl: "https://i.scdn.co/image/test.jpg",
      popularity: 90,
      genres: ["rock"],
    });
  });

  it("sorts by popularity descending", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists`, () =>
        HttpResponse.json({
          artists: [
            mockSpotifyArtist({ id: "low", popularity: 20 }),
            mockSpotifyArtist({ id: "high", popularity: 95 }),
            mockSpotifyArtist({ id: "mid", popularity: 60 }),
          ],
        }),
      ),
    );

    const result = await getArtistsByIds(["low", "high", "mid"], token);

    expect(result[0]?.id).toBe("high");
    expect(result[1]?.id).toBe("mid");
    expect(result[2]?.id).toBe("low");
  });

  it("filters null entries from response", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists`, () =>
        HttpResponse.json({
          artists: [
            mockSpotifyArtist({ id: "valid" }),
            null,
          ],
        }),
      ),
    );

    const result = await getArtistsByIds(["valid", "invalid-id"], token);

    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe("valid");
  });

  it("returns empty array for empty ids without calling the API", async () => {
    const fetchSpy = jest.spyOn(global, "fetch");

    const result = await getArtistsByIds([], token);

    expect(result).toEqual([]);
    expect(fetchSpy).not.toHaveBeenCalled();

    fetchSpy.mockRestore();
  });

  it("limits to 50 IDs", async () => {
    let capturedUrl = "";
    server.use(
      http.get(`${SPOTIFY_BASE}/artists`, ({ request }) => {
        capturedUrl = request.url;
        return HttpResponse.json({ artists: [] });
      }),
    );

    const ids = Array.from({ length: 60 }, (_, i) => `id-${i}`);
    await getArtistsByIds(ids, token);

    const url = new URL(capturedUrl);
    const idsParam = url.searchParams.get("ids")?.split(",") ?? [];
    expect(idsParam).toHaveLength(50);
  });

  it("throws when Spotify returns an error", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists`, () =>
        HttpResponse.json({ error: "Not Found" }, { status: 404 }),
      ),
    );

    await expect(getArtistsByIds(["some-id"], token)).rejects.toThrow(
      "Spotify API error",
    );
  });
});

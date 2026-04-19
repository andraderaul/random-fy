/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { server } from "../../../../test/msw/server";
import { mockTrack } from "../../../../test/msw/handlers/discover";
import { getArtistTrack } from "./get-artist-track";

const SPOTIFY_BASE = "https://api.spotify.com/v1";
const ACCESS_TOKEN = "mock-access-token";

describe("getArtistTrack", () => {
  it("returns the first track not in seenTrackIds", async () => {
    const result = await getArtistTrack("any-artist", [], ACCESS_TOKEN);

    expect(result).toMatchObject({
      id: "track-of-any-artist-1",
      name: "Top Track 1",
      previewUrl: "https://p.scdn.co/mp3-preview/test",
    });
  });

  it("skips tracks that are in seenTrackIds", async () => {
    const result = await getArtistTrack(
      "any-artist",
      ["track-of-any-artist-1"],
      ACCESS_TOKEN,
    );

    expect(result?.id).toBe("track-of-any-artist-2");
  });

  it("returns null when all tracks have been seen", async () => {
    const result = await getArtistTrack(
      "any-artist",
      ["track-of-any-artist-1", "track-of-any-artist-2"],
      ACCESS_TOKEN,
    );

    expect(result).toBeNull();
  });

  it("handles null preview_url", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists/:id/top-tracks`, () =>
        HttpResponse.json({
          tracks: [mockTrack({ id: "t-null", preview_url: null })],
        }),
      ),
    );

    const result = await getArtistTrack("any", [], ACCESS_TOKEN);
    expect(result?.previewUrl).toBeNull();
  });

  it("throws when Spotify returns an error", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists/:id/top-tracks`, () =>
        HttpResponse.json({ error: "Not Found" }, { status: 404 }),
      ),
    );

    await expect(getArtistTrack("bad", [], ACCESS_TOKEN)).rejects.toThrow(
      "Spotify API error",
    );
  });
});

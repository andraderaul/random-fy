/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { server } from "../../../../test/msw/server";
import { createPlaylist } from "./create-playlist";

const SPOTIFY_BASE = "https://api.spotify.com/v1";

jest.mock("@/features/auth/cookies", () => ({
  getAccessToken: jest.fn().mockResolvedValue("mock-access-token"),
}));

describe("createPlaylist", () => {
  it("calls POST /users/{userId}/playlists with name and public: true", async () => {
    let capturedBody: Record<string, unknown> = {};

    server.use(
      http.post(`${SPOTIFY_BASE}/users/:userId/playlists`, async ({ request }) => {
        capturedBody = (await request.json()) as Record<string, unknown>;
        return HttpResponse.json({
          id: "playlist-1",
          name: "My random-fy picks",
          external_urls: { spotify: "https://open.spotify.com/playlist/playlist-1" },
        });
      }),
    );

    await createPlaylist("user-123", ["track-1"]);

    expect(capturedBody).toMatchObject({
      name: "My random-fy picks",
      public: true,
    });
  });

  it("calls POST /playlists/{id}/tracks with URIs in spotify:track:{id} format", async () => {
    let capturedBody: Record<string, unknown> = {};

    server.use(
      http.post(`${SPOTIFY_BASE}/playlists/:id/tracks`, async ({ request }) => {
        capturedBody = (await request.json()) as Record<string, unknown>;
        return HttpResponse.json({ snapshot_id: "snapshot-1" });
      }),
    );

    await createPlaylist("user-123", ["track-1", "track-2"]);

    expect(capturedBody).toMatchObject({
      uris: ["spotify:track:track-1", "spotify:track:track-2"],
    });
  });

  it("returns a Playlist with embedUrl in the correct format", async () => {
    const result = await createPlaylist("user-123", ["track-1"]);

    expect(result).toMatchObject({
      id: "playlist-1",
      name: "My random-fy picks",
      spotifyUrl: "https://open.spotify.com/playlist/playlist-1",
      embedUrl: "https://open.spotify.com/embed/playlist/playlist-1",
    });
  });

  it("throws when playlist creation POST fails", async () => {
    server.use(
      http.post(`${SPOTIFY_BASE}/users/:userId/playlists`, () =>
        HttpResponse.json({ error: "Forbidden" }, { status: 403 }),
      ),
    );

    await expect(createPlaylist("user-123", ["track-1"])).rejects.toThrow("Spotify API error");
  });

  it("throws when adding tracks POST fails", async () => {
    server.use(
      http.post(`${SPOTIFY_BASE}/playlists/:id/tracks`, () =>
        HttpResponse.json({ error: "Internal Server Error" }, { status: 500 }),
      ),
    );

    await expect(createPlaylist("user-123", ["track-1"])).rejects.toThrow("Spotify API error");
  });
});

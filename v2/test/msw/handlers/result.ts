import { http, HttpResponse } from "msw";

const SPOTIFY_BASE = "https://api.spotify.com/v1";

export const mockUserProfile = () => ({ id: "user-123" });

export const mockSpotifyArtist = (overrides: Partial<Record<string, unknown>> = {}) => ({
  id: "artist-1",
  name: "Test Artist",
  images: [{ url: "https://i.scdn.co/image/test.jpg", width: 640, height: 640 }],
  external_urls: { spotify: "https://open.spotify.com/artist/artist-1" },
  popularity: 80,
  genres: ["pop"],
  ...overrides,
});

export const mockSpotifyPlaylist = (overrides: Partial<Record<string, unknown>> = {}) => ({
  id: "playlist-1",
  name: "Randomfy",
  external_urls: { spotify: "https://open.spotify.com/playlist/playlist-1" },
  ...overrides,
});

export const resultHandlers = [
  http.get(`${SPOTIFY_BASE}/me`, () => {
    return HttpResponse.json(mockUserProfile());
  }),

  http.get(`${SPOTIFY_BASE}/artists`, () => {
    return HttpResponse.json({
      artists: [
        mockSpotifyArtist({ id: "artist-1", name: "Artist 1", popularity: 80 }),
        mockSpotifyArtist({ id: "artist-2", name: "Artist 2", popularity: 60 }),
      ],
    });
  }),

  http.post(`${SPOTIFY_BASE}/users/:userId/playlists`, () => {
    return HttpResponse.json(mockSpotifyPlaylist());
  }),

  http.post(`${SPOTIFY_BASE}/playlists/:id/tracks`, () => {
    return HttpResponse.json({ snapshot_id: "snapshot-1" });
  }),
];

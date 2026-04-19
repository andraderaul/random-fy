import { http, HttpResponse } from "msw";

const SPOTIFY_BASE = "https://api.spotify.com/v1";

export const mockArtist = (overrides: Partial<Record<string, unknown>> = {}) => ({
  id: "artist-1",
  name: "Test Artist",
  images: [{ url: "https://i.scdn.co/image/test.jpg", width: 640, height: 640 }],
  external_urls: { spotify: "https://open.spotify.com/artist/artist-1" },
  popularity: 80,
  genres: ["pop"],
  ...overrides,
});

export const mockTrack = (overrides: Partial<Record<string, unknown>> = {}) => ({
  id: "track-1",
  name: "Test Track",
  preview_url: "https://p.scdn.co/mp3-preview/test",
  external_urls: { spotify: "https://open.spotify.com/track/track-1" },
  album: {
    images: [{ url: "https://i.scdn.co/image/album-test.jpg", width: 640, height: 640 }],
  },
  ...overrides,
});

export const discoverHandlers = [
  http.get(`${SPOTIFY_BASE}/me/top/artists`, () => {
    return HttpResponse.json({
      items: [
        mockArtist({ id: "top-artist-1", name: "Top Artist 1" }),
        mockArtist({ id: "top-artist-2", name: "Top Artist 2" }),
        mockArtist({ id: "top-artist-3", name: "Top Artist 3" }),
      ],
    });
  }),

  http.get(`${SPOTIFY_BASE}/artists/:id/related-artists`, ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      artists: [
        mockArtist({ id: `related-of-${id}-1`, name: "Related Artist 1" }),
        mockArtist({ id: `related-of-${id}-2`, name: "Related Artist 2" }),
      ],
    });
  }),

  http.get(`${SPOTIFY_BASE}/artists/:id/top-tracks`, ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      tracks: [
        mockTrack({ id: `track-of-${id}-1`, name: "Top Track 1" }),
        mockTrack({ id: `track-of-${id}-2`, name: "Top Track 2" }),
      ],
    });
  }),
];

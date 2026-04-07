import { http, HttpResponse } from "msw";
import { mockArtist } from "./discover";

const SPOTIFY_BASE = "https://api.spotify.com/v1";

export const searchHandlers = [
  http.get(`${SPOTIFY_BASE}/search`, () => {
    return HttpResponse.json({
      artists: {
        items: [
          mockArtist({ id: "search-result-1", name: "Search Artist 1" }),
          mockArtist({ id: "search-result-2", name: "Search Artist 2" }),
          mockArtist({ id: "search-result-3", name: "Search Artist 3" }),
        ],
      },
    });
  }),
];

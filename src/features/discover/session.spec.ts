/**
 * @jest-environment node
 */

import {
  buildDiscoverUrl,
  parseIds,
  parseLikedPairs,
  pickSeed,
  serializeIds,
  serializeLikedPairs,
} from "./session";
import type { Artist } from "./types";

const makeArtist = (id: string): Artist => ({
  id,
  name: `Artist ${id}`,
  imageUrl: "",
  spotifyUrl: "",
  popularity: 50,
  genres: [],
});

describe("parseIds", () => {
  it("returns empty array for undefined", () => {
    expect(parseIds(undefined)).toEqual([]);
  });

  it("returns empty array for empty string", () => {
    expect(parseIds("")).toEqual([]);
  });

  it("splits comma-separated IDs", () => {
    expect(parseIds("a,b,c")).toEqual(["a", "b", "c"]);
  });

  it("trims whitespace around IDs", () => {
    expect(parseIds("a, b , c")).toEqual(["a", "b", "c"]);
  });

  it("filters empty segments", () => {
    expect(parseIds("a,,b")).toEqual(["a", "b"]);
  });
});

describe("serializeIds", () => {
  it("joins IDs with comma", () => {
    expect(serializeIds(["a", "b", "c"])).toBe("a,b,c");
  });

  it("returns empty string for empty array", () => {
    expect(serializeIds([])).toBe("");
  });
});

describe("pickSeed", () => {
  it("returns null when all artists are seen", () => {
    const artists = [makeArtist("a"), makeArtist("b")];
    expect(pickSeed(artists, ["a", "b"])).toBeNull();
  });

  it("returns null when artists array is empty", () => {
    expect(pickSeed([], [])).toBeNull();
  });

  it("excludes seen artists from selection", () => {
    const artists = [makeArtist("a"), makeArtist("b"), makeArtist("c")];
    const result = pickSeed(artists, ["a", "b"]);
    expect(result?.id).toBe("c");
  });

  it("returns an artist from the candidates", () => {
    const artists = [makeArtist("x"), makeArtist("y")];
    const result = pickSeed(artists, []);
    expect(["x", "y"]).toContain(result?.id);
  });
});

describe("parseLikedPairs", () => {
  it("returns empty array for undefined", () => {
    expect(parseLikedPairs(undefined)).toEqual([]);
  });

  it("parses a single artistId:trackId entry", () => {
    expect(parseLikedPairs("artistId:trackId")).toEqual([
      { artistId: "artistId", trackId: "trackId" },
    ]);
  });

  it("treats entry without colon as legacy artist-only id", () => {
    expect(parseLikedPairs("artist-only")).toEqual([
      { artistId: "artist-only", trackId: "" },
    ]);
  });

  it("parses multiple comma-separated entries", () => {
    expect(parseLikedPairs("a1:t1,a2:t2")).toEqual([
      { artistId: "a1", trackId: "t1" },
      { artistId: "a2", trackId: "t2" },
    ]);
  });
});

describe("serializeLikedPairs", () => {
  it("serializes pairs correctly with colon", () => {
    expect(serializeLikedPairs([{ artistId: "a", trackId: "t1" }])).toBe("a:t1");
  });

  it("returns empty string for empty array", () => {
    expect(serializeLikedPairs([])).toBe("");
  });

  it("serializes multiple pairs separated by comma", () => {
    expect(
      serializeLikedPairs([
        { artistId: "a1", trackId: "t1" },
        { artistId: "a2", trackId: "t2" },
      ]),
    ).toBe("a1:t1,a2:t2");
  });
});

describe("buildDiscoverUrl", () => {
  it("returns /discover when all arrays are empty", () => {
    expect(buildDiscoverUrl({ liked: [], seen: [], tracks: [] })).toBe("/discover");
  });

  it("includes liked param", () => {
    const url = buildDiscoverUrl({
      liked: [{ artistId: "a", trackId: "t1" }, { artistId: "b", trackId: "t2" }],
      seen: [],
      tracks: [],
    });
    expect(url).toContain("liked=");
    expect(url).toContain("a%3At1");
  });

  it("includes seen param", () => {
    const url = buildDiscoverUrl({ liked: [], seen: ["x"], tracks: [] });
    expect(url).toBe("/discover?seen=x");
  });

  it("includes tracks param", () => {
    const url = buildDiscoverUrl({ liked: [], seen: [], tracks: ["t1"] });
    expect(url).toBe("/discover?tracks=t1");
  });

  it("includes all params together", () => {
    const url = buildDiscoverUrl({
      liked: [{ artistId: "a", trackId: "t1" }],
      seen: ["b"],
      tracks: ["c"],
    });
    expect(url).toContain("liked=");
    expect(url).toContain("seen=b");
    expect(url).toContain("tracks=c");
  });
});

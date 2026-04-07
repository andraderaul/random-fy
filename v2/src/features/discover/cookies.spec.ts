/**
 * @jest-environment node
 */

import {
  DISCOVER_SEED_KEY,
  clearDiscoverSeed,
  getDiscoverSeed,
  setDiscoverSeed,
} from "./cookies";

const makeCookieStore = (initial: Record<string, string> = {}) => {
  const store = new Map<string, string>(Object.entries(initial));
  return {
    get: jest.fn((key: string) =>
      store.has(key) ? { value: store.get(key)! } : undefined,
    ),
    set: jest.fn((key: string, value: string) => void store.set(key, value)),
    delete: jest.fn((key: string) => void store.delete(key)),
  };
};

jest.mock("next/headers", () => ({
  cookies: jest.fn(),
}));

import { cookies } from "next/headers";

const mockCookies = cookies as jest.MockedFunction<typeof cookies>;

describe("discover cookies", () => {
  let cookieStore: ReturnType<typeof makeCookieStore>;

  beforeEach(() => {
    cookieStore = makeCookieStore();
    mockCookies.mockResolvedValue(cookieStore as never);
  });

  describe("getDiscoverSeed", () => {
    it("returns undefined when cookie is absent", async () => {
      expect(await getDiscoverSeed()).toBeUndefined();
    });

    it("returns the seed value when set", async () => {
      cookieStore = makeCookieStore({ [DISCOVER_SEED_KEY]: "artist-42" });
      mockCookies.mockResolvedValue(cookieStore as never);
      expect(await getDiscoverSeed()).toBe("artist-42");
    });
  });

  describe("setDiscoverSeed", () => {
    it("sets the cookie with the given artist ID", async () => {
      await setDiscoverSeed("artist-99");
      expect(cookieStore.set).toHaveBeenCalledWith(
        DISCOVER_SEED_KEY,
        "artist-99",
        expect.objectContaining({ httpOnly: true, path: "/" }),
      );
    });
  });

  describe("clearDiscoverSeed", () => {
    it("deletes the discover-seed cookie", async () => {
      await clearDiscoverSeed();
      expect(cookieStore.delete).toHaveBeenCalledWith(DISCOVER_SEED_KEY);
    });
  });
});

/**
 * @jest-environment node
 */

import {
  ACCESS_TOKEN_KEY,
  EXPIRES_AT_KEY,
  REFRESH_TOKEN_KEY,
  clearTokens,
  getAccessToken,
  getExpiresAt,
  getRefreshToken,
  setExpiresAt,
  setTokens,
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

describe("cookies", () => {
  let cookieStore: ReturnType<typeof makeCookieStore>;

  beforeEach(() => {
    cookieStore = makeCookieStore();
    mockCookies.mockResolvedValue(cookieStore as never);
  });

  describe("getAccessToken", () => {
    it("returns undefined when cookie is absent", async () => {
      expect(await getAccessToken()).toBeUndefined();
    });

    it("returns the access token value", async () => {
      cookieStore = makeCookieStore({ [ACCESS_TOKEN_KEY]: "tok123" });
      mockCookies.mockResolvedValue(cookieStore as never);
      expect(await getAccessToken()).toBe("tok123");
    });
  });

  describe("getRefreshToken", () => {
    it("returns undefined when cookie is absent", async () => {
      expect(await getRefreshToken()).toBeUndefined();
    });

    it("returns the refresh token value", async () => {
      cookieStore = makeCookieStore({ [REFRESH_TOKEN_KEY]: "ref456" });
      mockCookies.mockResolvedValue(cookieStore as never);
      expect(await getRefreshToken()).toBe("ref456");
    });
  });

  describe("getExpiresAt", () => {
    it("returns undefined when cookie is absent", async () => {
      expect(await getExpiresAt()).toBeUndefined();
    });

    it("returns expiresAt as a number", async () => {
      cookieStore = makeCookieStore({ [EXPIRES_AT_KEY]: "1700000000000" });
      mockCookies.mockResolvedValue(cookieStore as never);
      expect(await getExpiresAt()).toBe(1700000000000);
    });
  });

  describe("setTokens", () => {
    it("sets access token, refresh token, and expiresAt cookies", async () => {
      const now = Date.now();
      jest.spyOn(Date, "now").mockReturnValue(now);

      await setTokens("access-tok", "refresh-tok", 3600);

      expect(cookieStore.set).toHaveBeenCalledWith(
        ACCESS_TOKEN_KEY,
        "access-tok",
        expect.objectContaining({ httpOnly: true, maxAge: 3600 }),
      );
      expect(cookieStore.set).toHaveBeenCalledWith(
        REFRESH_TOKEN_KEY,
        "refresh-tok",
        expect.objectContaining({ httpOnly: true }),
      );
      expect(cookieStore.set).toHaveBeenCalledWith(
        EXPIRES_AT_KEY,
        String(now + 3600 * 1000),
        expect.objectContaining({ httpOnly: true }),
      );

      jest.spyOn(Date, "now").mockRestore();
    });
  });

  describe("setExpiresAt", () => {
    it("sets the expiresAt cookie", async () => {
      await setExpiresAt(9999999999);

      expect(cookieStore.set).toHaveBeenCalledWith(
        EXPIRES_AT_KEY,
        "9999999999",
        expect.objectContaining({ httpOnly: true }),
      );
    });
  });

  describe("clearTokens", () => {
    it("deletes all auth cookies", async () => {
      await clearTokens();

      expect(cookieStore.delete).toHaveBeenCalledWith(ACCESS_TOKEN_KEY);
      expect(cookieStore.delete).toHaveBeenCalledWith(REFRESH_TOKEN_KEY);
      expect(cookieStore.delete).toHaveBeenCalledWith(EXPIRES_AT_KEY);
    });
  });
});

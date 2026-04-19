import { cookies } from "next/headers";

const DISCOVER_SEED_KEY = "discover-seed";

export async function getDiscoverSeed(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(DISCOVER_SEED_KEY)?.value;
}

export async function setDiscoverSeed(artistId: string): Promise<void> {
  const cookieStore = await cookies();
  const secure = process.env.NODE_ENV === "production";

  cookieStore.set(DISCOVER_SEED_KEY, artistId, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
  });
}

export async function clearDiscoverSeed(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(DISCOVER_SEED_KEY);
}

export { DISCOVER_SEED_KEY };

import { NextRequest, NextResponse } from "next/server";
import { setDiscoverSeed } from "@/features/discover/cookies";
import { buildDiscoverUrl } from "@/features/discover/session";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = request.nextUrl;

  const seed = searchParams.get("seed");
  const liked = searchParams.get("liked") ?? undefined;
  const seen = searchParams.get("seen") ?? undefined;
  const tracks = searchParams.get("tracks") ?? undefined;
  const albums = searchParams.get("albums") ?? undefined;

  if (!seed) {
    return NextResponse.redirect(new URL("/discover", request.url));
  }

  await setDiscoverSeed(seed);

  const discoverUrl = buildDiscoverUrl({
    liked: liked ? liked.split(",").filter(Boolean) : [],
    seen: seen ? seen.split(",").filter(Boolean) : [],
    tracks: tracks ? tracks.split(",").filter(Boolean) : [],
    albums: albums ? albums.split("|").filter(Boolean) : [],
  });

  return NextResponse.redirect(new URL(discoverUrl, request.url));
}

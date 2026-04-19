import Link from "next/link";
import { redirect } from "next/navigation";
import { Heading, Surface } from "@/components/ui";
import { getAccessToken } from "@/features/auth";
import { parseLikedPairs, parseAlbumImageUrls } from "@/lib/session";
import type { ResultSearchParams } from "@/lib/types/spotify";
import { getArtistsByIds } from "../queries/get-artists-by-ids";
import { CollageGrid } from "./collage-grid";
import { CreatePlaylistButton } from "./create-playlist-button";
import { FestivalPoster } from "./festival-poster";

interface ResultContentProps {
  searchParams: ResultSearchParams;
}

function buildDiscoverResumeHref(liked?: string, albums?: string): string {
  const params = new URLSearchParams();
  if (liked) params.set("liked", liked);
  if (albums) params.set("albums", albums);
  const query = params.toString();
  return query ? `/discover?${query}` : "/discover";
}

const linkMutedClass =
  "text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const secondaryOutlineClass =
  "inline-flex items-center justify-center rounded-full border border-subtle bg-transparent px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export async function ResultContent({ searchParams }: ResultContentProps) {
  const { liked: likedParam, albums: albumsParam } = searchParams;
  const pairs = parseLikedPairs(likedParam);

  if (pairs.length < 5) {
    redirect("/discover");
  }

  const accessToken = await getAccessToken();
  if (!accessToken) {
    redirect("/login");
  }

  const artistIds = pairs.map((p) => p.artistId);
  const trackIds = pairs.map((p) => p.trackId).filter(Boolean);
  const albumImageUrls = parseAlbumImageUrls(albumsParam);

  const artists = await getArtistsByIds(artistIds, accessToken);

  const collageItems = artists.map((a, i) => ({
    id: a.id,
    imageUrl: albumImageUrls[i] ?? a.imageUrl,
    artistName: a.name,
  }));

  const festivalUnlocked = pairs.length === 20;
  const discoverResumeHref = buildDiscoverResumeHref(likedParam, albumsParam);

  return (
    <div className="flex w-full flex-col items-center gap-14 sm:gap-16">
      <section className="flex w-full max-w-2xl flex-col items-center gap-6 text-center">
        <Heading level="eyebrow" className="tracking-[0.22em]">
          You liked
        </Heading>

        <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl">
          <span className="text-foreground">Your </span>
          <span className="text-brand italic">{pairs.length}</span>
          <span className="text-foreground"> picks</span>
        </h1>

        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted sm:text-base">
          A side B made from the artists that caught your ear. Listen on
          Spotify, share the collage, print the poster.
        </p>

        <div className="flex w-full max-w-xl flex-col items-center gap-4 pt-2">
          <div className="flex w-full flex-col flex-wrap items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
            <CreatePlaylistButton trackIds={trackIds} />
            {festivalUnlocked ? (
              <Link href="/discover" className={secondaryOutlineClass}>
                Start new session
              </Link>
            ) : (
              <Link href={discoverResumeHref} className={secondaryOutlineClass}>
                Keep discovering
              </Link>
            )}
          </div>
          <Link href="/discover" className={linkMutedClass}>
            Reset
          </Link>
        </div>
      </section>

      <CollageGrid artists={collageItems} />

      {festivalUnlocked ? (
        <FestivalPoster artists={artists} />
      ) : (
        <Surface
          tone="locked"
          className="flex w-full max-w-md flex-col items-center gap-2 px-6 py-8 text-center"
        >
          <Heading level="eyebrow">Festival poster</Heading>
          <p className="text-sm text-muted">
            Come back with 20 picks to unlock your festival poster.
          </p>
        </Surface>
      )}
    </div>
  );
}

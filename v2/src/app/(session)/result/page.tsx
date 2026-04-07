import { redirect } from "next/navigation";
import { parseAlbumImageUrls, parseLikedPairs } from "@/features/discover/session";
import type { ResultSearchParams } from "@/features/discover/types";
import { getArtistsByIds } from "@/features/result/queries/get-artists-by-ids";
import { CollageGrid } from "@/features/result/components/collage-grid";
import { CreatePlaylistButton } from "@/features/result/components/create-playlist-button";
import { FestivalPoster } from "@/features/result/components/festival-poster";

interface ResultPageProps {
  searchParams: Promise<ResultSearchParams>;
}

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const { liked: likedParam, albums: albumsParam } = await searchParams;
  const pairs = parseLikedPairs(likedParam);

  if (pairs.length < 5) {
    redirect("/discover");
  }

  const artistIds = pairs.map((p) => p.artistId);
  const trackIds = pairs.map((p) => p.trackId).filter(Boolean);
  const albumImageUrls = parseAlbumImageUrls(albumsParam);

  const artists = await getArtistsByIds(artistIds);

  const collageItems = artists.map((a, i) => ({
    imageUrl: albumImageUrls[i] ?? a.imageUrl,
    artistName: a.name,
  }));

  return (
    <main className="flex flex-1 flex-col items-center gap-10 px-4 py-10 max-w-lg mx-auto w-full">
      <h1 className="text-2xl font-bold">Your {pairs.length} picks</h1>

      <CreatePlaylistButton trackIds={trackIds} />

      <CollageGrid artists={collageItems} />

      {pairs.length === 20 && (
        <div className="flex flex-col gap-4 items-center w-full">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Your festival lineup
          </h2>
          <FestivalPoster artists={artists} />
        </div>
      )}
    </main>
  );
}

import Image from "next/image";
import { selectArtistAction } from "../actions";
import type { Artist } from "@/features/discover/types";

interface ArtistSearchResultProps {
  artist: Artist;
}

export function ArtistSearchResult({ artist }: ArtistSearchResultProps) {
  const selectWithArgs = selectArtistAction.bind(null, artist.id);

  return (
    <li>
      <form action={selectWithArgs}>
        <button
          type="submit"
          className="flex w-full items-center gap-4 rounded-xl p-3 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
            {artist.imageUrl ? (
              <Image
                src={artist.imageUrl}
                alt={artist.name}
                fill
                className="object-cover"
                sizes="56px"
              />
            ) : null}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-gray-900 dark:text-white">
              {artist.name}
            </p>
            {artist.genres.length > 0 ? (
              <p className="truncate text-sm text-gray-500">
                {artist.genres.slice(0, 2).join(", ")}
              </p>
            ) : null}
          </div>
        </button>
      </form>
    </li>
  );
}

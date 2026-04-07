import Image from "next/image";
import { HeartIcon, XIcon } from "@/components/icons";
import { dislikeArtistAction, likeArtistAction } from "../actions";
import type { Artist, DiscoverSearchParams, Track } from "../types";
import { AudioPlayer } from "./audio-player";

interface ArtistCardProps {
  artist: Artist;
  track: Track;
  state: DiscoverSearchParams;
}

export function ArtistCard({ artist, track, state }: ArtistCardProps) {
  const likeWithArgs = likeArtistAction.bind(
    null,
    artist.id,
    track.id,
    track.albumImageUrl,
    state,
  );
  const dislikeWithArgs = dislikeArtistAction.bind(null, artist.id, state);

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white dark:bg-gray-900 dark:text-white shadow-sm w-full max-w-sm overflow-hidden">
      <div className="relative aspect-square w-full overflow-hidden">
        {track.albumImageUrl ? (
          <Image
            src={track.albumImageUrl}
            alt={artist.name}
            fill
            className="object-cover"
            sizes="(max-width: 384px) 100vw, 384px"
            priority
          />
        ) : (
          <div className="h-full w-full bg-gray-200 dark:bg-gray-700" />
        )}
      </div>

      <div className="flex flex-col gap-4 px-5 pb-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-0.5 min-w-0">
            <a
              href={artist.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold hover:underline truncate"
            >
              {artist.name}
            </a>
            <a
              href={track.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:underline truncate"
            >
              {track.name}
            </a>
          </div>

          {track.previewUrl && <AudioPlayer previewUrl={track.previewUrl} />}
        </div>

        <div className="flex gap-3">
          <form action={dislikeWithArgs} className="flex-1">
            <button
              type="submit"
              aria-label="Pass"
              className="w-full flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 py-3 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <XIcon size={20} />
            </button>
          </form>

          <form action={likeWithArgs} className="flex-1">
            <button
              type="submit"
              aria-label="Like"
              className="w-full flex items-center justify-center rounded-xl bg-green-500 py-3 text-white hover:bg-green-400 transition-colors"
            >
              <HeartIcon size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useTransition, useState } from "react";
import { createPlaylistAction } from "@/features/playlist/actions";
import { PlaylistEmbed } from "@/features/playlist/components/playlist-embed";
import type { Playlist } from "@/features/playlist/types";

interface CreatePlaylistButtonProps {
  trackIds: string[];
}

export function CreatePlaylistButton({ trackIds }: CreatePlaylistButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleClick() {
    setError(null);
    startTransition(async () => {
      const result = await createPlaylistAction(trackIds);
      if ("error" in result) {
        setError(result.error);
      } else {
        setPlaylist(result);
      }
    });
  }

  if (playlist) {
    return (
      <div className="flex flex-col gap-3 w-full">
        <a
          href={playlist.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors self-center"
        >
          Open in Spotify ↗
        </a>
        <PlaylistEmbed playlist={playlist} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full items-center">
      <button
        onClick={handleClick}
        disabled={isPending}
        className="rounded-full bg-green-500 px-8 py-3 font-semibold text-black hover:bg-green-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {isPending ? "Creating playlist…" : "Create Spotify playlist"}
      </button>

      {error && (
        <div role="alert" className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800 w-full">
          {error}
        </div>
      )}
    </div>
  );
}

"use client";

import { useTransition, useState } from "react";
import { toast } from "sonner";
import { SpotifyIcon } from "@/components/icons";
import { NavLink } from "@/components/nav-link";
import { Button, Heading, Surface } from "@/components/ui";
import { createPlaylistAction, PlaylistEmbed } from "@/features/playlist";
import type { Playlist } from "@/features/playlist";

interface CreatePlaylistButtonProps {
  trackIds: string[];
}

export function CreatePlaylistButton({ trackIds }: CreatePlaylistButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [playlist, setPlaylist] = useState<Playlist | null>(null);

  function handleClick() {
    startTransition(async () => {
      const result = await createPlaylistAction(trackIds);
      if ("error" in result) {
        toast.error(result.error);
      } else {
        setPlaylist(result);
        toast.success("Playlist created!");
      }
    });
  }

  if (playlist) {
    return (
      <div className="flex w-full min-w-full basis-full flex-col gap-4">
        <Surface className="flex items-center justify-between gap-4 p-4">
          <div className="flex min-w-0 flex-col gap-0.5">
            <Heading level="section" as="h2">
              Playlist ready
            </Heading>
            <p className="truncate text-sm text-muted">
              Saved to your Spotify account.
            </p>
          </div>
          <NavLink
            external
            href={playlist.spotifyUrl}
            preset="none"
            label="Open in Spotify ↗"
            className="shrink-0 text-sm font-medium transition-opacity hover:opacity-70"
          />
        </Surface>
        <PlaylistEmbed playlist={playlist} />
      </div>
    );
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isPending}
      variant="spotify"
      size="lg"
      className="w-full shadow-glow sm:w-auto"
    >
      <SpotifyIcon width={22} height={22} className="shrink-0" />
      {isPending ? "Creating playlist…" : "Create Spotify playlist"}
    </Button>
  );
}

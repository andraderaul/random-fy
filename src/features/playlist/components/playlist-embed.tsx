import type { Playlist } from "../types";

interface PlaylistEmbedProps {
  playlist: Playlist;
}

export function PlaylistEmbed({ playlist }: PlaylistEmbedProps) {
  return (
    <iframe
      src={playlist.embedUrl}
      width="100%"
      height="380"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-xl"
    />
  );
}

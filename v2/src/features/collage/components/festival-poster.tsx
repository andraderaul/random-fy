import type { Artist } from "@/features/discover/types";

interface FestivalPosterProps {
  artists: Artist[];
}

export function FestivalPoster({ artists }: FestivalPosterProps) {
  const sorted = [...artists].sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="bg-black text-white p-8 text-center">
      {sorted.map((artist) => (
        <p key={artist.id} className="font-bold">
          {artist.name}
        </p>
      ))}
    </div>
  );
}

import Link from "next/link";
import { Suspense } from "react";
import { SearchForm } from "@/features/search/components/search-form";
import { ArtistSearchResult } from "@/features/search/components/artist-search-result";
import { ArtistSearchResultSkeleton } from "@/features/search/components/artist-search-result.skeleton";
import { searchArtists } from "@/features/search/queries/search-artists";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;

  if (q) {
    return (
      <main className="flex flex-1 flex-col items-center gap-8 px-4 py-10">
        <div className="flex items-center gap-4 w-full max-w-md justify-between">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Results for &quot;{q}&quot;
          </h1>
          <Link
            href="/search"
            className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors shrink-0"
          >
            Search again
          </Link>
        </div>

        <Suspense fallback={<ArtistSearchResultSkeleton />}>
          <SearchResults query={q} />
        </Suspense>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col items-center gap-8 px-4 py-10">
      <h1 className="text-xl font-semibold text-center max-w-sm text-gray-900 dark:text-white">
        Search for an artist by name and we&apos;ll create a playlist for you
      </h1>

      <SearchForm query="" />
    </main>
  );
}

async function SearchResults({ query }: { query: string }) {
  const artists = await searchArtists(query);

  if (artists.length === 0) {
    return (
      <p className="text-sm text-gray-400 text-center max-w-sm">
        We couldn&apos;t find any related artists. Please try searching for a
        different artist.
      </p>
    );
  }

  return (
    <ul className="w-full max-w-md divide-y divide-gray-100 dark:divide-gray-800 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">
      {artists.map((artist) => (
        <ArtistSearchResult key={artist.id} artist={artist} />
      ))}
    </ul>
  );
}

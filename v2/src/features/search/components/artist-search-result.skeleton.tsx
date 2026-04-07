export function ArtistSearchResultSkeleton() {
  return (
    <ul className="w-full max-w-md divide-y divide-gray-100 dark:divide-gray-800">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className="flex items-center gap-4 p-3 animate-pulse">
          <div className="h-14 w-14 shrink-0 rounded-lg bg-gray-200 dark:bg-gray-700" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-3 w-1/2 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
        </li>
      ))}
    </ul>
  );
}

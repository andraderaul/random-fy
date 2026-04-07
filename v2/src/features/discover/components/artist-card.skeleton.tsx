export function ArtistCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white dark:bg-gray-900 shadow-sm w-full max-w-sm overflow-hidden animate-pulse">
      <div className="aspect-square w-full bg-gray-200 dark:bg-gray-700" />

      <div className="flex flex-col gap-4 px-5 pb-5">
        <div className="flex flex-col gap-2">
          <div className="h-5 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700" />
        </div>

        <div className="flex gap-3">
          <div className="h-12 flex-1 rounded-xl bg-gray-200 dark:bg-gray-700" />
          <div className="h-12 flex-1 rounded-xl bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
}

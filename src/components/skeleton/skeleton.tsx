export const Skeleton = () => (
  <div className="shadow rounded-md p-4  w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-4 animate-pulse">
      <div
        aria-label="image loading"
        className="w-72 h-72 bg-gray-300 dark:bg-gray-500"
      />
      <div
        aria-label="image loading"
        className="w-72 h-72 bg-gray-200 dark:bg-gray-600"
      />
      <div
        aria-label="image loading"
        className="w-72 h-72 bg-gray-300 dark:bg-gray-500"
      />
      <div
        aria-label="image loading"
        className="w-72 h-72 bg-gray-200 dark:bg-gray-600"
      />

      <div
        aria-label="image loading"
        className="w-72 h-72 bg-gray-200 dark:bg-gray-600"
      />
      <div
        aria-label="image loading"
        className="w-72 h-72 bg-gray-300 dark:bg-gray-500"
      />
      <div
        aria-label="image loading"
        className="w-72 h-72 bg-gray-200 dark:bg-gray-600"
      />
      <div
        aria-label="image loading"
        className="w-72 h-72 bg-gray-300 dark:bg-gray-500"
      />
    </div>
  </div>
)

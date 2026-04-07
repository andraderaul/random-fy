interface SearchFormProps {
  query: string;
}

export function SearchForm({ query }: SearchFormProps) {
  return (
    <form method="GET" action="/search" className="flex w-full max-w-md gap-2">
      <input
        name="q"
        defaultValue={query}
        placeholder="Search artists..."
        autoComplete="off"
        className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-green-400"
      />
      <button
        type="submit"
        className="rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-400"
      >
        Search
      </button>
    </form>
  );
}

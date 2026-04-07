"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Something went wrong
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
        An unexpected error occurred. You can try again or come back later.
      </p>
      <button
        onClick={reset}
        className="rounded-full bg-green-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-400 transition-colors"
      >
        Try again
      </button>
    </main>
  );
}

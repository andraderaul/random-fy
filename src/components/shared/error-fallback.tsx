"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import { Heading } from "@/components/ui";

interface ErrorFallbackProps {
  title?: string;
  description?: string;
  action?: ReactNode;
  error?: Error & { digest?: string };
  reset?: () => void;
  icon?: ReactNode;
}

export function ErrorFallback({
  title = "Something went wrong",
  description = "An unexpected error occurred. You can try again or come back later.",
  action,
  error,
  reset,
  icon,
}: ErrorFallbackProps) {
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-5 px-4 text-center">
      {icon ?? (
        <div
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-muted text-lg"
        >
          !
        </div>
      )}
      <Heading level="title" as="h1">
        {title}
      </Heading>
      <p className="text-sm text-muted max-w-sm">{description}</p>
      {action ??
        (reset && (
          <button
            onClick={reset}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-black hover:bg-primary-hover transition-colors"
          >
            Try again
          </button>
        ))}
    </main>
  );
}

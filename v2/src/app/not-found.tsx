import Link from "next/link";
import { ErrorFallback } from "@/components/shared/error-fallback";

export default function NotFound() {
  return (
    <ErrorFallback
      title="Page not found"
      description="The page you're looking for doesn't exist or has been moved."
      action={
        <Link
          href="/"
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-black hover:bg-primary-hover transition-colors"
        >
          Go home
        </Link>
      }
    />
  );
}

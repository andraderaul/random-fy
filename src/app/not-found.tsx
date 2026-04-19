import { NavLink } from "@/components/nav-link";
import { ErrorFallback } from "@/components/shared/error-fallback";

export default function NotFound() {
  return (
    <ErrorFallback
      title="Page not found"
      description="The page you're looking for doesn't exist or has been moved."
      action={
        <NavLink
          href="/"
          preset="none"
          label="Go home"
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-primary-hover"
        />
      }
    />
  );
}

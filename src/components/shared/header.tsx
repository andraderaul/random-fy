import Link from "next/link";
import { Wordmark } from "@/components/ui";
import { HeaderNav } from "./header-nav";

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout?: () => Promise<void>;
}

export function Header({ isAuthenticated, onLogout }: HeaderProps) {
  const logoutSlot = onLogout ? (
    <form action={onLogout}>
      <button
        type="submit"
        className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        Log out
      </button>
    </form>
  ) : null;

  return (
    <header className="flex items-center justify-between gap-4 border-b border-subtle/50 px-6 py-4 dark:border-white/10">
      <Link
        href={isAuthenticated ? "/discover" : "/"}
        className="shrink-0"
        aria-label="Randomfy"
      >
        <Wordmark size="sm" />
      </Link>

      <HeaderNav isAuthenticated={isAuthenticated} logoutSlot={logoutSlot} />
    </header>
  );
}

import Link from "next/link";
import { logoutAction } from "@/features/auth/actions";

interface HeaderProps {
  isAuthenticated: boolean;
}

export function Header({ isAuthenticated }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
      <Link
        href={isAuthenticated ? "/discover" : "/"}
        className="text-xl font-extrabold tracking-tight"
      >
        randomfy
      </Link>

      <nav className="flex items-center gap-6 text-sm font-medium text-gray-500">
        <Link
          href="/about"
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          About
        </Link>

        {isAuthenticated && (
          <>
            <Link
              href="/search"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Search
            </Link>

            <form action={logoutAction}>
              <button
                type="submit"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Log out
              </button>
            </form>
          </>
        )}
      </nav>
    </header>
  );
}

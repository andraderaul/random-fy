import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Page not found
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-green-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-400 transition-colors"
      >
        Go home
      </Link>
    </main>
  );
}

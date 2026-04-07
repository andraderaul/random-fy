import { loginAction } from "@/features/auth/actions";
import { SpotifyIcon } from "@/components/icons";

export default function LoginPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-extrabold tracking-tight">Yeah!</h1>
          <p className="text-lg font-light text-gray-500">
            Hello, music lover!
          </p>
          <p className="text-sm text-gray-400 max-w-xs">
            Are you ready to discover new artists on Spotify and create a
            playlist with them?
          </p>
        </div>

        <form action={loginAction}>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-full bg-gray-900 px-8 py-3 font-semibold text-white dark:bg-white dark:text-gray-900 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-opacity"
          >
            <SpotifyIcon width={20} height={20} />
            Log in with Spotify
          </button>
        </form>
      </div>
    </main>
  );
}

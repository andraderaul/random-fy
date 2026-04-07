export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="max-w-2xl mx-auto w-full px-6 py-12 flex flex-col gap-12">
        <section className="flex flex-col gap-4">
          <h2 className="text-xs uppercase tracking-widest text-gray-400">
            About
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Randomfy takes your most listened to Spotify artists, selects one of
            them, and shows you similar artists so you can discover new artists
            based on your preferences.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Disclaimer: Randomfy is not affiliated with Spotify. This site was
            built with Next.js and the Spotify API.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed italic">
            Why are you still reading this? Go listen to some amazing new
            artists!
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xs uppercase tracking-widest text-gray-400">
            How it works
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            When you sign in, a recommendation is shown based on your Spotify
            listening history.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Like or pass on each artist. Once you have 5 or more, create a
            playlist and download your collage or festival poster.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xs uppercase tracking-widest text-gray-400">
            Developer
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Built by{" "}
            <a
              href="https://github.com/raulandrade"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              Raul Andrade
            </a>
            .
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Follow me on</span>
            <a
              href="https://github.com/andraderaul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/andraderaul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/theandraderaul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Twitter
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

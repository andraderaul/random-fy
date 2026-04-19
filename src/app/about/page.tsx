import { Heading } from "@/components/ui";

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="max-w-2xl mx-auto w-full px-6 py-12 flex flex-col gap-16">
        <section className="flex flex-col gap-4">
          <Heading level="eyebrow">About</Heading>
          <p className="text-base leading-relaxed">
            Randomfy takes your most listened to Spotify artists, selects one of
            them, and shows you similar artists so you can discover new artists
            based on your preferences.
          </p>
          <p className="text-base leading-relaxed">
            Disclaimer: Randomfy is not affiliated with Spotify. This site was
            built with Next.js and the Spotify API.
          </p>
        </section>

        <section id="how-it-works" className="flex flex-col gap-4 scroll-mt-24">
          <Heading level="eyebrow">How it works</Heading>
          <p className="text-base leading-relaxed">
            When you sign in, a recommendation is shown based on your Spotify
            listening history.
          </p>
          <p className="text-base leading-relaxed">
            Like or pass on each artist. Once you have 5 or more, create a
            playlist and download your collage or festival poster.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <Heading level="eyebrow">Developer</Heading>
          <p className="text-base">
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
          <ul className="flex items-center gap-4 text-sm text-muted">
            <li>
              <a
                href="https://github.com/andraderaul"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </li>
            <li aria-hidden="true" className="opacity-30">·</li>
            <li>
              <a
                href="https://linkedin.com/in/andraderaul"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li aria-hidden="true" className="opacity-30">·</li>
            <li>
              <a
                href="https://twitter.com/theandraderaul"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Twitter
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

import { NavLink } from "@/components";
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
            <NavLink
              external
              href="https://github.com/raulandrade"
              preset="none"
              label="Raul Andrade"
              className="font-medium hover:underline"
            />
            .
          </p>
          <ul className="flex flex-wrap items-center gap-4">
            <li>
              <NavLink
                external
                href="https://github.com/andraderaul"
                label="GitHub"
              />
            </li>
            <li aria-hidden="true" className="opacity-30">
              ·
            </li>
            <li>
              <NavLink
                external
                href="https://linkedin.com/in/andraderaul"
                label="LinkedIn"
              />
            </li>
            <li aria-hidden="true" className="opacity-30">
              ·
            </li>
            <li>
              <NavLink
                external
                href="https://twitter.com/theandraderaul"
                label="Twitter"
              />
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

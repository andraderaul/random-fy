import { NavLink } from "@/components";
import { Heading } from "@/components/ui";
import { cn } from "@/lib/cn";

const ctaPrimaryClass = cn(
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-semibold",
  "bg-brand text-gray-950 shadow-glow transition-all duration-200 ease-in-out",
  "hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
);

const mutedInlineLinkClass =
  "font-medium text-muted underline-offset-4 transition-colors duration-200 ease-in-out hover:text-foreground hover:underline";

export default function AboutPage() {
  return (
    <main className="relative flex flex-1 flex-col bg-background">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="pointer-events-none absolute -left-[min(40vw,280px)] -top-[min(35vw,240px)] h-[min(85vw,560px)] w-[min(85vw,560px)] rounded-full bg-primary/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-[min(25vw,160px)] -right-[min(35vw,220px)] h-[min(75vw,500px)] w-[min(75vw,500px)] rounded-full bg-fuchsia-600/25 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col gap-20 px-6 py-16 sm:py-20">
        <section className="flex flex-col gap-6">
          <Heading level="eyebrow" as="p">
            About
          </Heading>
          <h1 className="font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="block">A different way to find your</span>
            <span className="block text-brand italic">next favorite</span>
            <span className="block">artist.</span>
          </h1>
          <div className="flex flex-col gap-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            <p>
              Randomfy takes your most listened to Spotify artists, selects one
              of them, and shows you similar artists so you can discover new
              artists based on your preferences.
            </p>
          </div>
        </section>

        <section
          id="how-it-works"
          aria-labelledby="how-it-works-heading"
          className="scroll-mt-24"
        >
          <Heading
            id="how-it-works-heading"
            level="eyebrow"
            as="h2"
            className="mb-10"
          >
            How it works
          </Heading>
          <ol className="flex list-none flex-col pl-0">
            <li className="border-b border-subtle py-12 first:pt-0">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                <span className="font-display text-5xl font-bold leading-none tracking-tight text-brand sm:text-6xl">
                  01
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    Sign in with Spotify
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    When you sign in, a recommendation is shown based on your
                    Spotify listening history.
                  </p>
                </div>
              </div>
            </li>
            <li className="border-b border-subtle py-12">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                <span className="font-display text-5xl font-bold leading-none tracking-tight text-brand sm:text-6xl">
                  02
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    Like or pass
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    Like or pass on each artist. Build your shortlist as you go.
                  </p>
                </div>
              </div>
            </li>
            <li className="py-12 pb-0">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                <span className="font-display text-5xl font-bold leading-none tracking-tight text-brand sm:text-6xl">
                  03
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    Unlock your set
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    Once you have 5 or more, create a playlist and download your
                    collage or festival poster.
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </section>

        <section
          aria-labelledby="disclaimer-heading"
          className="rounded-2xl border border-subtle bg-surface-muted/80 p-6 sm:p-8"
        >
          <Heading
            id="disclaimer-heading"
            level="eyebrow"
            as="h2"
            className="mb-3"
          >
            Disclaimer
          </Heading>
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Randomfy is not affiliated with Spotify. This site was built with
            Next.js and the Spotify API.
          </p>
        </section>

        <section className="flex flex-col gap-8 border-t border-subtle pt-12">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <NavLink
              href="/discover"
              preset="none"
              label="Start discovering →"
              className={ctaPrimaryClass}
            />
            <NavLink
              href="/discover"
              preset="none"
              label="Back home"
              className="text-sm text-muted transition-colors duration-200 ease-in-out hover:text-foreground"
            />
          </div>

          <div className="flex flex-col gap-4 border-t border-subtle/70 pt-10">
            <Heading level="eyebrow" as="h2">
              Developer
            </Heading>
            <p className="text-sm leading-relaxed text-muted">
              Built by{" "}
              <NavLink
                external
                href="https://github.com/raulandrade"
                preset="none"
                label="Raul Andrade"
                className={mutedInlineLinkClass}
              />
              .
            </p>
            <ul className="flex flex-wrap items-center gap-4 text-sm">
              <li>
                <NavLink
                  external
                  href="https://github.com/andraderaul"
                  preset="none"
                  label="GitHub"
                  className={mutedInlineLinkClass}
                />
              </li>
              <li aria-hidden="true" className="text-muted opacity-40">
                ·
              </li>
              <li>
                <NavLink
                  external
                  href="https://linkedin.com/in/andraderaul"
                  preset="none"
                  label="LinkedIn"
                  className={mutedInlineLinkClass}
                />
              </li>
              <li aria-hidden="true" className="text-muted opacity-40">
                ·
              </li>
              <li>
                <NavLink
                  external
                  href="https://twitter.com/theandraderaul"
                  preset="none"
                  label="Twitter"
                  className={mutedInlineLinkClass}
                />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

import { NavLink } from "@/components/nav-link";
import { SpotifyIcon } from "@/components/icons";
import { Button, Heading } from "@/components/ui";

export default function LoginPage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="pointer-events-none absolute -left-[min(40vw,280px)] -top-[min(35vw,240px)] h-[min(85vw,560px)] w-[min(85vw,560px)] rounded-full bg-primary/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-[min(25vw,160px)] -right-[min(35vw,220px)] h-[min(75vw,500px)] w-[min(75vw,500px)] rounded-full bg-fuchsia-600/25 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-10 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="animate-fade-in motion-reduce:animate-none flex flex-col text-left">
            <Heading level="eyebrow" as="p" className="mb-4">
              <span className="text-primary" aria-hidden>
                ●
              </span>{" "}
              Side B · 2026 Edition
            </Heading>

            <h1 className="font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="block">Discover artists</span>
              <span className="text-primary block italic">you&apos;ll love.</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Built from your most-listened Spotify artists. Swipe twenty picks.
              Walk away with a playlist, a collage, and a festival poster of your
              taste.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <form action="/api/login" method="get">
                <Button type="submit" variant="spotify" size="lg">
                  <SpotifyIcon width={20} height={20} />
                  Continue with Spotify
                </Button>
              </form>
              <NavLink
                href="/about#how-it-works"
                preset="none"
                label="How it works ↗"
                className="text-sm text-muted transition-colors hover:text-foreground"
              />
            </div>
          </div>

          <div
            className="relative mx-auto hidden h-[min(22rem,70vw)] w-[min(22rem,70vw)] shrink-0 lg:flex lg:items-center lg:justify-center"
            aria-hidden
          >
            <div className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
              <div
                className="border-brand/35 absolute inset-0 rounded-full border-2 border-t-brand motion-reduce:animate-none motion-reduce:opacity-80 animate-spin-slow"
              />
              <div className="absolute inset-4 rounded-full border border-subtle/60" />
              <span className="font-display text-brand text-center text-3xl font-semibold tracking-tight sm:text-4xl">
                Randomfy
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

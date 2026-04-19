import { NavLink } from "@/components/nav-link";

export function Footer() {
  return (
    <footer className="py-6 text-center text-xs text-muted">
      <span>Randomfy</span>
      <span aria-hidden="true" className="mx-2 opacity-30">·</span>
      <span>Not affiliated with Spotify</span>
      <span aria-hidden="true" className="mx-2 opacity-30">·</span>
      <NavLink
        external
        href="https://github.com/andraderaul"
        preset="none"
        label="Raul Andrade"
        className="transition-colors hover:text-foreground hover:underline"
      />
    </footer>
  );
}

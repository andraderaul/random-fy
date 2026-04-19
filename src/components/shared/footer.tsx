export function Footer() {
  return (
    <footer className="py-6 text-center text-xs text-muted">
      <span>Randomfy</span>
      <span aria-hidden="true" className="mx-2 opacity-30">·</span>
      <span>Not affiliated with Spotify</span>
      <span aria-hidden="true" className="mx-2 opacity-30">·</span>
      <a
        href="https://github.com/andraderaul"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground hover:underline transition-colors"
      >
        Raul Andrade
      </a>
    </footer>
  );
}

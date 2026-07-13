import { Link } from "@tanstack/react-router";

const AVATAR = "https://lfrhh.github.io/Amethyst/src/avatar.gif";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-[oklch(0.24_0.12_20/0.65)] border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={AVATAR}
            alt="Amethyst avatar"
            className="w-9 h-9 rounded-full border border-white/20"
          />
          <span className="font-display font-bold text-lg text-gradient-blush">
            Amethyst
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2 text-sm">
          <Link
            to="/"
            className="px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground transition"
            activeProps={{ className: "px-3 py-1.5 rounded-lg text-foreground" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/commands"
            className="px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground transition"
            activeProps={{ className: "px-3 py-1.5 rounded-lg text-foreground" }}
          >
            Commands
          </Link>
          <Link
            to="/terms"
            className="hidden sm:inline px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground transition"
            activeProps={{ className: "px-3 py-1.5 rounded-lg text-foreground" }}
          >
            Terms
          </Link>
          <Link
            to="/privacy"
            className="hidden sm:inline px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground transition"
            activeProps={{ className: "px-3 py-1.5 rounded-lg text-foreground" }}
          >
            Privacy
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2025 Amethyst — All rights reserved</p>
        <div className="flex items-center gap-5">
          <Link to="/terms" className="hover:text-foreground transition">Terms</Link>
          <Link to="/privacy" className="hover:text-foreground transition">Privacy</Link>
          <a
            href="https://discord.gg/PAEUG5rBHf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}

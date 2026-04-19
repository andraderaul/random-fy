"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface HeaderNavProps {
  isAuthenticated: boolean;
  logoutSlot?: ReactNode;
}

interface NavLink {
  href: string;
  label: string;
}

const publicLinks: NavLink[] = [
  {
    href: "/about",
    label: "About",
  },
];

const sessionLinks: NavLink[] = [
  { href: "/discover", label: "Discover" },
  { href: "/result", label: "Playlist" },
  { href: "/about", label: "About" },
];

export function HeaderNav({ isAuthenticated, logoutSlot }: HeaderNavProps) {
  const pathname = usePathname();
  const links = isAuthenticated ? sessionLinks : publicLinks;

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav className="flex flex-wrap items-center justify-end gap-4 text-sm font-medium sm:gap-6">
      {links.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`transition-colors ${
              active
                ? "text-gray-900 underline decoration-2 underline-offset-8 dark:text-foreground dark:decoration-foreground"
                : "text-gray-500 hover:text-gray-900 dark:text-muted dark:hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
      {isAuthenticated && logoutSlot}
    </nav>
  );
}

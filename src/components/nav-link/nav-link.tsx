import Link from "next/link";
import type { AriaAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type NavLinkProps = {
  href: string;
  className?: string;
  external?: boolean;
  preset?: "nav-text" | "none";
  "aria-current"?: AriaAttributes["aria-current"];
  "aria-label"?: string;
} & (
  | { label: string; children?: undefined }
  | { label?: undefined; children: ReactNode }
);

export function NavLink({
  href,
  label,
  children,
  className,
  external = false,
  preset = "nav-text",
  "aria-current": ariaCurrent,
  "aria-label": ariaLabel,
}: NavLinkProps) {
  const baseClasses =
    preset === "none" ? cn(className) : cn("nav-text", className);
  const content = children ?? label;

  if (external) {
    return (
      <a
        href={href}
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
        aria-current={ariaCurrent}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={baseClasses}
      aria-current={ariaCurrent}
      aria-label={ariaLabel}
    >
      {content}
    </Link>
  );
}

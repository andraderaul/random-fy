import Link from "next/link";

import { cn } from "@/lib/cn";

export type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
  external?: boolean;
};

export function NavLink({
  href,
  label,
  className,
  external = false,
}: NavLinkProps) {
  const baseClasses = cn("nav-text", className);

  if (external) {
    return (
      <a
        href={href}
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {label}
    </Link>
  );
}

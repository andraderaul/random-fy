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
  const baseClasses = cn(
    "text-2xl font-thin leading-10 tracking-wide",
    "text-gray-700 dark:text-gray-300",
    "hover:text-blue-500 hover:dark:text-orange-400",
    "transition-all duration-200 ease-in-out",
    className,
  );

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

import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "spotify" | "finish";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-black hover:bg-primary-hover focus-visible:outline-primary",
  spotify:
    "bg-brand text-gray-950 hover:bg-brand-dark focus-visible:outline-brand",
  secondary:
    "bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-80 focus-visible:outline-gray-900 dark:focus-visible:outline-white",
  ghost:
    "border border-subtle text-gray-700 dark:text-gray-200 hover:bg-surface-muted focus-visible:outline-subtle",
  finish:
    "border border-subtle bg-white text-gray-950 shadow-md shadow-black/10 hover:bg-surface-muted focus-visible:outline-gray-400 dark:border-transparent dark:bg-white dark:text-gray-950 dark:hover:opacity-90 dark:shadow-black/30",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className = "", children, ...rest },
    ref,
  ) {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

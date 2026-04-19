import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type Tone = "default" | "muted" | "locked";

interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  tone?: Tone;
  children: ReactNode;
}

const tones: Record<Tone, string> = {
  default: "bg-surface border border-subtle shadow-sm",
  muted: "bg-surface-muted",
  locked:
    "bg-surface-muted border border-dashed border-subtle text-gray-400 dark:text-gray-500",
};

export function Surface({
  tone = "default",
  className = "",
  children,
  ...rest
}: SurfaceProps) {
  return (
    <div className={cn("rounded-2xl", tones[tone], className)} {...rest}>
      {children}
    </div>
  );
}

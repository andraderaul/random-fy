import type { HTMLAttributes, ReactNode } from "react";

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
  const classes = `rounded-2xl ${tones[tone]} ${className}`.trim();
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

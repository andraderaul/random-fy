import type { HTMLAttributes, ReactNode } from "react";

type Level = "display" | "title" | "section" | "eyebrow" | "muted";

interface HeadingProps extends HTMLAttributes<HTMLElement> {
  level: Level;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  children: ReactNode;
}

const styles: Record<Level, string> = {
  display: "text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight",
  title: "text-2xl font-bold tracking-tight",
  section: "text-lg font-semibold tracking-tight",
  eyebrow: "text-xs uppercase tracking-widest font-medium text-muted",
  muted: "text-base text-muted font-normal",
};

const defaultTags: Record<Level, HeadingProps["as"]> = {
  display: "h1",
  title: "h1",
  section: "h2",
  eyebrow: "p",
  muted: "p",
};

export function Heading({
  level,
  as,
  className = "",
  children,
  ...rest
}: HeadingProps) {
  const Tag = as ?? defaultTags[level] ?? "p";
  const classes = `${styles[level]} ${className}`.trim();
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}

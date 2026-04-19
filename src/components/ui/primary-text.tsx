import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type PrimaryTextProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: "p" | "span" | "div";
};

export function PrimaryText({
  as: Component = "p",
  className,
  children,
  ...rest
}: PrimaryTextProps) {
  return (
    <Component className={cn("text-display", className)} {...rest}>
      {children}
    </Component>
  );
}

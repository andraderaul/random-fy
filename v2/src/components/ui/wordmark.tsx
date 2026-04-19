type Size = "sm" | "md" | "lg";

interface WordmarkProps {
  size?: Size;
  className?: string;
}

const sizes: Record<Size, string> = {
  sm: "text-xl",
  md: "text-3xl",
  lg: "text-5xl",
};

export function Wordmark({ size = "sm", className = "" }: WordmarkProps) {
  return (
    <span
      className={`inline-flex items-baseline gap-1.5 font-display font-extrabold tracking-tight text-foreground ${sizes[size]} ${className}`.trim()}
    >
      <span>Randomfy.</span>
      <span
        className="mb-0.5 h-2 w-2 shrink-0 translate-y-px rounded-full bg-primary sm:h-2.5 sm:w-2.5"
        aria-hidden
      />
    </span>
  );
}

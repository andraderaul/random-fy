import { Button, Heading } from "@/components/ui";
import { endSessionAction } from "../actions";

const MAX_LIKED = 20;
const MIN_TO_END = 5;

interface ProgressCounterProps {
  likedParam: string;
  albumsParam: string;
  likedCount: number;
}

export function ProgressCounter({
  likedParam,
  albumsParam,
  likedCount,
}: ProgressCounterProps) {
  const count = likedCount;
  const displayCount = Math.min(count, MAX_LIKED);

  const canEnd = count >= MIN_TO_END;
  const festivalUnlocked = count >= MAX_LIKED;
  const endWithArgs = endSessionAction.bind(null, likedParam, albumsParam);
  const progress = Math.min((displayCount / MAX_LIKED) * 100, 100);
  const remainingToUnlock = Math.max(0, MIN_TO_END - count);

  const badge = festivalUnlocked
    ? "Festival unlocked"
    : canEnd
      ? "Playlist unlocked"
      : null;

  return (
    <div className="flex w-full flex-col gap-4">
      <Heading level="eyebrow" as="p" className="text-left">
        Your picks
      </Heading>

      <div className="flex items-start justify-between gap-3">
        <p className="font-display text-4xl font-semibold leading-none tracking-tight text-foreground">
          {displayCount}
          <span className="text-2xl font-normal text-muted">
            {" "}
            / {MAX_LIKED}
          </span>
        </p>
        {badge ? (
          <span className="shrink-0 pt-1 text-right text-xs font-semibold leading-snug text-primary">
            {badge}
          </span>
        ) : null}
      </div>

      <div
        className="h-2 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10"
        role="progressbar"
        aria-valuenow={displayCount}
        aria-valuemin={0}
        aria-valuemax={MAX_LIKED}
      >
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {!canEnd ? (
        <p className="text-left text-xs text-muted">
          {remainingToUnlock} more to unlock playlist
        </p>
      ) : null}

      {canEnd ? (
        <form action={endWithArgs} className="w-full">
          <Button type="submit" variant="finish" size="md" className="w-full">
            Finish with {displayCount} picks →
          </Button>
        </form>
      ) : null}
    </div>
  );
}

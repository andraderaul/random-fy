import { endSessionAction } from "../actions";

const MAX_LIKED = 20;
const MIN_TO_END = 5;

interface ProgressCounterProps {
  likedParam: string;
  albumsParam: string;
  likedCount: number;
}

export function ProgressCounter({ likedParam, albumsParam, likedCount }: ProgressCounterProps) {
  const count = likedCount;
  const canEnd = count >= MIN_TO_END;
  const endWithArgs = endSessionAction.bind(null, likedParam, albumsParam);

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-sm">
      <div className="flex justify-between w-full text-xs text-gray-400">
        <span>{count} / {MAX_LIKED}</span>
      </div>
      <div className="w-full h-1 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-300"
          style={{ width: `${(count / MAX_LIKED) * 100}%` }}
        />
      </div>
      {canEnd && (
        <form action={endWithArgs} className="w-full mt-2">
          <button
            type="submit"
            className="w-full rounded-full bg-green-500 py-3 text-sm font-semibold text-white hover:bg-green-400 transition-colors"
          >
            Finish
          </button>
        </form>
      )}
    </div>
  );
}

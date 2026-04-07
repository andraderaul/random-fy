import type { CollageItem } from "../types";

interface CollageGridProps {
  items: CollageItem[];
}

export function CollageGrid({ items }: CollageGridProps) {
  return (
    <div className="grid grid-cols-4 gap-1">
      {items.map((item) => (
        <img
          key={item.artistName}
          src={item.imageUrl}
          alt={item.artistName}
          className="aspect-square object-cover w-full"
        />
      ))}
    </div>
  );
}

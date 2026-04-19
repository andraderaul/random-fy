/** Tailwind radius for discover artist card layers (keep in sync with clip-path). */
export const discoverCardRadiusClass = "rounded-[2.5rem]";

/**
 * Curved clip for stacked poster layers (avoids square-corner bleed with
 * overflow-hidden + border-radius under compositing).
 */
export const discoverCardShellClipClass = "[clip-path:inset(0_round_2.5rem)]";

/**
 * Calendar year for an instant (defaults to “now”).
 * Use for UI copy instead of hardcoding a year or inlining `new Date().getFullYear()`.
 */
export function getCalendarYear(date: Date = new Date()): number {
  return date.getFullYear();
}

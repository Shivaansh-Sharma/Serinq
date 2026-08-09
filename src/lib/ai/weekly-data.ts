export function filterWeeklyEntries<T extends { createdAt: Date }>(
  entries: T[]
): T[] {
  const now = new Date();

  const start = new Date(now);
  start.setDate(start.getDate() - 7);

  return entries.filter(
    (entry) =>
      entry.createdAt >= start &&
      entry.createdAt <= now
  );
}
export function currentUnitIndex(startedAt: string, unitWeeks: number[]): number {
  if (unitWeeks.length === 0) return 0;
  const elapsedWeeks = Math.max(0, Math.floor((Date.now() - new Date(startedAt).getTime()) / (7 * 24 * 60 * 60 * 1000)));
  let cursor = 0;
  for (let index = 0; index < unitWeeks.length; index += 1) {
    cursor += unitWeeks[index] ?? 0;
    if (elapsedWeeks < cursor) return index;
  }
  return unitWeeks.length - 1;
}

export function weekInYear(startedAt: string, durationWeeks: number): number {
  const elapsed = Math.floor((Date.now() - new Date(startedAt).getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
  return Math.min(Math.max(elapsed, 1), durationWeeks);
}

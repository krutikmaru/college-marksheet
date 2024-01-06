export function extractStartYearFromBatch(batch) {
  const parts = batch.split("-");
  const year = parts[0];
  const lastTwoDigits = year.slice(-2);
  return lastTwoDigits;
}

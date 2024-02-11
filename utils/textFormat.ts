export function removeFirstAndLastTwo(str: string): string {
  if (str.length <= 4) return "";
  return str.slice(2, -2);
}

/**
 * Recursively check for equality of each properties between two objects using the `Object.is` algorithm
 */
export function objectEquals<T, U extends T = T>(a: T, b: U): boolean {
  if (typeof a === "object" && a !== null) {
    const entries = Object.entries(a) as [keyof T, T[keyof T]][];
    return entries.every(([key, val]) => objectEquals(val, b[key]));
  }
  return Object.is(a, b);
}

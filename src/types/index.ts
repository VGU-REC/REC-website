type NonUnionImpl<T, U = T> = U extends any
  ? [T] extends [U]
    ? T
    : never
  : never;
export type NonUnion<T> = NonUnionImpl<T>;

export type Optional<T, K extends keyof T> = T extends any
  ? Omit<T, K> & Partial<Pick<T, K>>
  : never;

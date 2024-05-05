/**
 * Promise, or not
 */
export type Awaitable<T> = T | Promise<T>

/**
 * Null or whatever
 */
export type Nullable<T> = T | null | undefined

/**
 * Array, or not yet
 */
export type Arrayable<T> = T | Array<T>
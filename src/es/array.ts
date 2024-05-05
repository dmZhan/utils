import type { Arrayable, Nullable } from '../types'

/**
 * Convert `Arrayable<T>` to `Array<T>`
 *
 * @category Array/toArray
 */
export function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T> {
  array = array ?? []
  return Array.isArray(array) ? array : [array]
}

import { flattenArrayable } from './es'

export function sum(...args: number[] | number[][]) {
  return flattenArrayable(args).reduce((a, b) => a + b, 0)
}

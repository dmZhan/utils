import type { electronProcess } from '../types'

export function isRenderer() {
  return (process as NodeJS.Process & electronProcess).type === 'renderer'
}

export function isMain() {
  return (process as NodeJS.Process & electronProcess).type === 'browser'
}

export function isMacOs() {
  return (process as NodeJS.Process).platform === 'darwin'
}

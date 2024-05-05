import type { PackageJson } from 'pkg-types'

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

/**
 * Electron Process
 */
export interface electronProcess {
  type: 'browser' | 'renderer' | 'worker' | 'utility'
}

export interface PackageInfo {
  name: string
  rootPath: string
  packageJsonPath: string
  version: string
  packageJson: PackageJson
}

export interface PackageResolvingOptions {
  paths?: string[]

  /**
   * @default 'auto'
   * Resolve path as posix or win32
   */
  platform?: 'posix' | 'win32' | 'auto'
}

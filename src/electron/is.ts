export function isRenderer() {
  return process.type === 'renderer'
}

export function isMain() {
  return process.type === 'browser'
}

export function isMacOs() {
  return process.platform === 'darwin'
}

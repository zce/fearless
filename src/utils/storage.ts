/**
 * Storage
 *
 * Ref:
 * - https://github.com/marcuswestin/store.js
 *
 * @example
 *   storage.get( ... )
 *   storage.set( ... )
 */

export const get = (key: string): unknown => {
  const json = localStorage.getItem(import.meta.env.VITE_STORAGE_PREFIX + key)
  try {
    return JSON.parse(json as string)
  } catch {
    return json
  }
}

export const set = (key: string, value: unknown): void => {
  localStorage.setItem(import.meta.env.VITE_STORAGE_PREFIX + key, JSON.stringify(value))
}

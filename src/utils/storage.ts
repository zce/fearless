/**
 * Storage
 */

const prefix = import.meta.env.VITE_STORAGE_PREFIX as string

export const get = (key: string): unknown => {
  const json = localStorage.getItem(prefix + key)
  try {
    return JSON.parse(json as string)
  } catch {
    return json
  }
}

export const set = (key: string, value: unknown): void => {
  localStorage.setItem(prefix + key, JSON.stringify(value))
}

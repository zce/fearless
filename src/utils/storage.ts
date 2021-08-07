/**
 * Storage
 */

const prefix = import.meta.env.VITE_STORAGE_PREFIX as string

export const get = <T> (key: string): T => {
  const json = localStorage.getItem(prefix + key)
  try {
    return JSON.parse(json as string)
  } catch {
    return json as any
  }
}

export const set = (key: string, value: unknown): void => {
  localStorage.setItem(prefix + key, JSON.stringify(value))
}

export const remove = (key: string): void => {
  localStorage.removeItem(prefix + key)
}

import { api } from './api'

export interface Menu {
  id: string
  label: string
  icon?: string
  name?: string
  params?: { [key: string]: string }
  children?: Menu[]
}

export const getMenus = async (type: 'main' | 'shortcut' = 'main'): Promise<Menu[]> => {
  const { data } = await api.get('menus', { searchParams: { type } }).json()
  return data
}

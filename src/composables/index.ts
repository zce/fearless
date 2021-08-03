import { ref, h, computed, ComputedRef } from 'vue'
import { MenuOption, NIcon } from 'naive-ui'
import { menu } from '../services'
import { icons } from '../utils'

type IconTypes = keyof typeof icons
type Menus = menu.Menu[]

const mappingMenuOptions = (items: Menus): MenuOption[] => items.map(item => ({
  ...item,
  key: item.id,
  icon: item.icon ? () => h(NIcon, null, { default: () => h(icons[item.icon as IconTypes] || icons.fallback) }) : undefined,
  children: item.children && mappingMenuOptions(item.children)
}))

export const useMenuOptions = (type: 'main' | 'shortcut'): ComputedRef<MenuOption[]> => {
  const menus = ref<Menus>([])
  menu.getMenus(type).then(m => { menus.value = m })
  return computed(() => mappingMenuOptions(menus.value))
}

import { ref, h, computed, ComputedRef } from 'vue'
import { RouterLink } from 'vue-router'
import { NIcon, MenuOption } from 'naive-ui'
import { menu } from '../services'
import { icons } from '../utils'

type IconTypes = keyof typeof icons
type Menus = menu.Menu[]

const mappingMenuOptions = (items: Menus): MenuOption[] => items.map(item => ({
  ...item,
  key: item.id,
  label: item.name ? () => h(RouterLink, { to: item }, { default: () => item.label }) : item.label,
  icon: item.icon ? () => h(NIcon, null, { default: () => h(icons[item.icon as IconTypes] || icons.fallback) }) : undefined,
  children: item.children && mappingMenuOptions(item.children)
}))

const useMenuOptions = (type: 'main' | 'shortcut'): ComputedRef<MenuOption[]> => {
  const menus = ref<Menus>([])
  menu.getMenus(type).then(m => {
    menus.value = m
  }).catch(() => {})
  return computed(() => mappingMenuOptions(menus.value))
}

export default useMenuOptions

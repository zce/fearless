import { ref, h, computed, ComputedRef } from 'vue'
import { RouterLink } from 'vue-router'
import { MenuOption, NIcon } from 'naive-ui'
import { icons } from '../utils'
import { menu } from '../services'

type IconTypes = keyof typeof icons
type Menus = menu.Menu[]

const renderLabel = (item: menu.Menu) =>
  item.name ? () => h(RouterLink, { to: item }, { default: () => item.label }) : item.label

const renderIcon = (item: menu.Menu) =>
  item.icon ? () => h(NIcon, null, { default: () => h(icons[item.icon as IconTypes] || icons.fallback) }) : undefined

const mappingMenuOptions = (items: Menus): MenuOption[] =>
  items.map(item => ({
    ...item,
    key: item.id,
    label: renderLabel(item),
    icon: renderIcon(item),
    children: item.children && mappingMenuOptions(item.children)
  }))

const useMenuOptions = (type: 'main' | 'shortcut'): ComputedRef<MenuOption[]> => {
  const menus = ref<Menus>([])
  menu.getMenus(type).then(m => {
    menus.value = m
  })
  return computed(() => mappingMenuOptions(menus.value))
}

export default useMenuOptions

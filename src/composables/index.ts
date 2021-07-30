import { h } from 'vue'
import { useStore } from 'vuex'
import { MenuOption, MenuGroupOption } from 'naive-ui'
import { State } from '../store'
import { icons } from '../utils'

type IconTypes = keyof typeof icons

type MenuItems = State['menus']

const mappingMenuOptions = (items: MenuItems): MenuOption[] => items.map(item => ({
  ...item,
  key: item.id,
  icon: item.icon ? () => h(icons[item.icon as IconTypes] || icons.fallback) : undefined,
  children: item.children && mappingMenuOptions(item.children)
}))

export const useMenuOptions = (type: 'menus' | 'shortcuts'): (MenuOption | MenuGroupOption)[] => {
  const store = useStore<State>()

  const { menus, shortcuts } = store.getters as { menus: MenuItems, shortcuts: MenuItems }

  const items = type === 'menus' ? menus : shortcuts

  return mappingMenuOptions(items)
}

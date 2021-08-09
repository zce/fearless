import { computed, ComputedRef } from 'vue'
import { useStore } from 'vuex'
import { State } from '../store'

interface SidebarCollapsed {
  collapsed: ComputedRef<boolean>
  toggle: () => Promise<void>
}

export const useSidebarCollapsed = (): SidebarCollapsed => {
  const store = useStore<State>()
  return {
    collapsed: computed(() => store.state.sidebarCollapsed),
    toggle: () => store.dispatch('toggleSidebarCollapse')
  }
}

export default useSidebarCollapsed

import { computed } from 'vue'
import { useStore } from 'vuex'
import { State } from '../store'

export const useSidebarCollapsed = () => {
  const store = useStore<State>()
  return {
    collapsed: computed(() => store.getters.sidebarCollapsed),
    toggle: () => store.dispatch('toggleSidebarCollapse')
  }
}

export default useSidebarCollapsed

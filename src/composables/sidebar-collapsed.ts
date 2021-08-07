import { computed } from 'vue'
import { useStore } from 'vuex'
import { State } from '../store'

export const useSidebarCollapsed = () => {
  const store = useStore<State>()
  return {
    collapsed: computed(() => store.state.sidebarCollapsed),
    toggle: async () => await store.dispatch('toggleSidebarCollapse')
  }
}

export default useSidebarCollapsed

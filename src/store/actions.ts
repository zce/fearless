import { ActionTree } from 'vuex'
import { State } from './state'
import { CHANGE_TITLE, TOGGLE_SIDEBAR_COLLAPSE, INCREMENT, DECREMENT } from './mutation-types'

const actions: ActionTree<State, State> = {
  changeTitle: ({ commit }, title) => {
    commit(CHANGE_TITLE, title)
  },

  toggleSidebarCollapse: ({ commit }) => {
    commit(TOGGLE_SIDEBAR_COLLAPSE)
  },

  // ==================== DEMO ====================

  increment: ({ commit }) => commit(INCREMENT),
  incrementAsync: ({ commit }) => setTimeout(() => commit(INCREMENT), 1000),
  decrement: ({ commit }) => commit(DECREMENT),
  decrementAsync: ({ commit }) => setTimeout(() => commit(DECREMENT), 1000)
}

export default actions

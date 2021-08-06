import { ActionTree } from 'vuex'
import { State } from './state'
import { UPDATE_SESSION, TOGGLE_SIDEBAR_COLLAPSE, INCREMENT, DECREMENT } from './mutation-types'

const actions: ActionTree<State, State> = {
  updateSession: ({ commit }, payload) => {
    commit(UPDATE_SESSION, payload)
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

import { ActionTree } from 'vuex'
import { State } from './state'
import { TOGGLE_SIDEBAR_COLLAPSE, INCREMENT, DECREMENT } from './mutation-types'

const actions: ActionTree<State, State> = {
  // getToken: async ({ commit }, payload) => {
  //   if (payload.username == null || payload.password == null) return false
  //   try {
  //     const token = await auth.getToken(payload.username, payload.password)
  //     commit(UPDATE_SESSION, token)
  //     return true
  //   } catch (e) {
  //     commit(UPDATE_SESSION, null)
  //     return e.message
  //   }
  // },
  // checkToken: async ({ commit, state }) => {
  //   if (state.session.access == null) return false
  //   try {
  //     const current = await user.getCurrentUser(state.session.access)
  //     commit(UPDATE_SESSION, current)
  //     return true
  //   } catch (e) {
  //     commit(UPDATE_SESSION, null)
  //     return false
  //   }
  // },
  // refreshToken: async ({ commit, state }) => {
  //   if (state.session.refresh == null) return false
  //   try {
  //     const token = await auth.refreshToken(state.session.refresh)
  //     commit(UPDATE_SESSION, token)
  //     return true
  //   } catch (e) {
  //     commit(UPDATE_SESSION, null)
  //     return e.message
  //   }
  // },
  // revokeToken: async ({ commit, state }) => {
  //   if (state.session.refresh == null) return false
  //   const result = await auth.revokeToken(state.session.refresh)
  //   result && commit(UPDATE_SESSION, null)
  //   return result
  // },
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

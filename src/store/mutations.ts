import { MutationTree } from 'vuex'
import { State } from './state'
import { UPDATE_SESSION, TOGGLE_SIDEBAR_COLLAPSE, INCREMENT, DECREMENT } from './mutation-types'

const mutations: MutationTree<State> = {
  [UPDATE_SESSION]: (state, payload) => {
    // TODO: new session mixin
    Object.assign(state.session, payload)
  },
  [TOGGLE_SIDEBAR_COLLAPSE]: state => {
    state.sidebarCollapsed = !state.sidebarCollapsed
  },
  // ==================== DEMO ====================
  [INCREMENT]: state => {
    state.count++
  },
  [DECREMENT]: state => {
    state.count--
  }
}

export default mutations

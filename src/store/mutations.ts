import { MutationTree } from 'vuex'
import { State } from './state'
import { TOGGLE_SIDEBAR_COLLAPSE, INCREMENT, DECREMENT } from './mutation-types'

const mutations: MutationTree<State> = {
  [TOGGLE_SIDEBAR_COLLAPSE]: state => {
    state.sidebarCollapsed = !state.sidebarCollapsed
  },
  [INCREMENT]: state => {
    state.count++
  },
  [DECREMENT]: state => {
    state.count--
  }
}

export default mutations

import { GetterTree } from 'vuex'
import { State } from './state'

const getters: GetterTree<State, State> = {
  name: state => state.name,
  session: state => state.session,
  sidebarCollapsed: state => state.sidebarCollapsed,
  count: state => state.count
}

export default getters

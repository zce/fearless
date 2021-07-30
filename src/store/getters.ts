import { GetterTree } from 'vuex'
import { State } from './state'

const getters: GetterTree<State, State> = {
  name: state => state.name,
  title: state => state.title,
  description: state => state.description,
  copyright: state => state.copyright,
  session: state => state.session,
  shortcuts: state => state.shortcuts,
  menus: state => state.menus,
  sidebarCollapsed: state => state.sidebarCollapsed,
  count: state => state.count
}

export default getters

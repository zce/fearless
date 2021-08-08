import { GetterTree } from 'vuex'
import { State } from './state'

const getters: GetterTree<State, State> = {
  authorization: state => {
    const { type, access, expires } = state.session
    if (type == null || access == null || expires == null || expires <= Date.now()) {
      return
    }
    return `${type} ${access}`
  }
}

export default getters

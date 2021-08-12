import { Plugin } from 'vuex'
import { State } from '../state'
import { TOGGLE_SIDEBAR_COLLAPSE, INCREMENT, DECREMENT } from '../mutation-types'
import { storage } from '../../utils'

const storagePlugin: Plugin<State> = store => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
    switch (mutation.type) {
      case TOGGLE_SIDEBAR_COLLAPSE:
        // save sidebar collapse
        storage.set('sidebar_collapsed', state.sidebarCollapsed)
        break
      case INCREMENT:
      case DECREMENT:
        // save demo counter
        storage.set('demo_count', state.count)
        break
    }
  })
}

export default storagePlugin

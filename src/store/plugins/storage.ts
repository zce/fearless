import { Plugin } from 'vuex'
import { State } from '../state'
import { storage } from '../../utils'
import { TOGGLE_SIDEBAR_COLLAPSE, INCREMENT, DECREMENT } from '../mutation-types'

const storagePlugin: Plugin<State> = store => {
  // called when the store is initialized

  // initial state from storage
  store.replaceState({
    name: import.meta.env.VITE_NAME as string,
    session: storage.get('session') ?? {},
    sidebarCollapsed: storage.get('sidebar_collapsed') ?? false,
    count: storage.get('demo_count') ?? 0
  })

  // subscribe to store changes
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

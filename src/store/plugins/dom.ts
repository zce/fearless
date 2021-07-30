import { Plugin } from 'vuex'
import { State } from '../state'
import { CHANGE_TITLE } from '../mutation-types'

const domSyncPlugin: Plugin<State> = store => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
    switch (mutation.type) {
      case CHANGE_TITLE:
        // sync to dom
        document.title = state.title
        break
    }
  })
}

export default domSyncPlugin

// const axiosPlugin = store => {
//   // change axios authorization header
//   if (store.state.session && store.state.session.token) {
//     // init axios headers
//     axios.defaults.headers.Authorization = `Bearer ${store.state.session.token}`
//   }
//   // called when the store is initialized
//   store.subscribe((mutation, state) => {
//     // called after every mutation.
//     // The mutation comes in the format of `{ type, payload }`.
//     if (mutation.type !== CHANGE_SESSION) return

//     // change axios default request auth token
//     if (state.session && state.session.token) {
//       // change axios authorization header
//       axios.defaults.headers.Authorization = `Bearer ${state.session.token}`
//     }
//   })
// }

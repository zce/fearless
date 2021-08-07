import { Plugin } from 'vuex'
import { State } from '../state'
// import { UPDATE_SESSION } from '../mutation-types'

const tokenPlugin: Plugin<State> = store => {
  // // change request authorization header
  // if (store.getters.authorization) {
  //   // init request headers
  //   import.meta.env.API_AUTH = store.getters.authorization
  // }
  // // called when the store is initialized
  // store.subscribe((mutation, state) => {
  //   // called after every mutation.
  //   // The mutation comes in the format of `{ type, payload }`.
  //   if (mutation.type !== UPDATE_SESSION) return

  //   // change request default request auth token
  //   if (state.session && state.session.access) {
  //     // change request authorization header
  //     import.meta.env.API_AUTH = store.getters.authorization
  //   }
  // })
}

export default tokenPlugin

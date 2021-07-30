import { createStore } from 'vuex'

// // Make sure state writeable
// import * as state from './state' // prop readonly
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'
import plugins from './plugins'

const strict = import.meta.env.DEV

const store = createStore({ state, getters, mutations, actions, modules, plugins, strict })

export type { State } from './state'

export default store

// // Hot module replacement
// if (import.meta.hot) {
//   import.meta.hot.accept([
//     './getters',
//     './mutations',
//     './actions',
//     './modules/comments',
//     './modules/options',
//     './modules/posts',
//     './modules/terms',
//     './modules/users'
//   ], () => {
//     store.hotUpdate({
//       getters: require('./getters'),
//       mutations: require('./mutations'),
//       actions: require('./actions'),
//       modules: {
//         comments: require('./modules/comments'),
//         options: require('./modules/options'),
//         posts: require('./modules/posts'),
//         terms: require('./modules/terms'),
//         users: require('./modules/users')
//       }
//     })
//   })
// }

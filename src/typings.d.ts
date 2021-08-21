import { Store } from 'vuex'
import { RouterLink, RouterView } from 'vue-router'
import * as Naive from 'naive-ui/es/components'
import { State } from './store'
// for vite inject env
import 'vite/client'

declare module 'vue' {
  // global components
  type GlobalComponents = typeof Naive & {
    RouterLink: typeof RouterLink
    RouterView: typeof RouterView
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    requiresAuth?: boolean
  }
}

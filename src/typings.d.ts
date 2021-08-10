import { RouterLink, RouterView } from 'vue-router'
import * as Naive from 'naive-ui/es/components'
// for vite inject env
import 'vite/client'

type NaiveComponents = typeof Naive

declare module 'vue' {
  interface GlobalComponents extends NaiveComponents {
    RouterLink: typeof RouterLink
    RouterView: typeof RouterView
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    requiresAuth?: boolean
  }
}

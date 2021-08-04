import { RouterLink, RouterView } from 'vue-router'
import * as Naive from 'naive-ui/es/components'

type NaiveComponents = typeof Naive

declare module 'vue' {
  export interface GlobalComponents extends NaiveComponents {
    RouterLink: typeof RouterLink
    RouterView: typeof RouterView
  }
}

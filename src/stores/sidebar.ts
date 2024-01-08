import { defineStore } from 'pinia'
import { ref } from 'vue'

import { storage } from '@/utils'

export const useSidebarStore = defineStore('sidebar', () => {
  const collapsed = ref(storage.get<boolean>('sidebar_collapsed'))
  function toggle() {
    collapsed.value = !collapsed.value
    storage.set('sidebar_collapsed', collapsed.value)
  }
  return { collapsed, toggle }
})

import { storage } from '../utils'

interface Session {
  id: string
  username: string
  email: string
  avatar: string
  type: string
  access: string
  refresh: string
  expires: number
}

export interface State {
  name: string
  session: Session
  sidebarCollapsed: boolean
  count: number
}

const state: State = {
  name: import.meta.env.VITE_NAME as string,
  session: (storage.get('session') ?? {}) as Session,
  sidebarCollapsed: storage.get('sidebar_collapsed') as boolean ?? false,
  // ==================== DEMO ====================
  count: storage.get('demo_count') as number ?? 0
}

export default state

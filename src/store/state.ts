import { storage } from '../utils'

interface Session {
  accessToken: string
  refreshToken: string
  expiresIn: number
  tokenType: string
  scope: string
  userId: string
  userName: string
  userEmail: string
  userPicture: string
}

export interface State {
  name: string
  title: string
  description: string
  copyright: string
  /**
   * Client session
   */
  session: Session
  /**
   * Sidebar collpased
   */
  sidebarCollapsed: boolean
  count: number
}

const state: State = {
  name: import.meta.env.VITE_NAME as string,
  title: import.meta.env.VITE_TITLE as string,
  description: import.meta.env.VITE_DESCRIPTION as string,
  copyright: import.meta.env.VITE_COPYRIGHT as string,

  session: (storage.get('session') ?? {}) as Session,

  sidebarCollapsed: storage.get('sidebar_collapsed') as boolean ?? false,

  // ==================== DEMO ====================

  count: storage.get('demo_count') as number ?? 0
}

export default state

interface Session {
  id?: string
  username?: string
  name?: string
  avatar?: string
}

export interface State {
  name: string
  session: Session
  sidebarCollapsed: boolean
  count: number
}

const state: State = {
  name: '',
  session: {},
  sidebarCollapsed: false,
  count: 0
}

export default state

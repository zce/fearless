import { api } from './api'

export interface User {
  id: string
  username: string
  name: string
  avatar: string
}

export const getCurrentUser = async (): Promise<User> => {
  const { id, username, name, avatar } = await api.get('users/me').json()
  return { id, username, name, avatar }
}

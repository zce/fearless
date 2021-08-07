import { base, getToken } from './api'
import { storage } from '../utils'

export const login = async (username: string, password: string): Promise<true | string> => {
  try {
    await getToken({ grant_type: 'password', username, password })
    return true
  } catch (e) {
    return e.message
  }
}

export const logout = async (token: string): Promise<true | string> => {
  try {
    await base.delete('auth/token', { json: { token } })
    storage.remove('token')
    return true
  } catch (e) {
    return e.message
  }
}

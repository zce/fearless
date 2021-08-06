import { api } from '../utils'

export interface Token {
  type: string
  access: string
  refresh: string
  expires: Date
}

export const getToken = async (username: string, password: string): Promise<Token> => {
  const { token_type, access_token, refresh_token, expires_in } = await api.post('/auth/token', { json: { username, password } }).json()
  return { type: token_type, access: access_token, refresh: refresh_token, expires: new Date(Date.now() + expires_in * 1000) }
}

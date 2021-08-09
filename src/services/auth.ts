import { api, storage } from '../utils'

export const login = async (username: string, password: string): Promise<void> => {
  const json = { grant_type: 'password', username, password }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { token_type, access_token, refresh_token, expires_in } = await api.post('auth/token', { json }).json()
  const token = {
    type: token_type,
    access: access_token,
    refresh: refresh_token,
    expires: Date.now() + expires_in * 1000
  }
  storage.set('token', token)
}

export const logout = async (): Promise<void> => {
  const { refresh } = storage.get('token')
  await api.delete('auth/token', { json: { token: refresh } })
  storage.remove('token')
}

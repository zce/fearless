import { api } from '../utils'
import { useRequest } from './request'

import type { Result } from './request'

export interface User {
  id: string
  username: string
  name: string
  avatar: string
}

export const useCurrentUser = (): Result<User> => {
  return useRequest(api.get('users/me').json<User>())
}

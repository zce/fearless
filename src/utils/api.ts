import ky from 'ky'
import { get, set, remove } from './storage'

interface Token {
  type: string
  access: string
  refresh: string
  expires: number
}

const prefixUrl = import.meta.env.VITE_API_BASE as string

const refreshAuth = async (): Promise<string | undefined> => {
  try {
    const token = get<Token>('token')

    const json = { grant_type: 'refresh_token', refresh_token: token.refresh }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { token_type, access_token, refresh_token, expires_in } = await ky
      .post('auth/token', { prefixUrl, json }).json()

    const newToken: Token = {
      type: token_type,
      access: access_token,
      refresh: refresh_token,
      expires: Date.now() + expires_in * 1000
    }

    set('token', newToken)
    return `${newToken.type} ${newToken.access}`
  } catch {
    remove('token')
  }
}

const getAuth = async (): Promise<string | undefined> => {
  const token = get<Token>('token')
  if (token == null) return
  if (token.expires <= Date.now()) {
    // token is expired
    return await refreshAuth()
  }
  return `${token.type} ${token.access}`
}

export class APIError extends Error {
  status: number
  constructor (status: number, message?: string) {
    super(message || 'API call failed with an unknown error')
    this.name = 'APIError'
    this.status = status
  }
}

export const api = ky.extend({
  prefixUrl: import.meta.env.VITE_API_BASE as string,
  hooks: {
    beforeRequest: [
      async (request, options) => {
        const auth = await getAuth()
        auth && request.headers.set('Authorization', auth)
      }
    ],
    beforeRetry: [
      async options => {
        // TODO: refresh token if 401
        const auth = await refreshAuth()
        if (auth == null) return ky.stop
        options.request.headers.set('Authorization', auth)
      }
    ],
    afterResponse: [
      async (request, options, response) => {
        if (response.ok) return
        // if (response.status === 401) {
        //   router.push({ name: 'login', query: { redirect: router.currentRoute.value.fullPath } })
        // }
        const { message } = await response.json()
        throw new APIError(response.status, message || response.statusText)
      }
    ]
  }
})

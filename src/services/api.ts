import ky from 'ky'
import { storage } from '../utils'

interface Token {
  type: string
  access: string
  refresh: string
  expires: number
}

export const base = ky.extend({
  prefixUrl: import.meta.env.VITE_API_BASE as string,
  hooks: {
    afterResponse: [
      async (request, options, response) => {
        if (response.status !== 403) return
        console.log(window.location)
        storage.remove('token')
        window.location.reload()
        // TODO: Cyclic reference router
        // await router.push({ name: 'login', query: { redirect: router.currentRoute.value.fullPath } })
      }
    ]
  }
})

export const getToken = async (json: unknown): Promise<Token> => {
  try {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { token_type, access_token, refresh_token, expires_in } = await base.post('auth/token', { json: json }).json()
    const token = {
      type: token_type,
      access: access_token,
      refresh: refresh_token,
      expires: Date.now() + expires_in * 1000
    }
    storage.set('token', token)
    return token
  } catch (e) {
    storage.remove('token')
    throw e
  }
}

const refreshAuthorization = async (): Promise<string | undefined> => {
  const token = storage.get<Token>('token')
  if (token == null) return
  const { type, access } = await getToken({ grant_type: 'refresh_token', refresh_token: token.refresh })
  return `${type} ${access}`
}

const getAuthorization = async (): Promise<string | undefined> => {
  const token = storage.get<Token>('token')
  if (token == null) return
  if (token.expires > Date.now() && token.access != null) {
    return `${token.type} ${token.access}`
  }
  return await refreshAuthorization()
}

export class APIError extends Error {
  status: number
  constructor (status: number, message?: string) {
    super(`API call failed with ${message || 'an unknown error'}`)
    this.name = 'APIError'
    this.status = status
  }
}

export const api = base.extend({
  hooks: {
    beforeRequest: [
      async (request, options) => {
        const auth = await getAuthorization()
        auth && request.headers.set('Authorization', auth)
        request.headers.set('X-Requested-With', 'ky')
      }
    ],
    beforeRetry: [
      async options => {
        const auth = await refreshAuthorization()
        if (auth == null) return ky.stop
        options.request.headers.set('Authorization', auth)
      }
    ],
    afterResponse: [
      async (request, options, response) => {
        if (response.ok) {
          const { status, message } = await response.json()
          if (status && status !== 200) {
            throw new APIError(status, message)
          }
        } else {
          throw new APIError(response.status, response.statusText)
        }
      }
    ]
  }
})

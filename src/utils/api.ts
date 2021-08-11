import ky, { ResponsePromise } from 'ky'
import { get, set, remove } from './storage'
import router from '../router'

const prefixUrl = import.meta.env.VITE_API_BASE as string

let refreshTask: ResponsePromise | null = null

const refreshAuth = async (): Promise<string | undefined> => {
  try {
    const token = get<Token>('token')
    if (token?.refresh == null) throw new Error('refresh_token not found')
    const options = { prefixUrl, method: 'post', json: { grant_type: 'refresh_token', refresh_token: token.refresh } }
    const response = refreshTask ?? (refreshTask = ky('auth/token', options))
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { token_type, access_token, refresh_token, expires_in } = await response.json()
    set('token', { type: token_type, access: access_token, refresh: refresh_token, expires: Date.now() + expires_in * 1000 })
    refreshTask = null
    return `${token_type as string} ${access_token as string}`
  } catch {
    // refresh token failed
    remove('token')
    refreshTask = null
    await router.replace({ name: 'login', query: { redirect: router.currentRoute.value.fullPath } })
  }
}

const getAuth = async (): Promise<string | undefined> => {
  const token = get<Token>('token')
  if (token == null) return
  if (token.expires > Date.now()) return `${token.type} ${token.access}`
  return await refreshAuth()
}

export const api = ky.extend({
  prefixUrl: import.meta.env.VITE_API_BASE as string,
  hooks: {
    beforeRequest: [
      async (request, options) => {
        const auth = await getAuth()
        if (auth == null) return
        request.headers.set('Authorization', auth)
      }
    ],
    afterResponse: [
      async (request, options, response) => {
        if (response.status !== 401) return
        // refresh token if 401
        const auth = await refreshAuth()
        if (auth == null) return
        request.headers.set('Authorization', auth)
        return await ky(request, options)
        // const { message } = await response.json()
        // throw new APIError(response.status, message ?? response.statusText)
      }
    ]
  }
})

// export class APIError extends Error {
//   status: number
//   constructor (status: number, message?: string) {
//     super(message ?? 'API call failed with an unknown error')
//     this.name = 'APIError'
//     this.status = status
//   }
// }

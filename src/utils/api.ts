import ky from 'ky'
import { get, set, remove } from './storage'
import router from '../router'

interface Token {
  type: string
  access: string
  refresh: string
  expires: number
}

const prefixUrl = import.meta.env.VITE_API_BASE as string

let refreshTask: Promise<string | undefined> | null = null

const refreshAuth = async (): Promise<string | undefined> => {
  console.log('token refreshing ')
  try {
    const token = get<Token>('token')
    if (token?.refresh == null) throw new Error('no refresh_token available')
    const options = { prefixUrl, method: 'post', json: { grant_type: 'refresh_token', refresh_token: token.refresh } }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { token_type, access_token, refresh_token, expires_in } = await ky('auth/token', options).json()
    set('token', { type: token_type, access: access_token, refresh: refresh_token, expires: Date.now() + expires_in * 1000 })
    return `${token_type as string} ${access_token as string}`
  } catch {
    remove('token')
    await router.replace({ name: 'login', query: { redirect: router.currentRoute.value.fullPath } })
  } finally {
    console.log('refresh token end')
    refreshTask = null
  }
}

const getAuth = async (): Promise<string | undefined> => {
  const token = get<Token>('token')
  if (token == null) return
  if (token.expires > Date.now()) return `${token.type} ${token.access}`
  return await (refreshTask ?? (refreshTask = refreshAuth()))
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
        const auth = await (refreshTask ?? (refreshTask = refreshAuth()))
        if (auth == null) return
        request.headers.set('Authorization', auth)
        return await ky(request, options)
      }
    ]
  }
})

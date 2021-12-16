import ky from 'ky'
import { getAuth, refreshAuth } from './token'

const api = ky.extend({
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
      }
    ]
  }
})

export default api


import ky from 'ky'

const api = ky.extend({
  prefixUrl: import.meta.env.VITE_API_BASE as string,
  hooks: {
    beforeRequest: [
      // request => {
      //   request.headers.set('X-Requested-With', 'ky')
      // },
      // request => {
      //   if (import.meta.env.PROD) return
      //   request.headers.set('X-Requested-With', 'ky')
      // }
    ]
    // beforeRetry: [
    //   async ({ request }) => {
    //     const token = await ky('https://example.com/refresh-token')
    //     request.headers.set('Authorization', `token ${token}`)
    //   }
    // ],
    // afterResponse: [
    //   (request, options, response) => {
    //     // You could do something with the response, for example, logging.
    //     console.log(response)

    //     // Or return a `Response` instance to overwrite the response.
    //     return new Response('A different response', { status: 200 })
    //   },

    //   // Or retry with a fresh token on a 403 error
    //   async (request, options, response) => {
    //     if (response.status === 403) {
    //       // Get a fresh token
    //       const token = await ky('https://example.com/token').text()

    //       // Retry with the token
    //       request.headers.set('Authorization', `token ${token}`)

    //       return ky(request)
    //     }
    //   }
    // ]
  }
})

export default api

// async function request<U extends keyof APIs>(url: U, options?: RequestInit): Promise<APIs[U]> {
//   const response = await fetch(apiBase + url, options)
//   return response.json()
// }

// export default request

// import axios from 'axios'

// const http = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE as string,
//   timeout: 3 * 1000, // 3s
// })

// axios

// interface Body<D = unknown> {
//   status: number
//   message: string
//   data: D
//   meta: Record<string, unknown>
// }

// // const customFetch = <U extends keyof APIs, D extends APIs[U]> (url: U, ) => {
// //   return fetch()
// // }

// function customFetch (input: RequestInfo, init?: RequestInit): Promise<Response> {
//   return fetch(input, init)
// }

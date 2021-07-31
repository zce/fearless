// interface Endpoint {
//   request: {
//     method: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head' | 'options'
//     params:
//   }
//   response: Response
// }

interface APIs {
  '/': {
    status: number
    message: string
  }
}

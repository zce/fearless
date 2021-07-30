import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mockRequest = (axios: AxiosInstance): () => void => {
  const mock = new MockAdapter(axios)

  return () => mock.restore()
}

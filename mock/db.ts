export const uuid = () => Date.now().toString(16) + Math.floor((1 + Math.random()) * 0x10000).toString(16)

interface User {
  id: string
  username: string
  password: string
  name: string
  avatar: string
}

export const users: User[] = [
  {
    id: uuid(),
    username: 'zce',
    password: 'wanglei',
    name: '汪磊',
    avatar: 'https://s.zceme.cn/avatar/zce.jpg'
  }
]

interface Token {
  id: string
  accessToken: string
  refreshToken: string
  expires: number
  userId: string
}

export const tokens: Token[] = []

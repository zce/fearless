export const uuid = (): string => Math.random().toString(16).slice(2)

export enum Role {
  user,
  staff,
  admin,
  owner
}

export interface User {
  id: string
  username: string
  password: string
  role: Role
  name: string
  avatar: string
}

export const users: User[] = [
  {
    id: uuid(),
    username: 'zce',
    password: 'zce',
    role: Role.owner,
    name: '汪磊',
    avatar: 'https://s.zce.me/avatar/zce.jpg'
  },
  {
    id: uuid(),
    username: 'jack',
    password: '123',
    role: Role.admin,
    name: 'Jack Ma',
    avatar: 'https://s.zce.me/avatar/faker.svg'
  },
  {
    id: uuid(),
    username: 'pony',
    password: '123',
    role: Role.staff,
    name: 'Pony Ma',
    avatar: 'https://s.zce.me/avatar/faker.svg'
  },
  {
    id: uuid(),
    username: 'tom',
    password: '123',
    role: Role.user,
    name: 'Tom Ma',
    avatar: 'https://s.zce.me/avatar/faker.svg'
  }
]

export interface Token {
  access: string
  refresh: string
  expires: number
  userId: string
}

export const tokens: Token[] = []

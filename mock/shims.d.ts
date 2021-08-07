declare namespace Express {
  export interface Request {
    user?: {
      id: string
      username: string
      password: string
      name: string
      avatar: string
    }
  }
}

import { Role, User } from './data'

declare global {
  namespace Express {
    export interface Request {
      user?: User
      can: (role: Role) => boolean
    }
  }
}

/**
 * Mock Server App
 */

import express from 'express'

import authRouter from './auth'
import { Role, tokens, users } from './data'
import labsRouter from './labs'
import menusRouter from './menus'
import usersRouter from './users'

import type { Express } from 'express'

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.request.can = function (role: Role) {
  return this.user != null && this.user.role >= role
}

// // delay response
// app.use((req, res, next) => setTimeout(next, 1000))

// authenticate
app.use((req, res, next) => {
  if (req.path.startsWith('/auth')) return next()
  const [, accessToken] = req.headers.authorization?.split(' ') ?? []
  if (accessToken == null) {
    return res.status(401).send({ message: 'Requires authentication' })
  }
  const token = tokens.find(t => t.access === accessToken)
  if (token == null) {
    return res.status(401).send({ message: 'Bad credentials: invalid access_token' })
  }
  if (token.expires <= Date.now()) {
    return res.status(401).send({ message: 'Bad credentials: access_token expired' })
  }
  const user = users.find(u => u.id === token.userId)
  if (user == null) {
    return res.status(401).send({ message: 'Bad credentials: invalid access_token' })
  }
  req.user = user
  next()
})

// endpoints
app.use('/auth', authRouter)
app.use('/menus', menusRouter)
app.use('/users', usersRouter)
app.use('/labs', labsRouter)

// 404 responses
app.use((req, res) => res.status(404).json({ message: 'Not Found' }))

export default app

import { Router } from 'express'
import { users, tokens, uuid } from './data'

const router = Router()

const genToken = () => uuid() + uuid()

const accessTokenLifetime = 0.2 * 60 * 1000 // 1 hour

router.post('/token', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { grant_type, username, password, refresh_token } = req.body

  if (grant_type === 'password') {
    const user = users.find(u => u.username === username && u.password === password)
    if (user == null) {
      return res.status(401).send({ message: 'Bad credentials: invalid username or password' })
    }

    const token = {
      id: uuid(),
      accessToken: genToken(),
      refreshToken: genToken(),
      expires: Date.now() + accessTokenLifetime,
      userId: user.id
    }

    tokens.push(token)

    res.send({
      token_type: 'Bearer',
      expires_in: (token.expires - Date.now()) / 1000,
      access_token: token.accessToken,
      refresh_token: token.refreshToken
    })
  } else if (grant_type === 'refresh_token') {
    const token = tokens.find(t => t.refreshToken === refresh_token)
    if (token == null) {
      return res.status(403).send({ message: 'Bad credentials: invalid refresh_token' })
    }

    token.accessToken = genToken()
    token.expires = Date.now() + accessTokenLifetime

    res.send({
      token_type: 'Bearer',
      expires_in: (token.expires - Date.now()) / 1000,
      access_token: token.accessToken,
      refresh_token: token.refreshToken
    })
  } else {
    res.status(400).send({ message: 'Bad Request: invalid grant_type' })
  }
})

router.delete('/token', (req, res) => {
  const { token } = req.body
  const tokenIndex = tokens.findIndex(t => t.refreshToken === token)
  if (tokenIndex !== -1) {
    tokens.splice(tokenIndex, 1)
  }
  res.send({ message: 'revoked' })
  // TODO: res.status(401).send({ message: 'Bad credentials: invalid refresh_token' })
})

export default router

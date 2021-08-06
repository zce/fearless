import { Router } from 'express'
import { users, tokens, uuid } from './db'

const router = Router()

const genToken = () => uuid() + uuid()

router.post('/token', (req, res) => {
  const { grant_type, username, password, refresh_token } = req.body

  if (grant_type === 'password') {
    const user = users.find(u => u.username === username && u.password === password)
    if (user == null) return res.status(401).send({ status: 401, msg: 'invalid username or password' })

    const token = {
      id: uuid(),
      accessToken: genToken(),
      refreshToken: genToken(),
      expires: Date.now() + 3600000,
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
    if (token == null) return res.status(401).send({ status: 401, msg: 'invalid refresh_token' })

    token.accessToken = genToken()
    token.expires = Date.now() + 3600000

    res.send({
      token_type: 'Bearer',
      expires_in: (token.expires - Date.now()) / 1000,
      access_token: token.accessToken,
      refresh_token: token.refreshToken
    })
  } else {
    res.status(400).send({ status: 400, msg: 'invalid grant_type' })
  }
})

router.delete('/token', async (req, res) => {
  const { token } = req.body
  const tokenIndex = tokens.findIndex(t => t.refreshToken === token)
  if (tokenIndex === -1) return res.status(401).send({ status: 401, msg: 'invalid refresh_token' })
  tokens.splice(tokenIndex, 1)
  res.send({ status: 200, msg: 'revoked' })
})

export default router

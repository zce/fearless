// https://github.com/14gasher/oauth-example

import { Router } from 'express'
import OAuth2Server, { Request, Response, UnauthorizedRequestError } from 'oauth2-server'
import db from './db'

const parseScope = (s: string | string[]) => (Array.isArray(s) ? s : s.split(/[,\s]/))

const oauth = new OAuth2Server({
  model: {
    getAccessToken: async accessToken => {
      const token = db.accessTokens.find(i => i.token === accessToken)
      if (!token) return null
      const client = db.clients.find(i => i.id === token.clientId)
      if (!client) return null
      const user = db.users.find(i => i.id === token.userId)
      if (!user) return null
      return {
        accessToken: token.token,
        accessTokenExpiresAt: token.expires,
        scope: token.scope,
        client: client,
        user: user
      }
    },
    getRefreshToken: async refreshToken => {
      const token = db.accessTokens.find(i => i.token === refreshToken)
      if (!token) return null
      const client = db.clients.find(i => i.id === token.clientId)
      if (!client) return null
      const user = db.users.find(i => i.id === token.userId)
      if (!user) return null
      return {
        refreshToken: token.token,
        refreshTokenExpiresAt: token.expires,
        scope: token.scope,
        client: client,
        user: user
      }
    },
    getAuthorizationCode: async authorizationCode => {
      const code = db.authorizationCodes.find(i => i.code === authorizationCode)
      if (!code) return null
      const client = db.clients.find(i => i.id === code.clientId)
      if (!client) return null
      const user = db.users.find(i => i.id === code.userId)
      if (!user) return null
      return {
        authorizationCode: code.code,
        expiresAt: code.expires,
        redirectUri: code.redirect,
        scope: code.scope,
        client: client,
        user: user
      }
    },
    getClient: async (clientId, clientSecret) => {
      const client = db.clients.find(i => i.key === clientId && (!clientSecret || i.secret === clientSecret))
      if (!client) return null
      const user = db.users.find(i => i.id === client.userId)
      if (!user) return null
      return {
        id: client.id,
        name: client.name,
        redirectUris: client.redirects,
        grants: client.grants,
        scope: client.scope,
        user: user
      }
    },

    getUser: async (username, password) => {
      return db.users.find(i => i.username === username && i.password === password)
    },

    getUserFromClient: async client => {
      return client.user
    },

    saveToken: async (token, client, user) => {
      db.accessTokens.push({
        id: db.genId(),
        token: token.accessToken,
        expires: token.accessTokenExpiresAt,
        scope: token.scope.toString(),
        userId: user.id,
        clientId: client.id
      })

      if (token.refreshToken) {
        db.refreshTokens.push({
          id: db.genId(),
          token: token.refreshToken,
          expires: token.refreshTokenExpiresAt,
          scope: token.scope.toString(),
          userId: user.id,
          clientId: client.id
        })
      }

      return { ...token, client, user }
    },

    saveAuthorizationCode: async (code, client, user) => {
      db.authorizationCodes.push({
        id: db.genId(),
        code: code.authorizationCode,
        expires: code.expiresAt,
        redirect: code.redirectUri,
        scope: code.scope.toString(),
        userId: user.id,
        clientId: client.id
      })

      return { ...code, client, user }
    },

    revokeToken: async token => {
      const index = db.refreshTokens.findIndex(i => i.token === token.refreshToken)

      db.refreshTokens.splice(index, 1)

      return true
    },

    revokeAuthorizationCode: async code => {
      const index = db.authorizationCodes.findIndex(i => i.code === code.authorizationCode)

      db.refreshTokens.splice(index, 1)

      return true
    },

    validateScope: async (user, client, scope) => {
      // TODO: default scope
      scope = scope || 'info'

      // TODO: all scopes
      const requested = parseScope(scope)

      // client scope validate
      if (client && client.scope !== '*') {
        const clientScopes = parseScope(client.scope)
        if (!requested.every(s => clientScopes.includes(s))) return false
      }

      // user scope validate
      if (user && user.scope !== '*') {
        const userScopes = parseScope(user.scope)
        if (!requested.every(s => userScopes.includes(s))) return false
      }

      return requested.join(',')
    },

    verifyScope: async (accessToken, scope) => {
      if (!accessToken.scope) return false
      const requested = parseScope(scope)
      const authorized = parseScope(accessToken.scope)
      return requested.every(s => authorized.includes(s))
    }
  }
})

const router = Router()

router.get('/authorize', (req, res) => {
  res.send('authorize')
})

router.post('/token', async (req, res) => {
  const request = new Request(req)
  const response = new Response(res)

  try {
    const token = await oauth.token(request, response, { requireClientAuthentication: false })
    res.locals.oauth = { token: token }
    if (response.status === 302) {
      const location = response.headers.location
      delete response.headers.location
      res.set(response.headers)
      res.redirect(location)
    } else {
      res.set(response.headers)
      res.status(response.status).send(response.body)
    }
  } catch (e) {
    if (response) {
      res.set(response.headers)
    }

    res.status(e.code)

    if (e instanceof UnauthorizedRequestError) {
      return res.send({ status: 400, msg: 'Unauthorized' })
    }

    console.error(e)

    res.send({ status: 500, msg: e.message })
  }
})

export default router

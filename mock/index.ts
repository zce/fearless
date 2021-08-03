import express from 'express'

export default () => {
  const app = express()

  app.use('/users', require('./users').default)
  app.use('/menus', require('./menus').default)

  return app
}

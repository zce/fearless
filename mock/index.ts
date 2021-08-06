import express from 'express'

export default () => {
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use('/users', require('./users').default)
  app.use('/menus', require('./menus').default)
  app.use('/auth', require('./auth').default)

  return app
}

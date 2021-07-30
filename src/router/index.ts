import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const history = createWebHistory()

const router = createRouter({ history, routes })

export default router

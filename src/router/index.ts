import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { storage } from '../utils'

const history = createWebHistory()

const router = createRouter({ history, routes })

// Authorize (Make sure that is the first hook.)
router.beforeEach(async to => {
  const token = storage.get('token')
  if (to.name === 'login' && token != null) {
    return to.query.redirect?.toString() ?? '/'
  }
  // don't need authorize or token is valid
  if (!to.meta.requireAuth || token != null) {
    return
  }
  // redirect to login page
  return { name: 'login', query: { redirect: to.fullPath } }
})

router.afterEach(to => {
  const current = to.matched[to.matched.length - 1].components.default as { title?: string, name: string }
  // title from sfc custom block
  const title = current.title ?? current.name ?? to.name
  const items = [import.meta.env.VITE_TITLE]
  title && items.unshift(title)
  document.title = items.join(' · ')
})

export default router

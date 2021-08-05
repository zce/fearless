import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const history = createWebHistory()

const router = createRouter({ history, routes })

// Authorize (Make sure that is the first hook.)
router.beforeEach(to => {
  // don't need authorize
  if (!to.meta.requireAuth) return
  // // check login state
  // store.dispatch('checkToken')
  //   .then(valid => {
  //     // authorized
  //     if (valid) return
  //     // unauthorized
  //     console.log('Unauthorized')
  //     next({ name: 'login', query: { redirect: to.fullPath } })
  //   })
})

// login page visiable
router.beforeEach(to => {
  if (to.name !== 'login') return
  // // check login state
  // store.dispatch('checkToken')
  //   .then(valid => {
  //     if (!valid) return
  //     // when logged in
  //     console.log('Authorized')
  //     next({ path: to.query.redirect || '/' })
  //   })
})

router.afterEach(to => {
  const current = to.matched[to.matched.length - 1].components.default as { title?: string, name: string }
  // title from sfc custom block
  const title = current.title ?? current.name
  const items = [import.meta.env.VITE_TITLE]
  title && items.unshift(title)
  document.title = items.join(' · ')
})

export default router

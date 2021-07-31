import { RouteRecordRaw } from 'vue-router'

const mainRoutes: RouteRecordRaw[] = [
  // - Dashboard
  {
    name: 'home',
    path: '/',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'home' */ '../views/home.vue')
  },
  {
    name: 'update',
    path: '/update',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'update' */ '../views/update.vue')
  },
  {
    name: 'about',
    path: '/about',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'about' */ '../views/about.vue')
  },
  {
    name: 'profile',
    path: '/profile',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'users' */ '../views/profile.vue')
  },
  // - Posts
  {
    name: 'posts',
    path: '/posts/:type',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'posts' */ '../views/posts.vue')
  },
  {
    name: 'new',
    path: '/new/:type',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'posts' */ '../views/new.vue')
  },
  {
    name: 'edit',
    path: '/edit/:type/:slug?',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'posts' */ '../views/edit.vue')
  },
  // - Media
  {
    name: 'media',
    path: '/media',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'media' */ '../views/media.vue')
  },
  {
    name: 'upload',
    path: '/upload',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'upload' */ '../views/upload.vue')
  },
  // - Terms
  {
    name: 'terms',
    path: '/terms/:type',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'terms' */ '../views/terms.vue')
  },
  // - Users
  {
    name: 'users',
    path: '/users/:page?',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'users' */ '../views/users.vue')
  },
  {
    name: 'roles',
    path: '/roles',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'users' */ '../views/roles.vue')
  },
  {
    name: 'permissions',
    path: '/permissions',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'users' */ '../views/permissions.vue')
  },
  // - Comments
  {
    name: 'comments',
    path: '/comments',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'comments' */ '../views/comments.vue')
  },
  // - Appearances
  {
    name: 'themes',
    path: '/themes',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'appearances' */ '../views/themes.vue')
  },
  {
    name: 'customize',
    path: '/customize',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'appearances' */ '../views/customize.vue')
  },
  {
    name: 'widgets',
    path: '/widgets',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'appearances' */ '../views/widgets.vue')
  },
  {
    name: 'navigation',
    path: '/navigation',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'appearances' */ '../views/navigation.vue')
  },
  // - Plugins
  {
    name: 'plugins',
    path: '/plugins',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'plugins' */ '../views/plugins.vue')
  },
  // - Tools
  {
    name: 'install',
    path: '/install/:type',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'plugins' */ '../views/install.vue')
  },
  {
    name: 'tools',
    path: '/tools',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'tools' */ '../views/tools.vue')
  },
  {
    name: 'import',
    path: '/import',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'tools' */ '../views/import.vue')
  },
  {
    name: 'export',
    path: '/export',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'tools' */ '../views/export.vue')
  },
  // - Options
  {
    name: 'options',
    path: '/options/:type',
    meta: { requireAuth: true },
    component: async () => await import(/* webpackChunkName: 'options' */ '../views/options.vue')
  }
]

const demoRoutes: RouteRecordRaw[] = [
  // ## demo views
  {
    name: 'demo',
    path: '/demo',
    meta: { requireAuth: false },
    component: async () => await import(/* webpackChunkName: 'demo' */ '../views/demo/index.vue')
  },
  {
    name: 'demo-data',
    path: '/demo/data',
    meta: { requireAuth: false },
    component: async () => await import(/* webpackChunkName: 'demo' */ '../views/demo/data.vue')
  },
  {
    name: 'demo-vuex',
    path: '/demo/vuex',
    meta: { requireAuth: false },
    component: async () => await import(/* webpackChunkName: 'demo' */ '../views/demo/vuex.vue')
  },
  {
    name: 'demo-i18n',
    path: '/demo/i18n',
    meta: { requireAuth: false },
    component: async () => await import(/* webpackChunkName: 'demo' */ '../views/demo/i18n.vue')
  },
  {
    name: 'demo-proxy',
    path: '/demo/proxy',
    meta: { requireAuth: false },
    component: async () => await import(/* webpackChunkName: 'demo' */ '../views/demo/proxy.vue')
  },
  {
    name: 'demo-cors',
    path: '/demo/cors',
    meta: { requireAuth: false },
    component: async () => await import(/* webpackChunkName: 'demo' */ '../views/demo/cors.vue')
  },
  {
    name: 'demo-params',
    path: '/demo/:name',
    meta: { requireAuth: false },
    component: async () => await import(/* webpackChunkName: 'demo' */ '../views/demo/params.vue')
  },
  // ## component views
  {
    name: 'components',
    path: '/components',
    meta: { requireAuth: false },
    component: async () => await import(/* webpackChunkName: 'components' */ '../views/demo/components/index.vue')
  },
  {
    name: 'components-icons',
    path: '/components/icons',
    meta: { requireAuth: false },
    component: async () => await import(/* webpackChunkName: 'components' */ '../views/demo/components/icons.vue')
  },
  {
    name: 'components-button',
    path: '/components/button',
    meta: { requireAuth: false },
    component: async () => await import(/* webpackChunkName: 'components' */ '../views/demo/components/button.vue')
  },
  {
    name: 'components-table',
    path: '/components/table',
    meta: { requireAuth: false },
    component: async () => await import(/* webpackChunkName: 'components' */ '../views/demo/components/table.vue')
  }
]

const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: async () => await import('../views/login.vue')
  },
  {
    name: 'layout',
    path: '/',
    component: async () => await import('../layouts/index.vue'),
    children: [...mainRoutes, ...demoRoutes]
  },
  // ## not found page
  {
    name: 'not-found',
    path: '/*',
    meta: { requireAuth: false },
    component: async () => await import('../views/error.vue')
  }
]

export default routes

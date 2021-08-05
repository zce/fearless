import { RouteRecordRaw } from 'vue-router'

const mainRoutes: RouteRecordRaw[] = [
  // - Dashboard
  {
    name: 'home',
    path: '/',
    component: () => import('../views/home.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'update',
    path: '/update',
    component: () => import('../views/update.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('../views/about.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'profile',
    path: '/profile',
    component: () => import('../views/profile.vue'),
    meta: { requireAuth: true }
  },
  // - Posts
  {
    name: 'posts',
    path: '/posts/:type',
    component: () => import('../views/posts.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'new',
    path: '/new/:type',
    component: () => import('../views/new.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'edit',
    path: '/edit/:type/:slug?',
    component: () => import('../views/edit.vue'),
    meta: { requireAuth: true }
  },
  // - Media
  {
    name: 'media',
    path: '/media',
    component: () => import('../views/media.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'upload',
    path: '/upload',
    component: () => import('../views/upload.vue'),
    meta: { requireAuth: true }
  },
  // - Terms
  {
    name: 'terms',
    path: '/terms/:type',
    component: () => import('../views/terms.vue'),
    meta: { requireAuth: true }
  },
  // - Users
  {
    name: 'users',
    path: '/users/:page?',
    component: () => import('../views/users.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'roles',
    path: '/roles',
    component: () => import('../views/roles.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'permissions',
    path: '/permissions',
    component: () => import('../views/permissions.vue'),
    meta: { requireAuth: true }
  },
  // - Comments
  {
    name: 'comments',
    path: '/comments',
    component: () => import('../views/comments.vue'),
    meta: { requireAuth: true }
  },
  // - Appearances
  {
    name: 'themes',
    path: '/themes',
    component: () => import('../views/themes.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'customize',
    path: '/customize',
    component: () => import('../views/customize.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'widgets',
    path: '/widgets',
    component: () => import('../views/widgets.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'navigation',
    path: '/navigation',
    component: () => import('../views/navigation.vue'),
    meta: { requireAuth: true }
  },
  // - Plugins
  {
    name: 'plugins',
    path: '/plugins',
    component: () => import('../views/plugins.vue'),
    meta: { requireAuth: true }
  },
  // - Tools
  {
    name: 'install',
    path: '/install/:type',
    component: () => import('../views/install.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'tools',
    path: '/tools',
    component: () => import('../views/tools.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'import',
    path: '/import',
    component: () => import('../views/import.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'export',
    path: '/export',
    component: () => import('../views/export.vue'),
    meta: { requireAuth: true }
  },
  // - Options
  {
    name: 'options',
    path: '/options/:type',
    component: () => import('../views/options.vue'),
    meta: { requireAuth: true }
  }
]

const labsRoutes: RouteRecordRaw[] = [
  // ## labs views
  {
    name: 'labs',
    path: '/labs',
    component: () => import('../views/labs/index.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-data',
    path: '/labs/data',
    component: () => import('../views/labs/data.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-vuex',
    path: '/labs/vuex',
    component: () => import('../views/labs/vuex.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-i18n',
    path: '/labs/i18n',
    component: () => import('../views/labs/i18n.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-proxy',
    path: '/labs/proxy',
    component: () => import('../views/labs/proxy.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-cors',
    path: '/labs/cors',
    component: () => import('../views/labs/cors.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-params',
    path: '/labs/:name',
    component: () => import('../views/labs/params.vue'),
    meta: { requireAuth: false }
  },
  // ## component views
  {
    name: 'labs-icons',
    path: '/labs/icons',
    component: () => import('../views/labs/icons.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-button',
    path: '/labs/button',
    component: () => import('../views/labs/button.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-table',
    path: '/labs/table',
    component: () => import('../views/labs/table.vue'),
    meta: { requireAuth: false }
  }
]

const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login.vue')
  },
  {
    name: 'layout',
    path: '/',
    component: () => import('../layouts/index.vue'),
    children: [...mainRoutes, ...labsRoutes]
  },
  // ## not found page
  {
    name: 'not-found',
    path: '/*',
    component: () => import('../views/error.vue'),
    meta: { requireAuth: false }
  }
]

export default routes

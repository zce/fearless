import { RouteRecordRaw } from 'vue-router'

const mainRoutes: RouteRecordRaw[] = [
  // - Dashboard
  {
    name: 'home',
    path: '/',
    component: async () => await import('../views/home.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'update',
    path: '/update',
    component: async () => await import('../views/update.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'about',
    path: '/about',
    component: async () => await import('../views/about.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'profile',
    path: '/profile',
    component: async () => await import('../views/profile.vue'),
    meta: { requireAuth: true }
  },
  // - Posts
  {
    name: 'posts',
    path: '/posts/:type',
    component: async () => await import('../views/posts.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'new',
    path: '/new/:type',
    component: async () => await import('../views/new.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'edit',
    path: '/edit/:type/:slug?',
    component: async () => await import('../views/edit.vue'),
    meta: { requireAuth: true }
  },
  // - Media
  {
    name: 'media',
    path: '/media',
    component: async () => await import('../views/media.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'upload',
    path: '/upload',
    component: async () => await import('../views/upload.vue'),
    meta: { requireAuth: true }
  },
  // - Terms
  {
    name: 'terms',
    path: '/terms/:type',
    component: async () => await import('../views/terms.vue'),
    meta: { requireAuth: true }
  },
  // - Users
  {
    name: 'users',
    path: '/users/:page?',
    component: async () => await import('../views/users.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'roles',
    path: '/roles',
    component: async () => await import('../views/roles.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'permissions',
    path: '/permissions',
    component: async () => await import('../views/permissions.vue'),
    meta: { requireAuth: true }
  },
  // - Comments
  {
    name: 'comments',
    path: '/comments',
    component: async () => await import('../views/comments.vue'),
    meta: { requireAuth: true }
  },
  // - Appearances
  {
    name: 'themes',
    path: '/themes',
    component: async () => await import('../views/themes.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'customize',
    path: '/customize',
    component: async () => await import('../views/customize.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'widgets',
    path: '/widgets',
    component: async () => await import('../views/widgets.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'navigation',
    path: '/navigation',
    component: async () => await import('../views/navigation.vue'),
    meta: { requireAuth: true }
  },
  // - Plugins
  {
    name: 'plugins',
    path: '/plugins',
    component: async () => await import('../views/plugins.vue'),
    meta: { requireAuth: true }
  },
  // - Tools
  {
    name: 'install',
    path: '/install/:type',
    component: async () => await import('../views/install.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'tools',
    path: '/tools',
    component: async () => await import('../views/tools.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'import',
    path: '/import',
    component: async () => await import('../views/import.vue'),
    meta: { requireAuth: true }
  },
  {
    name: 'export',
    path: '/export',
    component: async () => await import('../views/export.vue'),
    meta: { requireAuth: true }
  },
  // - Options
  {
    name: 'options',
    path: '/options/:type',
    component: async () => await import('../views/options.vue'),
    meta: { requireAuth: true }
  }
]

const labsRoutes: RouteRecordRaw[] = [
  // ## labs views
  {
    name: 'labs',
    path: '/labs',
    component: async () => await import('../views/labs/index.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-data',
    path: '/labs/data',
    component: async () => await import('../views/labs/data.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-vuex',
    path: '/labs/vuex',
    component: async () => await import('../views/labs/vuex.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-i18n',
    path: '/labs/i18n',
    component: async () => await import('../views/labs/i18n.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-proxy',
    path: '/labs/proxy',
    component: async () => await import('../views/labs/proxy.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-cors',
    path: '/labs/cors',
    component: async () => await import('../views/labs/cors.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-params',
    path: '/labs/:name',
    component: async () => await import('../views/labs/params.vue'),
    meta: { requireAuth: false }
  },
  // ## component views
  {
    name: 'labs-icons',
    path: '/labs/icons',
    component: async () => await import('../views/labs/icons.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-button',
    path: '/labs/button',
    component: async () => await import('../views/labs/button.vue'),
    meta: { requireAuth: false }
  },
  {
    name: 'labs-table',
    path: '/labs/table',
    component: async () => await import('../views/labs/table.vue'),
    meta: { requireAuth: false }
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
    children: [...mainRoutes, ...labsRoutes]
  },
  // ## not found page
  {
    name: 'not-found',
    path: '/*',
    component: async () => await import('../views/error.vue'),
    meta: { requireAuth: false }
  }
]

export default routes

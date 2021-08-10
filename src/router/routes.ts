/* eslint-disable @typescript-eslint/promise-function-async */
import { RouteRecordRaw } from 'vue-router'

const mainRoutes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('../views/home.vue'),
    meta: {
      title: 'Home',
      requiresAuth: true
    }
  },
  {
    name: 'update',
    path: '/update',
    component: () => import('../views/update.vue'),
    meta: {
      title: 'Update',
      requiresAuth: true
    }
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('../views/about.vue'),
    meta: {
      title: 'About',
      requiresAuth: true
    }
  },
  {
    name: 'profile',
    path: '/profile',
    component: () => import('../views/profile.vue'),
    meta: {
      title: 'Profile',
      requiresAuth: true
    }
  },
  {
    name: 'posts',
    path: '/posts/:type',
    component: () => import('../views/posts.vue'),
    meta: {
      title: 'Posts',
      requiresAuth: true
    }
  },
  {
    name: 'new',
    path: '/new/:type',
    component: () => import('../views/new.vue'),
    meta: {
      title: 'New',
      requiresAuth: true
    }
  },
  {
    name: 'edit',
    path: '/edit/:type/:slug?',
    component: () => import('../views/edit.vue'),
    meta: {
      title: 'Edit',
      requiresAuth: true
    }
  },
  {
    name: 'media',
    path: '/media',
    component: () => import('../views/media.vue'),
    meta: {
      title: 'Media',
      requiresAuth: true
    }
  },
  {
    name: 'upload',
    path: '/upload',
    component: () => import('../views/upload.vue'),
    meta: {
      title: 'Upload',
      requiresAuth: true
    }
  },
  {
    name: 'terms',
    path: '/terms/:type',
    component: () => import('../views/terms.vue'),
    meta: {
      title: 'Terms',
      requiresAuth: true
    }
  },
  {
    name: 'users',
    path: '/users/:page?',
    component: () => import('../views/users.vue'),
    meta: {
      title: 'Users',
      requiresAuth: true
    }
  },
  {
    name: 'roles',
    path: '/roles',
    component: () => import('../views/roles.vue'),
    meta: {
      title: 'Roles',
      requiresAuth: true
    }
  },
  {
    name: 'permissions',
    path: '/permissions',
    component: () => import('../views/permissions.vue'),
    meta: {
      title: 'Permissions',
      requiresAuth: true
    }
  },
  {
    name: 'comments',
    path: '/comments',
    component: () => import('../views/comments.vue'),
    meta: {
      title: 'Comments',
      requiresAuth: true
    }
  },
  {
    name: 'themes',
    path: '/themes',
    component: () => import('../views/themes.vue'),
    meta: {
      title: 'Themes',
      requiresAuth: true
    }
  },
  {
    name: 'customize',
    path: '/customize',
    component: () => import('../views/customize.vue'),
    meta: {
      title: 'Customize',
      requiresAuth: true
    }
  },
  {
    name: 'widgets',
    path: '/widgets',
    component: () => import('../views/widgets.vue'),
    meta: {
      title: 'Widgets',
      requiresAuth: true
    }
  },
  {
    name: 'navigation',
    path: '/navigation',
    component: () => import('../views/navigation.vue'),
    meta: {
      title: 'Navigation',
      requiresAuth: true
    }
  },
  {
    name: 'plugins',
    path: '/plugins',
    component: () => import('../views/plugins.vue'),
    meta: {
      title: 'Plugins',
      requiresAuth: true
    }
  },
  {
    name: 'install',
    path: '/install/:type',
    component: () => import('../views/install.vue'),
    meta: {
      title: 'Install',
      requiresAuth: true
    }
  },
  {
    name: 'tools',
    path: '/tools',
    component: () => import('../views/tools.vue'),
    meta: {
      title: 'Tools',
      requiresAuth: true
    }
  },
  {
    name: 'import',
    path: '/import',
    component: () => import('../views/import.vue'),
    meta: {
      title: 'Import',
      requiresAuth: true
    }
  },
  {
    name: 'export',
    path: '/export',
    component: () => import('../views/export.vue'),
    meta: {
      title: 'Export',
      requiresAuth: true
    }
  },
  {
    name: 'options',
    path: '/options/:type',
    component: () => import('../views/options.vue'),
    meta: {
      title: 'Options',
      requiresAuth: true
    }
  }
]

const labsRoutes: RouteRecordRaw[] = [
  {
    name: 'labs',
    path: '/labs',
    component: () => import('../views/labs.vue'),
    meta: {
      title: 'Labs'
    }
  }
]

const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login.vue'),
    meta: {
      title: 'Sign In'
    }
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
    path: '/:path*',
    component: () => import('../views/error.vue'),
    meta: {
      title: 'Oh no!'
    }
  }
]

export default routes

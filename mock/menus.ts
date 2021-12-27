import { Router } from 'express'
import { Role } from './data'

const router = Router()

router.get('/', (req, res) => {
  if (req.query.type === 'shortcut') {
    return res.send([
      req.can(Role.staff) && {
        id: '610159148224d543ae4e05b3',
        label: '0',
        icon: 'comments',
        name: 'comments'
      },
      req.can(Role.staff) && {
        id: '610159148224d543ae4e05b4',
        label: 'New',
        icon: 'add',
        name: 'new',
        params: { type: 'blog' },
        children: [
          { id: '610159148224d543ae4e05b5', label: 'Post', name: 'new', params: { type: 'blog' } },
          { id: '610159148224d543ae4e05b6', label: 'Media', name: 'upload' },
          req.can(Role.admin) && { id: '610159148224d543ae4e05b7', label: 'Page', name: 'new', params: { type: 'page' } },
          req.can(Role.admin) && { id: '610159148224d543ae4e05b8', label: 'User', name: 'users' }
        ].filter(Boolean)
      }
    ].filter(Boolean))
  }

  res.send([
    {
      id: '610159148224d543ae4e05c5',
      label: 'Dashboard',
      icon: 'dashboard',
      // name: 'home',
      children: [
        { id: '610159148224d543ae4e05c6', label: 'Home', name: 'home' },
        req.can(Role.owner) && { id: '610159148224d543ae4e05c7', label: 'Update', name: 'update' }
      ].filter(Boolean)
    },
    req.can(Role.staff) && {
      id: '610159148224d543ae4e05c8',
      label: 'Posts',
      icon: 'posts',
      // name: 'posts',
      // params: { type: 'blog' },
      children: [
        { id: '610159148224d543ae4e05c9', label: 'All posts', name: 'posts', params: { type: 'blog' } },
        { id: '610159148224d543ae4e05ca', label: 'New post', name: 'new', params: { type: 'blog' } },
        { id: '610159148224d543ae4e05cb', label: 'Categories', name: 'terms', params: { type: 'category' } },
        { id: '610159148224d543ae4e05cc', label: 'Tags', name: 'terms', params: { type: 'tag' } }
      ].filter(Boolean)
    },
    req.can(Role.staff) && {
      id: '610159148224d543ae4e05cd',
      label: 'Pages',
      icon: 'pages',
      // name: 'posts',
      // params: { type: 'page' },
      children: [
        { id: '610159148224d543ae4e05ce', label: 'All pages', name: 'posts', params: { type: 'page' } },
        req.can(Role.admin) && { id: '610159148224d543ae4e05cf', label: 'New page', name: 'new', params: { type: 'page' } }
      ].filter(Boolean)
    },
    req.can(Role.staff) && {
      id: '610159148224d543ae4e05d0',
      label: 'Media',
      icon: 'media',
      // name: 'media',
      children: [
        { id: '610159148224d543ae4e05d1', label: 'Media library', name: 'media' },
        { id: '610159148224d543ae4e05d2', label: 'Upload', name: 'upload' }
      ].filter(Boolean)
    },
    req.can(Role.admin) && {
      id: '610159148224d543ae4e05d3',
      label: 'Users',
      icon: 'users',
      // name: 'users',
      children: [
        { id: '610159148224d543ae4e05d4', label: 'All users', name: 'users' },
        { id: '610159148224d543ae4e05d5', label: 'Roles', name: 'roles' },
        { id: '610159148224d543ae4e05d6', label: 'Permissions', name: 'permissions' }
      ].filter(Boolean)
    },
    req.can(Role.staff) && {
      id: '610159148224d543ae4e05d7',
      label: 'Comments',
      icon: 'comments',
      name: 'comments'
    },
    req.can(Role.admin) && {
      id: '610159148224d543ae4e05d8',
      label: 'Themes',
      icon: 'themes',
      // name: 'themes',
      children: [
        { id: '610159148224d543ae4e05d9', label: 'Themes', name: 'themes' },
        { id: '610159148224d543ae4e05da', label: 'Customization', name: 'customize' },
        { id: '610159148224d543ae4e05db', label: 'Widgets', name: 'widgets' },
        { id: '610159148224d543ae4e05dc', label: 'Navigation', name: 'navigation' }
      ].filter(Boolean)
    },
    req.can(Role.admin) && {
      id: '610159148224d543ae4e05dd',
      label: 'Plugins',
      icon: 'plugins',
      // name: 'plugins',
      children: [
        { id: '610159148224d543ae4e05de', label: 'Installed plugins', name: 'plugins' },
        { id: '610159148224d543ae4e05df', label: 'Install plugin', name: 'install', params: { type: 'plugin' } }
      ].filter(Boolean)
    },
    req.can(Role.owner) && {
      id: '610159148224d543ae4e05e0',
      label: 'Tools',
      icon: 'tools',
      // name: 'tools',
      children: [
        { id: '610159148224d543ae4e05e1', label: 'Available tools', name: 'tools' },
        { id: '610159148224d543ae4e05e2', label: 'Import', name: 'import' },
        { id: '610159148224d543ae4e05e3', label: 'Export', name: 'export' }
      ].filter(Boolean)
    },
    req.can(Role.staff) && {
      id: '610159148224d543ae4e05e4',
      label: 'Settings',
      icon: 'settings',
      // name: 'options',
      // params: { type: 'general' },
      children: [
        { id: '610159148224d543ae4e05e5', label: 'General', name: 'options', params: { type: 'general' } },
        { id: '610159148224d543ae4e05e6', label: 'Writing', name: 'options', params: { type: 'writing' } },
        { id: '610159148224d543ae4e05e7', label: 'Reading', name: 'options', params: { type: 'reading' } },
        { id: '610159148224d543ae4e05e8', label: 'Discussion', name: 'options', params: { type: 'discussion' } },
        { id: '610159148224d543ae4e05e9', label: 'Media', name: 'options', params: { type: 'media' } },
        req.can(Role.admin) && { id: '610159148224d543ae4e05ea', label: 'Permalink', name: 'options', params: { type: 'permalink' } }
      ].filter(Boolean)
    },
    // Labs Pages
    {
      id: '610159148224d543ae4e05b9',
      label: 'Labs',
      icon: 'flask',
      name: 'labs'
    }
  ].filter(Boolean))
})

export default router

// import { Router } from 'express'
// import { Role } from './data'

// const router = Router()

// router.get('/', (req, res) => {
//   if (req.query.type === 'shortcut') {
//     return res.send([
//       req.can(Role.staff) && {
//         id: '610159148224d543ae4e05b3',
//         label: '0',
//         icon: 'comments',
//         path: '/comments'
//       },
//       req.can(Role.staff) && {
//         id: '610159148224d543ae4e05b4',
//         label: 'New',
//         icon: 'add',
//         path: '/new/blog',
//         params: { type: '' },
//         children: [
//           { id: '610159148224d543ae4e05b5', label: 'Post', path: '/new/blog' },
//           { id: '610159148224d543ae4e05b6', label: 'Media', path: '/upload' },
//           req.can(Role.admin) && { id: '610159148224d543ae4e05b7', label: 'Page', path: '/new/page' },
//           req.can(Role.admin) && { id: '610159148224d543ae4e05b8', label: 'User', path: '/users' }
//         ].filter(Boolean)
//       }
//     ].filter(Boolean))
//   }

//   res.send([
//     {
//       id: '610159148224d543ae4e05c5',
//       label: 'Dashboard',
//       icon: 'dashboard',
//       // path: '/',
//       children: [
//         { id: '610159148224d543ae4e05c6', label: 'Home', path: '/' },
//         req.can(Role.owner) && { id: '610159148224d543ae4e05c7', label: 'Update', path: '/update' }
//       ].filter(Boolean)
//     },
//     req.can(Role.staff) && {
//       id: '610159148224d543ae4e05c8',
//       label: 'Posts',
//       icon: 'posts',
//       // path: '/posts',
//       children: [
//         { id: '610159148224d543ae4e05c9', label: 'All posts', path: '/posts' },
//         { id: '610159148224d543ae4e05ca', label: 'New post', path: '/new/blog' },
//         { id: '610159148224d543ae4e05cb', label: 'Categories', path: '/terms/category' },
//         { id: '610159148224d543ae4e05cc', label: 'Tags', path: '/terms/tag' }
//       ].filter(Boolean)
//     },
//     req.can(Role.staff) && {
//       id: '610159148224d543ae4e05cd',
//       label: 'Pages',
//       icon: 'pages',
//       // path: '/posts/page',
//       children: [
//         { id: '610159148224d543ae4e05ce', label: 'All pages', path: '/posts/page' },
//         req.can(Role.admin) && { id: '610159148224d543ae4e05cf', label: 'New page', path: '/new/page' }
//       ].filter(Boolean)
//     },
//     req.can(Role.staff) && {
//       id: '610159148224d543ae4e05d0',
//       label: 'Media',
//       icon: 'media',
//       // path: '/media',
//       children: [
//         { id: '610159148224d543ae4e05d1', label: 'Media library', path: '/media' },
//         { id: '610159148224d543ae4e05d2', label: 'Upload', path: '/upload' }
//       ].filter(Boolean)
//     },
//     req.can(Role.admin) && {
//       id: '610159148224d543ae4e05d3',
//       label: 'Users',
//       icon: 'users',
//       // path: '/users',
//       children: [
//         { id: '610159148224d543ae4e05d4', label: 'All users', path: '/users' },
//         { id: '610159148224d543ae4e05d5', label: 'Roles', path: '/roles' },
//         { id: '610159148224d543ae4e05d6', label: 'Permissions', path: '/permissions' }
//       ].filter(Boolean)
//     },
//     req.can(Role.staff) && {
//       id: '610159148224d543ae4e05d7',
//       label: 'Comments',
//       icon: 'comments',
//       path: '/comments'
//     },
//     req.can(Role.admin) && {
//       id: '610159148224d543ae4e05d8',
//       label: 'Themes',
//       icon: 'themes',
//       // path: '/themes',
//       children: [
//         { id: '610159148224d543ae4e05d9', label: 'Themes', path: '/themes' },
//         { id: '610159148224d543ae4e05da', label: 'Customization', path: '/customize' },
//         { id: '610159148224d543ae4e05db', label: 'Widgets', path: '/widgets' },
//         { id: '610159148224d543ae4e05dc', label: 'Navigation', path: '/navigation' }
//       ].filter(Boolean)
//     },
//     req.can(Role.admin) && {
//       id: '610159148224d543ae4e05dd',
//       label: 'Plugins',
//       icon: 'plugins',
//       // path: '/plugins',
//       children: [
//         { id: '610159148224d543ae4e05de', label: 'Installed plugins', path: '/plugins' },
//         { id: '610159148224d543ae4e05df', label: 'Install plugin', path: '/install/plugin' }
//       ].filter(Boolean)
//     },
//     req.can(Role.owner) && {
//       id: '610159148224d543ae4e05e0',
//       label: 'Tools',
//       icon: 'tools',
//       // path: '/tools',
//       children: [
//         { id: '610159148224d543ae4e05e1', label: 'Available tools', path: '/tools' },
//         { id: '610159148224d543ae4e05e2', label: 'Import', path: '/import' },
//         { id: '610159148224d543ae4e05e3', label: 'Export', path: '/export' }
//       ].filter(Boolean)
//     },
//     req.can(Role.staff) && {
//       id: '610159148224d543ae4e05e4',
//       label: 'Settings',
//       icon: 'settings',
//       // path: '/options',
//       children: [
//         { id: '610159148224d543ae4e05e5', label: 'General', path: '/options' },
//         { id: '610159148224d543ae4e05e6', label: 'Writing', path: '/options/writing' },
//         { id: '610159148224d543ae4e05e7', label: 'Reading', path: '/options/reading' },
//         { id: '610159148224d543ae4e05e8', label: 'Discussion', path: '/options/discussion' },
//         { id: '610159148224d543ae4e05e9', label: 'Media', path: '/options/media' },
//         req.can(Role.admin) && { id: '610159148224d543ae4e05ea', label: 'Permalink', path: '/options/permalink' }
//       ].filter(Boolean)
//     },
//     // Labs Pages
//     {
//       id: '610159148224d543ae4e05b9',
//       label: 'Labs',
//       icon: 'flask',
//       path: '/labs'
//     }
//   ].filter(Boolean))
// })

// export default router

import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  // return res.send({
  //   status: 400,
  //   msg: 'errror'
  // })

  if (req.query.type === 'shortcut') {
    return res.send({
      status: 200,
      msg: 'success',
      data: [
        {
          id: '610159148224d543ae4e05b3',
          label: '0',
          icon: 'comments',
          name: 'comments'
        },
        {
          id: '610159148224d543ae4e05b4',
          label: 'New',
          icon: 'add',
          name: 'new',
          params: { type: 'blog' },
          children: [
            { id: '610159148224d543ae4e05b5', label: 'Post', name: 'new', params: { type: 'blog' } },
            { id: '610159148224d543ae4e05b6', label: 'Media', name: 'upload' },
            { id: '610159148224d543ae4e05b7', label: 'Page', name: 'new', params: { type: 'page' } },
            { id: '610159148224d543ae4e05b8', label: 'User', name: 'users' }
          ]
        },
        // Component Pages
        {
          id: '610159148224d543ae4e05b9',
          label: 'Labs',
          icon: 'flask',
          name: 'labs',
          children: [
            { id: '610159148224d543ae4e05ba', label: 'Icons', name: 'labs-icons' },
            { id: '610159148224d543ae4e05bb', label: 'Button', name: 'labs-button' },
            { id: '610159148224d543ae4e05bc', label: 'Table', name: 'labs-table' },
            { id: '610159148224d543ae4e05be', label: 'Data', name: 'labs-data' },
            { id: '610159148224d543ae4e05bf', label: 'Params', name: 'labs-params', params: { name: '汪磊' } },
            { id: '610159148224d543ae4e05c0', label: 'Vuex', name: 'labs-vuex' },
            { id: '610159148224d543ae4e05c1', label: 'I18n', name: 'labs-i18n' },
            { id: '610159148224d543ae4e05c2', label: 'Proxy', name: 'labs-proxy' },
            { id: '610159148224d543ae4e05c3', label: 'CORS', name: 'labs-cors' },
            { id: '610159148224d543ae4e05c4', label: 'NotFound', name: '404' }
          ]
        }
      ]
    })
  }

  res.send({
    status: 200,
    msg: 'success',
    data: [
      {
        id: '610159148224d543ae4e05c5',
        label: 'Dashboard',
        icon: 'dashboard',
        children: [
          { id: '610159148224d543ae4e05c6', label: 'Home', name: 'home' },
          { id: '610159148224d543ae4e05c7', label: 'Update', name: 'update' }
        ]
      },
      {
        id: '610159148224d543ae4e05c8',
        label: 'Posts',
        icon: 'posts',
        children: [
          { id: '610159148224d543ae4e05c9', label: 'All posts', name: 'posts', params: { type: 'blog' } },
          { id: '610159148224d543ae4e05ca', label: 'New post', name: 'new', params: { type: 'blog' } },
          { id: '610159148224d543ae4e05cb', label: 'Categories', name: 'terms', params: { type: 'blog-category' } },
          { id: '610159148224d543ae4e05cc', label: 'Tags', name: 'terms', params: { type: 'blog-tag' } }
        ]
      },
      {
        id: '610159148224d543ae4e05cd',
        label: 'Pages',
        icon: 'pages',
        children: [
          { id: '610159148224d543ae4e05ce', label: 'All pages', name: 'posts', params: { type: 'page' } },
          { id: '610159148224d543ae4e05cf', label: 'New page', name: 'new', params: { type: 'page' } }
        ]
      },
      {
        id: '610159148224d543ae4e05d0',
        label: 'Media',
        icon: 'media',
        children: [
          { id: '610159148224d543ae4e05d1', label: 'Media library', name: 'media' },
          { id: '610159148224d543ae4e05d2', label: 'Upload', name: 'upload' }
        ]
      },
      {
        id: '610159148224d543ae4e05d3',
        label: 'Users',
        icon: 'users',
        children: [
          { id: '610159148224d543ae4e05d4', label: 'All users', name: 'users' },
          { id: '610159148224d543ae4e05d5', label: 'Roles', name: 'roles' },
          { id: '610159148224d543ae4e05d6', label: 'Permissions', name: 'permissions' }
        ]
      },
      {
        id: '610159148224d543ae4e05d7',
        label: 'Comments',
        icon: 'comments',
        name: 'comments'
      },
      {
        id: '610159148224d543ae4e05d8',
        label: 'Themes',
        icon: 'themes',
        children: [
          { id: '610159148224d543ae4e05d9', label: 'Themes', name: 'themes' },
          { id: '610159148224d543ae4e05da', label: 'Customization', name: 'customize' },
          { id: '610159148224d543ae4e05db', label: 'Widgets', name: 'widgets' },
          { id: '610159148224d543ae4e05dc', label: 'Navigation', name: 'navigation' }
        ]
      },
      {
        id: '610159148224d543ae4e05dd',
        label: 'Plugins',
        icon: 'plugins',
        children: [
          { id: '610159148224d543ae4e05de', label: 'Installed plugins', name: 'plugins' },
          { id: '610159148224d543ae4e05df', label: 'Install plugin', name: 'install', params: { type: 'plugin' } }
        ]
      },
      {
        id: '610159148224d543ae4e05e0',
        label: 'Tools',
        icon: 'tools',
        children: [
          { id: '610159148224d543ae4e05e1', label: 'Available tools', name: 'tools' },
          { id: '610159148224d543ae4e05e2', label: 'Import', name: 'import' },
          { id: '610159148224d543ae4e05e3', label: 'Export', name: 'export' }
        ]
      },
      {
        id: '610159148224d543ae4e05e4',
        label: 'Settings',
        icon: 'settings',
        children: [
          { id: '610159148224d543ae4e05e5', label: 'General', name: 'options', params: { type: 'general' } },
          { id: '610159148224d543ae4e05e6', label: 'Writing', name: 'options', params: { type: 'writing' } },
          { id: '610159148224d543ae4e05e7', label: 'Reading', name: 'options', params: { type: 'reading' } },
          { id: '610159148224d543ae4e05e8', label: 'Discussion', name: 'options', params: { type: 'discussion' } },
          { id: '610159148224d543ae4e05e9', label: 'Media', name: 'options', params: { type: 'media' } },
          { id: '610159148224d543ae4e05ea', label: 'Permalink', name: 'options', params: { type: 'permalink' } }
        ]
      }
    ]
  })
})

export default router

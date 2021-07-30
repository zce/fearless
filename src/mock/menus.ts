import MockAdapter from 'axios-mock-adapter'

export default (mock: MockAdapter): void => {
  mock.onGet('/menus').reply(200, {
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
        icon: 'pushpin',
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
        icon: 'newspaper',
        children: [
          { id: '610159148224d543ae4e05ce', label: 'All pages', name: 'posts', params: { type: 'page' } },
          { id: '610159148224d543ae4e05cf', label: 'New page', name: 'new', params: { type: 'page' } }
        ]
      },
      {
        id: '610159148224d543ae4e05d0',
        label: 'Media',
        icon: 'images',
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
        icon: 'bubbles'
      },
      {
        id: '610159148224d543ae4e05d8',
        label: 'Themes',
        icon: 'paint-format',
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
        icon: 'power-cord',
        children: [
          { id: '610159148224d543ae4e05de', label: 'Installed plugins', name: 'plugins' },
          { id: '610159148224d543ae4e05df', label: 'Install plugin', name: 'install', params: { type: 'plugin' } }
        ]
      },
      {
        id: '610159148224d543ae4e05e0',
        label: 'Tools',
        icon: 'wrench',
        children: [
          { id: '610159148224d543ae4e05e1', label: 'Available tools', name: 'tools' },
          { id: '610159148224d543ae4e05e2', label: 'Import', name: 'import' },
          { id: '610159148224d543ae4e05e3', label: 'Export', name: 'export' }
        ]
      },
      {
        id: '610159148224d543ae4e05e4',
        label: 'Settings',
        icon: 'equalizer',
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

  mock.onGet('/menus', { params: { type: 'shortcuts' } }).reply(200, {
    status: 200,
    msg: 'success',
    data: [
      {
        id: '610159148224d543ae4e05b3',
        label: '0',
        icon: 'bubble',
        name: 'comments'
      },
      {
        id: '610159148224d543ae4e05b4',
        label: 'New',
        icon: 'plus',
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
        label: 'Components',
        icon: 'lab',
        name: 'components',
        children: [
          { id: '610159148224d543ae4e05ba', label: 'Icons', name: 'components-icons' },
          { id: '610159148224d543ae4e05bb', label: 'Button', name: 'components-button' },
          { id: '610159148224d543ae4e05bc', label: 'Table', name: 'components-table' }
        ]
      },
      // Demo Pages
      {
        id: '610159148224d543ae4e05bd',
        label: 'Demo',
        icon: 'magic-wand',
        name: 'demo',
        children: [
          { id: '610159148224d543ae4e05be', label: 'Data', name: 'demo-data' },
          { id: '610159148224d543ae4e05bf', label: 'Params', name: 'demo-params', params: { name: '汪磊' } },
          { id: '610159148224d543ae4e05c0', label: 'Vuex', name: 'demo-vuex' },
          { id: '610159148224d543ae4e05c1', label: 'I18n', name: 'demo-i18n' },
          { id: '610159148224d543ae4e05c2', label: 'Proxy', name: 'demo-proxy' },
          { id: '610159148224d543ae4e05c3', label: 'CORS', name: 'demo-cors' },
          { id: '610159148224d543ae4e05c4', label: 'NotFound', name: '404' }
        ]
      }
    ]
  })
}

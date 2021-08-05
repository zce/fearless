import { Low, Memory } from 'lowdb'
import ObjectId from 'bson-objectid'

const defaults = {
  clients: [
    {
      id: '5ce63c0a5a25992818e5347d',
      name: 'OAuth2 Client',
      website_url: 'https://github.com/zce/oauth2-example',
      privacy_url: 'https://github.com/zce/oauth2-example',
      key: 'oauth2-example-client', // clientId
      secret: 'f657d916-0ad9-4b65-9976-3fe796bbdea0', // client_secret
      redirects: ['http://localhost:4000/login/callback'], // redirect_uris
      grants: ['authorization_code', 'password', 'refresh_token', 'client_credentials'],
      scope: '*',
      userId: '5ce63c0a5a25992818e5347e'
    }
  ],

  authorizationCodes: [
    {
      id: ObjectId.generate(),
      code: '4023348b5bc4', // authorization_code
      expires: new Date('2019-05-30 00:00'), // expires_at
      redirect: 'http://localhost:4000/login/callback', // redirect_uri
      scope: 'posts:read',
      userId: '5ce63c0a5a25992818e5347e',
      clientId: '5ce63c0a5a25992818e5347d'
    }
  ],

  accessTokens: [
    {
      id: ObjectId.generate(),
      token: 'faee0258-b0a2-4d38-b12b-e0a9932a6b94', // access_token
      expires: new Date('2019-05-30 00:00'), // expires_at
      scope: 'posts:read',
      userId: '5ce63c0a5a25992818e5347e',
      clientId: '5ce63c0a5a25992818e5347d'
    }
  ],

  refreshTokens: [
    {
      id: ObjectId.generate(),
      token: 'cba19635-3bb4-47b1-87f6-8d0ff26b43f2', // refresh_token
      expires: new Date('2019-05-30 00:00'), // expires_at
      scope: 'posts:read',
      userId: '5ce63c0a5a25992818e5347e',
      clientId: '5ce63c0a5a25992818e5347d'
    }
  ],

  scopes: [
    {
      id: ObjectId.generate(),
      scope: 'posts:read',
      default: true
    },
    {
      id: ObjectId.generate(),
      scope: 'posts:create',
      default: false
    },
    {
      id: ObjectId.generate(),
      scope: 'posts:delete',
      default: false
    },
    {
      id: ObjectId.generate(),
      scope: 'posts:update',
      default: false
    }
  ],

  users: [
    {
      id: '5ce63c0a5a25992818e5347e',
      slug: 'admin',
      username: 'admin',
      password: 'wanglei',
      nickname: 'Administrator',
      email: 'admin@zce.me',
      mobile: '13266668888',
      status: 'activated',
      scope: '*'
    },
    {
      id: '5ce63c0a5a25992818e5347f',
      slug: 'zce',
      username: 'zce',
      password: 'wanglei',
      nickname: 'Wang Lei',
      email: 'w@zce.me',
      mobile: '13266668888',
      status: 'activated',
      scope: '*'
    }
  ],

  posts: [
    {
      id: ObjectId.generate(),
      slug: 'hello-world',
      title: 'Hello world',
      excerpt: '欢迎使用WordPress。这是您的第一篇文章。编辑或删除它，然后开始写作吧！',
      content: '<p>欢迎使用WordPress。这是您的第一篇文章。编辑或删除它，然后开始写作吧！</p>'
    },
    {
      id: ObjectId.generate(),
      slug: 'welcome-to-ghost',
      title: 'Welcome to Ghost',
      excerpt: "👋 Welcome, it's great to have you here.",
      content: "<p>👋 Welcome, it's great to have you here.</p>"
    }
  ]
}

type Database = typeof defaults

const db = new Low<Database>(new Memory())

db.data = defaults

export default db

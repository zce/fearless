# fearless

[![Build Status][actions-img]][actions-url]
[![License][license-img]][license-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> A dashboard scaffolding based on Vue.js 3.x & TypeScript created by Vite.

## Todo

- [ ] SWR composable
- [ ] Global store
- [ ] CRUD demos
- [ ] Data virtualization
- [ ] More demos

## Features

- Modern Vue.js Ecosystem
  - vue 3.x
  - vuex 4.x
  - vue-router 4.x
- Fully strongly typed
  - typescript 4.x
- Next generation frontend tooling
  - vite 2.x
- HTTP request based on Fetch API
  - ky 0.x (not axios)
- Customizable UI Library
  - naive-ui 2.x
- Complete engineering workflow
  - eslint 7.x
  - husky 7.x
  - lint-staged 11.x
  - commitlint 13.x
- Locally mocked API server
  - express 4.x
- Authorization
  - Access token
  - Refresh token
  - Auth refresh token
  - Role based authorization
- Modern application deployment
  - GitHub Actions
  - Vercel (with Serverless functions)

## Online Preview

- https://fearless.zce.me
  - owner - username: zce; password: wanglei
  - admin - username: jack; password: 123
  - staff - username: pony; password: 123
  - owner - username: tom; password: 123

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (>= 12.10, 14.17 preferred)
- [npm](https://www.npmjs.com) (>= 6.x) or [yarn](https://yarnpkg.com) (>= 1.22)
- [Git](https://git-scm.com) (>= 2.20)

### Scaffolding tools

Create an application by [zce/caz](https://github.com/zce/caz)

```shell
# create apps through this
$ npx caz vue#next my-app
# enter generated directory
$ cd my-app
```

### Clone & Install

```shell
# clone repo
$ git clone https://github.com/zce/fearless.git
$ cd fearless

# install dependencies
$ npm install # or yarn
```

### Available Scripts

```shell
# dev with hot reload at http://localhost:3000
$ npm run dev # or yarn dev

# build for production with minification
$ npm run build # or yarn build
```

### Mock API Server

The built-in mock server starts as a vite plugin. that means you don't need to start it alone.

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [zce](https://zce.me)



[actions-img]: https://img.shields.io/github/workflow/status/zce/fearless/CI
[actions-url]: https://github.com/zce/fearless/actions
[license-img]: https://img.shields.io/github/license/zce/fearless
[license-url]: https://github.com/zce/fearless/blob/master/LICENSE
[dependency-img]: https://img.shields.io/david/zce/fearless
[dependency-url]: https://david-dm.org/zce/fearless
[devdependency-img]: https://img.shields.io/david/dev/zce/fearless
[devdependency-url]: https://david-dm.org/zce/fearless?type=dev
[style-img]: https://img.shields.io/badge/code%20style-standard-brightgreen
[style-url]: https://standardjs.com

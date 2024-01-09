<div align="center">
  <a href="https://fearless.zce.me">
    <picture>
      <source srcset="https://fearless.zce.me/logo-dark.svg" media="(prefers-color-scheme: dark)">
      <img src="https://fearless.zce.me/logo.svg" width="520" alt="Fearless" title="Fearless">
    </picture>
  </a>
  <p>A dashboard scaffolding based on Vue.js 3.x & TypeScript created by Vite.</p>
  <p>
    <a href="https://github.com/zce/fearless/actions"><img src="https://img.shields.io/github/actions/workflow/status/zce/fearless/main.yml" alt="Build Status"></a>
    <a href="https://github.com/zce/fearless/blob/master/LICENSE"><img src="https://img.shields.io/github/license/zce/fearless" alt="License"></a>
    <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen" alt="Code Style"></a>
  </p>
</div>

## Todo

- [ ] CRUD demos
- [ ] Data virtualization
- [ ] More demos

## Features

- Modern Vue.js Ecosystem
  - vue 3.x
  - pinia 2.x
  - vue-router 4.x
- Fully strongly typed
  - typescript 5.x
- Next generation frontend tooling
  - vite 5.x
- HTTP request based on Fetch API
  - ky 0.x (not axios)
- Customizable UI Library
  - naive-ui 2.x
- Complete engineering workflow
  - eslint 8.x
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
  - owner - username: zce; password: zce
  - admin - username: jack; password: 123
  - staff - username: pony; password: 123
  - owner - username: tom; password: 123

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (>= 18.17, 20.x preferred)

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
$ pnpm install # or npm install
```

### Available Scripts

```shell
# dev with hot reload at http://localhost:3000
$ pnpm dev # or npm run dev

# build for production with minification
$ pnpm build # or npm run build
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

> [!NOTE]
> Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [zce](https://zce.me)

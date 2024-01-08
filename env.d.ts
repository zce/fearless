/// <reference types="vite/client" />

// ↓↓↓ useless if you has installed vue extension for vscode

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

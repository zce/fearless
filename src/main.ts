import { createApp } from 'vue'
import naive from 'naive-ui'
import router from './router'
import store from './store'
import App from './app.vue'

const app = createApp(App)

app.use(naive)
app.use(router)
app.use(store)

app.mount('#app')

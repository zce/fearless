import { createApp } from 'vue'
import router from './router'
import store from './store'
import naive from './naive'
import App from './app.vue'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(naive)

app.mount('#app')

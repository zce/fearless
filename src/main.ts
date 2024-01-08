import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './app.vue'
import naive from './naive'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')

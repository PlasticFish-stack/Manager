import { createApp } from 'vue'
import { Quasar, Loading } from 'quasar'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "@/router/auth"
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import '@/styles/index.scss' // global css


const pinia = createPinia()
const app = createApp(App)



app
  .use(pinia)
  .use(router)
  .use(Quasar, {
    plugins: {
      Loading
    },
    config: {
      dark: false,
    }
  })
  .mount('#app')
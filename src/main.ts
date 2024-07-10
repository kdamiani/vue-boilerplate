import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'
// @ts-ignore
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// unstyled PrimeVue version
app.use(PrimeVue, {
  unstyled: true
})

app.mount('#app')

// import Aura from '@primevue/themes/aura'
// app.use(PrimeVue, {
//   theme: {
//     preset: Aura
//   }
// })

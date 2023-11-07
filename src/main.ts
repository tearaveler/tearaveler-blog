import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// VUETIFY
import 'vuetify/styles'
import createVuetify from './plugins/vuetify.ts'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')

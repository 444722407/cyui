import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/app.css'
import "github-markdown-css";

import JwUi from './lib'
const app = createApp(App)
app.use(router)
app.use(JwUi)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// rem 适配
import 'amfe-flexible/index.js'

createApp(App).use(store).use(router).mount('#app')

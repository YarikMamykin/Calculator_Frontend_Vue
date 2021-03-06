import { createApp } from 'vue'
import App from './App.vue'
import store from './storage';
import router from './router'

createApp(App).use(router).use(store).mount('#app')

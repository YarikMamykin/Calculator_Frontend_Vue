import { createApp } from 'vue'
import App from './App.vue'
import store from './storage';

createApp(App).use(store).mount('#app')

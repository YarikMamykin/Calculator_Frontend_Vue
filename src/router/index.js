import { createRouter, createWebHistory } from 'vue-router'
import Simple from '@/views/Simple.vue'

const routes = [
  {
    path: '/',
    name: 'Simple',
    component: Simple
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

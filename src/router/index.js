import { createRouter, createWebHistory } from 'vue-router'
import Simple from '@/views/Simple.vue'
import Binary from '@/views/Binary.vue'

const routes = [
  {
    path: '/',
    name: 'Simple',
    component: Simple
  },
  {
    path: '/binary',
    name: 'Binary',
    component: Binary
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

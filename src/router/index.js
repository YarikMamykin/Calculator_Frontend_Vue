import { createRouter, createWebHistory } from 'vue-router'
import Simple from '@/views/Simple.vue'
import Binary from '@/views/Binary.vue'
import Time from '@/views/Time.vue'

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
  {
    path: '/time',
    name: 'Time',
    component: Time
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

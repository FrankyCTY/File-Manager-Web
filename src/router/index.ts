import { createRouter, createWebHistory } from 'vue-router'
import ListView from '@/features/ListView'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListView,
    },
  ],
})

export default router

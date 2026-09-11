import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/daily',
    },
    {
      path: '/daily',
      name: 'daily',
      component: () => import('../views/DailyView.vue'),
    },
    {
      path: '/weekly',
      name: 'weekly',
      component: () => import('../views/WeeklyView.vue'),
    },
    {
      path: '/monthly',
      name: 'monthly',
      component: () => import('../views/MonthlyView.vue'),
    },
    {
      path: '/global',
      name: 'global',
      component: () => import('../views/GlobalView.vue'),
    },
    {
      path: '/curse',
      name: 'curse',
      component: () => import('../views/CurseView.vue'),
    },
  ],
})

export default router

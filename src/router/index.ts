import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      single: true,
      keepAlive: true
    },
    component: () => import('@/views/login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/home.vue')

      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes
})

export default router

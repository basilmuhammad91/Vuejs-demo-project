import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {requiresAuth: true},
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/items',
      name: 'items',
      component: () => import('../views/ItemsList.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/UserProfile.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/login.vue')
    }
  ]
})

export default router

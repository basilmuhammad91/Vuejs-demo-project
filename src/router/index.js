// Importing necessary functions from Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// Importing the HomeView component
import HomeView from '../views/HomeView.vue'

// Creating the router instance
const router = createRouter({
  // Setting up the router history mode
  history: createWebHistory(import.meta.env.BASE_URL),

  // Defining the routes for the application
  routes: [
    {
      // Route for the home page
      path: '/',
      name: 'home',
      component: HomeView,

      // Adding meta information for authentication requirement
      meta: { requiresAuth: true },
    },
    {
      // Route for the about page
      path: '/about',
      name: 'about',

      // Using dynamic import for better code splitting
      component: () => import('../views/AboutView.vue'),

      // Adding meta information for authentication requirement
      meta: { requiresAuth: true },
    },
    {
      // Route for the items page
      path: '/items',
      name: 'items',

      // Using dynamic import for better code splitting
      component: () => import('../views/ItemsList.vue'),

      // Adding meta information for authentication requirement
      meta: { requiresAuth: true },
    },
    {
      // Route for the user profile page
      path: '/profile',
      name: 'profile',

      // Using dynamic import for better code splitting
      component: () => import('../views/UserProfile.vue'),

      // Adding meta information for authentication requirement
      meta: { requiresAuth: true },
    },
    {
      // Route for the login page
      path: '/login',
      name: 'login',

      // Using dynamic import for better code splitting
      component: () => import('../views/auth/login.vue'),
    },
  ]
})

// Exporting the router instance
export default router

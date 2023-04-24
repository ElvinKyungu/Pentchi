import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/Connexion',
      name: 'Connexion',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Connexion.vue')
    },
    {
      path: '/Inscription',
      name: 'Inscription',
      component: () => import('../views/Inscription.vue')
    },
    {
      path: '/Single View',
      name: 'SingleView',
      component: () => import('../views/SingleView.vue')
    },
    {
      path: '/Unilu',
      name: 'Unilu',
      component: () => import('../views/Universities/Unilu.vue')
    },
    {
      path: '/Unh',
      name: 'Unh',
      component: () => import('../views/Universities/Unh.vue')
    },
    {
      path: '/Upl',
      name: 'Upl',
      component: () => import('../views/Universities/Upl.vue')
    },
    {
      path: '/Upl',
      name: 'Upl',
      component: () => import('../views/Universities/Upl.vue')
    },
    {
      path: '/Esis',
      name: 'Esis',
      component: () => import('../views/Universities/Esis.vue')
    },
  ]
})

export default router

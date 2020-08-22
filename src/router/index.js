import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/talentohumano',
    name: 'Talento',
    component: () => import(/* webpackChunkName: "about" */ '../views/Talentohumano.vue')
  },
  {
    path: '/politicasdevolucion',
    name: 'Devolucion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Devolucion.vue')
  },
  {
    path: '/escribenos',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },
  {
    path: '/directorio',
    name: 'Directorio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Directorio.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

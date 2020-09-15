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
    path: '/talento_humano',
    name: 'Talento',
    component: () => import(/* webpackChunkName: "about" */ '../views/Talentohumano.vue')
  },
  {
    path: '/politicas_devolucion',
    name: 'Devolucion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Devolucion.vue')
  },
  {
    path: '/preguntas_frecuentes',
    name: 'Frecuentes',
    component: () => import(/* webpackChunkName: "about" */ '../views/preguntasfrecuentes.vue')
  },
  {
    path: '/publicaciones',
    name: 'Publicaciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Publicaciones.vue')
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
   {
    path: '/pqrs',
    name: 'pqrs',
    component: () => import(/* webpackChunkName: "about" */ '../views/pqrs.vue')
  },
  {
    path: '/prueba',
    name: 'prueba',
    component: () => import(/* webpackChunkName: "about" */ '../views/prueba.vue')
  },
  {
    path: '/blog/:year',
    name: 'Blog',
    // component: require('../views/Blog.vue'),
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue'),
    props: true
  },
   {
    path: '/*',
    name: 'Error404',
    component: () => import(/* webpackChunkName: "about" */ '../views/Error404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router

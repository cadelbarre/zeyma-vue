import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  // todas las direcciones posibles para el about
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/page/2',
    redirect: '/about',
    name: 'Page_quienes_somos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/quienes-somos',
    redirect: '/about',
    name: 'Quienes_somos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/talento_humano',
    name: 'Talento',
    component: () => import(/* webpackChunkName: "Talento_humano" */ '../views/Talentohumano.vue')
  },
  {
    path: '/politicas_devolucion',
    name: 'Devolucion',
    component: () => import(/* webpackChunkName: "devolucion" */ '../views/Devolucion.vue')
  },
  {
    path: '/preguntas_frecuentes',
    name: 'Frecuentes',
    component: () => import(/* webpackChunkName: "preguntas_frecuentes" */ '../views/preguntasfrecuentes.vue')
  },
  {
    path: '/publicaciones',
    name: 'Publicaciones',
    component: () => import(/* webpackChunkName: "publicaciones" */ '../views/Publicaciones.vue')
  },
  // Todas las direcciones de contactanos
  {
    path: '/escribenos',
    name: 'Escribenos',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  },
   {
    path: '/contactanos',
    redirect: '/escribenos',
    name: 'Contactanos',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  },
   {
    path: '/contacto',
    redirect: '/escribenos',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  },
   // Fin direcciones de contactanos
  {
    path: '/directorio',
    name: 'Directorio',
    component: () => import(/* webpackChunkName: "directorio" */ '../views/Directorio.vue')
  },
   {
    path: '/pqrs',
    name: 'pqrs',
    component: () => import(/* webpackChunkName: "pqrs" */ '../views/pqrs.vue')
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
    component: () => import(/* webpackChunkName: "Blog" */ '../views/Blog.vue'),
    props: true
  },
  //  {
  //   path: '*',
  //   name: 'Error404',
  //   component: () => import(/* webpackChunkName: "Error" */ '../views/Error404.vue')
  // },
   {
    path: '/*',
    name: 'Error404',
    component: () => import(/* webpackChunkName: "Error" */ '../views/Error404.vue')
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

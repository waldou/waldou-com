import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const getLocale = () => {
  return window.location.pathname.replace(/^\/([^/]+).*/i, '$1')
}

const getBaseUrl = () => {
  const locale = getLocale()
  return (locale.trim().length && locale != '/') ? '/' + locale : 'es'
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '*',
    component: () => import('../views/AboutView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: getBaseUrl(),
  routes
})

export default router

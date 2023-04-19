import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const VALID_LOCALES = [ 'es', 'en' ]

const getLocale = () => {
  const value = window.location.pathname.replace(/^\/([^/]+).*/i, '$1')
  if(!value || !VALID_LOCALES[value]) {
    return process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'es'
  } else {
    return value
  }
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

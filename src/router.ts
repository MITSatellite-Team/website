import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import GetInvolved from './views/GetInvolved.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/get-involved', component: GetInvolved },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    
    return { top: 0 }
  }
})
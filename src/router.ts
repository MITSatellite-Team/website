import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import GetInvolved from './views/GetInvolved.vue'
import Leonird from './views/Leonird.vue'
import Ether from './views/Ether.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/get-involved', component: GetInvolved },
  { path: '/leonird', component: Leonird },
  { path: '/ether', component: Ether },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    
    return { top: 0 }
  }
})
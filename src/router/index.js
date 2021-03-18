import Vue from 'vue'
import VueRouter from 'vue-router'
import ByCurrency from '../views/ByCurrency.vue'
import Blank from '../views/Blank.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Blank',
    component: Blank
  },
  {
    path: '/currency',
    name: 'By Currency',
    component: ByCurrency
  },
  {
    path: '/country',
    name: 'By Country',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ByCountry.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

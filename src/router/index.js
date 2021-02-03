import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Axios from '../views/axios.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Axios',
  //   component: Axios
  // },
  {
    path: '/',
    name: 'Axios',
    component: Axios
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router

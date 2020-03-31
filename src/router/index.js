import Vue from 'vue'
import VueRouter from 'vue-router'
import Chart from '../views/Chart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Chart',
    component: Chart,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

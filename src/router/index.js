import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: () => import('@/views/Home.vue')
},
{
  path: '/user',
  name: 'user',
  component: () => import('@/views/User.vue')
}
]

const router = new VueRouter({
  routes
})

export default router

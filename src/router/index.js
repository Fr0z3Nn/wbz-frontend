import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopPage from '@/views/ShopPage.vue'
import MainPage from "@/views/MainPage";


Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name:'main',
    component: MainPage
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopPage,
  },

  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router

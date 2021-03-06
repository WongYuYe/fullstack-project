import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
    children: [
      {
        name: 'home', path: '/', component: Home,
      },
      {
        name: 'courses-list', path: '/courses/list', component: () => import('../views/courses/List.vue'),
      },
      {
        name: 'episodes-list', path: '/episodes/list', component: () => import('../views/episodes/List.vue'),
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

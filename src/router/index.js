import Vue from 'vue'
import Router from 'vue-router'
import Game from '../views/Game.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'game',
      component: Game
    },
    {
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: () => import('../views/Achievements.vue')
    }
  ]
})

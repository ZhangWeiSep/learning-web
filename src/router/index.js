import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/page/login'
import index from '@/page/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})

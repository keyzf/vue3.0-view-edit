import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home.vue';

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home,
  }
]

function createRouter() {
  const router = new Router({
    mode: 'history',
    // base: '/vue_demo_page/',
    scrollBehavior: () => ({ y: 0 }),
    routes,
  })

  return router;
}

export { createRouter };
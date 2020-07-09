import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  
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

export default createRouter;
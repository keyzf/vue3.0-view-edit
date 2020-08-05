import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: 'home' }
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach = function (to, from, next) {

  console.log('router beforeEach')
  next();
}

export default router;
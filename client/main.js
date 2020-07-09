import Vue from 'vue';

import './common/less/reset.less'

import createRouter from './router'
import createStore from './store'

import App from './app.vue';

new Vue({
  router: createRouter(),
  store: createStore(),
  render: h => h(App)
}).$mount('#app')
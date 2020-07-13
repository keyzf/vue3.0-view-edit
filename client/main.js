import Vue from 'vue';

import './common/less/reset.less'

import createRouter from './router'
import createStore from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from './common/js/ajax'
Vue.prototype.$post = axios.post;
Vue.prototype.$get = axios.get;


import App from './app.vue';

new Vue({
  router: createRouter(),
  store: createStore(),
  render: h => h(App)
}).$mount('#app')
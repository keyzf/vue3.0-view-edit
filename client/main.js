// import Vue from 'vue';
import { createApp } from 'vue'

import './common/less/reset.less'

import router from './router'
import store from './store'

import axios from './common/js/ajax'
// Vue.prototype.$post = axios.post;
// Vue.prototype.$get = axios.get;


import App from './app.vue';

const app = createApp(App)
app.use(router);
app.use(store);
router.isReady().then(()=>{
  app.mount('#app')
});

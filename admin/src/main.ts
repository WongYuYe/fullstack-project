import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import './plugins/avue'
import router from './router'
import '@smallwei/avue/lib/index.css';
Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000'
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

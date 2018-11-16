import Vue from 'vue'
import axios from 'axios'
import VueJWT from 'vuejs-jwt'

import App from './App.vue'
import router from './router'
import store from './store'


import auth from './libraries/auth.js'
import user_service from './libraries/service/user.service.js'

Vue.use(auth);
Vue.use(user_service);
Vue.use(VueJWT);


window.axios = axios
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/todos/1'
// axios.defaults.baseURL = 'https://me.123'

var bus = new Vue();



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'popper.js'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'

import './vueForm'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

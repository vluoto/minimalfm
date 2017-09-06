import Vue from 'vue'
import localforage from 'localforage'

import App from './App'
import router from './router'
import store from './store'

localforage.config({
  name: 'minimalfm'
})

Vue.use(require('vue-moment'))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

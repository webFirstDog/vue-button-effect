import Vue from 'vue'
import App from './App.vue'

import vueElasticTab from './lib/index'
Vue.use(vueElasticTab)


new Vue({
  el: '#app',

  render: h => h(App)
})

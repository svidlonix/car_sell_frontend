import Vue from 'vue'
import router from './components/router'
import VueResource from 'vue-resource'
import VueFlashMessage from 'vue-flash-message'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-flash-message/dist/vue-flash-message.min.css'
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueFlashMessage)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})

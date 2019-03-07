import Vue from 'vue'
import router from './components/router'
import VueResource from 'vue-resource'
import VueFlashMessage from 'vue-flash-message'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-flash-message/dist/vue-flash-message.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAlt, faGasPump, faCogs, faRoad, faClock } from '@fortawesome/free-solid-svg-icons'
Vue.config.productionTip = false

library.add(faTachometerAlt, faGasPump, faCogs, faRoad, faClock)

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueFlashMessage)
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})

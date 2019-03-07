import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../Hello.vue'
import About from '../About.vue'
import Faqs from '../Faqs.vue'
import Adverts from '../Adverts.vue'
import Contacts from '../Contacts.vue'
import LogIn from '../Login.vue'
import Profile from '../Profile.vue'
import AdvertForm from '../AdvertForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Hello, alias: '/home' },
    { path: '/about', component: About },
    { path: '/adverts', component: Adverts },
    { path: '/contacts', component: Contacts },
    { path: '/login', component: LogIn },
    { path: '/faqs', component: Faqs },
    { path: '/profile', component: Profile },
    { path: '/new_advert', component: AdvertForm }
  ]
})

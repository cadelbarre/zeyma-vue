import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

/*--------------  Importamos Caurrosel  --------------*/
import VueAgile from 'vue-agile'
Vue.use(VueAgile)

/*--------------  Importamos CSS  --------------*/
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

/*--------------  Importamos AOS - Animation on Scroll  --------------*/
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

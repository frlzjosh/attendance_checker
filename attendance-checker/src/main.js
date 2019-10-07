import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/indexStore.js'
import './registerServiceWorker'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDog, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDog)
library.add(faArrowAltCircleLeft)
library.add(faArrowAltCircleRight)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

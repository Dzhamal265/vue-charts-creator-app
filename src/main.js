import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import Vue from 'vue'
import VModal from 'vue-js-modal'

import { API_URL, JWT_TOKEN } from './constants.js'
import App from './App.vue'
import router from './router'
import ApiSerie from './services/api.service'

Vue.config.productionTip = false

Vue.use(VModal)

ApiSerie.init(API_URL)
ApiSerie.setHeader('Authorization', `Bearer ${JWT_TOKEN}`)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

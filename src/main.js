import Vue from 'vue'
import './plugins/axios'
import vuetify from './plugins/vuetify';
import router from './router'
import App from "../App";
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

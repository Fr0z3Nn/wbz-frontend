import Vue from 'vue'
import './plugins/axios'
import vuetify from './plugins/vuetify';
import router from './router'
import App from "../App";

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

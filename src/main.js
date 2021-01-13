import Vue from 'vue'
import './plugins/axios'
import MainPage from './views/MainPage.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(MainPage)
}).$mount('#app')

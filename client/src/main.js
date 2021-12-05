import Vue from 'vue'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

app.use(PrimeVue);

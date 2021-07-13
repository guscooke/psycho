import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
// import VueFormulate from '@braid/vue-formulate'
const moment = require('moment')
require('moment/locale/es')

Vue.config.productionTip = false
// Vue.use(VueFormulate)
Vue.use(require('vue-moment'),
{
  moment
});

console.log(Vue.moment().locale())


new Vue({
  vuetify,
  router,
  store,


  render: h => h(App)
}).$mount('#app')

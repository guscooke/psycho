import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import Team from './views/Team.vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.config.productionTip = false

// export const db = firebase.firestore()

new Vue({
  vuetify,
  router,

  render: h => h(App)
}).$mount('#app')

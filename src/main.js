// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify' // path to vuetify export
import store from './store'

Vue.config.productionTip = false

store.dispatch('getUser')

/* eslint-disable no-new */
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

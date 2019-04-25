// import Vue from 'vue'
// import App from './App.vue'
// import router from './routes/router.js'
// import store from './store'
// import './registerServiceWorker'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI)

// import VueMui from './../packages/index.js'
// Vue.use(VueMui)

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')


import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes/router.js'
import store from './store'
import './registerServiceWorker'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import VueMui from './../packages/index.js'
Vue.use(VueMui)

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

console.log(router, '2222')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

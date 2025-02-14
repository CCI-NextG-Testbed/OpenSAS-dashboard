import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import * as VueGoogleMaps from 'vue2-google-maps'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import VueSocketIO from 'vue-socket.io'
import * as io from "socket.io-client";
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://10.147.20.75:8000',
  options: {  transports: ['websocket', 'polling',  'flashsocket'] } //Optional options
}))

import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAij8pn83cR5Z8dis1ml3pd2K-xJK8mfr4',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

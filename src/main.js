// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入vue-native-websocket包并挂载，从此每个组件都可以通过this.$socket拿到socket对象，而且是同一个。
// 并且每个组件可以自己定义onmessage方法，获取服务器返回的evt和evt.data
import VueNativeSock from 'vue-native-websocket'
Vue.use(VueNativeSock, 'ws://114.80.110.63:34567')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
//css 引入失效,下面import引入的样式生效
import '../static/css/reset.css'
import './common/icon/iconfont.css'
Vue.config.productionTip = false

new Vue({

  // store,
  el:"#app",
  render: h => h(App),
  router
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入阿里图标库
import 'assets/css/font_84hl3xd1f42/iconfont.css'

// 导入全局样式
import 'assets/css/golbal.css'

// 按需导入element-ui组件
import element from './element/index'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

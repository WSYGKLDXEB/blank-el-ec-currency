import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { ECharts } from 'echarts'
import * as echarts from 'echarts'
import './plugins/element.js'
import '@/assets/css/index.less'
// import '@/assets/css/blank-px.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')

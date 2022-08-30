import Vue from 'vue'
import App from './App.vue'
import FfUI from '../packages/index'

Vue.config.productionTip = false
Vue.use(FfUI)
new Vue({
  render: h => h(App),
}).$mount('#app')

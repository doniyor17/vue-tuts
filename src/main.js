import Vue from 'vue'
import App from './App.vue'
import color from './color'

Vue.directive('colored', color)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


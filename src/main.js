import Vue from 'vue'
import App from './App.vue'
import PrettyCheckbox from 'pretty-checkbox-vue'

Vue.use(PrettyCheckbox)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import numeral from "numeral";

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

// Filters
Vue.filter('dateString', function (value) {
  let date = new Date(value)
  date.setDate(date.getDate())
  return date.toDateString()
})

Vue.filter("formatNumber", function (value) {
  return numeral(value).format("0,0");
})

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})

import Vue from 'vue'
import App from './App.vue'
import List from './List.vue'
import Tree from './Tree.vue'

Vue.component('app-list', List)
Vue.component('app-tree', Tree)

new Vue({
  el: '#app',
  render: h => h(App)
})

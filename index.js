import Vue from 'vue';
import { App } from './app';
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
});
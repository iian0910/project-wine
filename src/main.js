import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import Vue from 'vue';
import VueMeta from 'vue-meta';
import '../node_modules/@popperjs/core/dist/umd/popper.min.js';
import App from './App.vue';

Vue.config.productionTip = false
Vue.use(VueMeta)

new Vue({
  render: h => h(App),
}).$mount('#app')

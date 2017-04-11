// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';



import './common/js/jquery-1.11.3.min.js';
import './common/bootstrap/css/bootstrap.min.css';
import './common/bootstrap/js/bootstrap.min.js';

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})

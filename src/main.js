// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
//import router from './router';
import VueRouter from 'vue-router';


import './common/js/jquery-1.11.3.min.js';
import './common/bootstrap/css/bootstrap.min.css';
import './common/bootstrap/js/bootstrap.min.js';

Vue.use(VueRouter);
import center from './components/center/center';
import login from './components/login/login';
import register from './components/register/register';
import book1 from './components/book1/book1';
import book2 from './components/book2/book2';

Vue.config.productionTip = false


const routes=[
{path:'/book1',component:book1},
{path:'/login',component:login},
{path:'/center',component:center},
{path:'/register',component:register},
{path:'/book2',component:book2},
]

const  router=new VueRouter({
	routes
})
const app=new Vue({
	router,
	render:h=>h(App)
}).$mount('#app')
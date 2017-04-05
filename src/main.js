// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
//import router from './router';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import center from './components/center/center';
import login from './components/login/login';
import register from './components/register/register';

Vue.config.productionTip = false


const routes=[
{path:'/',redirect:'/login'},
{path:'/login',component:login},
{path:'/center',component:center},
{path:'/register',component:register},
]

const  router=new VueRouter({
	routes
})
const app=new Vue({
	router,
	render:h=>h(App)
}).$mount('#app')
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
//import router from './router';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import goods from './components/goods/goods';
import sellers from './components/sellers/sellers';
import ratings from './components/ratings/ratings';

Vue.config.productionTip = false


const routes=[
{path:'/',redirect:'/sellers'},
{path:'/sellers',component:sellers},
{path:'/goods',component:goods},
{path:'/ratings',component:ratings},
]

const  router=new VueRouter({
	routes
})
const app=new Vue({
	router,
	render:h=>h(App)
}).$mount('#app')
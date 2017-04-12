import Vue from 'vue'
import Router from 'vue-router'
//import VueRouter from 'vue-router';
import book1 from '../components/book1/book1'
import login from '../components/login/login'
import register from '../components/register/register'
import center from '../components/center/center'
import book2 from '../components/book2/book2'
import paypage from '../components/paypage/paypage'


Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {//初始化
      path: '/',
      name: 'book1',
      component: book1
    },
    {//首页
      path: '/book1',
      name: 'book1',
      component: book1
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/register',
      name: 'register',
      component: register
    },{
      path: '/center',
      name: 'center',
      component: center
    },
    {
      path: '/book2',
      name: 'book2',
      component: book2
    },
    {
      path: '/paypage',
      name: 'paypage',
      component: paypage
    }
  ]
});


import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [

    // router/index.js

  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue'),
    meta: {
      index: 2
    }
  },
  // 首页我们需要默认空路径重定向到 home 下，避免空页面
  {
    path: '/',
    name: 'home1',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'home',
    component:Home,
    meta: {
      index: 1,
    },
  },
  {
    path: '/category',
    name: 'category',
    component: () =>
      import(/* webpackChunkName: "category" */ '../views/Category.vue'),
    meta: {
      index: 1,
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      index: 1,
    },
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    meta: {
      index: 1,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
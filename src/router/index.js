import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      index: 1,
    },
    component: () => import('../components/Viewer.vue'),
    children: [
      {
        path: '/table_test',
        name: '表格样例',
        component: () => import('../views/tableTest.vue'),
        meta: {
          index: 2,
          needAutho: true,
        },
      }, {
        path: '/charts',
        name: '图标样例',
        component: () => import('../views/charts.vue'),
        meta: {
          index: 3,
        },
      },
    ],
  }, {
    path: '/sons',
    name: 'sons',
    component: () => import('../components/Viewer.vue'),
    meta: {
      index: 5,
    },
    children: [{
      path: '/sons/table_test',
      name: '表格样例sons',
      component: () => import('../views/tableTest.vue'),
      meta: {
        index: 7,
        needAutho: true,
      },
    }, {
      path: '/sons/charts',
      name: '图标样例sons',
      component: () => import('../views/charts.vue'),
      meta: {
        index: 6,
      },
    }],
  }, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      index: 4,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

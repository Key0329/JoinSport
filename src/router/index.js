import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'FrontLayout',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/front/LoginView.vue'),
      },
      {
        path: 'JoinList',
        name: 'JoinList',
        component: () => import('../views/front/JoinListView.vue'),
        children: [
          {
            path: 'JoinListHot',
            name: 'JoinListHot',
            component: () => import('../views/front/JoinListHotView.vue'),
          },
          {
            path: 'JoinListNew',
            name: 'JoinListNew',
            component: () => import('../views/front/JoinListNewView.vue'),
          },
        ],
      },
      {
        path: 'JoinDetail',
        name: 'JoinDetail',
        component: () => import('../views/front/JoinDetailView.vue'),
      },
      {
        path: 'CreateJoin',
        name: 'CreateJoin',
        component: () => import('../views/front/CreateJoinView.vue'),
        children: [
          {
            path: 'step1',
            name: 'CreateJoinStepOne',
            component: () => import('../views/front/CreateJoinStepOneView.vue'),
          },
          {
            path: 'step2',
            name: 'CreateJoinStepTwo',
            component: () => import('../views/front/CreateJoinStepTwoView.vue'),
          },
          {
            path: 'step3',
            name: 'CreateJoinStepThree',
            component: () =>
              import('../views/front/CreateJoinStepThreeView.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import('../views/admin/AdminHomeView.vue'),
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import('../views/admin/AdminOrdersView.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;

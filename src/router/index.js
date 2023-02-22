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
        path: 'List',
        name: 'List',
        component: () => import('../views/front/ListView.vue'),
        children: [
          {
            path: 'JoinList',
            name: 'JoinList',
            component: () => import('../views/front/JoinListView.vue'),
          },
          {
            path: 'GroupList',
            name: 'GroupList',
            component: () => import('../views/front/GroupListView.vue'),
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

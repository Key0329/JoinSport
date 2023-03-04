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
        meta: {
          title: 'Join Sport',
        },
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/front/LoginView.vue'),
        meta: {
          title: 'Login in - Join Sport',
        },
      },
      {
        path: 'JoinList',
        name: 'JoinList',
        component: () => import('../views/front/JoinListView.vue'),
        children: [
          {
            path: 'Hot/:page(\\d+)?',
            name: 'Hot',
            component: () => import('../views/front/JoinListHotView.vue'),
            meta: {
              title: 'Hot - Join Sport',
            },
          },
          {
            path: 'New/:page(\\d+)?',
            name: 'New',
            component: () => import('../views/front/JoinListNewView.vue'),
            meta: {
              title: 'New - Join Sport',
            },
          },
        ],
      },
      {
        path: 'JoinDetail',
        name: 'JoinDetail',
        component: () => import('../views/front/JoinDetailView.vue'),
        meta: {
          title: 'Activity Detail - Join Sport',
        },
      },
      {
        path: 'CreateJoin',
        name: 'CreateJoin',
        component: () => import('../views/front/CreateJoinView.vue'),
        children: [
          {
            path: 'step1',
            name: 'CreateJoinInfo',
            component: () => import('../views/front/CreateJoinInfoView.vue'),
            meta: {
              title: 'Info - createJoin - Join Sport',
            },
          },
          {
            path: 'step2',
            name: 'CreateJoinTags',
            component: () => import('../views/front/CreateJoinTagsView.vue'),
            meta: {
              title: 'Tags - createJoin - Join Sport',
            },
          },
          {
            path: 'step3',
            name: 'CreateJoinDescription',
            component: () =>
              import('../views/front/CreateJoinDescriptionView.vue'),
            meta: {
              title: 'Description - createJoin - Join Sport',
            },
          },
          {
            path: 'step4',
            name: 'CreateJoinPreviewView',
            component: () => import('../views/front/CreateJoinPreviewView.vue'),
            meta: {
              title: 'Preview - createJoin - Join Sport',
            },
          },
          {
            path: 'step5',
            name: 'CreateJoinSuccessView',
            component: () => import('../views/front/CreateJoinSuccessView.vue'),
            meta: {
              title: 'Success - createJoin - Join Sport',
            },
          },
        ],
      },
      {
        path: 'Member',
        name: 'Member',
        component: () => import('../views/front/MemberView.vue'),
        children: [
          {
            path: 'List',
            name: 'List',
            component: () => import('../views/front/MemberListView.vue'),
            meta: {
              title: 'List - Member - Join Sport',
            },
          },
          {
            path: 'Host',
            name: 'Host',
            component: () => import('../views/front/MemberHostView.vue'),
            meta: {
              title: 'Host - Member - Join Sport',
            },
          },
          {
            path: 'Collection',
            name: 'Collection',
            component: () => import('../views/front/MemberCollectionView.vue'),
            meta: {
              title: 'Collection - Member - Join Sport',
            },
          },
          {
            path: 'Account',
            name: 'Account',
            component: () => import('../views/front/MemberAccountView.vue'),
            meta: {
              title: 'Account - Member - Join Sport',
            },
          },
          {
            path: 'Info',
            name: 'Info',
            component: () => import('../views/front/MemberInfoView.vue'),
            meta: {
              title: 'Info - Member - Join Sport',
            },
          },
          {
            path: 'Calendar',
            name: 'Calendar',
            component: () => import('../views/front/MemberCalendarView.vue'),
            meta: {
              title: 'Calendar - Member - Join Sport',
            },
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
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router;

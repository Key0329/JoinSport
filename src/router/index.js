import { createRouter, createWebHashHistory } from 'vue-router';
import authStore from '@/stores/front/authStore';

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
          requiresAuth: false,
        },
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/front/LoginView.vue'),
        meta: {
          title: 'Login - Join Sport',
          requiresAuth: false,
        },
      },
      {
        path: 'Register',
        name: 'Register',
        component: () => import('../views/front/RegisterView.vue'),
        meta: {
          title: 'Register - Join Sport',
          requiresAuth: false,
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
              requiresAuth: false,
            },
          },
          {
            path: 'New/:page(\\d+)?',
            name: 'New',
            component: () => import('../views/front/JoinListNewView.vue'),
            meta: {
              title: 'New - Join Sport',
              requiresAuth: false,
            },
          },
        ],
      },
      {
        path: 'JoinDetail/id=:id',
        name: 'JoinDetail',
        component: () => import('../views/front/JoinDetailView.vue'),
        meta: {
          title: 'Activity Detail - Join Sport',
          requiresAuth: true,
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
              requiresAuth: true,
            },
          },
          {
            path: 'step2',
            name: 'CreateJoinTags',
            component: () => import('../views/front/CreateJoinTagsView.vue'),
            meta: {
              title: 'Tags - createJoin - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'step3',
            name: 'CreateJoinDescription',
            component: () =>
              import('../views/front/CreateJoinDescriptionView.vue'),
            meta: {
              title: 'Description - createJoin - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'step4',
            name: 'CreateJoinPreviewView',
            component: () => import('../views/front/CreateJoinPreviewView.vue'),
            meta: {
              title: 'Preview - createJoin - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'step5',
            name: 'CreateJoinSuccessView',
            component: () => import('../views/front/CreateJoinSuccessView.vue'),
            meta: {
              title: 'Success - createJoin - Join Sport',
              requiresAuth: true,
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
              requiresAuth: true,
            },
          },
          {
            path: 'Host',
            name: 'Host',
            component: () => import('../views/front/MemberHostView.vue'),
            meta: {
              title: 'Host - Member - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'Edit',
            name: 'Edit',
            component: () => import('../views/front/MemberEditView.vue'),
            meta: {
              title: 'Edit - Member - Join Sport',
              requiresAuth: true,
            },
            children: [
              {
                path: 'EditInfo=:id&title=:title',
                name: 'EditInfo',
                component: () =>
                  import('../views/front/MemberEditInfoView.vue'),
                meta: {
                  title: 'EditInfo - Member - Join Sport',
                  requiresAuth: true,
                },
              },
              {
                path: 'EditTags=:id&title=:title',
                name: 'EditTags',
                component: () =>
                  import('../views/front/MemberEditTagsView.vue'),
                meta: {
                  title: 'EditTags - Member - Join Sport',
                  requiresAuth: true,
                },
              },
              {
                path: 'EditContent=:id&title=:title',
                name: 'EditContent',
                component: () =>
                  import('../views/front/MemberEditContentView.vue'),
                meta: {
                  title: 'EditContent - Member - Join Sport',
                  requiresAuth: true,
                },
              },
            ],
          },
          {
            path: 'Collection',
            name: 'Collection',
            component: () => import('../views/front/MemberCollectionView.vue'),
            meta: {
              title: 'Collection - Member - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'Tags',
            name: 'Tags',
            component: () => import('../views/front/MemberTagsView.vue'),
            meta: {
              title: 'Tags - Member - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'Info',
            name: 'Info',
            component: () => import('../views/front/MemberInfoView.vue'),
            meta: {
              title: 'Info - Member - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'Calendar',
            name: 'Calendar',
            component: () => import('../views/front/MemberCalendarView.vue'),
            meta: {
              title: 'Calendar - Member - Join Sport',
              requiresAuth: true,
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

// 檢查登入權限
router.beforeEach(async (to) => {
  const auth = authStore();
  if (to.meta.requiresAuth && !auth.checkLogIn()) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    auth.alertLogIn();
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }

  return Promise.resolve();
});

// HTML title
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router;

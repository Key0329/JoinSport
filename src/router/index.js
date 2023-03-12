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
          title: '首頁 - Join Sport',
          requiresAuth: false,
        },
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/front/LoginView.vue'),
        meta: {
          title: '登入 - Join Sport',
          requiresAuth: false,
        },
      },
      {
        path: 'Register',
        name: 'Register',
        component: () => import('../views/front/RegisterView.vue'),
        meta: {
          title: '註冊 - Join Sport',
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
              title: '揪團列表-熱門 - Join Sport',
              requiresAuth: false,
            },
          },
          {
            path: 'Update/:page(\\d+)?',
            name: 'Update',
            component: () => import('../views/front/JoinListUpdateView.vue'),
            meta: {
              title: '揪團列表-最近更新 - Join Sport',
              requiresAuth: false,
            },
          },
          {
            path: 'Coming/:page(\\d+)?',
            name: 'Coming',
            component: () => import('../views/front/JoinListComingView.vue'),
            meta: {
              title: '揪團列表-即將到來 - Join Sport',
              requiresAuth: false,
            },
          },
          {
            path: 'Search/text=:text&area=:area&date=:date&page=:page(\\d+)?',
            name: 'Search',
            component: () => import('../views/front/JoinListSearchView.vue'),
            meta: {
              title: '揪團列表-搜尋揪團 - Join Sport',
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
          title: '揪團詳情 - Join Sport',
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
              title: '開團資訊 - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'step2',
            name: 'CreateJoinTags',
            component: () => import('../views/front/CreateJoinTagsView.vue'),
            meta: {
              title: '設定標籤 - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'step3',
            name: 'CreateJoinDescription',
            component: () =>
              import('../views/front/CreateJoinDescriptionView.vue'),
            meta: {
              title: '開團介紹 - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'step4',
            name: 'CreateJoinPreviewView',
            component: () => import('../views/front/CreateJoinPreviewView.vue'),
            meta: {
              title: '頁面預覽 - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'step5',
            name: 'CreateJoinSuccessView',
            component: () => import('../views/front/CreateJoinSuccessView.vue'),
            meta: {
              title: '開團成功 - Join Sport',
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
              title: '會員揪團列表 - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'Host',
            name: 'Host',
            component: () => import('../views/front/MemberHostView.vue'),
            meta: {
              title: '會員主持列表 - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'Edit',
            name: 'Edit',
            component: () => import('../views/front/MemberEditView.vue'),
            meta: {
              title: '編輯開團 - Join Sport',
              requiresAuth: true,
            },
            children: [
              {
                path: 'EditInfo=:id&title=:title',
                name: 'EditInfo',
                component: () =>
                  import('../views/front/MemberEditInfoView.vue'),
                meta: {
                  title: '編輯開團資訊 - Join Sport',
                  requiresAuth: true,
                },
              },
              {
                path: 'EditTags=:id&title=:title',
                name: 'EditTags',
                component: () =>
                  import('../views/front/MemberEditTagsView.vue'),
                meta: {
                  title: '編輯開團標籤 - Join Sport',
                  requiresAuth: true,
                },
              },
              {
                path: 'EditContent=:id&title=:title',
                name: 'EditContent',
                component: () =>
                  import('../views/front/MemberEditContentView.vue'),
                meta: {
                  title: '編輯開團內文 - Join Sport',
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
              title: '會員收藏列表 - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'Tags',
            name: 'Tags',
            component: () => import('../views/front/MemberTagsView.vue'),
            meta: {
              title: '會員標籤 - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'Info',
            name: 'Info',
            component: () => import('../views/front/MemberInfoView.vue'),
            meta: {
              title: '會員資訊 - Join Sport',
              requiresAuth: true,
            },
          },
          {
            path: 'Calendar',
            name: 'Calendar',
            component: () => import('../views/front/MemberCalendarView.vue'),
            meta: {
              title: '揪團行事曆 - Join Sport',
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

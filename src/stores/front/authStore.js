import { defineStore } from 'pinia';

export default defineStore('authStore', {
  state: () => ({
    isLoggedIn: false,
  }),
  getters: {},
  actions: {
    checkLogIn() {
      if (this.getToken()) {
        this.isLoggedIn = true;
      }

      if (!this.getToken()) {
        this.isLoggedIn = false;
      }

      return this.isLoggedIn;
    },
    getToken() {
      return document.cookie.replace(
        /(?:(?:^|.*;\s*)JoinSportToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
    },
    getUserId() {
      return document.cookie.replace(
        /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
    },
    alertLogIn() {
      alert('請先登入');
    },
    logOut(router) {
      document.cookie =
        'JoinSportToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      document.cookie =
        'JoinSportUserId=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      this.isLoggedIn = false;
      alert('登出成功');
      router.push('/login');
    },
  },
});

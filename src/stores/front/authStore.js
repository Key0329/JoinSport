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
  },
});

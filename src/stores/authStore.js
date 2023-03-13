import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL } = import.meta.env;

export default defineStore('authStore', {
  state: () => ({
    isLoggedIn: false,
    user: {},
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
        /(?:(?:^|.*;\s*)JoinSportUserId\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
    },
    getUser(id) {
      const path = `${VITE_URL}/users/${id}`;

      axios
        .get(path)
        .then((res) => {
          this.user = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    alertLogIn() {
      Swal.fire({
        icon: 'warning',
        title: '請先登入',
        showConfirmButton: false,
        timer: 1500,
      });
    },
    logOut(router) {
      document.cookie =
        'JoinSportToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      document.cookie =
        'JoinSportUserId=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      this.isLoggedIn = false;
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '登出成功',
        showConfirmButton: false,
        timer: 1500,
      });
      router.push('/login');
    },
  },
});

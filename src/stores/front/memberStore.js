import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL } = import.meta.env;

export default defineStore('memberStore', {
  state: () => ({
    user: '',
  }),
  getters: {},
  actions: {
    getMemberData(id) {
      const path = `${VITE_URL}/users/${id}`;

      axios
        .get(path)
        .then((res) => {
          this.user = res.data;
        })
        .catch((err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.response.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    editMemberData(data) {
      const path = `${VITE_URL}/users/${data.id}`;

      axios
        .patch(path, data)
        .then(() => {
          this.getMemberData(this.user.id);
        })
        .catch((err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.response.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
  },
});

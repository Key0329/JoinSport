import { defineStore } from 'pinia';
import axios from 'axios';

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
          console.log(err);
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
          console.log(err);
        });
    },
  },
});

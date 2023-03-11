import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL } = import.meta.env;

export default defineStore('sportsStore', {
  state: () => ({
    tags: [],
  }),
  getters: {
    tagList() {
      const tagList = this.tags.map((tag) => {
        return {
          label: tag,
          value: tag,
        };
      });

      return tagList;
    },
  },
  actions: {
    getTags() {
      const path = `${VITE_URL}/sports`;

      axios
        .get(path)
        .then((res) => {
          this.tags = res.data;
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

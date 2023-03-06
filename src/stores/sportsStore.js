import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default defineStore('sportsStore', {
  state: () => ({
    sports: [],
  }),
  getters: {
    sportList() {
      const sportList = this.sports.map((sport) => {
        return {
          label: sport,
          value: sport,
        };
      });

      return sportList;
    },
  },
  actions: {
    getSportsData() {
      const path = `${VITE_URL}/sports`;

      axios
        .get(path)
        .then((res) => {
          this.sports = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});

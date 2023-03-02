import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default defineStore('joinActivities', {
  state: () => ({
    activitiesList: [],
  }),
  getters: {},
  actions: {
    async getActivities() {
      try {
        const path = `${VITE_URL}/activities`;
        const res = await axios.get(path);
        this.activitiesList = res.data;
        console.log(this.activitiesList);
      } catch (error) {
        console.dir(error);
        alert('error!');
      }
    },
  },
});

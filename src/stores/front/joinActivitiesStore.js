import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default defineStore('joinActivities', {
  state: () => ({
    activitiesList: [],
    orders: [],
  }),
  getters: {
    activitiesListChangeDate() {
      const date = this.activitiesList.map((item) => {
        const arr = item.date.split('-');
        const newDate = `${arr[1]}/${arr[2]}`;
        return {
          ...item,
          date: newDate,
        };
      });
      return date;
    },
    newData() {
      const tempData = JSON.parse(JSON.stringify(this.orders));
      const result = tempData.reduce((acc, { user, activity }) => {
        const activityId = activity.id;
        const { title } = activity;
        const { img } = user;

        if (!acc[activityId]) {
          acc[activityId] = { title, participants: [], numParticipants: 0 };
        }
        acc[activityId].participants.push(img);
        acc[activityId].numParticipants = acc[activityId].participants.length;
        return acc;
      }, {});

      console.log(result);
    },
  },
  actions: {
    async getActivities() {
      try {
        const path = `${VITE_URL}/activities`;
        const res = await axios.get(path);
        this.activitiesList = res.data;
        // console.log(this.activitiesList);
      } catch (error) {
        console.dir(error);
        alert('error!');
      }
    },
    async getOrders() {
      try {
        const path = `${VITE_URL}/orders?_expand=activity&_expand=user`;
        const res = await axios.get(path);
        this.orders = res.data;
        console.log(this.orders);
      } catch (error) {
        console.dir(error);
        alert('error!');
      }
    },
  },
});

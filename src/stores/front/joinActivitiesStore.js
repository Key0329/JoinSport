import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default defineStore('joinActivities', {
  state: () => ({
    activitiesList: [],
    orders: [],
    currentPage: 1,
    pageLimit: 6,
  }),
  getters: {
    restructureActivitiesList() {
      const newList = [];
      // 以 activitiesList 為基礎，調整日期格式
      this.activitiesList.forEach((item) => {
        const arr = item.date.split('-');
        const newDate = `${arr[1]}/${arr[2]}`;

        newList.push({
          ...item,
          date: newDate,
          participants: [],
          numParticipants: 0,
          participantsId: [],
          originDate: item.date,
        });
      });

      // 以 orders 為基礎，整理出參與者與參與人數
      this.orders.forEach(({ user, activity }) => {
        const activityId = activity.id;
        const { img } = user;
        const { id } = user;

        // 先確認 newList[activityId - 1] 是否存在，不存在就建立一個空的物件
        newList[activityId - 1] = newList[activityId - 1] || {
          participants: [],
          participantsId: [],
        };
        // 將參與者的圖片路徑加入 participants 陣列中
        newList[activityId - 1].participants.push(img);
        newList[activityId - 1].numParticipants =
          newList[activityId - 1].participants.length;
        newList[activityId - 1].participantsId.push(id);
      });

      // 維持大頭貼張數在 3 張
      const restructureActivitiesList = newList.map((item) => {
        const newItem = {
          ...item,
          participants: item.participants.slice(0, 3),
        };

        return newItem;
      });

      return restructureActivitiesList;
    },
  },
  actions: {
    getActivities() {
      const path = `${VITE_URL}/activities`;
      axios
        .get(path)
        .then((res) => {
          this.activitiesList = res.data;
        })
        .catch((err) => {
          console.log(err);
          alert('err');
        });
    },

    getOrders() {
      const path = `${VITE_URL}/orders?isCancelled=false&_expand=activity&_expand=user`;
      axios
        .get(path)
        .then((res) => {
          this.orders = res.data;
        })
        .catch((err) => {
          console.log(err);
          alert('err');
        });
    },
    changePage(currentPage = 1) {
      this.currentPage = currentPage;
    },
    arrangePage(list) {
      const start = (this.currentPage - 1) * this.pageLimit;
      const end = this.currentPage * this.pageLimit;

      const sliced = list.slice(start, end);

      const pageTotal = Math.ceil(
        this.restructureActivitiesList.length / this.pageLimit
      );

      const data = {
        list: sliced,
        pageTotal,
      };

      return data;
    },
  },
});

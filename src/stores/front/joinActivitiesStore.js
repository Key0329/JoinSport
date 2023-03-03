import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default defineStore('joinActivities', {
  state: () => ({
    activitiesList: [],
    orders: [],
  }),
  getters: {
    restructureActivitiesList() {
      const newData = [];

      // 以 orders 為基礎，整理出參與者與參與人數
      this.orders.forEach(({ user, activity }) => {
        const activityId = activity.id;
        const { title } = activity;
        const { img } = user;

        // 將 activityId 當作 key，整理出參與者資訊
        if (!newData[activityId - 1]) {
          newData[activityId - 1] = {
            title,
            date: '',
            description: '',
            location: '',
            startTime: '',
            mainImg: '',
            maxJoinNum: 0,
            participants: [],
            numParticipants: 0,
            tags: [],
            address: '',
            updateDate: '',
          };
        }

        // 將參與者的圖片路徑加入 participants 陣列中
        newData[activityId - 1].participants.push(img);
        newData[activityId - 1].numParticipants =
          newData[activityId - 1].participants.length;
      });

      // 以 activitiesList 為基礎，調整日期格式
      this.activitiesList.forEach((item) => {
        const activityId = item.id;
        const {
          title,
          description,
          location,
          startTime,
          mainImg,
          maxJoinNum,
          tags,
          updateDate,
          address,
        } = item;
        const arr = item.date.split('-');
        const newDate = `${arr[1]}/${arr[2]}`;

        // 如果 newData 陣列中已經有這個 activityId，就將日期加入 newData 中對應的物件
        if (newData[activityId - 1]) {
          newData[activityId - 1].date = newDate;
          newData[activityId - 1].description = description;
          newData[activityId - 1].location = location;
          newData[activityId - 1].startTime = startTime;
          newData[activityId - 1].mainImg = mainImg;
          newData[activityId - 1].maxJoinNum = maxJoinNum;
          newData[activityId - 1].tags = tags;
          newData[activityId - 1].updateDate = updateDate;
          newData[activityId - 1].address = address;
        } else {
          // 如果 newData 陣列中沒有這個 activityId，就將這個活動加入 newData 陣列
          newData[activityId - 1] = {
            title,
            date: newDate,
            description,
            location,
            startTime,
            mainImg,
            maxJoinNum,
            participants: [],
            numParticipants: 0,
            updateDate,
            address,
            tags,
          };
        }
      });

      return newData;
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
      const path = `${VITE_URL}/orders?_expand=activity&_expand=user`;
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
  },
});

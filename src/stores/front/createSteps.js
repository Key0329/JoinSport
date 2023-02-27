import { defineStore } from 'pinia';
// import axios from 'axios';

export default defineStore('products', {
  state: () => ({
    paymentMethods: [
      {
        method: '我請客',
      },
      {
        method: '各付各的',
      },
    ],
    tags: [
      '攀岩',
      '籃球',
      '足球',
      '羽毛球',
      '網球',
      '游泳',
      '慢跑',
      '瑜伽',
      '拳擊',
      '跳繩',
      '滑板',
    ],
    isChildFormValid: null,
  }),
  getters: {
    joinNums() {
      return Array.from({ length: 20 }, (value, index) => ({
        number: index + 1,
      }));
    },
    startTimes() {
      const start = new Date('2000-01-01T00:00:00Z');
      const end = new Date('2000-01-02T00:00:00Z');
      const step = 15; // 間隔為15分鐘

      const times = Array.from(
        { length: (end - start) / (step * 60 * 1000) + 1 },
        (v, i) => {
          const t = new Date(start.getTime() + i * step * 60 * 1000);
          return t.toTimeString().slice(0, 5);
        }
      );

      const startTimes = times.map((time) => ({ time }));

      return startTimes;
    },
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
    updateFormValid(state) {
      this.isChildFormValid = state;
    },
  },
});

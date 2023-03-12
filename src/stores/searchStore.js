import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL } = import.meta.env;

export default defineStore('sportsStore', {
  state: () => ({
    tags: [],
    tempDistrict: [],
    filteredTags: [],
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
    randomList() {
      const list = this.tagList;
      const random = list.sort(() => Math.random() - 0.5);
      return random;
    },
    taiwanCities() {
      const cities = this.tempDistrict.map((city) => {
        return { name: city.name };
      });

      return cities;
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
    getTaiwanDistrictData() {
      const path =
        'https://gist.githubusercontent.com/abc873693/2804e64324eaaf26515281710e1792df/raw/a1e1fc17d04b47c564bbd9dba0d59a6a325ec7c1/taiwan_districts.json';

      axios.get(path).then((res) => {
        this.tempDistrict = res.data;
      });
      // 有正確拿到資料還是會跳 catch 待釐清
    },
    searchText(event) {
      setTimeout(() => {
        this.filteredTags = this.tagList.filter((tag) => {
          return tag.label.toLowerCase().match(event.query.toLowerCase());
        });
      }, 250);
    },
  },
});

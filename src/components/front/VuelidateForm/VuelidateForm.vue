<script>
import { mapState } from 'pinia';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@/utils/i18n-validators';
import createSteps from '@/stores/front/createStepsStore';

const { VITE_URL } = import.meta.env;

export default {
  name: 'VuelidateForm',

  setup: () => ({ v$: useVuelidate() }),
  props: {
    activity: {
      type: Object,
    },
  },
  data() {
    return {
      id: null,
      title: '清水斷崖獨木舟看日出',
      description:
        '在清水斷崖的美景中體驗獨木舟探險，享受刺激與放鬆的同時，感受大自然的震撼！',
      city: { name: '花蓮縣' },
      district: { name: '秀林鄉' },
      address: '花蓮縣秀林鄉清水斷崖',
      date: '2023-04-01',
      startTime: {
        time: '04:00',
      },
      paymentMethod: '',
      costPerPerson: 3000,
      maxJoinNum: { number: 12 },
      submitted: false,
      tempDistrict: [],
    };
  },
  computed: {
    dateString() {
      const date = new Date(this.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const dateString = `${year}-${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`;

      return dateString;
    },
    tempFormData() {
      const tempFormData = {
        title: this.title,
        description: this.description,
        city: this.city,
        district: this.district,
        address: this.address,
        date: this.dateString,
        startTime: this.startTime,
        paymentMethod: this.paymentMethod,
        costPerPerson: this.costPerPerson,
        maxJoinNum: this.maxJoinNum,
      };

      return tempFormData;
    },
    taiwanCities() {
      const cities = this.tempDistrict.map((city) => {
        return { name: city.name };
      });

      return cities;
    },
    districts() {
      const districtsMap = this.tempDistrict.reduce((acc, cur) => {
        const city = cur.name;
        const districts = cur.districts.map((district) => ({
          name: district.name,
        }));

        if (acc[city]) {
          acc[city].push(...districts);
        } else {
          acc[city] = districts;
        }
        return acc;
      }, {});

      return districtsMap[this.city?.name];
    },
    ...mapState(createSteps, ['joinNums', 'startTimes', 'paymentMethods']),
  },
  validations() {
    return {
      title: {
        required,
      },
      description: {
        required,
      },
      city: {
        required,
      },
      district: {
        required,
      },
      address: {
        required,
      },
      date: {
        required,
      },
      startTime: {
        required,
      },
      paymentMethod: {
        required,
      },
      costPerPerson: {
        required,
      },
      maxJoinNum: {
        required,
      },
    };
  },
  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      localStorage.setItem(
        'createTempFormData',
        JSON.stringify(this.tempFormData)
      );
    },
    handleUpdate(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      const data = {
        ...this.tempFormData,
        city: this.city.name,
        district: this.district.name,
        paymentMethod: this.paymentMethod.method,
        maxJoinNum: this.maxJoinNum.number,
      };
      const { id } = this;
      const path = `${VITE_URL}/activities/${id}`;

      this.$http
        .patch(path, data)
        .then(() => {
          this.$toast.add({
            severity: 'success',
            detail: '更新成功',
            life: 3000,
          });
          this.getFormData();
        })
        .catch((err) => {
          const errMessage = err.response.statusText;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage} 更新失敗`,
            life: 3000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },

    getFormData() {
      if (localStorage.getItem('createTempFormData')) {
        const tempForm = JSON.parse(localStorage.getItem('createTempFormData'));
        const [date] = tempForm.date.split('T');

        this.title = tempForm.title;
        this.description = tempForm.description;
        this.city = tempForm.city;
        this.district = tempForm.district;
        this.address = tempForm.address;
        this.date = date;
        this.costPerPerson = tempForm.costPerPerson;
        this.paymentMethod = tempForm.paymentMethod;
        this.startTime = tempForm.startTime;
        this.maxJoinNum = tempForm.maxJoinNum;
      }
    },
    getTaiwanDistrictData() {
      const path =
        'https://gist.githubusercontent.com/abc873693/2804e64324eaaf26515281710e1792df/raw/a1e1fc17d04b47c564bbd9dba0d59a6a325ec7c1/taiwan_districts.json';

      this.$http
        .get(path)
        .then((res) => {
          this.tempDistrict = res.data;
        })
        .catch((err) => {
          const errMessage = err;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage}123`,
            life: 3000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
    changeToZhTW() {
      this.$primevue.config.locale.emptyMessage = '請先選擇縣市';
      this.$primevue.config.locale.monthNames = [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月',
      ];
      this.$primevue.config.locale.dayNamesMin = [
        '日',
        '一',
        '二',
        '三',
        '四',
        '五',
        '六',
      ];
    },
  },
  watch: {
    activity(to) {
      this.id = to.id;
      this.title = to.title;
      this.description = to.description;
      this.city = { name: to.city };
      this.district = { name: to.district };
      this.address = to.address;
      this.date = to.date;
      this.costPerPerson = to.costPerPerson;
      this.paymentMethod = { method: to.paymentMethod };
      this.startTime = to.startTime;
      this.maxJoinNum = { number: to.maxJoinNum };
    },
  },
  mounted() {
    this.getFormData();
    this.getTaiwanDistrictData();
    this.changeToZhTW();
  },
};
</script>

<template src="./template.html"></template>

<style scoped>
:deep(.p-calendar .p-button) {
  border-left: 0;
}
</style>

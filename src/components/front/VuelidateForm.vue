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
      title: '',
      description: '',
      city: '',
      district: '',
      address: '',
      date: '',
      startTime: '',
      paymentMethod: '',
      costPerPerson: null,
      maxJoinNum: null,
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
            detail: '????????????',
            life: 1000,
          });
          this.getFormData();
        })
        .catch((err) => {
          const errMessage = err.response.statusText;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage} ????????????`,
            life: 1000,
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
        .then((err) => {
          const errMessage = err;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage}`,
            life: 1000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
    changeToZhTW() {
      this.$primevue.config.locale.emptyMessage = '??????????????????';
      this.$primevue.config.locale.monthNames = [
        '??????',
        '??????',
        '??????',
        '??????',
        '??????',
        '??????',
        '??????',
        '??????',
        '??????',
        '??????',
        '?????????',
        '?????????',
      ];
      this.$primevue.config.locale.dayNamesMin = [
        '???',
        '???',
        '???',
        '???',
        '???',
        '???',
        '???',
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

<template>
  <form class="flex flex-col gap-6">
    <!-- title -->
    <div>
      <div class="flex items-center">
        <label
          for="title"
          class="mr-4 whitespace-nowrap px-2"
          :class="{ 'p-error': v$.title.$invalid && submitted }"
          >????????????</label
        >
        <InputText
          id="title"
          type="text"
          v-model="v$.title.$model"
          placeholder="?????????????????????"
          class="w-full"
          :class="{ 'p-invalid': v$.title.$invalid && submitted }"
        />
      </div>

      <small
        v-if="(v$.title.$invalid && submitted) || v$.title.$pending.$response"
        class="p-error block text-end"
        >{{ v$.title.required.$message.replace('Value', '??????') }}</small
      >
    </div>
    <!-- description -->
    <div>
      <div class="flex items-center">
        <label
          for="description"
          class="mr-4 whitespace-nowrap px-2"
          :class="{ 'p-error': v$.description.$invalid && submitted }"
          >????????????</label
        >
        <InputText
          id="description"
          type="text"
          v-model="v$.description.$model"
          placeholder="?????????????????????"
          class="w-full"
          :class="{ 'p-invalid': v$.description.$invalid && submitted }"
        />
      </div>

      <small
        v-if="
          (v$.description.$invalid && submitted) ||
          v$.description.$pending.$response
        "
        class="p-error block text-end"
        >{{ v$.description.required.$message.replace('Value', '??????') }}</small
      >
    </div>
    <!-- location -->
    <div class="flex gap-4">
      <!-- city -->
      <div>
        <div class="flex items-center">
          <label
            for="formCity"
            class="mr-4 whitespace-nowrap px-2"
            :class="{ 'p-error': v$.city.$invalid && submitted }"
            >????????????</label
          >
          <PDropdown
            id="formCity"
            v-model="v$.city.$model"
            optionLabel="name"
            placeholder="?????????????????????"
            :options="taiwanCities"
            class="w-full"
            :class="{ 'p-invalid': v$.city.$invalid && submitted }"
          />
        </div>

        <small
          v-if="(v$.city.$invalid && submitted) || v$.city.$pending.$response"
          class="p-error block text-end"
          >{{ v$.city.required.$message.replace('Value', '??????') }}</small
        >
      </div>
      <!-- district -->
      <div>
        <PDropdown
          id="district"
          v-model="v$.district.$model"
          optionLabel="name"
          placeholder="?????????????????????"
          :options="districts"
          class="w-full"
          :class="{ 'p-invalid': v$.district.$invalid && submitted }"
        />
        <small
          v-if="
            (v$.district.$invalid && submitted) ||
            v$.district.$pending.$response
          "
          class="p-error block text-end"
          >{{ v$.district.required.$message.replace('Value', '??????') }}</small
        >
      </div>
    </div>
    <!-- address -->
    <div>
      <div class="flex items-center">
        <label
          for="address"
          class="mr-4 whitespace-nowrap px-2"
          :class="{ 'p-error': v$.address.$invalid && submitted }"
          >????????????</label
        >
        <InputText
          id="address"
          type="text"
          class="w-full"
          v-model="v$.address.$model"
          placeholder="?????????????????????"
          :class="{ 'p-invalid': v$.address.$invalid && submitted }"
        />
      </div>

      <small
        v-if="
          (v$.address.$invalid && submitted) || v$.address.$pending.$response
        "
        class="p-error block text-end"
        >{{ v$.address.required.$message.replace('Value', '??????') }}</small
      >
    </div>
    <div class="flex justify-between">
      <!-- date -->
      <div>
        <div class="flex items-center">
          <label
            for="formDate"
            class="mr-4 whitespace-nowrap px-2"
            :class="{ 'p-error': v$.date.$invalid && submitted }"
            >????????????</label
          >
          <PCalendar
            id="formDate"
            v-model="v$.date.$model"
            placeholder="?????????????????????"
            dateFormat="yy-mm-dd"
            :showIcon="true"
            :minDate="new Date()"
            class="w-full"
            :class="{ 'p-invalid': v$.date.$invalid && submitted }"
          />
        </div>

        <small
          v-if="(v$.date.$invalid && submitted) || v$.date.$pending.$response"
          class="p-error block text-end"
          >{{ v$.date.required.$message.replace('Value', '??????') }}</small
        >
      </div>

      <!-- start time -->
      <div>
        <div class="flex items-center">
          <label
            for="startTime"
            class="mr-4 whitespace-nowrap px-2"
            :class="{ 'p-error': v$.startTime.$invalid && submitted }"
            >????????????</label
          >
          <PDropdown
            id="startTime"
            v-model="startTime"
            :options="startTimes"
            optionLabel="time"
            placeholder="?????????????????????"
            class="w-full"
            :class="{ 'p-invalid': v$.startTime.$invalid && submitted }"
          />
        </div>

        <small
          v-if="
            (v$.startTime.$invalid && submitted) ||
            v$.startTime.$pending.$response
          "
          class="p-error block text-end"
          >{{ v$.startTime.required.$message.replace('Value', '??????') }}</small
        >
      </div>
    </div>

    <div class="mt-6 flex items-center justify-between gap-6">
      <!-- ???????????? -->
      <div class="w-full">
        <div class="p-float-label">
          <PDropdown
            id="paymentMethod"
            v-model="paymentMethod"
            :options="paymentMethods"
            optionLabel="method"
            class="w-full"
            :class="{ 'p-invalid': v$.paymentMethod.$invalid && submitted }"
          />
          <label for="paymentMethod">????????????</label>
        </div>
        <small
          v-if="
            (v$.paymentMethod.$invalid && submitted) ||
            v$.paymentMethod.$pending.$response
          "
          class="p-error block text-end"
          >{{
            v$.paymentMethod.required.$message.replace('Value', '????????????')
          }}</small
        >
      </div>
      <!-- ???????????? -->
      <div class="w-full">
        <div class="p-float-label">
          <InputNumber
            id="costPerPerson"
            v-model="costPerPerson"
            class="w-full"
            :class="{ 'p-invalid': v$.costPerPerson.$invalid && submitted }"
          />
          <label for="costPerPerson">????????????</label>
        </div>
        <small
          v-if="
            (v$.costPerPerson.$invalid && submitted) ||
            v$.costPerPerson.$pending.$response
          "
          class="p-error block text-end"
          >{{
            v$.costPerPerson.required.$message.replace('Value', '??????')
          }}</small
        >
      </div>
      <!-- ?????? -->
      <div class="w-full">
        <div class="p-float-label">
          <PDropdown
            id="maxJoinNum"
            v-model="maxJoinNum"
            class="w-full"
            :options="joinNums"
            optionLabel="number"
            :class="{ 'p-invalid': v$.maxJoinNum.$invalid && submitted }"
          />
          <label for="maxJoinNum">??????</label>
        </div>
        <small
          v-if="
            (v$.maxJoinNum.$invalid && submitted) ||
            v$.maxJoinNum.$pending.$response
          "
          class="p-error block text-end"
          >{{ v$.maxJoinNum.required.$message.replace('Value', '??????') }}</small
        >
      </div>
    </div>
  </form>
</template>

<style scoped>
:deep(.p-calendar .p-button) {
  border-left: 0;
}
</style>

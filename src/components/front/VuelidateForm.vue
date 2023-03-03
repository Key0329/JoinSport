<script>
import { mapState } from 'pinia';
import { useVuelidate } from '@vuelidate/core';
import required from '@/utils/i18n-validators';
import createSteps from '@/stores/front/createSteps';

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      title: '',
      address: '',
      date: null,
      costPerPerson: null,
      paymentMethod: '',
      startTime: '',
      joinNum: null,
      submitted: false,
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
        address: this.address,
        date: this.dateString,
        costPerPerson: this.costPerPerson,
        paymentMethod: this.paymentMethod,
        startTime: this.startTime,
        joinNum: this.joinNum,
      };

      return tempFormData;
    },
    ...mapState(createSteps, ['joinNums', 'startTimes', 'paymentMethods']),
  },
  validations() {
    return {
      title: {
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
      joinNum: {
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

    getLocalForm() {
      if (localStorage.getItem('createTempFormData')) {
        const tempForm = JSON.parse(localStorage.getItem('createTempFormData'));
        const [date] = tempForm.date.split('T');

        this.title = tempForm.title;
        this.address = tempForm.address;
        this.date = date;
        this.costPerPerson = tempForm.costPerPerson;
        this.paymentMethod = tempForm.paymentMethod;
        this.startTime = tempForm.startTime;
        this.joinNum = tempForm.joinNum;
      }
    },
    resetForm() {
      this.title = '';
      this.address = '';
      this.date = null;
      this.costPerPerson = null;
      this.paymentMethod = '';
      this.startTime = '';
      this.joinNum = null;
      this.submitted = false;
    },
  },
  mounted() {
    this.getLocalForm();
  },
};
</script>

<template>
  <div class="flex justify-center">
    <form class="flex w-1/2 flex-col gap-6">
      <!-- title -->
      <div>
        <div class="flex items-center">
          <label
            for="title"
            class="mr-4 whitespace-nowrap px-2"
            :class="{ 'p-error': v$.title.$invalid && submitted }"
            >揪團標題</label
          >
          <InputText
            id="title"
            type="text"
            v-model="v$.title.$model"
            placeholder="請輸入揪團標題"
            class="w-full"
            :class="{ 'p-invalid': v$.title.$invalid && submitted }"
          />
        </div>

        <small
          v-if="(v$.title.$invalid && submitted) || v$.title.$pending.$response"
          class="p-error block text-end"
          >{{ v$.title.required.$message.replace('Value', '標題') }}</small
        >
      </div>
      <!-- address -->
      <div>
        <div class="flex items-center">
          <label
            for="address"
            class="mr-4 whitespace-nowrap px-2"
            :class="{ 'p-error': v$.address.$invalid && submitted }"
            >活動地址</label
          >
          <InputText
            id="address"
            type="text"
            class="w-full"
            v-model="v$.address.$model"
            placeholder="請輸入活動地址"
            :class="{ 'p-invalid': v$.address.$invalid && submitted }"
          />
        </div>

        <small
          v-if="
            (v$.address.$invalid && submitted) || v$.address.$pending.$response
          "
          class="p-error block text-end"
          >{{ v$.address.required.$message.replace('Value', '地址') }}</small
        >
      </div>
      <!-- date -->
      <div>
        <div class="flex items-center">
          <label
            for="date"
            class="mr-4 whitespace-nowrap px-2"
            :class="{ 'p-error': v$.date.$invalid && submitted }"
            >活動日期</label
          >
          <PCalendar
            id="date"
            v-model="v$.date.$model"
            placeholder="請選擇活動日期"
            :showIcon="true"
            class="w-full"
            :class="{ 'p-invalid': v$.date.$invalid && submitted }"
          />
        </div>

        <small
          v-if="(v$.date.$invalid && submitted) || v$.date.$pending.$response"
          class="p-error block text-end"
          >{{ v$.date.required.$message.replace('Value', '日期') }}</small
        >
      </div>

      <!-- start time -->
      <div>
        <div class="flex items-center">
          <label
            for="startTime"
            class="mr-4 whitespace-nowrap px-2"
            :class="{ 'p-error': v$.startTime.$invalid && submitted }"
            >開始時間</label
          >
          <PDropdown
            id="startTime"
            v-model="startTime"
            :options="startTimes"
            optionLabel="time"
            placeholder="請選擇開始時間"
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
          >{{ v$.startTime.required.$message.replace('Value', '時間') }}</small
        >
      </div>

      <div class="mt-6 flex items-center justify-between gap-6">
        <!-- 付費方式 -->
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
            <label for="paymentMethod">付費方式</label>
          </div>
          <small
            v-if="
              (v$.paymentMethod.$invalid && submitted) ||
              v$.paymentMethod.$pending.$response
            "
            class="p-error block text-end"
            >{{
              v$.paymentMethod.required.$message.replace('Value', '付費方式')
            }}</small
          >
        </div>
        <!-- 每人費用 -->
        <div class="w-full">
          <div class="p-float-label">
            <InputNumber
              id="costPerPerson"
              v-model="costPerPerson"
              class="w-full"
              :class="{ 'p-invalid': v$.costPerPerson.$invalid && submitted }"
            />
            <label for="costPerPerson">每人費用</label>
          </div>
          <small
            v-if="
              (v$.costPerPerson.$invalid && submitted) ||
              v$.costPerPerson.$pending.$response
            "
            class="p-error block text-end"
            >{{
              v$.costPerPerson.required.$message.replace('Value', '費用')
            }}</small
          >
        </div>
        <!-- 人數 -->
        <div class="w-full">
          <div class="p-float-label">
            <PDropdown
              id="joinNum"
              v-model="joinNum"
              class="w-full"
              :options="joinNums"
              optionLabel="number"
              :class="{ 'p-invalid': v$.joinNum.$invalid && submitted }"
            />
            <label for="joinNum">人數</label>
          </div>
          <small
            v-if="
              (v$.joinNum.$invalid && submitted) ||
              v$.joinNum.$pending.$response
            "
            class="p-error block text-end"
            >{{ v$.joinNum.required.$message.replace('Value', '人數') }}</small
          >
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
:deep(.p-calendar .p-button) {
  border-left: 0;
}
</style>
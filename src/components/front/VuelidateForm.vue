<script>
// import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import required from '@/utils/i18n-validators';

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      name: '',
      address: '',
      date: null,
      costPerPerson: null,
      paymentMethod: '',
      paymentMethods: [
        {
          method: '我請客',
        },
        {
          method: '各付各的',
        },
      ],
      startTime: '',
      joinNum: '',
      submitted: false,
    };
  },
  computed: {
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
  },
  validations() {
    return {
      name: {
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

      this.toggleDialog();
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;

      if (!this.showMessage) {
        this.resetForm();
      }
    },
    resetForm() {
      this.name = '';
      this.date = null;
      this.submitted = false;
    },
  },
  mounted() {
    // const emailInput = this.$refs.emailInput.$el;
    // if (emailInput) {
    //   emailInput.setAttribute('autocomplete', 'email');
    // }
  },
};
</script>

<template>
  <div class="flex justify-center">
    <form
      @submit.prevent="() => handleSubmit(!v$.$invalid)"
      class="p-fluid flex w-1/2 flex-col gap-6"
    >
      <!-- name -->
      <div>
        <div class="flex items-center">
          <label
            for="name"
            class="mr-4 whitespace-nowrap px-2"
            :class="{ 'p-error': v$.name.$invalid && submitted }"
            >揪團名稱</label
          >
          <InputText
            id="name"
            type="text"
            v-model="v$.name.$model"
            placeholder="請輸入揪團名稱"
            :class="{ 'p-invalid': v$.name.$invalid && submitted }"
          />
        </div>

        <small
          v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response"
          class="p-error block text-end"
          >{{ v$.name.required.$message.replace('Value', '名稱') }}</small
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

      <PButton type="submit" label="Submit" class="mt-8" />
    </form>
  </div>
</template>

<style scoped>
:deep(.p-calendar .p-button) {
  border-left: 0;
}
</style>

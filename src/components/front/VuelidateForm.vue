<script>
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      name: '',
      address: '',
      date: null,
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
      startTimes: [
        {
          time: '00:00',
        },
        {
          time: '10:00',
        },
      ],
      submitted: false,
    };
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
      paymentMethod: {
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
  // mounted() {
  //   const emailInput = this.$refs.emailInput.$el;
  //   if (emailInput) {
  //     emailInput.setAttribute('autocomplete', 'email');
  //   }
  // },
};
</script>

<template>
  <div class="flex justify-center">
    <form
      @submit.prevent="() => handleSubmit(!v$.$invalid)"
      class="p-fluid w-1/2"
    >
      <!-- name -->
      <div class="mb-10">
        <div class="flex items-center">
          <label
            for="name"
            class="mr-4 whitespace-nowrap px-2"
            :class="{ 'p-error': v$.name.$invalid && submitted }"
            >揪團名稱*</label
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
          >{{ v$.name.required.$message.replace('Value', 'Name') }}</small
        >
      </div>
      <!-- address -->
      <div class="mb-10">
        <div class="flex items-center">
          <label
            for="address"
            class="mr-4 whitespace-nowrap px-2"
            :class="{ 'p-error': v$.address.$invalid && submitted }"
            >活動地址*</label
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
          >{{ v$.address.required.$message.replace('Value', 'address') }}</small
        >
      </div>
      <!-- date -->
      <div class="mb-10">
        <div class="flex items-center">
          <label
            for="date"
            class="mr-4 whitespace-nowrap px-2"
            :class="{ 'p-error': v$.date.$invalid && submitted }"
            >活動日期*</label
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
          >{{ v$.date.required.$message.replace('Value', 'date') }}</small
        >
      </div>

      <!-- start time -->
      <div class="mb-10">
        <div class="flex items-center">
          <label
            for="startTime"
            class="mr-4 whitespace-nowrap px-2"
            :class="{ 'p-error': v$.address.$invalid && submitted }"
            >開始時間*</label
          >
          <PDropdown
            id="startTime"
            v-model="startTime"
            :options="startTimes"
            optionLabel="time"
            :editable="true"
            mask="a*-999-a999"
          />
          <InputMask v-model="value" mask="99/99/9999" slotChar="mm/dd/yyyy" />
        </div>

        <small
          v-if="
            (v$.address.$invalid && submitted) || v$.address.$pending.$response
          "
          class="p-error block text-end"
          >{{ v$.address.required.$message.replace('Value', 'address') }}</small
        >
      </div>

      <!-- 付費方式 -->
      <div class="field">
        <div class="p-float-label">
          <PDropdown
            id="paymentMethod"
            v-model="paymentMethod"
            :options="paymentMethods"
            optionLabel="method"
          />
          <label for="paymentMethod">paymentMethod</label>
        </div>
      </div>
      <PButton type="submit" label="Submit" class="mt-2" />
    </form>
  </div>
</template>

<style scoped>
:deep(.p-calendar .p-button) {
  border-left: 0;
}
</style>

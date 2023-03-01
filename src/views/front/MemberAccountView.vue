<script>
import { useVuelidate } from '@vuelidate/core';
import required from '@/utils/i18n-validators';

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      email: 'springfield0329@gmail.com',
      password: '123',
      submitted: false,
      isDisabled: true,
    };
  },
  validations() {
    return {
      email: {
        required,
      },
      password: {
        required,
      },
    };
  },
  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        console.log(456);
        return;
      }

      console.log(123);
      // localStorage.setItem(
      //   'createTempFormData',
      //   JSON.stringify(this.tempFormData)
      // );
      this.isDisabled = true;
    },
    editInfo() {
      this.isDisabled = false;
    },
  },
};
</script>

<template>
  <section>
    <h1 class="mb-10 text-3xl">會員帳號管理</h1>
    <form @submit.prevent="handleSubmit(!v$.$invalid)">
      <ul>
        <li class="mb-6">
          <div class="flex flex-col">
            <label
              for="email"
              class="mb-2 whitespace-nowrap px-2"
              :class="{ 'p-error': v$.email.$invalid && submitted }"
              >信箱</label
            >
            <div class="flex items-center">
              <InputText
                id="accountEmail"
                type="text"
                v-model="v$.email.$model"
                placeholder="請輸入姓名"
                class="mr-2"
                :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                :disabled="isDisabled"
              />
            </div>
          </div>
          <small
            v-if="
              (v$.email.$invalid && submitted) || v$.email.$pending.$response
            "
            class="p-error"
            >{{ v$.email.required.$message.replace('Value', '姓名') }}</small
          >
        </li>
        <li>
          <div class="flex flex-col">
            <label
              for="password"
              class="mb-2 whitespace-nowrap px-2"
              :class="{ 'p-error': v$.password.$invalid && submitted }"
              >密碼</label
            >
            <div class="flex items-center">
              <PPassword
                id="accountPassword"
                class="mr-2"
                placeholder="請輸入密碼"
                v-model="v$.password.$model"
                :class="{ 'p-invalid': v$.password.$invalid && submitted }"
                :disabled="isDisabled"
                toggleMask
              ></PPassword>
            </div>
          </div>
          <small
            v-if="
              (v$.password.$invalid && submitted) ||
              v$.password.$pending.$response
            "
            class="p-error"
            >{{ v$.password.required.$message.replace('Value', '密碼') }}</small
          >
        </li>
      </ul>
      <button
        v-if="isDisabled === true"
        @click.prevent="editInfo"
        class="btn btn-primary mt-10"
      >
        <i class="pi pi-pencil mr-1"></i>
        設定
      </button>
      <button v-else type="submit" class="btn btn-primary mt-10">
        儲存變更
      </button>
    </form>
  </section>
</template>

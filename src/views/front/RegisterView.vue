<script>
import FrontHeader from '@/components/front/FrontHeader.vue';
import { useVuelidate } from '@vuelidate/core';
import { helpers } from '@vuelidate/validators';
import { required, minLength, email } from '@/utils/i18n-validators';

const { VITE_URL } = import.meta.env;

const validatePassword = (password) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
};

export default {
  components: {
    FrontHeader,
  },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      email: '',
      password: '',
      submitted: false,
    };
  },
  validations() {
    return {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
        validatePassword: helpers.withMessage(
          '請檢查格式是否正確',
          validatePassword
        ),
      },
    };
  },
  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      this.register();
    },
    register() {
      const registerData = {
        email: this.email,
        password: this.password,
        name: '',
        favoriteSports: [],
      };

      const path = `${VITE_URL}/register`;

      this.$http
        .post(path, registerData)
        .then(() => {
          this.$toast.add({
            severity: 'success',
            detail: '註冊成功，返回登入頁面',
            life: 1000,
          });
          setTimeout(() => {
            this.$router.push('/login');
          }, 1000);
        })
        .catch((err) => {
          const errMessage = err.response.data;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage} 註冊失敗`,
            life: 1000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
  },
};
</script>

<template>
  <PToast></PToast>
  <FrontHeader></FrontHeader>
  <main class="py-[120px]">
    <div class="container">
      <div class="flex">
        <div
          class="relative hidden w-[720px] items-center justify-center md:flex"
        >
          <img
            class="h-1/2"
            src="../../assets/images/feature/Mask-group.png"
            alt="registerImg"
          /><img
            class="absolute bottom-[120px] -z-10 h-1/2 opacity-50"
            src="../../assets/images/banner/Vector-3.png"
            alt="registerImg"
          />
        </div>
        <div class="flex flex-col items-center pt-[120px]">
          <h1 class="mb-10 text-3xl">註冊會員</h1>
          <form @submit.prevent="handleSubmit(!v$.$invalid)">
            <!-- email -->
            <div class="mb-10">
              <div class="p-float-label p-input-icon-right">
                <i class="pi pi-envelope" />
                <InputText
                  id="email"
                  v-model="v$.email.$model"
                  placeholder="請輸入 Email"
                  class="w-full"
                  :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                  aria-describedby="email-error"
                  autocomplete="email"
                />
                <label
                  for="email"
                  :class="{ 'p-error': v$.email.$invalid && submitted }"
                  >請輸入電子信箱</label
                >
              </div>
              <span v-if="v$.email.$error && submitted">
                <span
                  id="email-error"
                  v-for="(error, index) of v$.email.$errors"
                  :key="index"
                  class="block text-end"
                >
                  <small class="p-error">{{
                    error.$message.replace('Value', '電子信箱')
                  }}</small>
                </span>
              </span>
              <small
                v-else-if="
                  (v$.email.$invalid && submitted) ||
                  v$.email.$pending.$response
                "
                class="p-error block text-end"
                >{{
                  v$.email.required.$message.replace('Value', '電子信箱')
                }}</small
              >
            </div>
            <!-- password -->
            <div class="mb-4">
              <div class="p-float-label">
                <PPassword
                  id="password"
                  v-model="v$.password.$model"
                  :class="{ 'p-invalid': v$.password.$invalid && submitted }"
                  toggleMask
                  :inputProps="{ autocomplete: 'current-password' }"
                >
                  <template #header>
                    <h6>請輸入密碼</h6>
                  </template>
                  <template #footer="sp">
                    {{ sp.level }}

                    <ul class="mt-0 border-t pt-1" style="line-height: 1.5">
                      <li>至少 1 個數字</li>
                      <li>至少 1 個小寫英文字母</li>
                      <li>至少 1 個大寫英文字母</li>
                      <li>最少 8 個字母</li>
                    </ul>
                  </template>
                </PPassword>
                <label
                  for="password"
                  :class="{ 'p-error': v$.password.$invalid && submitted }"
                  >請輸入密碼</label
                >
              </div>
              <span v-if="v$.password.$error && submitted">
                <span
                  id="password-error"
                  v-for="(error, index) of v$.password.$errors"
                  :key="index"
                  class="block text-end"
                >
                  <small class="p-error">{{
                    error.$message.replace('Value', '密碼')
                  }}</small>
                </span>
              </span>
              <small
                v-else-if="
                  (v$.password.$invalid && submitted) ||
                  v$.password.$pending.$response
                "
                class="p-error block text-end"
                >{{
                  v$.password.required.$message.replace('Value', '密碼')
                }}</small
              >
            </div>

            <PButton type="submit" label="註冊" class="mt-10 w-full" />
          </form>
          <RouterLink to="/login" class="group mt-2">
            <span
              class="flex items-center text-sm text-gray-500 group-hover:text-primary-01"
            >
              會員請登入 <i class="pi pi-external-link ml-1"></i>
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
:deep(.p-checkbox-box .pi-check:before),
:deep(.p-checkbox .p-checkbox-box.p-highlight),
:deep(.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover) {
  background-color: #ef5230;
  border-color: #ef5230;
  box-shadow: #ef5230;
}

:deep(.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus) {
  border-color: #ef5230;
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #fbe3d1, 0 1px 2px 0 rgb(0 0 0 / 0%);
}
</style>

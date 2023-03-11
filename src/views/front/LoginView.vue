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
      checked: false,
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

      this.login();
    },
    login() {
      const loginData = {
        email: this.email,
        password: this.password,
      };
      const path = `${VITE_URL}/login`;

      this.$http
        .post(path, loginData)
        .then((res) => {
          const token = res.data.accessToken;
          const userId = res.data.user.id;

          this.setCookie(token, userId);
          if (this.checked) {
            localStorage.setItem('loginEmail', JSON.stringify(this.email));
          }
          if (!this.checked) {
            localStorage.removeItem('loginEmail');
          }

          this.$toast.add({
            severity: 'success',
            detail: '登入成功，即將返回頁面',
            life: 1000,
          });

          // 從重定向参数中取出之前頁面的路徑
          const redirect = this.$route.query.redirect || '/';
          // 重定向回之前的頁面
          setTimeout(() => {
            this.$router.push(redirect);
          }, 1000);
        })
        .catch((err) => {
          const errMessage = err.response.statusText;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage} 登入失敗`,
            life: 1000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
    setCookie(token, userId) {
      // 設定三天過期
      const expires = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
      // 設定 max-age 計算 token 可存活秒數
      document.cookie = `JoinSportToken=${token}; max-age=${
        (expires - new Date()) / 1000
      }`;
      document.cookie = `JoinSportUserId=${userId}; max-age=${
        (expires - new Date()) / 1000
      }`;
    },
  },
  mounted() {
    const loginEmail = JSON.parse(localStorage.getItem('loginEmail'));
    if (loginEmail) {
      this.email = loginEmail;
      this.checked = true;
    }
  },
};
</script>

<template>
  <PToast></PToast>
  <FrontHeader></FrontHeader>
  <main class="py-[120px]">
    <div class="container">
      <div class="flex">
        <div class="hidden items-center justify-center md:flex">
          <img
            class="h-2/3"
            src="../../assets/images/banner/Frame.png"
            alt="loginImg"
          />
        </div>
        <div class="flex flex-col items-center pt-[120px]">
          <h1 class="mb-10 text-3xl">會員登入</h1>
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
            <div class="mb-6 flex items-center justify-end">
              <PCheckbox inputId="remember" v-model="checked" :binary="true" />
              <label for="remember" class="ml-1 text-sm text-gray-500"
                >記住帳號</label
              >
            </div>
            <PButton type="submit" label="登入" class="mt-10 w-full" />
          </form>
          <RouterLink to="/register" class="group mt-2">
            <span
              class="flex items-center text-sm text-gray-500 group-hover:text-primary-01"
            >
              註冊帳號 <i class="pi pi-external-link ml-1"></i>
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

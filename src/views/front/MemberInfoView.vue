<script>
import { mapState, mapActions } from 'pinia';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@/utils/i18n-validators';
import authStore from '@/stores/front/authStore';
import memberStore from '@/stores/front/memberStore';

export default {
  inject: ['reload'],
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      userId: null,
      name: '',
      email: '',
      submitted: false,
      isDisabled: true,
    };
  },
  computed: {
    ...mapState(memberStore, ['user']),
  },
  validations() {
    return {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
    };
  },
  methods: {
    ...mapActions(authStore, ['getUserId']),
    ...mapActions(memberStore, ['getMemberData', 'editMemberData']),

    handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      const data = {
        id: this.userId,
        email: this.email,
        name: this.name,
      };

      this.editMemberData(data);
      this.isDisabled = true;
      this.reload();
    },
    editName() {
      this.isDisabled = false;
    },
  },
  watch: {
    user() {
      this.name = this.user.name;
      this.email = this.user.email;
    },
  },
  mounted() {
    const userId = this.getUserId();
    this.getMemberData(userId);
    this.userId = userId;
  },
};
</script>
<template>
  <section>
    <h1 class="mb-10 text-4xl">編輯個人資訊</h1>
    <div class="mb-10 flex items-center">
      <PAvatar
        :image="user.img"
        size="xlarge"
        class="info-avatar mr-10 w-20"
        shape="circle"
      />
      <button type="button" class="btn btn-primary">變更頭像</button>
    </div>
    <form @submit.prevent="handleSubmit(!v$.$invalid)">
      <ul>
        <li class="mb-6">
          <div class="flex flex-col">
            <label
              for="name"
              class="mb-2 px-2"
              :class="{ 'p-error': v$.name.$invalid && submitted }"
              >姓名</label
            >
            <InputText
              id="name"
              type="text"
              v-model="v$.name.$model"
              placeholder="請輸入姓名"
              class="mr-2 w-1/2"
              :class="{ 'p-invalid': v$.name.$invalid && submitted }"
              :disabled="isDisabled"
            />
          </div>

          <small
            v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response"
            class="p-error"
            >{{ v$.name.required.$message.replace('Value', '姓名') }}</small
          >
        </li>
        <li class="mb-6">
          <div class="flex flex-col">
            <label
              for="email"
              class="mb-2 px-2"
              :class="{ 'p-error': v$.email.$invalid && submitted }"
              >電子信箱</label
            >

            <InputText
              id="accountEmail"
              type="email"
              v-model="v$.email.$model"
              placeholder="請輸入電子信箱"
              class="mr-2 w-1/2"
              :class="{ 'p-invalid': v$.email.$invalid && submitted }"
              :disabled="isDisabled"
            />
          </div>

          <small
            v-if="
              (v$.email.$invalid && submitted) || v$.email.$pending.$response
            "
            class="p-error"
            >{{
              v$.email.required.$message.replace('Value', '電子信箱')
            }}</small
          >
        </li>
      </ul>
      <div class="mt-10 flex justify-center">
        <a
          v-if="isDisabled === true"
          href="#"
          @click.prevent="editName"
          class="hover:text-primary-01"
        >
          <i class="pi pi-pencil mr-1"></i>
          編輯個人資料
        </a>
        <button v-else type="submit" class="btn btn-primary">儲存變更</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
:deep(.p-avatar.p-avatar-xl) {
  width: 100px;
  height: 100px;
}
</style>

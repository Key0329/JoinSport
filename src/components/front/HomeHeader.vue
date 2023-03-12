<script>
import { mapState, mapActions } from 'pinia';
import authStore from '@/stores/front/authStore';

export default {
  name: 'HomeHeader',

  computed: {
    ...mapState(authStore, ['user']),
  },
  methods: {
    ...mapActions(authStore, ['getUserId', 'getUser', 'getToken', 'logOut']),
  },
  mounted() {
    this.getUser(this.getUserId());
  },
};
</script>

<template>
  <header class="fixed z-20 w-full border-b bg-white md:border-none">
    <div class="container">
      <nav class="flex justify-between py-3 md:py-4">
        <h2>
          <a
            class="h-10 w-[163px] overflow-hidden whitespace-nowrap bg-[url('./images/logo/JoinSport01.png')] bg-cover bg-no-repeat indent-[101%] hover:opacity-75"
            href="#"
            >Join Sport 揪運動</a
          >
        </h2>
        <ul v-if="!getToken()" class="hidden items-center gap-10 md:flex">
          <li>
            <router-link
              class="transition-colors hover:text-primary-01 focus:text-secondary-blue"
              to="/JoinList/Hot/1"
              >揪團列表</router-link
            >
          </li>
          <li>
            <router-link
              class="hover:text-primary-01 focus:text-secondary-blue"
              to="/CreateJoin/step1"
              >我要開團</router-link
            >
          </li>
          <li>
            <router-link
              class="transition-colors hover:text-primary-01 focus:text-secondary-blue"
              to="/login"
              >登入 / 註冊</router-link
            >
          </li>
        </ul>
        <ul v-else class="hidden items-center gap-10 md:flex">
          <li>
            <router-link
              class="hover:text-primary-01 focus:text-secondary-blue"
              to="/JoinList/Hot/1"
              >揪團列表</router-link
            >
          </li>
          <li>
            <router-link
              class="hover:text-primary-01 focus:text-secondary-blue"
              to="/CreateJoin/step1"
              >我要開團</router-link
            >
          </li>
          <li>
            <router-link
              class="hover:text-primary-01 focus:text-secondary-blue"
              to="/Member/List"
              >我的揪團</router-link
            >
          </li>
          <li>
            <router-link
              class="hover:text-primary-01 focus:text-secondary-blue"
              to="/Member/Info"
              >會員資料</router-link
            >
          </li>
          <li>
            <a
              href="#"
              @click.prevent="logOut(this.$router)"
              class="transition-colors hover:text-primary-01 focus:text-secondary-blue"
              to="/login"
              >登出</a
            >
          </li>
          <li>
            <img
              :src="user.img"
              alt="member-avatar"
              class="h-10 w-10 rounded-full object-cover"
            />
          </li>
        </ul>
        <a href="#" class="flex items-center md:hidden"
          ><span class="material-icons"> menu </span></a
        >
      </nav>
    </div>
  </header>
</template>

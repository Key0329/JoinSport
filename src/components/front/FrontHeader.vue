<script>
import { mapState, mapActions } from 'pinia';
import searchStore from '@/stores/searchStore';
import authStore from '@/stores/authStore';

export default {
  name: 'FrontHeader',

  data() {
    return {
      searchTagsValue: '',
      searchAreaValue: '',
    };
  },
  computed: {
    ...mapState(searchStore, [
      'tags',
      'randomList',
      'taiwanCities',
      'filteredTags',
    ]),
  },
  methods: {
    ...mapActions(authStore, ['getToken', 'logOut']),
    ...mapActions(searchStore, [
      'getTags',
      'getTaiwanDistrictData',
      'searchText',
    ]),

    handleSubmit() {
      let tags = this.searchTagsValue;
      if (typeof tags !== 'string') {
        tags = this.searchTagsValue.value;
      }
      const area = this.searchAreaValue;

      if (tags || area) {
        const path = `/joinList/search/text=${tags || 0}&area=${
          area.name || 0
        }&date=0&page=1`;
        this.$router.push(path);
      } else {
        this.$router.push('/joinList/Hot/1');
      }
    },
  },
  mounted() {
    this.getTags();
    this.getTaiwanDistrictData();
  },
};
</script>

<template>
  <header class="fixed z-30 w-full bg-white">
    <nav class="flex justify-between border-b px-4 py-3 md:py-4">
      <div class="md:flex">
        <h2 class="mr-8">
          <a
            class="h-10 w-[163px] overflow-hidden whitespace-nowrap bg-[url('./images/logo/JoinSport01.png')] bg-cover bg-no-repeat indent-[101%] hover:opacity-75"
            href="#"
            >Join Sport 揪運動</a
          >
        </h2>
        <!-- search bar -->
        <form
          @submit.prevent="handleSubmit"
          @keyup.enter="handleSubmit"
          class="hidden md:flex"
        >
          <div
            class="flex w-[200px] items-center rounded-l-lg border border-r-0 border-[#B7B7B7] py-2"
          >
            <span
              class="material-icons pointer-events-none ml-2 mr-2 text-primary-01"
            >
              search
            </span>
            <AutoComplete
              v-model="searchTagsValue"
              :suggestions="filteredTags"
              @complete="searchText"
              optionLabel="label"
              loadingIcon="false"
              placeholder="搜尋 ＂爬山＂"
              class="w-full"
            />
          </div>
          <div
            class="flex w-[200px] items-center border border-r-0 border-[#B7B7B7] py-2"
          >
            <span
              class="material-icons pointer-events-none ml-5 mr-3 text-primary-01"
            >
              room
            </span>
            <PDropdown
              id="city"
              v-model="searchAreaValue"
              optionLabel="name"
              placeholder="選擇縣市"
              :options="taiwanCities"
              class="w-full"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary rounded-l-none rounded-r-lg px-4"
          >
            搜尋
          </button>
        </form>
      </div>
      <ul v-if="!getToken()" class="hidden items-center gap-10 md:flex">
        <li>
          <router-link
            class="transition-colors hover:text-primary-01 focus:text-secondary-blue"
            to="/JoinList/Hot/1"
            :class="{
              'text-primary-01': $route.path.includes('/JoinList/Hot'),
            }"
            >揪團列表</router-link
          >
        </li>
        <li>
          <router-link
            class="hover:text-primary-01 focus:text-secondary-blue"
            :class="{ 'text-primary-01': $route.path.includes('/CreateJoin') }"
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
            :class="{
              'text-primary-01': $route.path.includes('/JoinList/Hot'),
            }"
            to="/JoinList/Hot/1"
            >揪團列表</router-link
          >
        </li>
        <li>
          <router-link
            class="hover:text-primary-01 focus:text-secondary-blue"
            :class="{ 'text-primary-01': $route.path.includes('/CreateJoin') }"
            to="/CreateJoin/step1"
            >我要開團</router-link
          >
        </li>
        <li>
          <router-link
            class="hover:text-primary-01 focus:text-secondary-blue"
            :class="{ 'text-primary-01': $route.path.includes('/Member/List') }"
            to="/Member/List"
            >我的揪團</router-link
          >
        </li>
        <li>
          <router-link
            class="hover:text-primary-01 focus:text-secondary-blue"
            :class="{ 'text-primary-01': $route.path.includes('/Member/Info') }"
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
            src="../../assets/images/avatar/avatar01.png"
            alt="member-avatar"
            class="h-10 w-10 rounded-full object-cover"
          />
        </li>
      </ul>
      <a href="#" class="flex items-center md:hidden"
        ><span class="material-icons"> menu </span></a
      >
    </nav>
    <!-- search bar (phone) -->
    <div class="flex md:hidden">
      <div
        class="flex w-full items-center border border-r-0 border-[#B7B7B7] py-2"
      >
        <span
          class="material-icons pointer-events-none ml-2 mr-2 text-primary-01"
        >
          search
        </span>
        <input
          class="w-full bg-transparent text-sm focus:outline-none"
          type="text"
          placeholder="搜尋 ＂爬山＂"
        />
      </div>
      <div
        class="hidden w-full items-center border border-r-0 border-[#B7B7B7] py-2 sm:flex"
      >
        <span
          class="material-icons pointer-events-none ml-5 mr-3 text-primary-01"
        >
          room
        </span>
        <input
          class="w-full bg-transparent text-sm focus:outline-none"
          type="text"
          placeholder="地區"
        />
      </div>
      <button type="button" class="btn btn-primary w-1/2 rounded-none px-4">
        搜尋
      </button>
    </div>
  </header>
</template>

<style scoped>
:deep(.p-autocomplete-input),
:deep(.p-autocomplete-input:focus),
:deep(.p-dropdown-label),
:deep(.p-dropdown),
:deep(.p-dropdown:not(.p-disabled).p-focus) {
  background-color: transparent;
  border: none;
  box-shadow: none;
  width: 100%;
  padding: 0;
}
</style>

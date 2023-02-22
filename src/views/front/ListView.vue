<script>
import FrontHeader from '../../components/front/FrontHeader.vue';

export default {
  components: {
    FrontHeader,
  },
};
</script>

<template>
  <front-header></front-header>
  <section class="py-20">
    <div class="container">
      <!-- list type -->
      <div class="mb-10 flex gap-8">
        <h2 class="text-3xl">
          <router-link class="target:text-primary-01" to="/List/JoinList"
            >揪團</router-link
          >
        </h2>
        <h2 class="text-3xl">
          <router-link class="target:text-primary-01" to="/List/GroupList"
            >群組</router-link
          >
        </h2>
      </div>
      <!-- 搜尋欄 -->
      <ul class="mb-4 flex gap-4">
        <li class="relative inline-block">
          <select
            class="peer appearance-none rounded-sm bg-transparent py-2 pl-4 pr-10 ring-1 ring-[#6F6F6F]"
          >
            <option value="1">時間</option>
            <option value="1">全部</option>
            <option value="2">今天</option>
            <option value="3">明天</option>
            <option value="3">本周</option>
            <option value="3">本月</option>
            <option value="3">自選</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 transition-transform peer-focus:rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              class="h-6 w-6 fill-current"
            >
              <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
            </svg>
          </div>
        </li>
        <li class="relative inline-block">
          <select
            class="peer appearance-none rounded-sm bg-transparent py-2 pl-4 pr-10 ring-1 ring-[#6F6F6F]"
          >
            <option value="1">運動類型</option>
            <option value="2">戶外運動</option>
            <option value="3">室內運動</option>
            <option value="3">場地運動</option>
            <option value="3">水上運動</option>
            <option value="3">球拍運動</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 transition-transform peer-focus:rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              class="h-6 w-6 fill-current"
            >
              <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
            </svg>
          </div>
        </li>
        <li class="relative inline-block">
          <select
            class="peer appearance-none rounded-sm bg-transparent py-2 pl-4 pr-10 ring-1 ring-[#6F6F6F]"
          >
            <option value="1">任何距離</option>
            <option value="2">1 公里內</option>
            <option value="3">3 公里內</option>
            <option value="3">5 公里內</option>
            <option value="3">10 公里內</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 transition-transform peer-focus:rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              class="h-6 w-6 fill-current"
            >
              <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
            </svg>
          </div>
        </li>
      </ul>
      <!-- tags -->
      <ul class="flex gap-2 border-b border-[#B7B7B7] pb-10">
        <li>
          <a
            class="tag text-sm transition-transform hover:scale-x-110 hover:text-primary-03"
            href="#"
            >羽球</a
          >
        </li>
        <li>
          <a
            class="tag text-sm transition-transform hover:scale-x-110 hover:text-primary-03"
            href="#"
            >潛水</a
          >
        </li>
        <li>
          <a
            class="tag text-sm transition-transform hover:scale-x-110 hover:text-primary-03"
            href="#"
            >橄欖球</a
          >
        </li>
        <li>
          <a
            class="tag text-sm transition-transform hover:scale-x-110 hover:text-primary-03"
            href="#"
            >高爾夫球</a
          >
        </li>
        <li>
          <a
            class="tag text-sm transition-transform hover:scale-x-110 hover:text-primary-03"
            href="#"
            >攀岩</a
          >
        </li>
      </ul>
    </div>
  </section>
  <router-view></router-view>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</template>

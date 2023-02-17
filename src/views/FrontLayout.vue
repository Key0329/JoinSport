<template>
  <div class="container">
    <h1
      class="mb-5 mr-10 flex h-full items-center justify-center text-center text-3xl text-blue-500"
    >
      這裡是前台頁面
    </h1>
    <router-link class="text-center text-2xl text-purple-800" to="/"
      >首頁</router-link
    >
    | <router-link to="/products">前台產品列表</router-link> |
    <router-link to="/cart">前台購物車</router-link> |
    <router-link class="btn btn-primary" to="/admin">開始搜尋</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router';

export default {
  components: {
    RouterView,
    RouterLink,
  },
};
</script>

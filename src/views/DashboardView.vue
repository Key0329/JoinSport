<template>
  <h1 class="mb-5">這裡是後台頁面</h1>
  <router-link to="/">回到前台</router-link> |
  <router-link to="/admin/products/1">後台產品列表</router-link> |
  <router-link to="/admin/orders">後台訂單</router-link> |
  <a href="#" @click.prevent="logout">登出</a>
  <hr />
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

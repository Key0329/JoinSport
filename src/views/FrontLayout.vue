<template>
  <header-component></header-component>
  <router-view></router-view>
  <footer-component></footer-component>
</template>

<script>
import { RouterView } from 'vue-router';
import HeaderComponent from '../components/front/HeaderComponent.vue';
import FooterComponent from '../components/front/FooterComponent.vue';

export default {
  components: {
    RouterView,
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<template>
  <router-view></router-view>
  <footer-component></footer-component>
</template>

<script>
import { RouterView } from 'vue-router';
import FooterComponent from '../components/front/FooterComponent.vue';

export default {
  components: {
    RouterView,
    FooterComponent,
  },
};
</script>

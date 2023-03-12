<script>
import { RouterView } from 'vue-router';
import FooterComponent from '../components/front/FooterComponent.vue';

export default {
  name: 'FrontLayout',
  components: {
    RouterView,
    FooterComponent,
  },
};
</script>
<template>
  <router-view></router-view>
  <footer-component></footer-component>
</template>

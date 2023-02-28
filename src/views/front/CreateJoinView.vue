<script>
import FrontHeader from '@/components/front/FrontHeader.vue';
import CreateSteps from '@/components/front/CreateSteps.vue';

export default {
  components: {
    FrontHeader,
    CreateSteps,
  },
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    // 當路由進入時，讓頁面滾動到最上方
    window.scrollTo(0, 0);
    next();
  },
};
</script>

<template>
  <FrontHeader></FrontHeader>
  <section class="pt-[100px] pb-20">
    <div class="container">
      <CreateSteps></CreateSteps>
      <RouterView></RouterView>
    </div>
  </section>
</template>

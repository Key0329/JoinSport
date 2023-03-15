<script>
import FrontHeader from '@/components/front/FrontHeader.vue';
import CreateSteps from '@/components/front/CreateSteps.vue';

export default {
  name: 'CreateJoinView',
  components: {
    FrontHeader,
    CreateSteps,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <FrontHeader></FrontHeader>
  <section class="pt-[100px] pb-10">
    <div class="container">
      <CreateSteps class="hidden md:block"></CreateSteps>
      <RouterView></RouterView>
    </div>
  </section>
</template>

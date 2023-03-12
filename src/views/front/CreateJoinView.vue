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
  <section class="pt-[100px] pb-20">
    <div class="container">
      <CreateSteps></CreateSteps>
      <RouterView></RouterView>
    </div>
  </section>
</template>

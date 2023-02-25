<script>
import FrontHeader from '@/components/front/FrontHeader.vue';
import CreateSteps from '@/components/front/CreateSteps.vue';

export default {
  components: {
    FrontHeader,
    CreateSteps,
  },
  data() {
    return {
      items: [
        {
          label: '必要資訊',
          to: '/CreateJoin/step1',
        },
        {
          label: '設定標籤',
          to: '/CreateJoin/step2',
        },
        {
          label: '詳細描述與照片',
          to: '/CreateJoin/step3',
        },
        {
          label: '開團成功',
          to: '/CreateJoin/step1',
        },
      ],
    };
  },
};
</script>

<template>
  <FrontHeader></FrontHeader>
  <section class="pt-[100px] pb-20">
    <div class="container">
      <h1 class="mb-8 text-center text-4xl">三個步驟，讓您快速開團</h1>
      <CreateSteps></CreateSteps>
      <router-link to="/CreateJoin/step1">1</router-link>
      <router-link to="/CreateJoin/step2">2</router-link>
      <router-link to="/CreateJoin/step3">3</router-link>
      <RouterView></RouterView>
    </div>
  </section>
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
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</template>

<script>
import JoinCard from '@/components/front/JoinCard.vue';

export default {
  components: {
    JoinCard,
  },
};
</script>

<template>
  <section class="pb-20">
    <div class="container">
      <h2 class="mb-10 text-3xl">熱門揪團</h2>
      <div class="grid grid-cols-12 gap-12">
        <div class="col-span-8 grid grid-cols-2 gap-8">
          <div class="col-span-1"><join-card></join-card></div>
          <div class="col-span-1"><join-card></join-card></div>
          <div class="col-span-1"><join-card></join-card></div>
          <div class="col-span-1"><join-card></join-card></div>
          <div class="col-span-1"><join-card></join-card></div>
          <div class="col-span-1"><join-card></join-card></div>
          <div class="col-span-1"><join-card></join-card></div>
          <div class="col-span-1"><join-card></join-card></div>
          <div class="col-span-1"><join-card></join-card></div>
        </div>
        <div class="col-span-4">456</div>
      </div>
    </div>
  </section>
</template>

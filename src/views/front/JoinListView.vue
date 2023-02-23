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
      <h2 class="mb-10 text-center text-3xl md:text-start">熱門揪團</h2>
      <div class="grid gap-8 md:grid-cols-12 lg:gap-0">
        <div class="col-span-7 grid gap-6 md:grid-cols-2 lg:gap-8">
          <div class="col-span-1">
            <RouterLink to="/"><join-card></join-card></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card></join-card></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card></join-card></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card></join-card></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card></join-card></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card></join-card></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card></join-card></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card></join-card></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card></join-card></RouterLink>
          </div>
        </div>
        <div class="col-span-4 col-end-13 hidden md:flex">456</div>
      </div>
    </div>
  </section>
</template>

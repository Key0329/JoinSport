<script>
import JoinCardRow from '@/components/front/JoinCardRow.vue';
import LeafletMap from '@/components/front/LeafletMap.vue';

export default {
  components: {
    JoinCardRow,
    LeafletMap,
  },
};
</script>

<template>
  <section class="pt-4 pb-20 md:pt-10">
    <div class="container">
      <h2 class="mb-6 text-center text-2xl md:mb-10 md:text-start">最新揪團</h2>
      <div class="grid md:grid-cols-12 lg:gap-0">
        <div class="col-span-7 flex flex-col gap-6">
          <div class="col-span-1">
            <RouterLink to="/"><join-card-row></join-card-row></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card-row></join-card-row></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card-row></join-card-row></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card-row></join-card-row></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card-row></join-card-row></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card-row></join-card-row></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card-row></join-card-row></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card-row></join-card-row></RouterLink>
          </div>
          <div class="col-span-1">
            <RouterLink to="/"><join-card-row></join-card-row></RouterLink>
          </div>
        </div>

        <aside
          class="sticky top-[286px] col-span-4 col-end-13 hidden h-[400px] md:flex"
        >
          <LeafletMap></LeafletMap>
        </aside>
      </div>
    </div>
  </section>
</template>

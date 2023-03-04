<script>
export default {
  name: 'PaginationComponent',
  props: ['currentPage', 'pageTotal', 'pageUrl'],
  computed: {
    currentPageNum() {
      const currentPage = parseInt(this.currentPage, 10);
      return currentPage;
    },

    prev() {
      return this.currentPageNum - 1 < 1 ? 1 : this.currentPageNum - 1;
    },
    next() {
      const currentPage = this.currentPageNum;
      return currentPage + 1 > this.pageTotal
        ? this.pageTotal
        : this.currentPageNum + 1;
    },
  },
};
</script>

<template>
  <nav>
    <ul class="flex gap-2">
      <li>
        <router-link
          class="flex h-10 w-10 items-center justify-center rounded-full p-2 text-gray-800 transition-colors hover:bg-primary-03"
          :to="pageUrl + 1"
          aria-label="Previous"
          :class="{ disabled: currentPageNum === 1 }"
        >
          <i class="pi pi-angle-double-left"></i>
        </router-link>
      </li>
      <li>
        <router-link
          class="flex h-10 w-10 items-center justify-center rounded-full p-2 text-gray-800 transition-colors hover:bg-primary-03"
          :to="pageUrl + prev"
          aria-label="Previous"
          :class="{ disabled: currentPageNum === 1 }"
        >
          <i class="pi pi-angle-left"></i>
        </router-link>
      </li>
      <li v-for="page in pageTotal" :key="'page' + page">
        <router-link
          :active="page == currentPage"
          :class="{ active: page == currentPage }"
          class="flex h-10 w-10 items-center justify-center rounded-full p-2 text-gray-800 transition-colors hover:bg-primary-03"
          :to="pageUrl + page"
          active-class="bg-primary-04"
        >
          {{ page }}
        </router-link>
      </li>
      <li>
        <router-link
          class="flex h-10 w-10 items-center justify-center rounded-full p-2 text-gray-800 transition-colors hover:bg-primary-03"
          :to="pageUrl + next"
          aria-label="Next"
          :class="{ disabled: currentPageNum === pageTotal }"
        >
          <i class="pi pi-angle-right"></i>
        </router-link>
      </li>
      <li>
        <router-link
          class="flex h-10 w-10 items-center justify-center rounded-full p-2 text-gray-800 transition-colors hover:bg-primary-03"
          :to="pageUrl + pageTotal"
          aria-label="Previous"
          :class="{ disabled: currentPageNum === pageTotal }"
        >
          <i class="pi pi-angle-double-right"></i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>

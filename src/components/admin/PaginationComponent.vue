<script>
export default {
  name: 'pagination-component',
  props: {
    pages: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changePage(e, page = 1) {
      this.$emit('getProductsData', e, page);
    },
  },
};
</script>

<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item">
        <router-link
          :to="`/admin/products/${pages.current_page - 1}`"
          @click.prevent="changePage($event, pages.current_page - 1)"
          class="page-link"
          :class="{ disabled: !pages.has_pre }"
          href="#"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>

      <li
        v-for="page in pages.total_pages"
        :key="page + 'page'"
        class="page-item"
        :class="{ 'point-none': page === pages.current_page }"
      >
        <router-link
          :to="`/admin/products/${page}`"
          @click="changePage($event, page)"
          class="page-link"
          >{{ page }}</router-link
        >
      </li>

      <li class="page-item">
        <router-link
          :to="`/admin/products/${pages.current_page + 1}`"
          @click.prevent="changePage($event, pages.current_page + 1)"
          class="page-link"
          :class="{ disabled: !pages.has_next }"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

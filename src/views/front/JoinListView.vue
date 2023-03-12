<script>
import FrontHeader from '@/components/front/FrontHeader.vue';
import { mapState, mapActions } from 'pinia';
import searchStore from '@/stores/searchStore';
import joinActivitiesStore from '@/stores/front/joinActivitiesStore';

export default {
  name: 'JoinListView',

  components: {
    FrontHeader,
  },
  data() {
    return {
      listTypes: [
        { label: '熱門', icon: 'pi pi-fw pi-hot', to: '/JoinList/Hot/1' },
        {
          label: '即將到來',
          icon: 'pi pi-fw pi-hot',
          to: '/JoinList/Coming/1',
        },
        {
          label: '最近更新',
          icon: 'pi pi-fw pi-new',
          to: '/JoinList/Update/1',
        },
      ],
    };
  },
  computed: {
    ...mapState(searchStore, ['tags', 'randomList']),

    slicedTagList() {
      const sliced = this.randomList.slice(0, 4);
      return sliced;
    },
  },
  methods: {
    ...mapActions(searchStore, ['getTags']),
    ...mapActions(joinActivitiesStore, ['changePage']),
  },
  mounted() {
    this.getTags();
  },
};
</script>

<template>
  <front-header></front-header>
  <section class="bg-white pt-[75px]">
    <div class="container">
      <div
        class="mt-5 flex w-full flex-col items-center justify-between border-b py-5 md:my-0 md:flex-row lg:py-0"
      >
        <!-- list type -->
        <TabMenu :model="listTypes" class="mb-6 text-2xl md:mb-0" />
        <!-- tags -->
        <div class="mb-6 hidden items-center gap-4 sm:flex md:mb-0 md:w-1/3">
          <h3>Tags:</h3>
          <ul class="flex flex-wrap items-center gap-2">
            <li v-for="tag in slicedTagList" :key="tag">
              <RouterLink
                :to="`/joinList/search/text=${tag.label}&area=0&date=0&page=1`"
                class="tag"
              >
                {{ tag.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <router-view></router-view>
</template>

<style scoped>
:deep(.list-view-search .p-inputtext) {
  padding-right: 0;
}
:deep(
    .p-tabmenu
      .p-tabmenu-nav
      .p-tabmenuitem
      .p-menuitem-link:not(.p-disabled):focus
  ) {
  box-shadow: inset 0 0 0 0;
}
:deep(.p-menuitem-icon) {
  display: none;
}
</style>

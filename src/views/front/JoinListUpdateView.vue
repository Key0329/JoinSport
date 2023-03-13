<script>
import JoinCardRow from '@/components/front/JoinCardRow.vue';
import LeafletMap from '@/components/front/LeafletMap.vue';
import { mapActions, mapState } from 'pinia';
import authStore from '@/stores/authStore';
import joinActivitiesStore from '@/stores/front/activitiesStore';
import PaginationComponent from '@/components/front/PaginationComponent.vue';

export default {
  name: 'JoinListUpdateView',
  components: {
    JoinCardRow,
    LeafletMap,
    PaginationComponent,
  },
  data() {
    return {
      userId: null,
      currentPage: 1,
    };
  },
  computed: {
    ...mapState(joinActivitiesStore, ['availableActivities']),
    hotActivitiesList: ({ availableActivities, arrangePage }) => {
      // 刪掉已取消的揪團
      const filterList = availableActivities.filter(
        (activity) => activity.isCancelled === false
      );
      // 依照更新日期排序
      const tempList = filterList.sort((a, b) => {
        const dateA = new Date(a.updateDate);
        const dateB = new Date(b.updateDate);
        return dateB - dateA;
      });

      return arrangePage(tempList);
    },
  },
  methods: {
    ...mapActions(joinActivitiesStore, [
      'getOrders',
      'getActivities',
      'changePage',
      'arrangePage',
    ]),
    ...mapActions(authStore, ['getUserId']),
  },
  watch: {
    $route(to) {
      this.currentPage = to.params.page;
      this.changePage(to.params.page);
    },
  },
  mounted() {
    this.getActivities();
    this.getOrders();
    this.changePage(this.$route.params.page);
    this.userId = this.getUserId();
  },
};
</script>

<template>
  <section class="pt-4 pb-20 md:pt-10">
    <div class="container">
      <h2 class="mb-6 text-center text-2xl md:mb-10 md:text-start">最新揪團</h2>
      <!-- pagination -->
      <PaginationComponent
        :currentPage="currentPage"
        :pageTotal="hotActivitiesList.pageTotal"
        :pageUrl="'/JoinList/Update/'"
        class="mb-4"
      ></PaginationComponent>
      <div class="grid md:grid-cols-12 lg:gap-0">
        <ul class="col-span-7 flex flex-col gap-6">
          <li v-for="activity in hotActivitiesList.list" :key="activity?.id">
            <RouterLink :to="`/JoinDetail/id=${activity?.id}`"
              ><join-card-row
                :userId="userId"
                :activity="activity"
              ></join-card-row
            ></RouterLink>
          </li>
        </ul>

        <aside
          class="sticky top-[286px] col-span-4 col-end-13 hidden h-[400px] md:flex"
        >
          <LeafletMap :mapActivities="hotActivitiesList.list"></LeafletMap>
        </aside>
      </div>
    </div>
  </section>
</template>

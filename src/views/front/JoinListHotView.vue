<script>
import JoinCardRow from '@/components/front/JoinCardRow.vue';
import LeafletMap from '@/components/front/LeafletMap.vue';
import { mapActions, mapState } from 'pinia';
import joinActivitiesStore from '@/stores/front/activitiesStore';
import authStore from '@/stores/authStore';
import PaginationComponent from '@/components/front/PaginationComponent.vue';
import BookMark from '@/components/front/BookMark.vue';

export default {
  name: 'JoinListHotView',
  components: {
    JoinCardRow,
    LeafletMap,
    PaginationComponent,
    BookMark,
  },
  data() {
    return {
      userId: null,
      currentPage: 1,
    };
  },
  computed: {
    ...mapState(joinActivitiesStore, ['availableActivities', 'isLoading']),
    hotActivitiesList: ({ availableActivities, arrangePage }) => {
      // 過濾已取消的揪團
      const filterList = availableActivities.filter(
        (activity) => activity.isCancelled === false
      );

      // 依照參與人數排序熱門程度
      const tempList = filterList.sort((a, b) => {
        return b.numParticipants - a.numParticipants;
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
  <PToast></PToast>
  <main class="pt-4 pb-20 md:pt-10">
    <div class="container">
      <h2 class="mb-6 text-center text-2xl md:mb-10 md:text-start">熱門揪團</h2>
      <!-- pagination -->
      <PaginationComponent
        :currentPage="currentPage"
        :pageTotal="hotActivitiesList.pageTotal"
        :pageUrl="'/JoinList/Hot/'"
        class="mb-4"
      ></PaginationComponent>
      <section class="grid gap-8 md:grid-cols-12 lg:gap-0">
        <ul class="col-span-7 flex flex-col gap-6">
          <li
            v-for="activity in hotActivitiesList.list"
            :key="activity?.id"
            class="relative"
          >
            <!-- 收藏 -->
            <BookMark
              v-if="userId"
              class="absolute top-[190px] right-4 z-50 sm:right-4 sm:top-3"
              :userId="userId"
              :activity="activity"
              @click.stop
            ></BookMark>
            <RouterLink :to="`/JoinDetail/id=${activity?.id}`"
              ><join-card-row
                :activity="activity"
                :userId="userId"
              ></join-card-row
            ></RouterLink>
          </li>
        </ul>

        <aside
          class="sticky top-[286px] col-span-4 col-end-13 hidden h-[400px] md:flex"
        >
          <LeafletMap :mapActivities="hotActivitiesList.list"></LeafletMap>
        </aside>
      </section>
    </div>
  </main>
</template>

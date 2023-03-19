<script>
import JoinCardRow from '@/components/front/JoinCardRow.vue';
import LeafletMap from '@/components/front/LeafletMap.vue';
import { mapActions, mapState } from 'pinia';
import joinActivitiesStore from '@/stores/front/activitiesStore';
import authStore from '@/stores/authStore';
import PaginationComponent from '@/components/front/PaginationComponent.vue';

export default {
  name: 'JoinListSearchView',
  components: {
    JoinCardRow,
    LeafletMap,
    PaginationComponent,
  },
  data() {
    return {
      userId: null,
      currentPage: 1,
      searchText: '',
      searchArea: '',
      searchDate: '',
    };
  },
  computed: {
    ...mapState(joinActivitiesStore, ['availableActivities', 'isLoading']),

    searchActivitiesList() {
      // 刪掉已取消的揪團
      const cancelledList = this.availableActivities.filter(
        (activity) => activity.isCancelled === false
      );

      const text = this.searchText;
      const area = this.searchArea;
      const date = this.searchDate;

      // 搜尋內容篩選
      const filterList = cancelledList.filter((activity) => {
        // 轉換活動日期格式
        const originDate = new Date(activity.originDate)
          .toISOString()
          .split('T')[0];

        // 符合三個搜尋條件
        if (text !== '0' && area !== '0' && date !== '0') {
          return (
            activity.tags.some((tag) => tag.includes(text)) &&
            activity.city === area &&
            originDate === date
          );
        }

        // 符合兩個搜尋條件
        if (text !== '0' && area !== '0') {
          return (
            activity.tags.some((tag) => tag.includes(text)) &&
            activity.city === area
          );
        }
        if (text !== '0' && date !== '0') {
          return (
            activity.tags.some((tag) => tag.includes(text)) &&
            originDate === date
          );
        }
        if (area !== '0' && date !== '0') {
          return activity.city === area && originDate === date;
        }

        // 符合一個搜尋條件
        if (text !== '0' || area !== '0' || date !== '0') {
          return (
            activity.tags.some((tag) => tag.includes(text)) ||
            activity.city === area ||
            originDate === date
          );
        }

        return activity;
      });

      // 依照參與人數排序熱門程度
      const tempList = filterList.sort((a, b) => {
        return b.numParticipants - a.numParticipants;
      });

      return this.arrangePage(tempList);
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

    getParams() {
      const { text, area, date } = this.$route.params;
      this.searchText = text;
      this.searchArea = area;
      this.searchDate = date;
    },
  },
  watch: {
    $route(to) {
      this.currentPage = to.params.page;
      this.changePage(to.params.page);
      this.getParams();
    },
  },
  mounted() {
    this.getActivities();
    this.getOrders();
    this.changePage(this.$route.params.page);
    this.userId = this.getUserId();
    this.getParams();
  },
};
</script>

<template>
  <main class="pt-4 pb-20 md:pt-10">
    <div class="container">
      <h2 class="mb-6 text-center text-2xl md:mb-10 md:text-start">
        搜尋揪團：
        {{ searchText === '0' ? '' : searchText }}
        {{
          searchText === '0' || (searchArea === '0' && searchDate === '0')
            ? ''
            : ' +'
        }}
        {{ searchArea === '0' ? '' : searchArea }}
        {{ searchArea === '0' || searchDate === '0' ? '' : ' +' }}
        {{ searchDate === '0' ? '' : searchDate }}
      </h2>
      <!-- pagination -->
      <PaginationComponent
        v-if="searchActivitiesList.pageTotal"
        :currentPage="currentPage"
        :pageTotal="searchActivitiesList.pageTotal"
        :pageUrl="`/JoinList/Search/text=${searchText}&area=${searchArea}&date=${searchDate}&page=`"
        class="mb-4"
      ></PaginationComponent>

      <section class="grid gap-8 md:grid-cols-12 lg:gap-0">
        <!-- activity cards -->
        <div
          class="col-span-7 flex"
          v-if="searchActivitiesList.pageTotal === 0"
        >
          <h3 class="text-xl">
            無搜尋結果 <i class="pi pi-arrow-right px-4"></i>
          </h3>
          <div>
            <router-link
              to="/CreateJoin/step1"
              class="text-xl hover:text-primary-01"
            >
              馬上自己開一團
              <img
                src="../../assets/images/feature/feature02.png"
                alt="searchImg"
              />
            </router-link>
          </div>
        </div>
        <ul v-else class="col-span-7 flex flex-col gap-6">
          <li v-for="activity in searchActivitiesList.list" :key="activity?.id">
            <RouterLink :to="`/JoinDetail/id=${activity?.id}`"
              ><join-card-row
                :activity="activity"
                :userId="userId"
              ></join-card-row
            ></RouterLink>
          </li>
        </ul>

        <!-- sidebar -->
        <aside
          class="sticky top-[286px] col-span-4 col-end-13 hidden h-[400px] md:flex"
        >
          <LeafletMap :mapActivities="searchActivitiesList.list"></LeafletMap>
        </aside>
      </section>
    </div>
  </main>
</template>

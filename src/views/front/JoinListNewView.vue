<script>
import JoinCardRow from '@/components/front/JoinCardRow.vue';
import LeafletMap from '@/components/front/LeafletMap.vue';
import { mapActions, mapState } from 'pinia';
import joinActivitiesStore from '@/stores/front/joinActivitiesStore';

export default {
  components: {
    JoinCardRow,
    LeafletMap,
  },
  data() {
    return {
      currentPage: 1,
      pageLimit: 10,
    };
  },
  computed: {
    ...mapState(joinActivitiesStore, ['restructureActivitiesList']),
    hotActivitiesList: ({
      restructureActivitiesList,
      currentPage,
      pageLimit,
    }) => {
      // 依照更新日期排序
      const tempList = restructureActivitiesList.sort((a, b) => {
        const dateA = new Date(a.updateDate);
        const dateB = new Date(b.updateDate);
        return dateB - dateA;
      });

      // 維持大頭貼張數在 3 張
      const newActivitiesCopy = tempList.map((item) => {
        const newItem = { ...item };

        if (newItem.participants.length > 3) {
          newItem.participants = newItem.participants.slice(0, 3);
        }

        return newItem;
      });

      // 分配頁數
      const start = (currentPage - 1) * pageLimit;
      const end = currentPage * pageLimit;

      const sliced = Object.keys(newActivitiesCopy)
        .slice(start, end)
        .reduce((acc, key) => {
          acc[key] = newActivitiesCopy[key];
          return acc;
        }, {});

      const newList = Object.values(sliced);

      const data = {
        list: newList,
        pageTotal: Math.ceil(
          Object.keys(restructureActivitiesList).length / pageLimit
        ),
      };

      console.log(data);
      return data;
    },
  },
  methods: {
    ...mapActions(joinActivitiesStore, ['getOrders', 'getActivities']),
  },
  beforeRouteEnter(to, from, next) {
    // 當路由進入時，讓頁面滾動到最上方
    window.scrollTo(0, 0);
    next();
  },
  mounted() {
    this.getActivities();
    this.getOrders();
  },
};
</script>

<template>
  <section class="pt-4 pb-20 md:pt-10">
    <div class="container">
      <h2 class="mb-6 text-center text-2xl md:mb-10 md:text-start">最新揪團</h2>
      <div class="grid md:grid-cols-12 lg:gap-0">
        <ul class="col-span-7 flex flex-col gap-6">
          <li
            v-for="(activity, i) in hotActivitiesList.list"
            :key="activity.title + i"
          >
            <RouterLink to="/"
              ><join-card-row :activity="activity"></join-card-row
            ></RouterLink>
          </li>
        </ul>

        <aside
          class="sticky top-[286px] col-span-4 col-end-13 hidden h-[400px] md:flex"
        >
          <LeafletMap></LeafletMap>
        </aside>
      </div>
    </div>
  </section>
</template>

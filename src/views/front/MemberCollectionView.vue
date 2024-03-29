<script>
import { mapActions, mapState } from 'pinia';
import joinActivitiesStore from '@/stores/front/activitiesStore';
import authStore from '@/stores/authStore';
import JoinCardRow from '@/components/front/JoinCardRow.vue';

const { VITE_URL } = import.meta.env;

export default {
  name: 'MemberCollectionView',

  components: { JoinCardRow },
  data() {
    return {
      userId: null,
      bookmarks: [],
      filteredArray: [],
    };
  },
  computed: {
    ...mapState(joinActivitiesStore, ['availableActivities']),

    membersActivities() {
      // 調整需要的日期格式
      const membersActivities = this.filteredArray.map((activity) => {
        const month = activity.date?.split('/')[0];
        const day = activity.date?.split('/')[1];
        const year = new Date().getFullYear();
        const originTime = new Date(activity.originDate);
        const weekday = originTime.getDay();
        const weekdayZHTW = [
          '星期日',
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六',
        ];
        const dayOfWeekZHTW = weekdayZHTW[weekday];

        const newActivity = {
          ...activity,
          month: parseInt(month, 10),
          day: parseInt(day, 10),
          year,
          dayOfWeekZHTW,
          originTime,
        };
        return newActivity;
      });

      // 依日期排序
      const sortActivities = membersActivities.sort(
        (a, b) => a.originTime - b.originTime
      );

      // 依照日期分類組合成想要的格式
      const cateActivities = sortActivities.reduce((acc, activity) => {
        const { date } = activity;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(activity);
        return acc;
      }, {});

      return cateActivities;
    },
  },
  methods: {
    ...mapActions(joinActivitiesStore, ['getActivities', 'getOrders']),
    ...mapActions(authStore, ['getUserId']),

    getBookmarks(userId) {
      const path = `${VITE_URL}/bookmarks?isCancelled=false&userId=${userId}`;
      this.$http
        .get(path)
        .then((res) => {
          const bookmarks = res.data;

          // 篩選出此會員收藏的活動
          bookmarks.forEach((bookmark) => {
            this.availableActivities.forEach((activity) => {
              if (activity.id === parseInt(bookmark.activityId, 10)) {
                this.filteredArray.push(activity);
                this.bookmarks.push(bookmark);
              }
            });
          });
        })
        .catch((err) => {
          const errMessage = err.response.statusText;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage} 取得收藏資訊失敗`,
            life: 3000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
  },
  mounted() {
    this.getActivities();
    this.getOrders();
    this.userId = this.getUserId();
    this.getBookmarks(this.userId);
  },
};
</script>

<template>
  <section>
    <h1 class="mb-6 text-center text-xl md:mb-12 md:text-left md:text-3xl">
      已收藏的揪團
    </h1>
    <RouterLink
      v-if="bookmarks.length === 0"
      to="/JoinList/Hot/1"
      class="group flex flex-col items-center justify-center py-10"
    >
      <p class="mb-4 flex items-center text-2xl">目前尚無收藏揪團</p>
      <p class="flex items-center group-hover:text-primary-01">
        探索更多揪團活動 <i class="pi pi-search-plus ml-1 text-xs"></i>
      </p>
    </RouterLink>
    <ul v-else>
      <li
        v-for="activities in membersActivities"
        :key="activities"
        class="mb-10"
      >
        <h3
          v-if="activities[0].day === parseInt(new Date().getDate(), 10)"
          class="mb-6 border-b pb-4 md:text-xl"
        >
          今天
        </h3>
        <h3
          v-else
          class="mb-6 border-b pb-4 text-center md:text-left md:text-xl"
        >
          <i class="pi pi-calendar md:text-xl"></i>
          {{ activities[0].dayOfWeekZHTW }} {{ activities[0].month }} 月
          {{ activities[0].day }} 日
        </h3>
        <ul>
          <li v-for="activity in activities" :key="activity.id" class="mb-6">
            <RouterLink :to="`/JoinDetail/id=${activity?.id}`">
              <JoinCardRow :activity="activity"></JoinCardRow>
            </RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

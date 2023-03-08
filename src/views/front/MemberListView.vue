<script>
import { mapActions, mapState } from 'pinia';
import joinActivitiesStore from '@/stores/front/joinActivitiesStore';
import authStore from '@/stores/front/authStore';
import JoinCardRow from '@/components/front/JoinCardRow.vue';

export default {
  components: { JoinCardRow },

  computed: {
    ...mapState(joinActivitiesStore, ['restructureActivitiesList']),

    membersActivities() {
      // 取出 userId
      const id = parseInt(this.getUserId(), 10);
      // 取出此會員參與的活動
      const filteredArray = this.restructureActivitiesList.filter((activity) =>
        activity.participantsId.includes(id)
      );
      // 調整需要的日期格式
      const membersActivities = filteredArray.map((activity) => {
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

    hasTodayActivity() {
      // 取出 userId
      const id = parseInt(this.getUserId(), 10);
      // 取出此會員參與的活動
      const filteredArray = this.restructureActivitiesList.filter((activity) =>
        activity.participantsId.includes(id)
      );

      // 今天的日期
      const year = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;
      const currentDate = new Date().getDate();

      const todayDate = `${year}-${currentMonth
        .toString()
        .padStart(2, '0')}-${currentDate.toString().padStart(2, '0')}`;

      // 找有沒有活動的日期跟今天相同
      const hasTodayActivity =
        filteredArray.find((activity) => activity.originDate === todayDate) !==
        undefined;

      return hasTodayActivity;
    },
  },
  methods: {
    ...mapActions(joinActivitiesStore, ['getActivities', 'getOrders']),
    ...mapActions(authStore, ['getUserId']),
  },

  mounted() {
    this.getActivities();
    this.getOrders();
    this.getUserId();
  },
};
</script>

<template>
  <section>
    <h1 class="mb-12 text-3xl">已參與的揪團</h1>
    <ul>
      <li v-if="!hasTodayActivity" class="mb-10">
        <h3 class="mb-6 border-b pb-4 text-xl">今天</h3>
        <RouterLink
          to="/JoinList/Hot/1"
          class="group flex flex-col items-center justify-center py-10"
        >
          <p class="mb-4 flex items-center text-lg">
            <i class="pi pi-calendar-plus mr-2 text-lg"></i
            >{{
              `今天沒有符合條件的活動 ${new Date().getFullYear()} 年 ${
                new Date().getMonth() + 1
              } 月 ${new Date().getDate()} 日`
            }}
          </p>
          <p class="flex items-center group-hover:text-primary-01">
            探索更多揪團活動 <i class="pi pi-search-plus ml-1 text-xs"></i>
          </p>
        </RouterLink>
      </li>
      <li
        v-for="activities in membersActivities"
        :key="activities"
        class="mb-10"
      >
        <h3
          v-if="activities[0].day === parseInt(new Date().getDate(), 10)"
          class="mb-6 border-b pb-4 text-xl"
        >
          今天
        </h3>
        <h3 v-else class="mb-6 border-b pb-4 text-xl">
          <i class="pi pi-calendar text-xl"></i>
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

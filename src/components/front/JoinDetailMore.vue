<script>
import { mapState, mapActions } from 'pinia';
import joinActivitiesStore from '@/stores/front/activitiesStore';
import JoinCardRow from '@/components/front/JoinCardRow.vue';
import authStore from '@/stores/authStore';

export default {
  components: {
    JoinCardRow,
  },
  data() {
    return {
      userId: null,
    };
  },
  computed: {
    ...mapState(joinActivitiesStore, ['availableActivities']),

    // 選出兩個推播活動
    slicedActivities() {
      // 避免 side effect
      const tempActivity = [...this.availableActivities];
      // 刪掉已取消的揪團
      const filterList = tempActivity.filter(
        (activity) => activity?.isCancelled === false
      );
      // 避免選到同個活動
      const excluded = filterList.filter((activity) => {
        if (!activity?.id) {
          return [];
        }

        return activity.id !== parseInt(this.$route.params.id, 10);
      });
      // 亂序排列
      const random = excluded.sort(() => Math.random() - 0.5);
      // 選出兩個推播
      const sliced = random.slice(0, 2);
      return sliced;
    },
  },
  methods: {
    ...mapActions(joinActivitiesStore, ['getActivities', 'getOrders']),
    ...mapActions(authStore, ['getUserId']),
  },
  mounted() {
    this.getActivities();
    this.getOrders();
    this.userId = this.getUserId();
  },
};
</script>

<template>
  <h3 class="mb-8 text-xl font-medium">更多揪團活動</h3>
  <ul class="grid gap-6 md:grid-cols-2">
    <li
      class="col-span-1"
      v-for="activity in slicedActivities"
      :key="activity.id"
    >
      <RouterLink class="h-full" :to="`/JoinDetail/id=${activity.id}`"
        ><JoinCardRow :activity="activity" :userId="userId"></JoinCardRow
      ></RouterLink>
    </li>
  </ul>
</template>

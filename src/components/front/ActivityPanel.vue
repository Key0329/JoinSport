<script>
import { mapActions, mapState } from 'pinia';
import joinActivitiesStore from '@/stores/front/joinActivitiesStore';
import authStore from '@/stores/front/authStore';

export default {
  name: 'ActivityPanel',

  computed: {
    ...mapState(joinActivitiesStore, ['availableActivities']),

    // 篩選出此會員參與的活動
    filteredArray() {
      // 取出 userId
      const id = parseInt(this.getUserId(), 10);
      // 取出此會員參與的活動
      const filteredArray = this.availableActivities.filter((activity) =>
        activity.participantsId.includes(id)
      );

      return filteredArray;
    },
    nextActivity() {
      // 調整需要的日期格式
      const membersActivities = this.filteredArray.map((activity) => {
        const month = activity.date?.split('/')[0];
        const day = activity.date?.split('/')[1];

        const newActivity = {
          ...activity,
          month: parseInt(month, 10),
          day: parseInt(day, 10),
        };

        return newActivity;
      });

      // 依日期排序
      const sortActivities = membersActivities.sort(
        (a, b) => a.originDate - b.originDate
      );

      return sortActivities.slice(0, 1);
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
  <div class="flex flex-col gap-8 rounded-lg bg-primary-03 p-6">
    <div>
      <div class="mb-4 flex items-center justify-between">
        <h5>下一個活動</h5>
        <RouterLink
          to="/Member/List"
          class="text-sm text-[#3d3d3d] hover:text-primary-01"
          >所有參加的活動</RouterLink
        >
      </div>
      <RouterLink
        :to="`/JoinDetail/id=${nextActivity[0]?.id}`"
        class="group flex flex-col rounded-[10px] bg-white shadow-[0_0_4px_rgba(0,0,0,0.3)] transition-all duration-100 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] sm:flex-row"
      >
        <!-- card img -->
        <div class="relative flex w-full items-center py-4 pl-4 sm:w-1/2">
          <img
            class="h-full rounded"
            :src="nextActivity[0]?.mainImg"
            alt="card-img-01"
          />
        </div>
        <!-- card body -->
        <div
          class="w-full rounded-b-[10px] border-x border-b px-2 pt-2 pb-3 sm:border-0"
        >
          <h5 class="mb-2 group-hover:text-primary-01">
            {{ nextActivity[0]?.title }}
          </h5>

          <p class="flex items-center text-sm text-[#3D3D3D]">
            <span class="material-icons mr-1 text-primary-01"> room </span
            >{{ nextActivity[0]?.city }}{{ nextActivity[0]?.district }}
          </p>
          <p class="mb-1 flex items-center text-sm text-[#3D3D3D]">
            <span class="material-icons mr-1 text-primary-01"> schedule </span
            >{{ nextActivity[0]?.month }}/{{ nextActivity[0]?.day }}
            {{ nextActivity[0]?.startTime.time }}
          </p>
          <p class="text-end text-xs">
            {{ nextActivity[0]?.participantsId.length }} 位參加者
          </p>
        </div>
      </RouterLink>
    </div>
    <div>
      <div class="mb-4 flex items-center justify-between">
        <h5>我關注的運動</h5>
        <RouterLink
          to="/JoinList/Hot/1"
          class="text-sm text-[#3d3d3d] hover:text-primary-01"
          >探索更多運動</RouterLink
        >
      </div>
      <div
        class="grid grid-cols-3 gap-4 rounded-[10px] bg-white p-4 shadow-[0_0_4px_rgba(0,0,0,0.3)] transition-all duration-100 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]"
      >
        <RouterLink
          to="/joinList/search/text=健身&area=0&date=0&page=1"
          href="#"
          class="relative col-span-1 h-[100px] hover:opacity-80 hover:after:absolute hover:after:left-1/2 hover:after:top-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:text-xl hover:after:text-white hover:after:content-['健身']"
        >
          <img
            class="h-full w-full rounded-lg"
            src="../../assets/images/group/group03.png"
            alt="favoriteSport"
          />
        </RouterLink>
        <RouterLink
          to="/joinList/search/text=潛水&area=0&date=0&page=1"
          href="#"
          class="relative col-span-1 h-[100px] hover:opacity-80 hover:after:absolute hover:after:left-1/2 hover:after:top-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:text-xl hover:after:text-white hover:after:content-['潛水']"
        >
          <img
            class="h-full w-full rounded-lg"
            src="../../assets/images/group/group04.png"
            alt="favoriteSport"
          />
        </RouterLink>
        <RouterLink
          to="/joinList/search/text=籃球&area=0&date=0&page=1"
          href="#"
          class="relative col-span-1 h-[100px] hover:opacity-80 hover:after:absolute hover:after:left-1/2 hover:after:top-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:text-xl hover:after:text-white hover:after:content-['籃球']"
        >
          <img
            class="h-full w-full rounded-lg"
            src="../../assets/images/group/group05.png"
            alt="favoriteSport"
          />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

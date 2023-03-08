<script>
import { mapActions } from 'pinia';
import authStore from '@/stores/front/authStore';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      activities: [],
    };
  },
  computed: {
    currentActivities() {
      return this.activities.filter(
        (activity) => activity.isCancelled !== true
      );
    },
  },
  methods: {
    ...mapActions(authStore, ['getUserId']),
    getUsersActivity() {
      const id = this.getUserId();
      const path = `${VITE_URL}/activities?userId=${id}`;

      this.$http
        .get(path)
        .then((res) => {
          this.activities = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getUsersActivity();
  },
};
</script>

<template>
  <main>
    <section>
      <h1 class="mb-12 text-3xl">我主持的揪團</h1>
      <table class="mb-[160px] table-fixed">
        <thead>
          <tr class="border-b border-gray-300">
            <th width="25%" class="py-2 text-start font-normal">名稱</th>
            <th width="15%" class="py-2 text-start font-normal">日期</th>
            <th width="30%" class="py-2 text-start font-normal">地點</th>
            <th width="10%" class="py-2 text-center font-normal">參與人數</th>
            <th width="20%" class="py-2"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="activity in currentActivities" :key="activity?.id">
            <tr class="mb-4">
              <td class="py-2">{{ activity.title }}</td>
              <td class="py-2">{{ activity.date }}</td>
              <td class="py-2">{{ activity.address }}</td>
              <td class="py-2 text-center">{{ activity.maxJoinNum }}</td>
              <td class="flex gap-1 py-2 text-center">
                <RouterLink :to="`/JoinDetail/id=${activity.id}`">
                  <button
                    type="button"
                    class="btn border border-primary-01 px-2 py-1 hover:bg-primary-01 hover:text-white"
                  >
                    <i class="pi pi-image"></i> 頁面
                  </button>
                </RouterLink>
                <RouterLink
                  :to="`/Member/Edit/EditInfo=${activity.id}&title=${activity.title}`"
                >
                  <button
                    type="button"
                    class="btn btn-primary h-full px-2 py-1"
                  >
                    <i class="pi pi-user-edit"></i> 編輯
                  </button>
                </RouterLink>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>
  </main>
</template>

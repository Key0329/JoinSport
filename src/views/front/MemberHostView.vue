<script>
import { mapActions } from 'pinia';
import authStore from '@/stores/authStore';

const { VITE_URL } = import.meta.env;

export default {
  name: 'MemberHostView',

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
          const errMessage = err.response.statusText;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage} 未能取得會員活動資訊`,
            life: 3000,
            contentStyleClass: 'custom-toast-danger',
          });
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
      <h1 class="mb-8 text-center text-xl md:mb-12 md:text-left md:text-3xl">
        我主持的揪團
      </h1>
      <table class="mb-[160px] table-fixed">
        <thead>
          <tr class="border-b border-gray-300">
            <th width="25%" class="py-2 text-start font-normal">名稱</th>
            <th width="15%" class="py-2 text-start font-normal">日期</th>
            <th width="30%" class="hidden py-2 text-start font-normal md:block">
              地點
            </th>
            <th width="10%" class="py-2 text-center font-normal">人數</th>
            <th width="20%" class="py-2"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="activity in currentActivities" :key="activity?.id">
            <tr class="mb-4">
              <td class="py-2">{{ activity.title }}</td>
              <td class="py-2">{{ activity.date }}</td>
              <td class="hidden py-2 md:block">{{ activity.address }}</td>
              <td class="py-2 text-center">{{ activity.maxJoinNum }}</td>
              <td class="flex flex-col gap-1 py-2 text-center md:flex-row">
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

<script>
import { mapActions } from 'pinia';
import authStore from '@/stores/front/authStore';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      activities: [],
      isRemoved: false,
    };
  },
  computed: {
    currentActivities() {
      return this.activities.filter(
        (activity) => activity.isCancelled !== true
      );
    },
    cancelledActivities() {
      return this.activities.filter(
        (activity) => activity.isCancelled === true
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
          console.log(res.data);
          this.activities = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    remove() {
      this.isRemoved = true;
      alert('已清除');
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
            <th width="20%" class="py-2 text-start font-normal">名稱</th>
            <th width="15%" class="py-2 text-start font-normal">日期</th>
            <th width="35%" class="py-2 text-start font-normal">地點</th>
            <th width="15%" class="py-2 text-center font-normal">
              參與人數 / 最大
            </th>
            <th width="15%" class="py-2"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="activity in currentActivities" :key="activity?.id">
            <tr class="mb-4">
              <td class="py-2">{{ activity.title }}</td>
              <td class="py-2">{{ activity.date }}</td>
              <td class="py-2">{{ activity.address }}</td>
              <td class="py-2 text-center">{{ activity.maxJoinNum }}</td>
              <td class="py-2 text-center">
                <button type="button" class="btn btn-primary px-2 py-1">
                  <i class="pi pi-user-edit mr-1"></i> 編輯
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>

    <section v-if="cancelledActivities">
      <h1 class="mb-8 text-3xl">已取消的揪團</h1>
      <table class="table-fixed">
        <thead>
          <tr class="border-b border-gray-300">
            <th width="20%" class="py-2 text-start font-normal">名稱</th>
            <th width="15%" class="py-2 text-start font-normal">日期</th>
            <th width="35%" class="py-2 text-start font-normal">地點</th>
            <th width="15%" class="py-2 text-center font-normal">
              參與人數 / 最大
            </th>
            <th width="15%" class="py-2"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="activity in cancelledActivities" :key="activity?.id">
            <tr v-if="!isRemoved" class="mb-4">
              <td class="py-2">{{ activity.title }}</td>
              <td class="py-2">{{ activity.date }}</td>
              <td class="py-2">{{ activity.address }}</td>
              <td class="py-2 text-center">{{ activity.maxJoinNum }}</td>
              <td class="py-2 text-center">
                <button
                  type="button"
                  class="btn btn-primary px-2 py-1"
                  @click="remove"
                >
                  <i class="pi pi-trash mr-1"></i>清除
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>
  </main>
</template>

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
  computed: {},
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
  },
  mounted() {
    this.getUsersActivity();
  },
};
</script>

<template>
  <main>
    <h1 class="mb-12 text-3xl">我主持的揪團</h1>
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
        <template v-for="activity in activities" :key="activity.id">
          <tr class="mb-4">
            <td class="py-2">{{ activity.title }}</td>
            <td class="py-2">{{ activity.date }}</td>
            <td class="py-2">{{ activity.address }}</td>
            <td class="py-2 text-center">{{ activity.maxJoinNum }}</td>
            <td class="py-2 text-center">
              <button type="button" class="btn btn-primary px-2 py-1">
                編輯
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </main>
</template>

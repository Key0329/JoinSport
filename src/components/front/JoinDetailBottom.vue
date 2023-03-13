<script>
import BookMark from '@/components/front/BookMark.vue';

const { VITE_URL } = import.meta.env;

export default {
  props: {
    userId: {
      type: String,
    },
    activity: {
      type: Object,
    },
    orders: {
      type: Array,
    },
  },
  components: {
    BookMark,
  },
  computed: {
    hadJoined() {
      return (
        this.orders.find(
          (item) => item.userId === parseInt(this.userId, 10)
        ) !== undefined
      );
    },
    isHost() {
      return this.activity.userId === this.userId;
    },
  },
  methods: {
    userConfirmJoin() {
      const data = {
        userId: parseInt(this.userId, 10),
        activityId: this.activity.id,
        isCancelled: false,
      };

      const path = `${VITE_URL}/orders`;

      this.$confirm.require({
        message: `${this.activity.title}`,
        header: '確認參加',

        accept: () => {
          this.$http
            .post(path, data)
            .then(() => {
              this.$toast.add({
                severity: 'success',
                detail: '報名成功',
                life: 1000,
              });
              this.$emit('getActivitiesOrders', this.$route.params.id);
            })
            .catch((err) => {
              this.$toast.add({
                severity: 'error',
                detail: `${err}'報名失敗'`,
                life: 1000,
                contentStyleClass: 'custom-toast-danger',
              });
            });
        },
      });
    },
    userCancelJoin() {
      const userOrder = this.orders.find(
        (order) => order.userId === parseInt(this.userId, 10)
      );
      const { id } = userOrder;
      const data = {
        isCancelled: true,
      };
      const path = `${VITE_URL}/orders/${id}`;

      this.$confirm.require({
        message: `${this.activity.title}`,
        header: '確認取消',

        accept: () => {
          this.$http
            .patch(path, data)
            .then(() => {
              this.$toast.add({
                severity: 'success',
                detail: '成功取消此揪團',
                life: 1000,
              });
              this.$emit('getActivitiesOrders', this.$route.params.id);
            })
            .catch((err) => {
              this.$toast.add({
                severity: 'error',
                detail: `${err}'取消報名失敗'`,
                life: 1000,
                contentStyleClass: 'custom-toast-danger',
              });
            });
        },
      });
    },
    hostCancelActivity() {
      const { id } = this.$route.params;
      const data = {
        isCancelled: true,
      };
      const path = `${VITE_URL}/activities/${id}`;

      this.$confirm.require({
        message: `${this.activity.title}`,
        header: '確認關閉此揪團',

        accept: () => {
          this.$http
            .patch(path, data)
            .then(() => {
              this.$toast.add({
                severity: 'success',
                detail: '已關閉此揪團',
                life: 1000,
              });
              this.$router.push('/');
            })
            .catch((err) => {
              this.$toast.add({
                severity: 'error',
                detail: `${err}'關閉失敗'`,
                life: 1000,
                contentStyleClass: 'custom-toast-danger',
              });
            });
        },
      });
    },
    changeToZhTW() {
      this.$primevue.config.locale.accept = '確認';
      this.$primevue.config.locale.reject = '取消';
    },
  },
  mounted() {
    this.changeToZhTW();
  },
};
</script>

<template>
  <div class="flex flex-col items-center md:flex-row md:justify-between">
    <div class="mb-2 md:mb-0">
      <p class="mb-2 flex items-center md:mb-0">
        <span class="material-symbols-outlined mr-1 text-primary-01">
          calendar_month
        </span>
        {{ activity.date }}
        {{ activity.dayOfWeekText }}
        <span class="material-icons ml-2 mr-1 text-primary-01"> schedule </span>
        {{ activity?.startTime?.time }}
      </p>
      <h2 class="text-lg font-semibold sm:text-xl">
        {{ activity.title }}
      </h2>
    </div>
    <div class="flex items-center gap-6">
      <p>
        {{ activity.maxJoinNum - orders.length }}
        個空位
      </p>
      <!-- 收藏 -->
      <BookMark ref="bookmark" :userId="userId" :activity="activity"></BookMark>
      <!-- 主辦者 -->
      <template v-if="isHost">
        <button
          type="button"
          class="btn btn-primary py-4 hover:bg-primary-01 hover:text-white"
          disabled
        >
          主辦者
        </button>
        <button
          type="button"
          @click="hostCancelActivity"
          class="btn border border-primary-01 py-4 hover:bg-primary-01 hover:text-white"
        >
          取消此揪團
        </button>
      </template>
      <!-- 參與者 - 已參加 -->
      <template v-else-if="hadJoined">
        <button
          type="button"
          class="btn btn-primary py-4 hover:bg-primary-01 hover:text-white"
          disabled
        >
          已參加
        </button>
        <button
          type="button"
          class="btn border border-primary-01 py-4 hover:bg-primary-01 hover:text-white"
          @click="userCancelJoin"
          label="cancel"
        >
          取消報名
        </button>
      </template>
      <!-- 參與者 - 尚未參加 -->
      <template v-else>
        <button
          type="button"
          class="btn btn-primary py-4"
          @click="userConfirmJoin"
          label="confirm"
        >
          我要參加
        </button>
      </template>
    </div>
  </div>
</template>

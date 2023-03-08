<script>
import { mapState, mapActions } from 'pinia';
import joinActivitiesStore from '@/stores/front/joinActivitiesStore';
import authStore from '@/stores/front/authStore';
import FrontHeader from '@/components/front/FrontHeader.vue';
import JoinAttendees from '@/components/front/JoinAttendees.vue';
import JoinCardRow from '@/components/front/JoinCardRow.vue';
import JoinDetailAside from '@/components/front/JoinDetailAside.vue';

const { VITE_URL } = import.meta.env;

export default {
  inject: ['reload'],
  components: {
    FrontHeader,
    JoinAttendees,
    JoinCardRow,
    JoinDetailAside,
  },
  data() {
    return {
      userId: null,
      activity: [],
      orders: [],
      textareaValue: '',
    };
  },
  computed: {
    ...mapState(joinActivitiesStore, ['restructureActivitiesList']),

    newDateActivity() {
      if (!this.activity.date) {
        return {};
      }

      const datePart = this.activity.date.split('-');
      const date = `${datePart[1]}/${datePart[2]}`;
      const dayOfWeek = new Date(this.activity.date).getDay();
      const dayOfWeekText = [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
      ][dayOfWeek];

      const newDateActivity = {
        ...this.activity,
        date,
        dayOfWeekText,
      };

      return newDateActivity;
    },
    slicedActivities() {
      // 避免 side effect
      const tempActivity = [...this.restructureActivitiesList];
      // 刪掉已取消的揪團
      const filterList = tempActivity.filter(
        (activity) => activity.isCancelled === false
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
    ...mapActions(joinActivitiesStore, ['getActivities', 'getOrders']),
    ...mapActions(authStore, ['getUserId']),

    getActivityDetail(id) {
      const path = `${VITE_URL}/activities/${id}?_expand=user&_expand=group`;
      this.$http
        .get(path)
        .then((res) => {
          this.activity = res.data;
        })
        .catch((err) => {
          console.log(err);
          alert('err');
        });
    },
    getActivityOrders(id) {
      const path = `${VITE_URL}/orders?isCancelled=false&activityId=${id}&_expand=user`;
      this.$http
        .get(path)
        .then((res) => {
          this.orders = res.data;
        })
        .catch((err) => {
          console.log(err);
          alert('err');
        });
    },
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
              alert('報名成功');
              this.reload();
            })
            .catch((err) => {
              console.log(err);
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
              alert('取消揪團成功');
              this.reload();
            })
            .catch((err) => {
              console.log(err);
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
              alert('已關閉此揪團');
              this.reload();
            })
            .catch((err) => {
              console.log(err);
            });
        },
      });
    },
    changeToZhTW() {
      this.$primevue.config.locale.accept = '確認';
      this.$primevue.config.locale.reject = '取消';
    },
  },
  watch: {
    $route(to) {
      if (to.params.id) {
        this.getActivityDetail(to.params.id);
        this.getActivityOrders(to.params.id);
      }
    },
  },
  mounted() {
    this.getActivityDetail(this.$route.params.id);
    this.getActivityOrders(this.$route.params.id);
    this.getActivities();
    this.getOrders();
    this.userId = this.getUserId();
    this.changeToZhTW();
  },
};
</script>
<template>
  <front-header></front-header>
  <section
    v-if="!newDateActivity.isCancelled === true"
    class="pt-[120px] pb-5 md:pt-[92px]"
  >
    <div class="container">
      <h2 class="mb-4 text-xl font-bold md:text-3xl">
        {{ newDateActivity.title }}
      </h2>
      <div class="flex items-center gap-4">
        <PAvatar
          :image="newDateActivity?.user?.img"
          size="xlarge"
          shape="circle"
        />
        <div>
          <p>主辦者</p>
          <p>{{ newDateActivity?.user?.name }}</p>
        </div>
      </div>
    </div>
  </section>

  <main
    v-if="!newDateActivity.isCancelled === true"
    class="bg-primary-03 py-10 md:py-20"
  >
    <div class="container">
      <div
        class="grid h-full grid-cols-12 border-b border-[#3d3d3d] pb-10 md:pb-20"
      >
        <div class="col-span-12 md:col-span-8">
          <img
            :src="newDateActivity.mainImg"
            alt="JoinDetailImage"
            class="rounded md:mb-10"
          />
          <!-- mobile -->
          <section
            class="mb-4 flex items-center justify-between border-b md:mb-0 md:hidden md:border-0"
          >
            <h3
              class="whitespace-nowrap text-lg font-medium md:mb-8 md:text-xl"
            >
              揪團詳情
            </h3>
            <div class="p-4">
              <p
                class="flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"
              >
                <span class="material-icons mr-1 text-primary-01">
                  schedule </span
                >{{ newDateActivity?.date }}
                {{ newDateActivity?.startTime?.time }}
              </p>
              <p
                class="flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"
              >
                <span class="material-icons text-primary-01"> room </span
                >{{ newDateActivity.city }}{{ newDateActivity.district }}
              </p>
              <span class="pl-8 text-sm text-[#b7b7b7]">{{
                newDateActivity.address
              }}</span>
            </div>
          </section>
          <article class="mb-10 md:mb-20">
            {{ newDateActivity.content }}
          </article>
          <section
            class="mb-10 flex justify-evenly border-y border-[#3d3d3d] py-10 md:mb-20"
          >
            <div class="text-center">
              <span class="material-symbols-outlined text-4xl">
                credit_card
              </span>
              <p>{{ newDateActivity.paymentMethod }}</p>
            </div>
            <div class="text-center">
              <span class="material-symbols-outlined text-4xl">
                monetization_on
              </span>
              <p>$ {{ newDateActivity.costPerPerson }}</p>
            </div>
            <div class="text-center">
              <span class="material-symbols-outlined text-4xl"> group </span>
              <p>{{ newDateActivity.maxJoinNum }} 人</p>
            </div>
          </section>
          <TabView>
            <TabPanel header="參與者">
              <ul class="flex flex-wrap gap-4">
                <li v-for="user in orders" :key="user.userId">
                  <JoinAttendees :user="user"></JoinAttendees>
                </li>
              </ul>
            </TabPanel>
            <TabPanel header="更多照片">
              <div class="flex flex-col justify-evenly gap-2 md:flex-row">
                <div
                  class="w-full"
                  v-for="(img, i) in newDateActivity.imgs"
                  :key="img + i"
                >
                  <img :src="img" alt="JoinDetailImg" class="h-full" />
                </div>
              </div>
            </TabPanel>
            <TabPanel header="留言">
              <ul class="mb-10 flex flex-col gap-8 md:mb-20">
                <li class="flex gap-4">
                  <div>
                    <PAvatar
                      image="/src/assets/images/avatar/avatar01.png"
                      size="xlarge"
                      shape="circle"
                      class="mb-2"
                    />
                  </div>
                  <div class="w-full rounded-lg bg-white p-4">
                    <p class="mb-2 text-sm">Annie</p>
                    <p class="mb-4">請問租借球拍的費用是多少呢?</p>
                    <div class="mb-2 flex text-sm">
                      <span class="mr-2">B1</span>
                      <span class="mr-2">4 小時前</span>
                      <a href="#" class="text-[#b7b7b7]">回覆</a>
                    </div>
                    <a href="#" class="text-sm text-[#b1b1b1]"
                      >— 查看其他 1 則留言</a
                    >
                  </div>
                </li>
                <li class="flex gap-4">
                  <div>
                    <PAvatar
                      image="/src/assets/images/avatar/avatar01.png"
                      size="xlarge"
                      shape="circle"
                      class="mb-2"
                    />
                  </div>
                  <div class="w-full rounded-lg bg-white p-4">
                    <p class="mb-2 text-sm">Annie</p>
                    <p class="mb-4">請問租借球拍的費用是多少呢?</p>
                    <div class="mb-2 flex text-sm">
                      <span class="mr-2">B1</span>
                      <span class="mr-2">4 小時前</span>
                      <a href="#" class="text-[#b7b7b7]">回覆</a>
                    </div>
                    <a href="#" class="text-sm text-[#b1b1b1]"
                      >— 查看其他 1 則留言</a
                    >
                  </div>
                </li>
              </ul>
              <div>
                <p class="mb-4">留言</p>
                <form>
                  <PTextarea
                    v-model="textareaValue"
                    rows="5"
                    class="mb-2 w-full"
                    placeholder="留下您的想法"
                  />
                  <div class="flex justify-end gap-4">
                    <button
                      type="button"
                      class="btn bg-white transition-colors hover:bg-primary-02"
                    >
                      取消
                    </button>
                    <button
                      type="button"
                      class="btn bg-primary-04 transition-colors hover:bg-primary-02"
                    >
                      確認
                    </button>
                  </div>
                </form>
              </div>
            </TabPanel>
          </TabView>
        </div>
        <!-- sidebar -->
        <JoinDetailAside :activity="newDateActivity"></JoinDetailAside>
      </div>
      <section class="pt-10">
        <h3 class="mb-8 text-xl font-medium">更多揪團活動</h3>
        <ul class="grid grid-cols-2 gap-6">
          <li
            class="col-span-1"
            v-for="activity in slicedActivities"
            :key="activity.id"
          >
            <RouterLink class="h-full" :to="`/JoinDetail/id=${activity.id}`"
              ><join-card-row
                :activity="activity"
                :userId="userId"
              ></join-card-row
            ></RouterLink>
          </li>
        </ul>
      </section>
    </div>
  </main>

  <main v-else>
    <div
      class="flex h-screen flex-col items-center justify-center bg-primary-03"
    >
      <h1 class="mb-10 text-4xl">Oops...此揪團已取消</h1>
      <h2 class="mb-4 text-xl font-bold md:text-3xl">
        {{ newDateActivity.title }}
      </h2>
      <div class="mb-10 flex items-center gap-4">
        <PAvatar
          :image="newDateActivity?.user?.img"
          size="xlarge"
          shape="circle"
        />
        <div>
          <p>主辦者</p>
          <p>{{ newDateActivity?.user?.name }}</p>
        </div>
      </div>
      <router-link to="/">
        <PButton
          type="button"
          label="回到首頁"
          icon="pi pi-home"
          iconPos="right"
        />
      </router-link>
    </div>
  </main>

  <section
    v-if="!newDateActivity.isCancelled === true"
    class="sticky bottom-0 z-30 bg-white py-5"
  >
    <div class="container">
      <div class="flex flex-col items-center md:flex-row md:justify-between">
        <div class="mb-2 md:mb-0">
          <p class="mb-2 flex items-center md:mb-0">
            <span class="material-symbols-outlined mr-1 text-primary-01">
              calendar_month
            </span>
            {{ newDateActivity.date }}
            {{ newDateActivity.dayOfWeekText }}
            <span class="material-icons ml-2 mr-1 text-primary-01">
              schedule
            </span>
            {{ newDateActivity?.startTime?.time }}
          </p>
          <h2 class="text-lg font-semibold sm:text-xl">
            {{ newDateActivity.title }}
          </h2>
        </div>
        <div class="flex items-center gap-6">
          <p>
            {{ newDateActivity.maxJoinNum - orders.length }}
            個空位
          </p>
          <a href="#">
            <i class="pi pi-star text-lg"></i>
          </a>
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
          <button
            v-else
            type="button"
            class="btn btn-primary py-4"
            @click="userConfirmJoin"
            label="confirm"
          >
            我要參加
          </button>
        </div>
      </div>
    </div>
  </section>

  <ConfirmDialog></ConfirmDialog>
</template>

<style scoped>
:deep(.p-tabview-nav),
:deep(.p-tabview-nav li),
:deep(.p-tabview-nav li .p-tabview-nav-link),
:deep(.p-tabview-panels) {
  background-color: #faede2;
}
:deep(.p-tabview-nav li.p-highlight .p-tabview-nav-link) {
  background-color: #faede2;
  color: #ef5230;
  border-color: #ef5230;
}
:deep(.p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus) {
  box-shadow: inset 0 0 0 0;
}
</style>

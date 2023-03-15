<script>
import { mapActions } from 'pinia';
import authStore from '@/stores/authStore';

import FrontHeader from '@/components/front/FrontHeader.vue';
import JoinDetailMore from '@/components/front/JoinDetailMore.vue';
import JoinDetailAside from '@/components/front/JoinDetailAside.vue';
import JoinDetailBottom from '@/components/front/JoinDetailBottom.vue';
import JoinDetailTabView from '@/components/front/JoinDetailTabView.vue';
import JoinDetailCancel from '@/components/front/JoinDetailCancel.vue';

const { VITE_URL } = import.meta.env;

export default {
  name: 'JoinDetailView',
  components: {
    FrontHeader,
    JoinDetailMore,
    JoinDetailAside,
    JoinDetailBottom,
    JoinDetailTabView,
    JoinDetailCancel,
  },
  data() {
    return {
      userId: null,
      activity: [],
      orders: [],
      imgLoading: true,
    };
  },
  computed: {
    // 加入調整日期
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
  },
  methods: {
    ...mapActions(authStore, ['getUserId']),

    getActivityDetail(id) {
      const path = `${VITE_URL}/activities/${id}?_expand=user&_expand=group`;
      this.$http
        .get(path)
        .then((res) => {
          this.activity = res.data;
        })
        .catch((err) => {
          const errMessage = err.response.statusText;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage} 找不到活動資訊`,
            life: 1000,
            contentStyleClass: 'custom-toast-danger',
          });
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
          const errMessage = err.response.statusText;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage} 找不到參與者資訊`,
            life: 1000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
    onImageLoad() {
      this.imgLoading = false;
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
    this.userId = this.getUserId();
  },
};
</script>

<template>
  <PToast />
  <front-header></front-header>
  <section
    v-if="!newDateActivity.isCancelled === true"
    class="pt-[120px] pb-5 md:pt-[92px]"
  >
    <div v-if="imgLoading" class="container">
      <div class="skeleton mb-4 h-12 w-1/3 rounded-lg"></div>
      <div class="flex items-center gap-4">
        <div class="skeleton h-16 w-16 rounded-full"></div>
        <div class="skeleton h-12 w-10 rounded-lg"></div>
      </div>
    </div>
    <div v-else class="container">
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
          <div
            v-if="imgLoading"
            class="skeleton flex h-full w-full items-center justify-center rounded-l-[10px]"
          >
            <i class="pi pi-image text-xl text-gray-500"></i>
          </div>
          <img
            @load="onImageLoad"
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
          <!-- 主要內文 -->
          <article class="mb-10 md:mb-20">
            <QuillEditor
              v-model:content="newDateActivity.content"
              contentType="html"
              readOnly
              theme="bubble"
            />
          </article>
          <!-- 揪團資訊 -->
          <section
            class="mb-10 flex justify-evenly border-y border-[#3d3d3d] py-4 md:mb-20 md:py-10"
          >
            <div class="text-center">
              <span class="material-symbols-outlined text-xl md:text-4xl">
                credit_card
              </span>
              <p>{{ newDateActivity.paymentMethod }}</p>
            </div>
            <div class="text-center">
              <span class="material-symbols-outlined text-xl md:text-4xl">
                monetization_on
              </span>
              <p>$ {{ newDateActivity.costPerPerson }}</p>
            </div>
            <div class="text-center">
              <span class="material-symbols-outlined text-xl md:text-4xl">
                group
              </span>
              <p>{{ newDateActivity.maxJoinNum }} 人</p>
            </div>
          </section>
          <!-- Tab -->
          <JoinDetailTabView
            :userId="userId"
            :orders="orders"
            :activity="newDateActivity"
            @getActivity="getActivityDetail"
          ></JoinDetailTabView>
        </div>
        <!-- sidebar -->
        <JoinDetailAside :activity="newDateActivity"></JoinDetailAside>
      </div>
      <!-- 更多揪團 -->
      <section class="pt-10">
        <JoinDetailMore></JoinDetailMore>
      </section>
    </div>
  </main>

  <!-- 揪團取消頁面 -->
  <main v-else>
    <JoinDetailCancel :activity="newDateActivity"></JoinDetailCancel>
  </main>

  <section
    v-if="!newDateActivity.isCancelled === true"
    class="sticky bottom-0 z-30 bg-white py-5"
  >
    <div class="container">
      <JoinDetailBottom
        :activity="newDateActivity"
        :userId="userId"
        :orders="orders"
        @getActivitiesOrders="getActivityOrders"
      ></JoinDetailBottom>
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

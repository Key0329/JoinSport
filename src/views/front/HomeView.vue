<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import { mapActions, mapState } from 'pinia';
import joinActivitiesStore from '@/stores/front/activitiesStore';
import 'swiper/css';
import 'swiper/css/navigation';

import HomeHeader from '../../components/front/HomeHeader.vue';
import HomeBanner from '../../components/front/HomeBanner.vue';
import JoinCard from '../../components/front/JoinCard.vue';
import JoinCardRow from '../../components/front/JoinCardRow.vue';
import Loading from '../../components/front/LoadingComponent.vue';
import HomeViewFeatureVue from '../../components/front/HomeViewFeature.vue';

export default {
  name: 'HomeView',
  components: {
    Loading,
    HomeBanner,
    JoinCard,
    Swiper,
    SwiperSlide,
    JoinCardRow,
    HomeHeader,
    HomeViewFeatureVue,
  },
  data() {
    return {
      modules: [Navigation],
      fullPage: true,
    };
  },
  computed: {
    ...mapState(joinActivitiesStore, ['availableActivities', 'isLoading']),
    shuffledActivities() {
      /* 過濾已取消活動 */
      const filterList = this.availableActivities.filter(
        (activity) => activity.isCancelled === false
      );

      /* 隨機排序 */
      const randomAct = filterList.sort(() => Math.random() - 0.5);
      return randomAct;
    },

    hotActivitiesList() {
      /* 過濾已取消的揪團 */
      const filterList = this.availableActivities.filter(
        (activity) => activity.isCancelled === false
      );

      /* 依照參與人數排序熱門程度 */
      const tempList = filterList.sort((a, b) => {
        return b.numParticipants - a.numParticipants;
      });

      return tempList.slice(0, 12);
    },
  },
  methods: {
    ...mapActions(joinActivitiesStore, ['getActivities', 'getOrders']),
  },
  mounted() {
    this.getActivities();
    this.getOrders();
  },
};
</script>

<template>
  <!-- loading -->
  <VueLoading
    v-model:active="isLoading"
    :can-cancel="true"
    :is-full-page="fullPage"
    ><Loading></Loading>
  </VueLoading>

  <home-header></home-header>
  <home-banner></home-banner>
  <!-- Feature -->

  <section class="bg-[#F3F3F3] py-9 md:py-20">
    <HomeViewFeatureVue></HomeViewFeatureVue>
  </section>
  <!-- Hot activities -->
  <section class="relative hidden py-9 sm:block md:py-20">
    <div class="container">
      <h2 class="mb-8 text-center text-3xl md:mb-16">熱門揪團</h2>
      <ul
        class="hidden gap-x-6 gap-y-12 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <li
          v-for="activity in hotActivitiesList"
          :key="activity.id"
          class="md:col-span-1"
        >
          <router-link :to="`/JoinDetail/id=${activity.id}`" class="h-full"
            ><join-card :activity="activity"></join-card
          ></router-link>
        </li>
      </ul>
      <img
        class="absolute top-10 -left-[250px] -z-10"
        src="../../assets/images/banner/Vector-1.png"
        alt="bg-image"
      />
    </div>
  </section>

  <!-- Hot activities mobile-->
  <section class="border-b pt-9 pb-9 sm:hidden">
    <div class="container">
      <h2 class="mb-8 text-center text-3xl">熱門揪團</h2>
      <div>
        <swiper
          :slides-per-view="1"
          :space-between="24"
          navigation
          :modules="modules"
          class="swiper2 relative"
        >
          <swiper-slide
            v-for="activity in shuffledActivities"
            :key="activity.id"
          >
            <router-link to=""
              ><JoinCardRow :activity="activity"></JoinCardRow
            ></router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <!-- coming activities -->
  <section class="relative overflow-hidden pt-10 pb-[100px]">
    <div class="container">
      <h2 class="mb-8 text-center text-3xl md:mb-0 md:text-left">
        即將到來的揪團
      </h2>
      <div>
        <swiper
          :space-between="24"
          navigation
          :modules="modules"
          :breakpoints="{
            576: {
              slidesPerView: 1,
            },
            960: {
              slidesPerView: 2,
            },
          }"
          class="swiper1 relative"
        >
          <swiper-slide
            v-for="activity in shuffledActivities"
            :key="activity.id"
          >
            <router-link :to="`/JoinDetail/id=${activity.id}`"
              ><JoinCardRow :activity="activity"></JoinCardRow
            ></router-link>
          </swiper-slide>
        </swiper>
      </div>
      <img
        class="absolute -right-[210px] top-0 -z-10 hidden md:block"
        src="../../assets/images/banner/Vector-2.png"
        alt="bg-image-2"
      />
    </div>
  </section>

  <section class="bg-primary-02 py-10">
    <div class="container">
      <div class="justify-end sm:flex">
        <h3 class="mb-2 text-xl sm:mr-10 sm:mb-0">立刻創建自己的揪團</h3>
        <router-link
          to="/CreateJoin/step1"
          class="btn-primary btn p-ripple"
          v-ripple
          >開啟揪團</router-link
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.swiper1:deep(.swiper-button-next:after),
.swiper1:deep(.swiper-button-prev:after),
.swiper2:deep(.swiper-button-next:after),
.swiper2:deep(.swiper-button-prev:after) {
  font-size: 16px;
}

.swiper1:deep(.swiper-button-next) {
  position: absolute;
  top: 55%;
  right: 0;
  width: 36px;
  height: 36px;
  transform: translateX(-50%);
  color: black;
  border-radius: 100%;
  font-weight: 900;
  transform: translateY(-50%);
}
.swiper1:deep(.swiper-button-prev) {
  position: absolute;
  width: 36px;
  height: 36px;
  top: 55%;
  left: 0;
  transform: translateX(50%);
  color: black;
  border-radius: 100%;
  font-weight: 900;
  transform: translateY(-50%);
}

@media (min-width: 576px) {
  .swiper1:deep(.swiper-button-next) {
    right: 0;
  }
  .swiper1:deep(.swiper-button-prev) {
    left: 0;
  }
}

@media (min-width: 960px) {
  .swiper1 {
    padding-top: 60px;
    padding-bottom: 20px;
  }
  .swiper1:deep(.swiper-button-next) {
    background-color: #ef5230;
    top: 48px;
    right: 0;
  }
  .swiper1:deep(.swiper-button-prev) {
    background-color: #ef5230;
    top: 48px;
    left: 85%;
  }
}

@media (min-width: 1320px) {
  .swiper1:deep(.swiper-button-next) {
    right: 0;
  }
  .swiper1:deep(.swiper-button-prev) {
    left: 90%;
  }
}

.swiper2:deep(.swiper-button-next) {
  position: absolute;
  top: 55%;
  right: 0;
  width: 18px;
  height: 18px;
  transform: translateX(-50%);
  color: black;
  border-radius: 100%;
  font-weight: 900;
  transform: translateY(-50%);
}
.swiper2:deep(.swiper-button-prev) {
  position: absolute;
  width: 18px;
  height: 18px;
  top: 55%;
  left: 0;
  transform: translateX(50%);
  color: black;
  border-radius: 100%;
  font-weight: 900;
  transform: translateY(-50%);
}
</style>

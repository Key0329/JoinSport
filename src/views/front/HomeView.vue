<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import { mapActions, mapState } from 'pinia';
import joinActivitiesStore from '@/stores/front/joinActivitiesStore';
import 'swiper/css';
import 'swiper/css/navigation';

import HomeHeader from '../../components/front/HomeHeader.vue';
import HomeBanner from '../../components/front/HomeBanner.vue';
import JoinCard from '../../components/front/JoinCard.vue';
import GroupCard from '../../components/front/GroupCard.vue';

export default {
  components: {
    HomeBanner,
    JoinCard,
    Swiper,
    SwiperSlide,
    GroupCard,
    HomeHeader,
  },
  data() {
    return {
      modules: [Navigation],
    };
  },
  computed: {
    ...mapState(joinActivitiesStore, ['activitiesList']),
  },
  methods: {
    ...mapActions(joinActivitiesStore, ['getActivities']),
  },
  beforeRouteEnter(to, from, next) {
    // 當路由進入時，讓頁面滾動到最上方
    window.scrollTo(0, 0);
    next();
  },
  mounted() {
    this.getActivities();
  },
};
</script>

<template>
  <home-header></home-header>
  <home-banner></home-banner>

  <!-- Feature -->
  <section class="bg-[#F3F3F3] py-9 md:py-20">
    <div class="container">
      <h2 class="mb-8 text-center text-3xl md:mb-[72px] md:text-4xl">
        在<span class="text-primary-01">揪運動</span>可以做什麼
      </h2>
      <div class="mb-8 grid grid-cols-3 gap-8 md:mb-[72px]">
        <div class="col-span-3 md:col-span-1">
          <img
            class="mx-auto mb-2 h-40"
            src="../../assets/images/feature/feature01.png"
            alt="feature01"
          />
          <h3
            class="mb-4 text-center text-[20px] text-primary-01 md:mb-2 md:text-xl"
          >
            加入揪團
          </h3>
          <p class="mx-auto w-[296px]">
            馬上加入其他人已經發起的揪團，您可以看到有哪些揪團正在進行，選擇加入您感興趣的揪團。
          </p>
        </div>
        <div
          class="relative col-span-3 md:col-span-1 md:before:absolute md:before:-right-3 md:before:top-1/2 md:before:h-[184px] md:before:w-[1px] md:before:-translate-y-1/2 md:before:bg-primary-01 md:before:content-[''] md:after:absolute md:after:-left-3 md:after:top-1/2 md:after:h-[184px] md:after:w-[1px] md:after:-translate-y-1/2 md:after:bg-primary-01 md:after:content-['']"
        >
          <img
            class="mx-auto mb-2 h-40"
            src="../../assets/images/feature/feature02.png"
            alt="feature02"
          />
          <h3
            class="mb-4 text-center text-[20px] text-primary-01 md:mb-2 md:text-xl"
          >
            當主揪自己開團
          </h3>
          <p class="mx-auto w-[296px] text-center">
            找不到想要的團嗎？您可以自己開團！自己選擇主題、活動時間、地點、參與人數，然後發起您自己的揪團
          </p>
        </div>
        <div class="col-span-3 md:col-span-1">
          <img
            class="mx-auto mb-2 h-40"
            src="../../assets/images/feature/feature03.png"
            alt="feature03"
          />
          <h3
            class="mb-4 text-center text-[20px] text-primary-01 md:mb-2 md:text-xl"
          >
            加入主題群組
          </h3>
          <p class="mx-auto w-[296px]">
            除了加入揪團，您還可以加入運動群組，例如：戶外運動、周末羽球、全台潛水...加入群組，隨時與同好交流、分享心得！
          </p>
        </div>
      </div>
      <div class="flex justify-center">
        <router-link
          class="btn-primary btn p-ripple mx-auto w-fit"
          v-ripple
          to=""
          >加入 Join Sport</router-link
        >
      </div>
    </div>
  </section>
  <!-- Coming activities -->
  <section class="relative hidden py-9 sm:block md:py-20">
    <div class="container">
      <h2 class="mb-8 text-center text-3xl md:mb-16">即將到來的揪團</h2>
      <ul
        class="hidden gap-x-6 gap-y-10 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <li
          v-for="activity in activitiesList"
          :key="activity.id"
          class="md:col-span-1"
        >
          <router-link to="login" class="h-full"
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

  <!-- Coming activities mobile-->
  <section class="pt-9 xs:mb-12 sm:hidden md:py-20">
    <div class="container">
      <h2 class="mb-8 text-center text-3xl">即將到來的揪團</h2>
      <div>
        <swiper
          :slides-per-view="1"
          :space-between="24"
          navigation
          :modules="modules"
          class="swiper2 relative"
        >
          <swiper-slide>
            <router-link to=""><join-card></join-card></router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to=""><join-card></join-card></router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to=""><join-card></join-card></router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <!-- Hot activities -->
  <section class="relative mb-10 overflow-hidden pt-9 md:py-24">
    <div class="container">
      <h2 class="mb-8 text-center text-3xl md:mb-0 md:text-left">熱門群組</h2>
      <div>
        <swiper
          :space-between="24"
          navigation
          :modules="modules"
          :breakpoints="{
            576: {
              slidesPerView: 2,
            },
            960: {
              slidesPerView: 3,
            },
          }"
          class="swiper1 relative"
        >
          <swiper-slide>
            <router-link to=""><group-card></group-card></router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to=""><group-card></group-card></router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to=""><group-card></group-card></router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to=""><group-card></group-card></router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to=""><group-card></group-card></router-link>
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
      <div class="flex justify-end">
        <h3 class="mr-10 text-xl">立刻創建自己的揪團</h3>
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
  font-size: 12px;
}

.swiper1:deep(.swiper-button-next) {
  position: absolute;
  top: 280px;
  right: 30%;
  width: 36px;
  height: 36px;
  transform: translateX(-50%);
  color: black;
  border-radius: 100%;
  background-color: #fbe3d1;
  font-weight: 900;
}
.swiper1:deep(.swiper-button-prev) {
  position: absolute;
  width: 36px;
  height: 36px;
  top: 280px;
  left: 30%;
  transform: translateX(50%);
  color: black;
  border-radius: 100%;
  background-color: #fbe3d1;
  font-weight: 900;
}

.swiper1 {
  padding-bottom: 60px;
}

@media (min-width: 576px) {
  .swiper1:deep(.swiper-button-next) {
    right: 35%;
  }
  .swiper1:deep(.swiper-button-prev) {
    left: 35%;
  }
}

@media (min-width: 960px) {
  .swiper1 {
    padding-top: 60px;
    padding-bottom: 0;
  }
  .swiper1:deep(.swiper-button-next) {
    background-color: #ef5230;
    top: 36px;
    right: 0;
  }
  .swiper1:deep(.swiper-button-prev) {
    background-color: #ef5230;
    top: 36px;
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

.swiper2 {
  padding-bottom: 80px;
}
.swiper2:deep(.swiper-button-next) {
  position: absolute;
  top: 450px;
  right: 30%;
  width: 36px;
  height: 36px;
  transform: translateX(-50%);
  color: black;
  border-radius: 100%;
  background-color: #fbe3d1;
  font-weight: 900;
}
.swiper2:deep(.swiper-button-prev) {
  position: absolute;
  width: 36px;
  height: 36px;
  top: 450px;
  left: 30%;
  transform: translateX(50%);
  color: black;
  border-radius: 100%;
  background-color: #fbe3d1;
  font-weight: 900;
}

@media (min-width: 375px) {
  .swiper2:deep(.swiper-button-next),
  .swiper2:deep(.swiper-button-prev) {
    top: 480px;
  }
}
</style>

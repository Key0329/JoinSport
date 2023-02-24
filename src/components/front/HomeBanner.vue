<script>
import { RouterLink } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    RouterLink,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay, EffectCoverflow],
    };
  },
};
</script>

<template>
  <section class="overflow-hidden pt-[72px] pb-9 md:pb-[76px]">
    <div class="container">
      <div class="relative grid grid-cols-12 gap-6">
        <div class="col-span-12 mt-9 md:col-span-5 lg:mt-[120px]">
          <h1 class="mb-6 text-2xl md:text-4xl">
            運動揪團平台<br />馬上找到一起
            <swiper
              :space-between="24"
              :slidesPerView="1"
              :modules="modules"
              :loop="true"
              :autoplay="{ delay: 1500 }"
              class="w-20 text-center text-primary-01"
            >
              <swiper-slide>運動</swiper-slide>
              <swiper-slide>打球</swiper-slide>
              <swiper-slide>衝浪</swiper-slide>
              <swiper-slide>爬山</swiper-slide>
              <swiper-slide>潛水</swiper-slide>
            </swiper>
            的夥伴
          </h1>
          <p class="mb-6 md:mb-12">
            無論想要做甚麼運動，健行、登山到衝浪，這裡有數萬位夥伴隨時分享他們的活動與心情。加入我們，每天都有各式各樣的活動等著你來探索！
          </p>
          <div
            class="mb-6 flex w-full items-center rounded-lg border border-[#B7B7B7] py-2"
          >
            <span
              class="material-icons pointer-events-none ml-5 mr-3 text-primary-01"
            >
              search
            </span>
            <input
              class="w-full bg-transparent focus:outline-none"
              type="text"
              placeholder="搜尋 ＂爬山＂"
            />
          </div>
          <div class="mb-6 flex gap-6">
            <div
              class="flex w-full items-center rounded-lg border border-[#B7B7B7] py-2"
            >
              <span
                class="material-icons pointer-events-none ml-5 mr-3 text-primary-01"
              >
                room
              </span>
              <input
                class="w-full bg-transparent focus:outline-none"
                type="text"
                placeholder="地區"
              />
            </div>
            <div
              class="flex w-full items-center rounded-lg border border-[#B7B7B7] py-2"
            >
              <span
                class="material-icons pointer-events-none ml-5 mr-3 text-primary-01"
              >
                date_range
              </span>
              <input
                class="w-full bg-transparent focus:outline-none"
                type="text"
                placeholder="時間"
              />
            </div>
          </div>
          <button
            type="button"
            class="btn btn-primary p-ripple mb-6 w-full md:mb-4"
            v-ripple
          >
            開始搜尋
          </button>
          <!-- tags -->
          <ul class="mb-3 flex flex-wrap gap-x-2 gap-y-6 md:gap-2">
            <li>
              <a class="tag" href="#">羽球</a>
            </li>
            <li>
              <a class="tag" href="#">馬拉松</a>
            </li>
            <li>
              <a class="tag" href="#">爬山</a>
            </li>
            <li>
              <a class="tag" href="#">保齡球</a>
            </li>
            <li>
              <a class="tag" href="#">潛水</a>
            </li>
            <li>
              <a class="tag" href="#">攀岩</a>
            </li>
            <li>
              <a class="tag" href="#">衝浪</a>
            </li>
          </ul>
        </div>
        <div class="col-span-12 mb-9 md:col-span-7 md:mb-[152px]">
          <img
            class="mt-2"
            src="../../assets/images/banner/Frame.png"
            alt="HomeBanner"
          />
        </div>
        <img
          class="absolute bottom-20 -z-10 md:-right-24 md:top-24"
          src="../../assets/images/banner/Vector-3.png"
          alt="HomeBannerBackground"
        />
      </div>

      <!-- links -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div class="col-span-1">
          <router-link to="/JoinList/JoinListHot" class="group">
            <img
              class="mb-4 h-[213px] w-full rounded-[10px] object-cover group-hover:opacity-90"
              src="../../assets/images/banner/banner01.png"
              alt="HomeBanner01"
            />
            <p
              class="flex items-center justify-center transition-all group-hover:text-primary-01"
            >
              揪團室內運動<span
                class="material-symbols-outlined invisible text-primary-01 transition-all group-hover:visible"
              >
                arrow_forward
              </span>
            </p>
          </router-link>
        </div>
        <div class="col-span-1">
          <router-link to="/login" class="group">
            <img
              class="mb-4 h-[213px] w-full rounded-[10px] object-cover group-hover:opacity-90"
              src="../../assets/images/banner/banner02.png"
              alt="HomeBanner02"
            />
            <p
              class="flex items-center justify-center transition-all group-hover:text-primary-01"
            >
              探索戶外活動<span
                class="material-symbols-outlined invisible text-primary-01 transition-all group-hover:visible"
              >
                arrow_forward
              </span>
            </p>
          </router-link>
        </div>
        <div class="col-span-1">
          <router-link to="/login" class="group">
            <img
              class="mb-4 h-[213px] w-full rounded-[10px] object-cover group-hover:opacity-90"
              src="../../assets/images/banner/banner03.png"
              alt="HomeBanner03"
            />
            <p
              class="flex items-center justify-center transition-all group-hover:text-primary-01"
            >
              遇見新朋友<span
                class="material-symbols-outlined invisible text-primary-01 transition-all group-hover:visible"
              >
                arrow_forward
              </span>
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.swiper {
  display: inline-flex;
  margin: 0;
}
</style>

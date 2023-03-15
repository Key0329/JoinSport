<script>
import { mapState, mapActions } from 'pinia';
import searchStore from '@/stores/searchStore';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'HomeBanner',

  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay, EffectCoverflow],
      searchTagsValue: '',
      searchAreaValue: '',
      searchDateValue: '',
    };
  },
  computed: {
    ...mapState(searchStore, [
      'tags',
      'randomList',
      'taiwanCities',
      'filteredTags',
    ]),

    dateString() {
      const date = new Date(this.searchDateValue);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const dateString = `${year}-${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`;

      return dateString;
    },
    slicedTagList() {
      const sliced = this.randomList.slice(0, 12);
      return sliced;
    },
  },
  methods: {
    ...mapActions(searchStore, [
      'getTags',
      'getTaiwanDistrictData',
      'searchText',
    ]),
    handleSubmit() {
      let tags = this.searchTagsValue;
      if (typeof tags !== 'string') {
        tags = this.searchTagsValue.value;
      }
      const area = this.searchAreaValue;
      const date = this.searchDateValue;

      if (tags || area || date) {
        const path = `/joinList/search/text=${tags || 0}&area=${
          area.name || 0
        }&date=${date ? this.dateString : 0}&page=1`;

        this.$router.push(path);
      } else {
        this.$router.push('/joinList/Hot/1');
      }
    },
  },
  mounted() {
    this.getTags();
    this.getTaiwanDistrictData();
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
          <form @submit.prevent="handleSubmit" @keyup.enter="handleSubmit">
            <!-- text -->
            <div
              class="mb-6 flex w-full items-center rounded-lg border border-[#B7B7B7] py-2"
            >
              <span
                class="material-icons pointer-events-none ml-5 mr-3 text-primary-01"
              >
                search
              </span>
              <AutoComplete
                v-model="searchTagsValue"
                :suggestions="filteredTags"
                @complete="searchText"
                optionLabel="label"
                loadingIcon="false"
                placeholder="搜尋 ＂爬山＂"
                class="w-full"
              />
            </div>
            <div class="mb-6 flex gap-6">
              <!-- area -->
              <div
                class="flex w-full items-center rounded-lg border border-[#B7B7B7] py-2"
              >
                <span
                  class="material-icons pointer-events-none ml-5 mr-3 text-primary-01"
                >
                  room
                </span>
                <PDropdown
                  id="city"
                  v-model="searchAreaValue"
                  optionLabel="name"
                  placeholder="選擇縣市"
                  :options="taiwanCities"
                  class="w-full"
                />
              </div>
              <!-- date -->
              <div
                class="flex w-full items-center rounded-lg border border-[#B7B7B7] py-2"
              >
                <span
                  class="material-icons pointer-events-none ml-5 mr-3 text-primary-01"
                >
                  date_range
                </span>
                <PCalendar
                  id="date"
                  v-model="searchDateValue"
                  placeholder="選擇日期"
                  dateFormat="yy-mm-dd"
                  :showIcon="false"
                  class="w-full"
                />
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-primary p-ripple mb-6 w-full md:mb-4"
              v-ripple
            >
              開始搜尋
            </button>
          </form>
          <!-- tags -->
          <ul
            class="mb-3 flex gap-x-2 gap-y-6 overflow-x-auto md:flex-wrap md:gap-2"
          >
            <li v-for="tag in slicedTagList" :key="tag">
              <RouterLink
                :to="`/joinList/search/text=${tag.label}&area=0&date=0&page=1`"
                class="tag"
              >
                {{ tag.label }}
              </RouterLink>
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
          <router-link
            to="/joinList/search/text=室內運動&area=0&date=0&page=1"
            class="group"
          >
            <img
              class="mb-4 h-[213px] w-full rounded-[10px] object-cover group-hover:opacity-90"
              src="../../assets/images/banner/banner04.jpg"
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
          <router-link
            to="/joinList/search/text=戶外活動&area=0&date=0&page=1"
            class="group"
          >
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
:deep(.p-autocomplete-input),
:deep(.p-autocomplete-input:focus),
:deep(.p-dropdown-label),
:deep(.p-dropdown),
:deep(.p-dropdown:not(.p-disabled).p-focus),
:deep(.p-calendar .p-inputtext) {
  background-color: transparent;
  border: none;
  box-shadow: none;
  width: 100%;
  padding: 0;
}
</style>

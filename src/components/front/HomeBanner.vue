<script>
import { RouterLink } from 'vue-router';
import { mapState, mapActions } from 'pinia';
import tagsStore from '@/stores/tagsStore';
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
      searchTagsValue: '',
      filteredTags: [],
      searchAreaValue: '',
      tempDistrict: [],
      searchDateValue: '',
    };
  },
  computed: {
    ...mapState(tagsStore, ['tags', 'tagList']),

    taiwanCities() {
      const cities = this.tempDistrict.map((city) => {
        return { name: city.name };
      });

      return cities;
    },
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
  },
  methods: {
    ...mapActions(tagsStore, ['getTags']),

    searchTag(event) {
      setTimeout(() => {
        this.filteredTags = this.tagList.filter((tag) => {
          return tag.label.toLowerCase().match(event.query.toLowerCase());
        });
      }, 250);
    },
    getTaiwanDistrictData() {
      const path =
        'https://gist.githubusercontent.com/abc873693/2804e64324eaaf26515281710e1792df/raw/a1e1fc17d04b47c564bbd9dba0d59a6a325ec7c1/taiwan_districts.json';

      this.$http
        .get(path)
        .then((res) => {
          this.tempDistrict = res.data;
        })
        .then((err) => {
          const errMessage = err;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage}`,
            life: 1000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
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

      // if (tags && area && date) {
      //   console.log(3);
      //   return;
      // }

      // if (tags && area) {
      //   console.log(2);
      //   return;
      // }

      // if (tags && date) {
      //   console.log(22);
      //   return;
      // }

      // if (area && date) {
      //   path = `/joinList/Search=${area.name}+${this.dateString}&page=1`;
      //   console.log(path);
      //   this.$router.push(path);

      //   return;
      // }

      // if (tags || area || date) {
      //   path = `/joinList/Search=${
      //     tags || area.name || this.dateString
      //   }&page=1`;
      //   console.log(path);
      //   this.$router.push(path);
      // }

      // this.$http
      //   .get(path)
      //   .then((res) => {
      //     console.log(res.data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
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
                @complete="searchTag"
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
          <router-link to="/JoinList/Hot" class="group">
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
          <router-link to="/JoinList/Hot" class="group">
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

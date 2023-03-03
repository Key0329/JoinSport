<script>
import FrontHeader from '../../components/front/FrontHeader.vue';

export default {
  components: {
    FrontHeader,
  },
  data() {
    return {
      listTypes: [
        { label: '熱門', icon: 'pi pi-fw pi-hot', to: '/JoinList/Hot' },
        { label: '最新', icon: 'pi pi-fw pi-new', to: '/JoinList/New' },
      ],
      selectedTime: null,
      selectedType: null,
      selectedDistance: null,
      selectTime: [
        { time: '全部' },
        { time: '今天' },
        { time: '明天' },
        { time: '本周' },
        { time: '本月' },
      ],
      selectType: [
        { type: '戶外運動' },
        { type: '室內運動' },
        { type: '場地運動' },
        { type: '水上運動' },
        { type: '球拍運動' },
      ],
      selectDistance: [
        { distance: '全部' },
        { distance: '1 公里內' },
        { distance: '3 公里內' },
        { distance: '5 公里內' },
        { distance: '10 公里內' },
      ],
    };
  },
};
</script>

<template>
  <front-header></front-header>
  <section class="top-0 z-20 bg-white pt-[75px] sm:sticky">
    <div class="container">
      <div
        class="mt-5 flex w-full flex-col items-center justify-between border-b py-5 md:my-0 md:flex-row lg:py-0"
      >
        <!-- list type -->
        <TabMenu :model="listTypes" class="mb-6 text-3xl md:mb-0" />
        <!-- tags -->
        <div class="mb-6 hidden items-center gap-4 sm:flex md:mb-0 md:w-1/3">
          <h3>Tags:</h3>
          <ul class="flex flex-wrap items-center gap-2">
            <li>
              <a class="tag" href="#">羽球</a>
            </li>
            <li>
              <a class="tag" href="#">潛水</a>
            </li>
            <li>
              <a class="tag" href="#">橄欖球</a>
            </li>
            <li>
              <a class="tag" href="#">高爾夫球</a>
            </li>
            <li>
              <a class="tag" href="#">攀岩</a>
            </li>
          </ul>
        </div>

        <!-- 搜尋欄 -->
        <ul class="flex flex-col items-center gap-4 sm:flex-row">
          <li>
            <PDropdown
              v-model="selectedTime"
              :options="selectTime"
              optionLabel="time"
              placeholder="活動時間"
              class="list-view-search"
            />
          </li>
          <li>
            <PDropdown
              v-model="selectedType"
              :options="selectType"
              optionLabel="type"
              placeholder="運動類型"
              class="list-view-search"
            />
          </li>
          <li>
            <PDropdown
              v-model="selectedDistance"
              :options="selectDistance"
              optionLabel="distance"
              placeholder="任何距離"
              class="list-view-search"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <router-view></router-view>
</template>

<style scoped>
:deep(.list-view-search .p-inputtext) {
  padding-right: 0;
}
:deep(
    .p-tabmenu
      .p-tabmenu-nav
      .p-tabmenuitem
      .p-menuitem-link:not(.p-disabled):focus
  ) {
  box-shadow: inset 0 0 0 0;
}
:deep(.p-menuitem-icon) {
  display: none;
}
</style>

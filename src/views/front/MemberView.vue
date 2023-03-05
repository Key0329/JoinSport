<script>
import FrontHeader from '@/components/front/FrontHeader.vue';
import MemberPanel from '@/components/front/MemberPanel.vue';
import PanelMenu from '@/components/front/PanelMenu.vue';
import FullCalendarList from '@/components/front/FullCalendarList.vue';
import ActivityPanel from '@/components/front/ActivityPanel.vue';

export default {
  components: {
    FrontHeader,
    MemberPanel,
    PanelMenu,
    FullCalendarList,
    ActivityPanel,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <FrontHeader></FrontHeader>
  <main class="pb-20 pt-[120px]">
    <div class="container">
      <div class="grid grid-cols-12">
        <div class="col-span-4">
          <div class="flex flex-col gap-4">
            <MemberPanel></MemberPanel>
            <PanelMenu></PanelMenu>
            <FullCalendarList></FullCalendarList>
            <ActivityPanel></ActivityPanel>
          </div>
        </div>
        <div class="col-span-7 col-end-13"><RouterView></RouterView></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
:deep(.p-panelmenu-header .p-panelmenu-header-content) {
  background-color: #faede2;
}
:deep(
    .p-panelmenu
      .p-panelmenu-header:not(.p-disabled):focus
      .p-panelmenu-header-content
  ) {
  box-shadow: 0 0 0 1px #faede2;
}
</style>

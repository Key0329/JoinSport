<script>
import FrontHeader from '@/components/front/FrontHeader.vue';
import MemberPanel from '@/components/front/MemberPanel.vue';
import PanelMenu from '@/components/front/PanelMenu.vue';
import FullCalendarList from '@/components/front/FullCalendarList.vue';
import ActivityPanel from '@/components/front/ActivityPanel.vue';

export default {
  name: 'MemberView',
  components: {
    FrontHeader,
    MemberPanel,
    PanelMenu,
    FullCalendarList,
    ActivityPanel,
  },
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<template>
  <FrontHeader></FrontHeader>
  <main class="pb-20 pt-[120px]">
    <div class="container">
      <div class="grid-cols-12 md:grid">
        <div class="col-span-4 hidden md:block">
          <div class="flex flex-col gap-4">
            <MemberPanel></MemberPanel>
            <PanelMenu></PanelMenu>
            <ActivityPanel></ActivityPanel>
            <FullCalendarList></FullCalendarList>
          </div>
        </div>
        <PSidebar v-model:visible="visible" class="md:hidden">
          <div class="col-span-4 md:block">
            <div class="flex flex-col gap-4">
              <MemberPanel></MemberPanel>
              <PanelMenu></PanelMenu>
              <ActivityPanel></ActivityPanel>
              <FullCalendarList></FullCalendarList>
            </div>
          </div>
        </PSidebar>
        <div class="col-span-7 col-end-13"><RouterView></RouterView></div>
      </div>
    </div>
    <button
      @click="visible = true"
      class="fixed left-0 bottom-20 z-50 bg-primary-01 px-3 py-2 md:hidden"
    >
      <i class="pi pi-angle-double-right"></i>
    </button>
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

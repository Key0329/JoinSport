<script>
import FrontHeader from '@/components/front/FrontHeader.vue';
import MemberPanel from '@/components/front/MemberPanel.vue';
import PanelMenu from '@/components/front/PanelMenu.vue';
import FullCalendarList from '@/components/front/FullCalendarList.vue';

export default {
  components: {
    FrontHeader,
    MemberPanel,
    PanelMenu,
    FullCalendarList,
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
          <MemberPanel></MemberPanel>
          <PanelMenu></PanelMenu>
          <FullCalendarList></FullCalendarList>
        </div>
        <div class="col-span-7 col-end-13"><RouterView></RouterView></div>
      </div>
    </div>
  </main>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</template>

<style scoped>
:deep(.p-panelmenu-header .p-panelmenu-header-content) {
  background-color: #faede2;
}
</style>

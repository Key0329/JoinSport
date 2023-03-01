<script>
import FullCalendar from '@/components/front/FullCalendar.vue';

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    // 當路由進入時，讓頁面滾動到最上方
    window.scrollTo(0, 0);
    next();
  },
};
</script>

<template>
  <FullCalendar></FullCalendar>
</template>

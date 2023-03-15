<script>
import FullCalendar from '@/components/front/FullCalendar.vue';

export default {
  name: 'MemberCalendarView',

  components: {
    FullCalendar,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container py-10">
    <FullCalendar></FullCalendar>
  </div>
</template>

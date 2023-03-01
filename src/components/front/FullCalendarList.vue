<script>
import FullCalendar from '@fullcalendar/vue3';
import listPlugin from '@fullcalendar/list';
import zhTw from '@fullcalendar/core/locales/zh-tw';

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [listPlugin],
        initialView: 'listWeek',
        weekends: true,
        locale: zhTw,
        headerToolbar: {
          left: '',
          center: '',
          right: '',
        },
        events: [
          { title: '開會', start: new Date() },
          {
            title: '打球',
            start: '2023-03-01T14:30:00',
            // extendedProps: {
            //   status: 'done',
            // },
          },
          {
            title: '生日派對',
            start: '2023-03-02T07:00:00',
            borderColor: 'red',
          },
          {
            title: '生日派對',
            start: '2023-03-02T07:00:00',
            borderColor: 'red',
          },
          {
            title: '生日派對',
            start: '2023-03-02T07:00:00',
            borderColor: 'red',
          },
          {
            title: '生日派對',
            start: '2023-03-02T07:00:00',
            borderColor: 'red',
          },
          {
            title: '生日派對',
            start: '2023-03-02T07:00:00',
            borderColor: 'red',
          },
          {
            title: '生日派對',
            start: '2023-03-02T07:00:00',
            borderColor: 'red',
          },
          {
            title: '生日派對',
            start: '2023-03-02T07:00:00',
            borderColor: 'red',
          },
        ],
        editable: false,
      },
    };
  },
};
</script>

<template>
  <FullCalendar :options="calendarOptions" />
  <RouterLink
    to="/Member/Calendar"
    class="mt-2 flex items-center justify-end hover:text-primary-01"
    >詳細月曆<i class="pi pi-arrow-up-right ml-1"></i
  ></RouterLink>
</template>

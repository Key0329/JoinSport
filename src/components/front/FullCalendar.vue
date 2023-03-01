<script>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import zhTw from '@fullcalendar/core/locales/zh-tw';

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        },
        initialView: 'dayGridMonth',
        weekends: true,
        locale: zhTw,
        events: [
          {
            title: '開會',
            start: new Date(),
            borderColor: '#f1675d',
            backgroundColor: '#f1675d',
          },
          {
            title: '吃飯',
            start: new Date(),
            borderColor: '#f1675d',
            backgroundColor: '#f1675d',
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
</template>

<style>
.fc.fc-theme-standard .fc-toolbar .fc-button,
.fc.fc-theme-standard
  .fc-toolbar
  .fc-button.fc-dayGridMonth-button.fc-button-active,
.fc.fc-theme-standard .fc-toolbar .fc-button:disabled,
.fc.fc-theme-standard
  .fc-toolbar
  .fc-button.fc-timeGridWeek-button.fc-button-active,
.fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active,
.fc.fc-theme-standard
  .fc-toolbar
  .fc-button.fc-timeGridDay-button.fc-button-active {
  background: #ef5230;
  border: #ef5230;
}
.fc.fc-theme-standard
  .fc-toolbar
  .fc-button.fc-dayGridMonth-button:not(:disabled):focus,
.fc.fc-theme-standard
  .fc-toolbar
  .fc-button.fc-timeGridWeek-button:not(:disabled):focus,
.fc.fc-theme-standard
  .fc-toolbar
  .fc-button.fc-timeGridDay-button:not(:disabled):focus,
.fc.fc-theme-standard .fc-toolbar .fc-button:focus {
  box-shadow: 0 0 0 1px #ef5230;
}
.fc.fc-theme-standard
  .fc-toolbar
  .fc-button.fc-dayGridMonth-button.fc-button-active:hover,
.fc.fc-theme-standard
  .fc-toolbar
  .fc-button.fc-timeGridWeek-button.fc-button-active:hover,
.fc.fc-theme-standard
  .fc-toolbar
  .fc-button.fc-timeGridDay-button.fc-button-active:hover,
.fc.fc-theme-standard .fc-toolbar .fc-button:enabled:hover {
  background: #fbe3d1;
  border: 1px solid #fbe3d1;
}
.fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-block-event {
  background: #f1675d;
  border: #f1675d;
}
</style>

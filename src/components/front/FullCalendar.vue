<script>
import { mapActions, mapState } from 'pinia';
import joinActivitiesStore from '@/stores/front/activitiesStore';
import authStore from '@/stores/authStore';
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
        displayEventTime: false,
        locale: zhTw,
        height: '600px',
        eventDidMount: (info) => {
          if (info.event.extendedProps.status === 'done') {
            // 過期背景顏色
            const bgStyle = info.el.style;
            bgStyle.backgroundColor = '#faede2';

            // 過期圓點顏色
            const dotEl = info.el.getElementsByClassName(
              'fc-daygrid-event-dot'
            )[0];
            if (dotEl) {
              dotEl.style.borderColor = '#f1675d';
            }
          }
        },
        eventClick: (info) => {
          this.$router.push(`/JoinDetail/id=${info.event.id}`);
        },
        events: [
          {
            title: '開會',
            start: new Date(),
            borderColor: '#f1675d',
          },
        ],
        editable: true,
      },
    };
  },
  computed: {
    ...mapState(joinActivitiesStore, ['restructureActivitiesList']),

    getMemberEvent() {
      // 取出 userId
      const id = parseInt(this.getUserId(), 10);
      // 取出此會員參與的活動
      const filteredArray = this.restructureActivitiesList.filter((activity) =>
        activity.participantsId.includes(id)
      );
      // 調整需要的格式
      const membersActivities = filteredArray.map((activity) => {
        const date = new Date(activity.originDate).toISOString().split('T')[0];
        const time = `${date}T${activity.startTime?.time}:00`;
        const status =
          new Date(time).getTime() - new Date().getTime() < 0 ? 'done' : '';

        const schedule = {
          title: activity.title,
          id: activity.id,
          start: time,
          borderColor: '#36D488',
          extendedProps: {
            status,
          },
        };

        return schedule;
      });

      return membersActivities;
    },
  },
  methods: {
    ...mapActions(joinActivitiesStore, ['getActivities', 'getOrders']),
    ...mapActions(authStore, ['getUserId']),
  },
  watch: {
    getMemberEvent(to) {
      this.calendarOptions.events = to;
    },
  },
  mounted() {
    this.getActivities();
    this.getOrders();
  },
};
</script>

<template>
  <FullCalendar :options="calendarOptions" />
</template>

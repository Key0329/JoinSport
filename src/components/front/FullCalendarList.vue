<script>
import { mapActions, mapState } from 'pinia';
import joinActivitiesStore from '@/stores/front/activitiesStore';
import authStore from '@/stores/authStore';
import FullCalendar from '@fullcalendar/vue3';
import listPlugin from '@fullcalendar/list';
import zhTw from '@fullcalendar/core/locales/zh-tw';

export default {
  name: 'FullCalendarList',

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
        eventDidMount: (info) => {
          if (info.event.extendedProps.status === 'done') {
            const bgStyle = info.el.style;
            bgStyle.backgroundColor = '#faede2';
            bgStyle.textDecoration = 'line-through';

            // Change color of dot marker
            const dotEl =
              info.el.getElementsByClassName('fc-list-event-dot')[0];
            if (dotEl) {
              dotEl.style.borderColor = '#f1675d';
            }
          }
        },
        eventClick: (info) => {
          // alert('Event: ' + info.event.id);
          this.$router.push(`/JoinDetail/id=${info.event.id}`);
        },
        events: [
          { title: '開會', start: new Date() },
          {
            title: '打球',
            start: '2023-03-15T14:30:00',
            extendedProps: {
              status: 'done',
            },
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
        const date = new Date(activity?.originDate).toISOString().split('T')[0];
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
  <div class="my-6">
    <div class="flex justify-between">
      <h3 class="text-lg">本周活動</h3>
      <RouterLink
        to="/Member/Calendar"
        class="mt-1 flex items-center justify-end hover:text-primary-01"
        >詳細月曆<i class="pi pi-arrow-up-right ml-1"></i
      ></RouterLink>
    </div>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

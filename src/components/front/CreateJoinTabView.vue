<script>
import JoinAttendees from '@/components/front/JoinAttendees.vue';

export default {
  components: {
    JoinAttendees,
  },
};
</script>

<template>
  <TabView>
    <TabPanel header="參與者">
      <ul class="flex flex-wrap gap-4">
        <li>
          <JoinAttendees></JoinAttendees>
        </li>
        <li>
          <JoinAttendees></JoinAttendees>
        </li>
        <li>
          <JoinAttendees></JoinAttendees>
        </li>
      </ul>
    </TabPanel>
    <TabPanel header="更多照片">
      <div class="flex flex-col justify-evenly gap-2 md:flex-row">
        <div class="w-full">
          <img
            src="../../assets/images/activities/activity1501.jpg"
            alt="JoinDetailImg"
            class="h-full"
          />
        </div>
        <div class="w-full">
          <img
            src="../../assets/images/activities/activity1502.jpg"
            alt="JoinDetailImg"
            class="h-full"
          />
        </div>
        <div class="w-full">
          <img
            src="../../assets/images/activities/activity1503.jpg"
            alt="JoinDetailImg"
            class="h-full"
          />
        </div>
      </div>
    </TabPanel>
    <TabPanel header="留言">
      <div>
        <p class="mb-4">留言</p>
        <form>
          <PTextarea
            rows="5"
            class="mb-2 w-full"
            placeholder="留下您的想法"
            disabled
          />
          <div class="flex justify-end gap-4">
            <button
              type="button"
              class="btn transition-color bg-white disabled:opacity-50"
              disabled
            >
              取消
            </button>
            <button
              type="button"
              class="btn transition-color bg-primary-04 disabled:opacity-50"
              disabled
            >
              確認
            </button>
          </div>
        </form>
      </div>
    </TabPanel>
  </TabView>
</template>

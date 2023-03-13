<script>
import LeafletMap from '@/components/front/LeafletMap.vue';

export default {
  name: 'JoinDetailAside',

  components: {
    LeafletMap,
  },
  props: {
    activity: {
      type: Object,
    },
  },
};
</script>

<template>
  <aside class="sticky top-20 col-span-3 col-end-13 hidden h-[717px] md:block">
    <template v-if="activity">
      <ul class="mb-6 flex flex-wrap items-center gap-2">
        <li v-for="(tag, i) of activity.tags" :key="tag + i">
          <RouterLink
            :to="`/joinList/search/text=${tag}&area=0&date=0&page=1`"
            class="tag"
          >
            {{ tag }}
          </RouterLink>
        </li>
      </ul>
    </template>
    <div class="rounded-t-lg bg-white p-4">
      <p
        class="flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"
      >
        <span class="material-symbols-outlined mr-1 text-primary-01">
          calendar_month
        </span>
        {{ activity?.date }}
        {{ activity?.dayOfWeekText }}
        <span class="material-icons ml-2 mr-1 text-primary-01"> schedule </span>
        {{ activity?.startTime?.time }}
      </p>
      <p
        class="flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"
      >
        <span class="material-icons text-primary-01"> room </span
        ><a
          class="hover:text-primary-01"
          target="blank"
          :href="`https://www.google.com.tw/maps/place/${activity.address}`"
          >{{ activity.address }}</a
        >
      </p>
    </div>
    <LeafletMap
      v-if="!this.$route.path.includes('step')"
      :mapActivity="activity"
    ></LeafletMap>
    <div class="rounded-b-lg bg-white p-4">
      <button type="button" class="btn btn-primary w-full">
        <i class="pi pi-comments mr-2"></i>揪團聊天
      </button>
    </div>
  </aside>
</template>

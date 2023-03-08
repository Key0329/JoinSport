<script>
import LeafletMap from '@/components/front/LeafletMap.vue';

export default {
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
    <div class="mb-6 rounded-lg bg-white p-4">
      <div class="flex items-center gap-4">
        <div class="w-1/3">
          <img
            class="rounded-lg"
            src="../../assets/images/group/group03.png"
            alt="group"
          />
        </div>
        <div>
          <h4>大台北羽球群組</h4>
          <p>公開群組</p>
        </div>
      </div>
    </div>
    <template v-if="activity">
      <ul class="mb-6 flex flex-wrap items-center gap-2">
        <li v-for="(tag, i) of activity.tags" :key="tag + i">
          <a class="tag" href="#">{{ tag }}</a>
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
        {{ activity?.newDate }}
        {{ activity?.dayOfWeekText }}
        <span class="material-icons ml-2 mr-1 text-primary-01"> schedule </span>
        {{ activity?.startTime?.time }}
      </p>
      <p
        class="flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"
      >
        <span class="material-icons text-primary-01"> room </span
        >{{ activity.address }}
      </p>
    </div>
    <LeafletMap class="h-[300px]"></LeafletMap>
    <div class="rounded-b-lg bg-white p-4">
      <button type="button" class="btn btn-primary w-full">
        <i class="pi pi-comments mr-2"></i>揪團聊天
      </button>
    </div>
  </aside>
</template>

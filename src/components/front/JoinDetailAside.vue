<script>
import LeafletMap from '@/components/front/LeafletMap.vue';

export default {
  components: {
    LeafletMap,
  },
  props: {
    tempForm: {
      type: Object,
    },
    tempTags: {
      type: Array,
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
    <ul class="mb-6 flex flex-wrap items-center gap-2">
      <template v-if="tempTags">
        <li v-for="(tag, i) of tempTags" :key="tag + i">
          <a class="tag" href="#">{{ tag }}</a>
        </li>
      </template>
      <template v-else>
        <li>
          <a class="tag" href="#">攀岩</a>
        </li>
      </template>
    </ul>
    <div class="rounded-t-lg bg-white p-4">
      <p
        class="flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"
      >
        <span class="material-icons mr-1 text-primary-01"> schedule </span>
        {{ tempForm?.date || '03/29' }}
        {{ tempForm?.startTime?.time || '10:00' }}
      </p>
      <p
        class="flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"
      >
        <span class="material-icons text-primary-01"> room </span
        >{{ tempForm?.address || '231新北市新店區北新路一段88巷10號' }}
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

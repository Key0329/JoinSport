<script>
import LeafletMap from '@/components/front/LeafletMap.vue';

export default {
  components: {
    LeafletMap,
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
      <li>
        <a class="tag" href="#">羽球</a>
      </li>
      <li>
        <a class="tag" href="#">潛水</a>
      </li>
      <li>
        <a class="tag" href="#">橄欖球</a>
      </li>
      <li>
        <a class="tag" href="#">高爾夫球</a>
      </li>
    </ul>
    <div class="rounded-t-lg bg-white p-4">
      <p
        class="flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"
      >
        <span class="material-icons mr-1 text-primary-01"> schedule </span>3/25
        10:00
      </p>
      <p
        class="flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"
      >
        <span class="material-icons text-primary-01"> room </span>捷運新店區公所
      </p>
      <span class="pl-8 text-sm text-[#b7b7b7]"
        >231新北市新店區北新路一段88巷12號</span
      >
    </div>
    <LeafletMap class="h-[300px]"></LeafletMap>
    <div class="rounded-b-lg bg-white p-4">
      <button type="button" class="btn btn-primary w-full">
        <i class="pi pi-comments mr-2"></i>揪團聊天
      </button>
    </div>
  </aside>
</template>

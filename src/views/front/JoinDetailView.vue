<script>
import LeafletMap from '@/components/front/LeafletMap.vue';
import FrontHeader from '@/components/front/FrontHeader.vue';

export default {
  components: {
    FrontHeader,
    LeafletMap,
  },
};
</script>
<template>
  <front-header></front-header>
  <section class="pt-[105px] pb-7">
    <div class="container">
      <h2 class="mb-4 text-3xl font-bold">周末 # 羽球 # 新店運動中心</h2>
      <div class="flex items-center gap-4">
        <PAvatar
          image="/src/assets/images/avatar/avatar01.png"
          size="xlarge"
          shape="circle"
        />
        <div>
          <p>主辦者</p>
          <p>Jack</p>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-primary-03 py-20">
    <div class="container">
      <div class="grid grid-cols-12">
        <div class="col-span-8">132</div>
        <aside class="sticky top-0 col-span-3 col-end-13 pt-20">
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
            <li>
              <a class="tag" href="#">攀岩</a>
            </li>
          </ul>
          <div class="rounded-t-lg bg-white p-4">
            <p
              class="flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"
            >
              <span class="material-icons mr-1 text-primary-01"> schedule </span
              >3/25 10:00
            </p>
            <p
              class="flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"
            >
              <span class="material-icons text-primary-01"> room </span
              >捷運新店區公所
            </p>
            <span class="pl-8 text-sm text-[#b7b7b7]"
              >231新北市新店區北新路一段88巷12號</span
            >
          </div>
          <LeafletMap class="h-[300px]"></LeafletMap>
          <div class="rounded-b-ld bg-white p-4">
            <button type="button" class="btn btn-primary w-full">
              <i class="pi pi-comments mr-2"></i>揪團聊天
            </button>
          </div>
        </aside>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  </section>
  <section class="sticky bottom-0 z-30 bg-white py-6">
    <div class="container">
      <div class="flex justify-between">
        <div>
          <p>三月 25 日 星期六 10:00</p>
          <h2 class="text-xl font-bold">周末 # 羽球 # 新店運動中心</h2>
        </div>
        <div class="flex items-center gap-6">
          <p>3 個空位</p>
          <a href="#">
            <i class="pi pi-star text-lg"></i>
          </a>
          <button type="button" class="btn btn-primary py-4">我要參加</button>
        </div>
      </div>
    </div>
  </section>
</template>

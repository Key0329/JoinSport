<script>
export default {
  components: {},
};
</script>

<template>
  <div class="flex flex-col gap-8 rounded-lg bg-primary-03 p-6">
    <div>
      <div class="mb-4 flex items-center justify-between">
        <h5>下一個活動</h5>
        <RouterLink
          to="/Member/List"
          class="text-sm text-[#3d3d3d] hover:text-primary-01"
          >所有參加的活動</RouterLink
        >
      </div>
      <RouterLink
        to="/Member/List"
        class="group flex flex-col rounded-[10px] bg-white shadow-[0_0_4px_rgba(0,0,0,0.3)] transition-all duration-100 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] sm:flex-row"
      >
        <!-- card img -->
        <div class="relative flex w-full items-center p-2 pl-4 sm:w-1/2">
          <img
            class="rounded"
            src="../../assets/images/group/group07.png"
            alt="card-img-01"
          />
        </div>
        <!-- card body -->
        <div
          class="w-full rounded-b-[10px] border-x border-b px-2 pt-2 pb-3 sm:border-0"
        >
          <h5 class="mb-2 group-hover:text-primary-01">
            周末#羽球#新店運動中心
          </h5>

          <p class="flex items-center text-sm text-[#3D3D3D]">
            <span class="material-icons mr-1 text-primary-01"> room </span
            >捷運新店區公所
          </p>
          <p class="mb-1 flex items-center text-sm text-[#3D3D3D]">
            <span class="material-icons mr-1 text-primary-01"> schedule </span
            >3/25 10:00
          </p>
          <p class="text-end text-xs">5 位參加者</p>
        </div>
      </RouterLink>
    </div>
    <div>
      <div class="mb-4 flex items-center justify-between">
        <h5>您的群組</h5>
        <RouterLink
          to="/Member/List"
          class="text-sm text-[#3d3d3d] hover:text-primary-01"
          >所有參加的群組</RouterLink
        >
      </div>
      <RouterLink
        to="/Member/List"
        class="group rounded-[10px] bg-white shadow-[0_0_4px_rgba(0,0,0,0.3)] transition-all duration-100 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]"
      >
        <div class="flex flex-col items-center px-2 py-4">
          <i class="pi pi-users mb-2 text-xl"></i>
          <h5 class="mb-2">您還沒參加任何群組</h5>
          <p class="text-xs text-secondary-coffee group-hover:text-primary-01">
            探索可能有興趣的群組
          </p>
        </div>
      </RouterLink>
    </div>
    <div>
      <div class="mb-4 flex items-center justify-between">
        <h5>您喜愛的運動</h5>
        <RouterLink
          to="/Member/List"
          class="text-sm text-[#3d3d3d] hover:text-primary-01"
          >所有喜愛的運動</RouterLink
        >
      </div>
      <div
        class="grid grid-cols-3 gap-4 rounded-[10px] bg-white p-4 shadow-[0_0_4px_rgba(0,0,0,0.3)] transition-all duration-100 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]"
      >
        <a
          href="#"
          class="relative col-span-1 h-[100px] hover:opacity-80 hover:after:absolute hover:after:left-1/2 hover:after:top-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:text-xl hover:after:text-white hover:after:content-['健身']"
        >
          <img
            class="h-full w-full rounded-lg"
            src="../../assets/images/group/group03.png"
            alt="favoriteSport"
          />
        </a>
        <a
          href="#"
          class="relative col-span-1 h-[100px] hover:opacity-80 hover:after:absolute hover:after:left-1/2 hover:after:top-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:text-xl hover:after:text-white hover:after:content-['潛水']"
        >
          <img
            class="h-full w-full rounded-lg"
            src="../../assets/images/group/group04.png"
            alt="favoriteSport"
          />
        </a>
        <a
          href="#"
          class="relative col-span-1 h-[100px] hover:opacity-80 hover:after:absolute hover:after:left-1/2 hover:after:top-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:text-xl hover:after:text-white hover:after:content-['籃球']"
        >
          <img
            class="h-full w-full rounded-lg"
            src="../../assets/images/group/group05.png"
            alt="favoriteSport"
          />
        </a>
      </div>
    </div>
  </div>
</template>

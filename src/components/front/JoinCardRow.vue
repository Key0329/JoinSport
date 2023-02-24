<template>
  <div
    class="group flex flex-col gap-4 rounded-[10px] bg-white shadow-[0_0_4px_rgba(0,0,0,0.3)] transition-all duration-100 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] sm:flex-row"
  >
    <!-- card img -->
    <div class="relative w-full sm:w-1/2">
      <img
        class="h-full rounded-tl-[10px]"
        src="../../assets/images/group/group07.png"
        alt="card-img-01"
      />
      <ul class="absolute bottom-3 left-2 flex flex-col flex-wrap gap-2">
        <li>
          <span class="tag py-1 hover:text-black">潛水</span>
        </li>
        <li>
          <span class="tag py-1 hover:text-black">水上運動</span>
        </li>
        <li>
          <span class="tag py-1 hover:text-black">戶外</span>
        </li>
        <li>
          <span class="tag py-1 hover:text-black">屏東</span>
        </li>
        <li>
          <span class="tag py-1 hover:text-black">南部</span>
        </li>
        <li>
          <span class="tag py-1 hover:text-black">自行抵達</span>
        </li>
      </ul>
    </div>
    <!-- card body -->
    <div
      class="w-full rounded-b-[10px] border-x border-b px-3 pt-2 pb-3 sm:border-0"
    >
      <h5 class="mb-2 text-lg">周末#羽球#新店運動中心</h5>
      <p class="mb-4 text-sm text-[#6f6f6f]">
        不管是新手、中手、老手通通都歡迎，不用怕程度高低，開心打球最重要!
      </p>
      <div class="flex justify-end gap-2">
        <p
          class="flex items-center rounded-full bg-primary-03 py-1 px-2 text-sm text-[#3D3D3D]"
        >
          <span class="material-icons text-primary-01"> room </span
          >捷運新店區公所
        </p>
        <p
          class="flex items-center rounded-full bg-primary-03 py-1 px-2 text-sm text-[#3D3D3D]"
        >
          <span class="material-icons mr-1 text-primary-01"> schedule </span
          >3/25 10:00
        </p>
      </div>
      <div class="flex items-end">
        <div>
          <ul class="my-3 flex -space-x-2 overflow-hidden">
            <li>
              <img
                class="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                src="../../assets/images/avatar/avatar01.png"
                alt="avatar01"
              />
            </li>
            <li>
              <img
                class="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                src="../../assets/images/avatar/avatar02.png"
                alt="avatar02"
              />
            </li>
            <li>
              <img
                class="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                src="../../assets/images/avatar/avatar03.png"
                alt="avatar03"
              />
            </li>
          </ul>
          <div>
            <span class="mr-2 text-sm">11 位已參加揪團</span>
            <span class="text-sm text-red-500">剩餘 1 空位</span>
          </div>
        </div>
        <RouterLink
          to="/"
          class="btn-primary btn p-ripple ml-auto p-2 group-hover:bg-secondary-yellow group-hover:text-[#3D3D3D] sm:w-1/4"
          v-ripple
          >查看詳情</RouterLink
        >
      </div>
    </div>
  </div>
</template>

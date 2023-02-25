<template>
  <div
    class="group relative rounded-[10px] bg-white shadow-[0_0_4px_rgba(0,0,0,0.3)] transition-all duration-100 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]"
  >
    <p
      class="absolute top-4 left-2 z-[3] flex items-center rounded-full bg-primary-03 py-1 px-2 text-sm text-[#3D3D3D]"
    >
      <span class="material-icons text-primary-01"> room </span>捷運新店區公所
    </p>
    <p
      class="absolute top-14 left-2 z-[3] flex items-center rounded-full bg-primary-03 py-1 px-2 text-sm text-[#3D3D3D]"
    >
      <span class="material-icons mr-1 text-primary-01"> schedule </span>3/25
      10:00
    </p>
    <!-- card img -->
    <div>
      <img
        class="rounded-t-[10px]"
        src="../../assets/images/group/group07.png"
        alt="card-img-01"
      />
    </div>
    <!-- card body -->
    <div class="rounded-b-[10px] border-x border-b px-3 pt-2 pb-3 sm:border-0">
      <h5 class="mb-2 text-lg">周末#羽球#新店運動中心</h5>
      <p class="mb-4 text-sm text-[#6f6f6f]">
        不管是新手、中手、老手通通都歡迎，不用怕程度高低，開心打球最重要!
      </p>
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
      <div class="mb-2 flex justify-between">
        <span class="mr-2 text-sm">11 位已參加揪團</span>
        <span class="text-sm text-red-500">剩餘 1 空位</span>
      </div>
      <RouterLink
        to="/"
        class="btn-primary btn p-ripple w-full group-hover:bg-secondary-yellow group-hover:text-[#3D3D3D]"
        v-ripple
        >查看詳情</RouterLink
      >
    </div>
  </div>
</template>

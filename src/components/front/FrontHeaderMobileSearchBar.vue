<template>
  <div class="flex md:hidden">
    <div
      class="flex w-full items-center border border-r-0 border-[#B7B7B7] py-2"
    >
      <span
        class="material-icons pointer-events-none ml-2 mr-2 text-primary-01"
      >
        search
      </span>
      <input
        class="w-full bg-transparent text-sm focus:outline-none"
        type="text"
        placeholder="搜尋 ＂爬山＂"
      />
    </div>
    <div
      class="hidden w-full items-center border border-r-0 border-[#B7B7B7] py-2 sm:flex"
    >
      <span
        class="material-icons pointer-events-none ml-5 mr-3 text-primary-01"
      >
        room
      </span>
      <input
        class="w-full bg-transparent text-sm focus:outline-none"
        type="text"
        placeholder="地區"
      />
    </div>
    <button type="button" class="btn btn-primary w-1/2 rounded-none px-4">
      搜尋
    </button>
  </div>
</template>

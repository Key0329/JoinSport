<script>
export default {
  props: {
    activity: {
      type: Object,
    },
  },
};
</script>

<template>
  <div
    class="group relative flex h-full flex-col rounded-[10px] bg-white shadow-[0_0_4px_rgba(0,0,0,0.3)] transition-all duration-100 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]"
  >
    <p
      class="absolute top-4 left-2 z-[3] flex items-center rounded-full bg-primary-03 py-1 pl-2 pr-3 text-sm text-[#3D3D3D]"
    >
      <span class="material-icons text-primary-01"> room </span
      >{{ activity?.city }}{{ activity?.district }}
    </p>
    <p
      class="absolute top-14 left-2 z-[3] flex items-center rounded-full bg-primary-03 py-1 pl-2 pr-3 text-sm text-[#3D3D3D]"
    >
      <span class="material-icons mr-1 text-primary-01"> schedule </span
      >{{ activity?.date }} {{ activity?.startTime?.time }}
    </p>
    <!-- card img -->
    <div>
      <img
        class="h-[200px] w-full rounded-t-[10px]"
        :src="activity?.mainImg"
        alt="card-img-01"
      />
    </div>
    <!-- card body -->
    <div class="rounded-b-[10px] border-x border-b px-3 pt-2 sm:border-0">
      <h5 class="mb-2 text-lg">{{ activity?.title }}</h5>
      <p class="text-sm text-[#6f6f6f]">
        {{ activity?.description }}
      </p>
    </div>
    <div class="mt-auto px-3 pb-3">
      <ul class="my-3 flex -space-x-2 overflow-hidden">
        <li
          v-for="(participant, i) in activity?.participants"
          :key="'participant' + i"
        >
          <img
            class="inline-block h-9 w-9 rounded-full ring-2 ring-white"
            :src="participant"
            alt="avatar01"
          />
        </li>
        <li v-if="activity?.numParticipants > 3">
          <div
            class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-400 text-white ring-2 ring-white"
          >
            +{{ activity.numParticipants - 3 }}
          </div>
        </li>
      </ul>
      <div class="mb-2 flex justify-between">
        <span class="mr-2 text-sm"
          >{{ activity?.numParticipants }} 位已參加揪團</span
        >
        <span class="text-sm text-red-500"
          >剩餘
          {{ activity?.maxJoinNum - activity?.numParticipants }} 空位</span
        >
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

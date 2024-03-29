<script>
export default {
  name: 'JoinCardRow',

  props: {
    activity: {
      type: Object,
    },
    userId: {
      type: String,
    },
  },

  data() {
    return {
      imgLoading: true,
      isLoading: true,
    };
  },
  computed: {
    hasJoined() {
      return this.activity?.participantsId?.includes(parseInt(this.userId, 10));
    },
    isHost() {
      return this.activity?.userId === this.userId;
    },
    isCancelled() {
      return this.activity?.isCancelled;
    },
  },
  methods: {
    onImageLoad() {
      this.imgLoading = false;
    },
  },
  watch: {
    activity: {
      handler() {
        this.isLoading = false;
      },
      immediate: true,
    },
  },
};
</script>

<template>
  <div
    v-if="isLoading"
    class="group flex h-full flex-col gap-4 rounded-[10px] bg-white shadow-[0_0_4px_rgba(0,0,0,0.3)] transition-all duration-100 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] sm:flex-row"
    :class="{ 'opacity-50': isCancelled }"
  >
    <!-- card img -->

    <div class="relative h-full w-full sm:w-1/2">
      <div
        class="skeleton flex h-[180px] w-full items-center justify-center rounded-l-[10px]"
      >
        <i class="pi pi-image text-xl text-gray-500"></i>
      </div>
    </div>
    <!-- card body -->
    <div
      class="w-full rounded-b-[10px] border-x border-b px-3 pt-2 pb-3 sm:border-0"
    >
      <div class="mb-2 flex items-center justify-between">
        <h5 class="skeleton h-7 w-full rounded-lg"></h5>
      </div>
      <p class="skeleton mb-4 h-5 w-1/2 rounded-lg"></p>
      <div class="mb-2 flex flex-col gap-2 md:flex-row">
        <p class="skeleton h-8 w-1/4 rounded-lg px-2 py-1"></p>
        <p class="skeleton h-8 w-1/4 rounded-lg px-2 py-1"></p>
      </div>
      <div class="flex flex-col md:flex-row md:items-end">
        <div class="mb-2 md:mb-0">
          <ul class="my-3 flex -space-x-2 overflow-hidden">
            <li class="skeleton h-9 w-9 rounded-full"></li>
            <li class="skeleton h-9 w-9 rounded-full"></li>
            <li class="skeleton h-9 w-9 rounded-full"></li>
            <li class="skeleton h-9 w-9 rounded-full"></li>
          </ul>
          <div class="flex">
            <p class="skeleton mr-2 h-5 w-1/2 rounded-lg"></p>
            <p class="skeleton mr-2 h-5 w-1/2 rounded-lg"></p>
          </div>
        </div>
        <p class="skeleton ml-auto h-10 w-1/4 rounded-lg"></p>
      </div>
    </div>
  </div>

  <div
    v-else
    class="group flex h-full flex-col rounded-[10px] bg-white shadow-[0_0_4px_rgba(0,0,0,0.3)] transition-all duration-100 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] sm:flex-row"
    :class="{ 'opacity-50': isCancelled }"
  >
    <!-- card img -->

    <div class="relative w-full sm:w-1/2">
      <div
        v-if="imgLoading"
        class="skeleton flex h-full w-full items-center justify-center rounded-t-[10px]"
      >
        <i class="pi pi-image text-xl text-gray-500"></i>
      </div>
      <img
        @load="onImageLoad"
        class="h-[180px] w-full rounded-t-[10px] sm:h-full sm:rounded-l-[10px] sm:rounded-tr-none"
        :src="activity?.mainImg"
        alt="card-img-01"
      />
      <ul class="absolute top-3 left-2 flex flex-col flex-wrap gap-1">
        <li v-for="(tag, i) in activity?.tags" :key="tag + i">
          <span class="tag py-1 text-xs hover:text-black">{{ tag }}</span>
        </li>
      </ul>
    </div>
    <!-- card body -->
    <div
      class="w-full rounded-b-[10px] border-x border-b px-3 pt-2 pb-3 sm:rounded-bl-none sm:border-y sm:border-l-0 md:border-0"
    >
      <div class="flex items-center justify-between">
        <h5 class="mb-2 text-lg">{{ activity?.title }}</h5>
        <div class="mr-8 flex">
          <div
            v-if="hasJoined"
            class="flex items-center rounded-lg bg-primary-04 px-2 py-1 text-xs text-gray-600"
          >
            <i class="pi pi-check mr-1"></i>已參加揪團
          </div>
          <div
            v-else-if="isHost"
            class="flex items-center rounded-lg bg-primary-01 px-2 py-1 text-xs text-white"
          >
            <i class="pi pi-user mr-1"></i>您是主辦者
          </div>
          <div
            v-else-if="isCancelled"
            class="flex items-center rounded-lg bg-red-400 px-2 py-1 text-xs text-white"
          >
            <i class="pi pi-user mr-1"></i>此揪團已取消
          </div>
        </div>
      </div>
      <p class="h-10 text-sm text-[#6f6f6f]">
        {{ activity?.description }}
      </p>
      <div
        class="absolute top-3 right-2 mb-4 gap-2 sm:relative sm:flex sm:flex-row"
      >
        <p
          class="mb-2 flex items-center rounded-full bg-primary-03 py-1 px-2 text-sm text-[#3D3D3D] sm:mb-0 md:mb-0"
        >
          <span class="material-icons text-primary-01"> room </span
          >{{ activity?.city }}{{ activity?.district }}
        </p>
        <p
          class="flex items-center rounded-full bg-primary-03 py-1 px-2 text-sm text-[#3D3D3D]"
        >
          <span class="material-icons mr-1 text-primary-01"> schedule </span
          >{{ activity?.date }} {{ activity?.startTime?.time }}
        </p>
      </div>
      <div class="flex flex-col md:flex-row md:items-end">
        <div class="mb-2 md:mb-0">
          <ul class="my-3 flex h-9 -space-x-2 overflow-hidden">
            <li
              v-for="(participant, i) in activity?.participants"
              :key="'participant' + i"
            >
              <div
                v-if="isLoading"
                class="skeleton h-full w-full rounded-full"
              ></div>
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
                +{{ activity?.numParticipants - 3 }}
              </div>
            </li>
          </ul>
          <div>
            <span class="mr-2 text-sm"
              >{{ activity?.numParticipants }} 位已參加揪團</span
            >
            <span class="mr-2 text-sm text-red-500"
              >剩餘
              {{ activity?.maxJoinNum - activity?.numParticipants }} 空位</span
            >
            <span
              v-if="activity?.maxJoinNum - activity?.numParticipants === 0"
              class="rounded-lg bg-primary-01 px-2 py-1 text-sm text-white"
              >揪團已滿</span
            >
          </div>
        </div>
        <RouterLink
          :to="`/JoinDetail/id=${activity?.id}`"
          class="btn-primary btn p-ripple p-2 group-hover:bg-secondary-yellow group-hover:text-[#3D3D3D] sm:w-1/4 md:ml-auto"
          v-ripple
          >查看詳情</RouterLink
        >
      </div>
    </div>
  </div>
</template>

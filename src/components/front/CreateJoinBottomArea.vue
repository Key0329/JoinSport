<script>
export default {
  props: {
    tempForm: {
      type: Object,
    },
  },
};
</script>

<template>
  <div class="flex flex-col items-center md:flex-row md:justify-between">
    <div class="mb-2 md:mb-0">
      <p class="mb-2 md:mb-0">
        {{ tempForm.newDate }} {{ tempForm.dayOfWeekText }}
        {{ tempForm.startTime?.time }}
      </p>
      <h2 class="text-lg font-semibold sm:text-xl">
        {{ tempForm.title }}
      </h2>
    </div>
    <div class="flex items-center gap-6">
      <p>{{ tempForm.maxJoinNum?.number }} 個空位</p>
      <p>
        <i class="pi pi-star text-lg"></i>
      </p>
      <button
        type="button"
        class="btn btn-primary py-4 hover:bg-primary-01 hover:text-white disabled:opacity-70"
        disabled
      >
        我要參加
      </button>
    </div>
  </div>
</template>

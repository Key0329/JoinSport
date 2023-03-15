<script>
export default {
  name: 'JoinAttendees',

  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<template>
  <div
    class="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white text-center md:h-[120px] md:w-[120px]"
  >
    <PAvatar
      :image="user?.user?.img"
      md:size="xlarge"
      shape="circle"
      class="mb-1 md:mb-3"
    />
    <p>
      <strong>{{ user?.user?.name }}</strong>
    </p>
    <p>成員</p>
  </div>
</template>

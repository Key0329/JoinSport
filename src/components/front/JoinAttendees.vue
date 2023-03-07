<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<template>
  <div
    class="flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-white text-center"
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

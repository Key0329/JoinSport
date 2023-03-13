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
  <div class="flex h-screen flex-col items-center justify-center bg-primary-03">
    <h1 class="mb-10 text-4xl">Oops...此揪團已取消</h1>
    <h2 class="mb-4 text-xl font-bold md:text-3xl">
      {{ activity.title }}
    </h2>
    <div class="mb-10 flex items-center gap-4">
      <PAvatar :image="activity?.user?.img" size="xlarge" shape="circle" />
      <div>
        <p>主辦者</p>
        <p>{{ activity?.user?.name }}</p>
      </div>
    </div>
    <router-link to="/">
      <PButton
        type="button"
        label="回到首頁"
        icon="pi pi-home"
        iconPos="right"
      />
    </router-link>
  </div>
</template>

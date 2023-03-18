<script>
export default {
  name: 'NotFound',
};
</script>
<template>
  <div class="container">
    <div class="flex h-screen flex-col items-center justify-center gap-6">
      <div class="mx-auto w-[160px]">
        <img src="../assets/images/feature/feature02.png" alt="404 img" />
      </div>
      <h1 class="text-4xl">Oops 404，打錯網址囉~</h1>
      <RouterLink to="/" class="btn border hover:bg-primary-01 hover:text-white"
        ><i class="pi pi-home mr-2"></i>點此回首頁</RouterLink
      >
    </div>
  </div>
</template>

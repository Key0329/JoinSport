<script>
export default {
  name: 'LoadingComponent',
};
</script>

<template>
  <div class="relative">
    <img
      src="../../assets/images/loading/loading3.png"
      class="w-[200px]"
      alt="loading"
    />
    <div class="mb-2">
      <img
        src="../../assets/images/loading/loading1.png"
        class="absolute -top-[170px] -left-[150px] w-[200px]"
        alt="loading"
      />
      <img
        src="../../assets/images/loading/loading2.png"
        class="absolute -top-[170px] -right-[100px] w-[200px]"
        alt="loading"
      />
    </div>
  </div>
</template>

<!-- <style scoped>
.slide-loading img {
  animation: slide 0.5s ease;
  opacity: 0;
}
.slide-loading img:nth-child(1) {
  animation-delay: 0s;
}

.slide-loading img:nth-child(2) {
  animation-delay: 0.5s;
}

.slide-loading img:nth-child(3) {
  animation-delay: 1s;
}
.slide-loading img:nth-child(4) {
  animation-delay: 1.5s;
}

@keyframes slide {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style> -->

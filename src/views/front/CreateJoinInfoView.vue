<script>
import VuelidateForm from '@/components/front/VuelidateForm.vue';

export default {
  components: {
    VuelidateForm,
  },
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
};
</script>

<template>
  <section class="py-10">
    <div class="container">
      <h1 class="mb-8 text-center text-4xl">三個步驟，讓您快速開團</h1>
      <h2 class="mb-12 text-center text-3xl">首先設定必要的資訊</h2>
      <VuelidateForm></VuelidateForm>
    </div>
  </section>
</template>

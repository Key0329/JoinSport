<script>
import { mapState, mapActions } from 'pinia';
import VuelidateForm from '@/components/front/VuelidateForm.vue';
import StepPagination from '@/components/front/StepPagination.vue';
import createSteps from '../../stores/front/createSteps';

export default {
  components: {
    VuelidateForm,
    StepPagination,
  },
  computed: {
    ...mapState(createSteps, ['isChildFormValid']),
  },
  methods: {
    submitChildForm() {
      if (!this.$refs.childForm.v$.$invalid) {
        // 如果驗證成功
        this.updateFormValid(false);
      } else {
        // 如果驗證失敗
        this.updateFormValid(true);
      }
      this.$refs.childForm.handleSubmit(!this.$refs.childForm.v$.$invalid);
    },
    ...mapActions(createSteps, ['updateFormValid']),
  },
};
</script>

<template>
  <section class="mb-10 py-10">
    <div class="container">
      <h1 class="mb-8 text-center text-4xl">三個步驟，讓您快速開團</h1>
      <h2 class="mb-12 text-center text-xl">首先設定必要的資訊</h2>
      <VuelidateForm ref="childForm"></VuelidateForm>
      <button @click="submitChildForm">Submit Child Form</button>
      <div class="mx-auto w-1/2">
        <StepPagination @emit-event="submitChildForm"></StepPagination>
      </div>
    </div>
  </section>
</template>

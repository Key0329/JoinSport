<script>
import { mapState, mapActions } from 'pinia';
import VuelidateForm from '@/components/front/VuelidateForm.vue';
import StepPagination from '@/components/front/StepPagination.vue';
import createSteps from '@/stores/front/createStepsStore';

export default {
  name: 'CreateJoinInfoView',

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
  <section class="py-6 md:mb-10 md:py-10">
    <div class="container">
      <h1 class="mb-4 text-center text-xl md:mb-8 md:text-4xl">
        五個步驟，讓您快速開團
      </h1>
      <h2 class="mb-4 text-center text-lg md:mb-12 md:text-xl">
        首先設定必要的資訊
      </h2>
      <div class="mx-auto flex justify-center lg:w-1/2">
        <VuelidateForm ref="childForm"></VuelidateForm>
      </div>
      <div class="mx-auto mt-20 lg:w-1/2">
        <StepPagination @emit-next="submitChildForm"></StepPagination>
      </div>
    </div>
  </section>
</template>

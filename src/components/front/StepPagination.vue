<script>
import { mapState } from 'pinia';
import createSteps from '@/stores/front/createStepsStore';

export default {
  name: 'StepPagination',

  props: {
    activity: {
      type: Object,
    },
  },
  data() {
    return {
      currentStep: null,
    };
  },
  computed: {
    ...mapState(createSteps, ['isChildFormValid']),
  },
  methods: {
    prevStep() {
      const prevStep = parseInt(this.currentStep, 10) - 1;
      const newRoute = this.$route.path.replace(/\d+$/, prevStep);

      this.$emit('emitPrev');

      this.$router.push(newRoute);
    },
    nextStep() {
      const nextStep = parseInt(this.currentStep, 10) + 1;
      const newRoute = this.$route.path.replace(/\d+$/, nextStep);

      this.$emit('emitNext');

      if (this.isChildFormValid) {
        return;
      }

      this.$router.push(newRoute);
    },
    handleSubmit() {
      this.$emit('handleSubmit');
    },
  },

  mounted() {
    this.currentStep = this.$route.path.match(/\d+$/)?.[0];
  },
};
</script>

<template>
  <div class="flex justify-between border-t pt-10">
    <PButton
      v-if="parseInt(currentStep) !== 1"
      type="button"
      label="上一步"
      icon="pi pi-arrow-left"
      iconPos="left"
      class="md:w-1/4"
      @click="prevStep"
    />
    <PButton
      v-if="parseInt(currentStep) !== 4"
      type="button"
      label="下一步"
      icon="pi pi-arrow-right"
      iconPos="right"
      class="ml-auto md:w-1/4"
      @click="nextStep"
    />
    <PButton
      v-if="parseInt(currentStep) === 4"
      type="button"
      label="確認開團"
      icon="pi pi-arrow-right"
      iconPos="right"
      class="ml-auto md:w-1/4"
      @click="handleSubmit"
    />
  </div>
</template>

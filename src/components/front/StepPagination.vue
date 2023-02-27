<script>
import { mapState } from 'pinia';
import createSteps from '../../stores/front/createSteps';

export default {
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
      // const currentStep = this.$route.path.match(/\d+$/)?.[0];
      const prevStep = parseInt(this.currentStep, 10) - 1;
      const newRoute = this.$route.path.replace(/\d+$/, prevStep);
      this.$router.push(newRoute);
      // this.currentStep = prevStep;
    },
    nextStep() {
      // const currentStep = this.$route.path.match(/\d+$/)?.[0];
      const nextStep = parseInt(this.currentStep, 10) + 1;
      const newRoute = this.$route.path.replace(/\d+$/, nextStep);

      if (parseInt(this.currentStep, 10) === 1) {
        this.$emit('emitEvent');
      }
      if (this.isChildFormValid) {
        return;
      }

      this.$router.push(newRoute);
    },
  },

  mounted() {
    this.currentStep = this.$route.path.match(/\d+$/)?.[0];
  },
};
</script>

<template>
  <div class="flex justify-between">
    <PButton
      v-if="parseInt(currentStep) !== 1"
      type="button"
      label="上一步"
      icon="pi pi-arrow-left"
      iconPos="left"
      class="w-1/4"
      @click="prevStep"
    />
    <PButton
      v-if="parseInt(currentStep) !== 4"
      type="button"
      label="下一步"
      icon="pi pi-arrow-right"
      iconPos="right"
      class="ml-auto w-1/4"
      @click="nextStep"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import VuelidateForm from '@/components/front/VuelidateForm.vue';
import createSteps from '@/stores/front/createSteps';

const { VITE_URL } = import.meta.env;

export default {
  components: {
    VuelidateForm,
  },
  data() {
    return {
      activity: {},
    };
  },
  computed: {
    ...mapState(createSteps, ['isChildFormValid']),
  },
  methods: {
    ...mapActions(createSteps, ['updateFormValid']),

    submitChildForm() {
      if (!this.$refs.childForm.v$.$invalid) {
        // 如果驗證成功
        this.updateFormValid(false);
      } else {
        // 如果驗證失敗
        this.updateFormValid(true);
      }
      this.$refs.childForm.handleUpdate(!this.$refs.childForm.v$.$invalid);
    },
    getActivity() {
      const { id } = this.$route.params;
      const path = `${VITE_URL}/activities/${id}`;

      this.$http
        .get(path)
        .then((res) => {
          this.activity = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getActivity();
  },
};
</script>

<template>
  <section class="mb-10 py-10">
    <VuelidateForm :activity="activity" ref="childForm"></VuelidateForm>
    <button
      type="button"
      class="btn btn-primary mt-10 ml-auto flex"
      @click="submitChildForm"
    >
      確認
    </button>
  </section>
</template>

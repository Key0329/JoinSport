<script>
import { mapState, mapActions } from 'pinia';
import VuelidateForm from '@/components/front/VuelidateForm.vue';
import createSteps from '@/stores/front/createSteps';

const { VITE_URL } = import.meta.env;

export default {
  inject: ['reload'],
  components: {
    VuelidateForm,
  },
  data() {
    return {
      activity: {},
      isDisabled: true,
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
    enableEdit() {
      this.isDisabled = !this.isDisabled;
    },
    cancelEdit() {
      this.reload();
    },
    removeLocal() {
      localStorage.removeItem('createTempFormData');
    },
  },
  mounted() {
    this.getActivity();
    this.removeLocal();
  },
};
</script>

<template>
  <section class="mb-10 py-10">
    <VuelidateForm :activity="activity" ref="childForm"></VuelidateForm>
    <div class="mt-16 flex gap-4">
      <button
        type="button"
        class="btn btn-primary ml-auto"
        @click="submitChildForm"
      >
        確認
      </button>
      <button
        type="button"
        @click="cancelEdit"
        class="btn border border-primary-01 hover:bg-primary-01 hover:text-white"
      >
        取消
      </button>
    </div>
  </section>
</template>

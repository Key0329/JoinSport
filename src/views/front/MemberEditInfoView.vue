<script>
import { mapState, mapActions } from 'pinia';
import VuelidateForm from '@/components/front/VuelidateForm/VuelidateForm.vue';
import createSteps from '@/stores/front/createStepsStore';

const { VITE_URL } = import.meta.env;

export default {
  name: 'MemberEditInfoView',

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
        this.updateFormValid(false); // 如果驗證成功
      } else {
        this.updateFormValid(true); // 如果驗證失敗
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
          const errMessage = err.response.statusText;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage} 取得活動資訊失敗`,
            life: 3000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
    enableEdit() {
      this.isDisabled = !this.isDisabled;
    },
    cancelEdit() {
      this.getActivity();
      this.enableEdit();
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
  <PToast />
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

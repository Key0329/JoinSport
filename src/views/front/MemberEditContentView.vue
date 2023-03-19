<script>
const { VITE_URL } = import.meta.env;

export default {
  name: 'MemberEditContentView',

  data() {
    return {
      editorValue: '',
      quillEditor: null,
    };
  },
  methods: {
    getActivity() {
      const { id } = this.$route.params;
      const path = `${VITE_URL}/activities/${id}`;

      this.$http
        .get(path)
        .then((res) => {
          this.editorValue = res.data.content;
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
    updateActivityContent() {
      const { id } = this.$route.params;
      const path = `${VITE_URL}/activities/${id}`;
      const data = { content: this.editorValue };

      this.$http
        .patch(path, data)
        .then(() => {
          this.$toast.add({
            severity: 'success',
            detail: '修改成功',
            life: 3000,
          });
        })
        .catch((err) => {
          const errMessage = err.response.statusText;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage} 更新活動資訊失敗`,
            life: 3000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
    cancelEdit() {
      this.getActivity();
    },
  },
  mounted() {
    this.getActivity();
  },
};
</script>

<template>
  <PToast />
  <section class="py-10">
    <div class="mb-10 flex flex-col items-center">
      <PEditor
        v-model="editorValue"
        editorStyle="height: 320px"
        placeholder="請輸入簡介"
      />
    </div>
    <div class="mt-10 flex gap-4">
      <button
        type="button"
        class="btn btn-primary ml-auto"
        @click="updateActivityContent"
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

<script>
const { VITE_URL } = import.meta.env;

export default {
  inject: ['reload'],
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
          console.log(err);
        });
    },
    updateActivityContent() {
      const { id } = this.$route.params;
      const path = `${VITE_URL}/activities/${id}`;
      const data = { content: this.editorValue };

      this.$http
        .patch(path, data)
        .then((res) => {
          console.log(res.data);
          alert('修改成功');
        })
        .catch((err) => {
          console.log(err);
        });
    },
    cancelEdit() {
      this.reload();
    },
  },
  mounted() {
    this.getActivity();
  },
};
</script>

<template>
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

<script>
export default {
  data() {
    return {
      editorValue: '',
      quillEditor: null,
    };
  },
  methods: {
    saveArticleToLocal() {
      localStorage.setItem('editorValue', this.editorValue);
    },
    getLocalArticle() {
      if (localStorage.getItem('editorValue')) {
        const tempArticle = localStorage.getItem('editorValue');
        this.editorValue = tempArticle;
      }
    },
  },
  mounted() {
    this.getLocalArticle();
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
  </section>
</template>

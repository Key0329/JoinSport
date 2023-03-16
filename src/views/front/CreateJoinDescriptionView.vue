<script>
import StepPagination from '@/components/front/StepPagination.vue';

export default {
  name: 'CreateJoinDescriptionView',

  components: {
    StepPagination,
  },
  data() {
    return {
      editorValue:
        '<h3>本次活動將在清水斷崖進行獨木舟探險，全程約3公里，沿途可以欣賞美麗的山林風景以及清澈的溪流。活動結束後，可以一起前往附近的溫泉餐廳享用美食，放鬆身心，交流感受。<h3>',
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
    <div class="container">
      <div class="mb-10 flex flex-col items-center">
        <h1 class="mb-4 text-center text-xl md:text-4xl">快要完成囉！</h1>
        <h2 class="mb-6 text-center text-lg md:mb-12 md:text-xl">
          接下來請為開的團添加更多描述<br />
          有明確的內容簡介，團友們將可以更了解您的揪團，您也可以選擇晚點再添加
        </h2>
        <div class="mb-4 text-sm md:text-base">
          <p>您可以考慮：</p>
          <ol>
            <li>1. 開團的主要目的？</li>
            <li>2. 誰適合這個揪團？</li>
            <li>3. 更多詳細資訊</li>
          </ol>
        </div>
        <PEditor
          v-model="editorValue"
          editorStyle="height: 320px"
          placeholder="請輸入簡介"
        />
      </div>
      <div class="mx-auto mb-4 bg-secondary-coffee p-4 md:w-1/2 md:p-8">
        <h3 class="mb-4 flex items-center">
          <span class="material-symbols-outlined mr-2"> tips_and_updates </span
          >內文範例
        </h3>
        <article class="text-sm">
          如果你正在尋找一個有趣且能夠鍛煉身體的運動項目，那麼打羽球就是你不容錯過的選擇。<br />
          這項運動不僅能夠鍛鍊身體，還能增強腦力、協調能力和精細動作技巧。<br /><br />
          我們的揪團將會到一個高素質的羽球場，提供完善的設施。任何人都能在這裡找到適合自己的運動水平的對手與夥伴。<br /><br />
          在運動之後，我們也可以一起享用美味的午餐，讓大家能夠在輕鬆愉悅的氛圍中放鬆身心。<br />
          如果你對打羽球感興趣，不妨加入我們的揪團，一起體驗這項激動人心的運動。我們期待著您的加入！
        </article>
      </div>
      <a
        href="https://chat.openai.com/chat"
        class="mx-auto text-end hover:text-primary-01 md:w-1/2"
      >
        詢問 ChatGPT <i class="pi pi-external-link"></i>
      </a>
    </div>
    <div class="mx-auto mt-10 md:mt-20 md:w-1/2">
      <StepPagination
        @emit-next="saveArticleToLocal"
        @emit-prev="saveArticleToLocal"
      ></StepPagination>
    </div>
  </section>
</template>

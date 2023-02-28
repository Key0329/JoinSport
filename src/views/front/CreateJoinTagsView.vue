<script>
import { mapState } from 'pinia';
import createSteps from '@/stores/front/createSteps';
import StepPagination from '@/components/front/StepPagination.vue';

export default {
  components: {
    StepPagination,
  },
  data() {
    return {
      tempSelectedTag: null,
      selectedTags: [],
      filteredTags: null,
    };
  },
  computed: {
    ...mapState(createSteps, ['tags', 'tagList']),
  },
  methods: {
    searchTag(event) {
      if (this.selectedTags.length <= 4) {
        setTimeout(() => {
          if (!event.query.trim().length) {
            this.filteredTags = [...this.tagList];
          } else {
            this.filteredTags = this.tagList.filter((tag) => {
              return tag.label.toLowerCase().match(event.query.toLowerCase());
            });
          }
        }, 250);
      }
    },
    addTag(event) {
      if (event.target.tagName === 'BUTTON') {
        const newTag = event.target.textContent;
        this.selectedTags.push(newTag);
        this.tempSelectedTag = '';
      } else {
        const newTag = event.target.value;
        this.selectedTags.push(newTag);
        this.tempSelectedTag = '';
      }
    },
    deleteTag(i) {
      this.selectedTags.splice(i, 1);
    },
    saveTagsToLocal() {
      localStorage.setItem('selectedTags', JSON.stringify(this.selectedTags));
    },
    getLocalTags() {
      if (localStorage.getItem('selectedTags')) {
        const tempTags = JSON.parse(localStorage.getItem('selectedTags'));
        this.selectedTags = tempTags;
      }
    },
  },
  mounted() {
    this.getLocalTags();
  },
  beforeRouteEnter(to, from, next) {
    // 當路由進入時，讓頁面滾動到最上方
    window.scrollTo(0, 0);
    next();
  },
};
</script>

<template>
  <section class="py-10">
    <div class="container">
      <h1 class="mb-8 text-center text-4xl">選擇適合的標籤來描述將要開的團</h1>
      <h2 class="mb-12 text-center text-xl">
        請盡量詳細地選擇，將會幫助您的揪團找到最適合的團員<br />可以新增
        <strong class="text-primary-01">{{ 4 - selectedTags.length }}</strong>
        個標籤
      </h2>
      <div class="flex flex-col items-center justify-center">
        <AutoComplete
          v-model="tempSelectedTag"
          :suggestions="filteredTags"
          @complete="searchTag($event)"
          @keyup.enter="addTag($event)"
          optionLabel="label"
          loadingIcon="false"
          placeholder="輸入適合揪團的標籤 ( 例如: 攀岩、潛水、戶外運動 )"
          :disabled="selectedTags.length === 4"
          class="mb-10 flex w-full justify-center"
        />
        <ul class="mb-[100px] flex w-1/2 flex-wrap gap-3">
          <li
            class="flex items-center rounded-full bg-secondary-yellow py-2 pl-8 pr-4"
            v-for="(tag, i) in selectedTags"
            :key="tag + i"
          >
            <span class="mr-8 text-lg">{{ tag }}</span>
            <button
              type="button"
              class="flex h-5 w-5 items-center justify-center rounded-full bg-primary-03"
              @click="deleteTag(i)"
            >
              <i class="pi pi-times text-xs"></i>
            </button>
          </li>
        </ul>
        <div class="mb-10 w-1/2">
          <h3 class="mb-4 ml-2 text-lg">Tags :</h3>
          <ul class="flex flex-wrap">
            <li
              class="flex items-center justify-center"
              v-for="(tag, i) in tags"
              :key="tag + i"
            >
              <button
                class="mb-2 mr-2 rounded-full bg-primary-02 px-8 py-2 hover:bg-primary-04"
                type="button"
                :disabled="selectedTags.length === 4"
                :class="{
                  hidden: selectedTags.some((item) => item === tag),
                  'cursor-not-allowed opacity-50': selectedTags.length === 4,
                }"
                @click="addTag($event)"
              >
                {{ tag }}
              </button>
            </li>
          </ul>
        </div>
        <div class="mx-auto w-1/2">
          <StepPagination
            @emit-next="saveTagsToLocal"
            @emit-prev="saveTagsToLocal"
          ></StepPagination>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.p-autocomplete-input) {
  width: 50%;
}
</style>

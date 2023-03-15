<script>
import { mapState, mapActions } from 'pinia';
import searchStore from '@/stores/searchStore';
import StepPagination from '@/components/front/StepPagination.vue';

export default {
  name: 'CreateJoinTagsView',
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
    ...mapState(searchStore, ['tags', 'tagList']),
  },
  methods: {
    ...mapActions(searchStore, ['getTags']),

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
      // 下方可點選 tags
      if (event.target.tagName === 'BUTTON') {
        const newTag = event.target.textContent;
        this.selectedTags.push(newTag);
        this.tempSelectedTag = '';
        return;
      }

      // Enter 輸入
      const newTag = event.target.value;

      // 判斷是否有重複標籤或沒有內容
      const tagExists = this.selectedTags.some((item) => item === newTag);
      if (tagExists) {
        this.$toast.add({
          severity: 'warn',
          detail: '已有相同標籤',
          life: 1000,
        });
        return;
      }
      if (newTag === '') {
        this.$toast.add({
          severity: 'info',
          detail: '請輸入標籤內容',
          life: 1000,
        });
        return;
      }

      this.selectedTags.push(newTag);
      this.tempSelectedTag = '';
    },
    removeTag(i) {
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
    this.getTags();
  },
};
</script>

<template>
  <PToast></PToast>
  <section class="py-10">
    <div class="container">
      <h1 class="mb-8 text-center text-xl md:text-4xl">
        選擇適合的標籤來描述將要開的團
      </h1>
      <h2 class="mb-6 text-center text-lg md:mb-12 md:text-xl">
        請盡量詳細地選擇，將會幫助您的揪團找到最適合的團員<br />可以新增
        <strong class="text-primary-01">{{ 5 - selectedTags.length }}</strong>
        個標籤
      </h2>
      <div class="flex flex-col items-center justify-center">
        <AutoComplete
          v-model="tempSelectedTag"
          :suggestions="filteredTags"
          @complete="searchTag"
          @keyup.enter="addTag"
          optionLabel="label"
          loadingIcon="false"
          placeholder="輸入適合揪團的標籤 ( 例如: 攀岩、潛水、戶外運動 )"
          :disabled="selectedTags.length === 5"
          class="mb-10 flex w-full justify-center"
        />
        <ul class="mb-4 flex flex-wrap gap-3 sm:mb-10 md:mb-[100px] md:w-1/2">
          <li
            class="flex items-center rounded-full bg-secondary-yellow py-2 pl-4 pr-4 md:pl-8"
            v-for="(tag, i) in selectedTags"
            :key="tag + i"
          >
            <span class="mr-2 text-sm md:mr-8 md:text-lg"
              ><i class="pi pi-tag mr-2"></i>{{ tag }}</span
            >
            <button
              type="button"
              class="flex h-5 w-5 items-center justify-center rounded-full bg-primary-03"
              @click="removeTag(i)"
            >
              <i class="pi pi-times text-xs"></i>
            </button>
          </li>
        </ul>
        <div class="mb-10 md:w-1/2">
          <h3 class="mb-4 ml-2 text-lg">Tags :</h3>
          <ul class="flex flex-wrap">
            <li
              class="flex items-center justify-center"
              v-for="(tag, i) in tags"
              :key="tag + i"
            >
              <button
                class="mb-2 mr-2 rounded-full bg-primary-02 px-4 py-2 text-xs hover:bg-primary-04 md:px-8 md:text-base"
                type="button"
                :disabled="selectedTags.length === 5"
                :class="{
                  hidden: selectedTags.some((item) => item === tag),
                  'cursor-not-allowed opacity-50': selectedTags.length === 5,
                }"
                @click="addTag($event)"
              >
                {{ tag }}
              </button>
            </li>
          </ul>
        </div>
        <div class="mx-auto w-full md:w-1/2">
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
  width: 100%;
}
@media (min-width: 960px) {
  :deep(.p-autocomplete-input) {
    width: 50%;
  }
}
</style>

<script>
import { mapState } from 'pinia';
import createSteps from '@/stores/front/createSteps';

export default {
  data() {
    return {
      isDisabled: true,
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
    editTags() {
      this.isDisabled = false;
    },
    saveTags() {
      this.isDisabled = true;
    },
    deleteTag(i) {
      this.selectedTags.splice(i, 1);
    },
  },
};
</script>

<template>
  <!-- tags -->
  <main>
    <h2 class="mb-8 text-xl">設定個人標籤</h2>
    <section class="mb-10">
      <h3 class="mb-4 text-lg">
        可以新增
        <strong class="text-primary-01">{{ 5 - selectedTags.length }}</strong>
        個標籤
      </h3>
      <div class="flex items-center">
        <AutoComplete
          v-model="tempSelectedTag"
          :suggestions="filteredTags"
          @complete="searchTag($event)"
          @keyup.enter="addTag($event)"
          optionLabel="label"
          loadingIcon="false"
          placeholder="輸入適合您的標籤 ( 例如: 攀岩 )"
          :disabled="selectedTags.length === 5"
          class="mr-4"
        />
        <div>
          <a
            v-if="isDisabled === true"
            href="#"
            @click.prevent="editTags"
            class="hover:text-primary-01"
          >
            <i class="pi pi-pencil mr-1"></i>
            編輯標籤
          </a>
          <button
            v-else
            type="button"
            @click="saveTags"
            class="btn btn-primary"
          >
            儲存變更
          </button>
        </div>
      </div>
    </section>
    <section class="mb-10">
      <ul class="flex flex-wrap gap-3">
        <li
          class="flex items-center rounded-full bg-secondary-yellow py-2 pl-8 pr-4"
          v-for="(tag, i) in selectedTags"
          :key="tag + i"
        >
          <span class="mr-4 text-sm">{{ tag }}</span>
          <button
            type="button"
            class="flex h-5 w-5 items-center justify-center rounded-full bg-primary-03"
            @click="deleteTag(i)"
          >
            <i class="pi pi-times text-xs"></i>
          </button>
        </li>
      </ul>
    </section>
    <section>
      <div class="mb-10">
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
    </section>
  </main>
</template>

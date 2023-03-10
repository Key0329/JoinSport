<script>
import { mapState, mapActions } from 'pinia';
import tagsStore from '@/stores/tagsStore';
import memberStore from '@/stores/front/memberStore';
import authStore from '@/stores/front/authStore';

export default {
  inject: ['reload'],
  data() {
    return {
      userId: null,
      isDisabled: true,
      tempSelectedTag: '',
      selectedTags: [],
      filteredTags: null,
      filterList: [],
    };
  },
  computed: {
    ...mapState(tagsStore, ['tags', 'tagList']),
    ...mapState(memberStore, ['user']),
  },
  methods: {
    ...mapActions(authStore, ['getUserId']),
    ...mapActions(tagsStore, ['getTags']),
    ...mapActions(memberStore, ['getMemberData', 'editMemberData']),

    searchTag(event) {
      if (this.selectedTags.length <= 4) {
        setTimeout(() => {
          if (!event.query.trim().length) {
            this.filteredTags = [...this.filterList];
          } else {
            this.filteredTags = this.filterList.filter((tag) => {
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
      // 新增按鈕
      if (event.target.tagName === 'A') {
        // autocomplete 是物件
        const newTag = this.tempSelectedTag.value || this.tempSelectedTag;
        // 判斷是否有重複標籤或沒有內容
        const tagExists = this.selectedTags.some((item) => item === newTag);
        if (tagExists) {
          alert('已有相同標籤');
          return;
        }
        if (newTag === '') {
          alert('請輸入標籤內容');
          return;
        }

        this.selectedTags.push(newTag);
        this.tempSelectedTag = '';
        return;
      }

      // Enter 輸入
      const newTag = event.target.value;

      // 判斷是否有重複標籤或沒有內容
      const tagExists = this.selectedTags.some((item) => item === newTag);
      if (tagExists) {
        alert('已有相同標籤');
        return;
      }
      if (newTag === '') {
        alert('請輸入標籤內容');
        return;
      }

      this.selectedTags.push(newTag);
      this.tempSelectedTag = '';
    },
    handleSubmit() {
      const data = {
        id: this.userId,
        favoriteSports: this.selectedTags,
      };

      this.editMemberData(data);
      this.reload();
      this.isDisabled = true;
    },
    enableEdit() {
      this.isDisabled = !this.isDisabled;
    },
    removeTag(i) {
      this.selectedTags.splice(i, 1);
    },
    cancelEdit() {
      this.reload();
    },
  },
  watch: {
    tagList() {
      this.filterList = JSON.parse(JSON.stringify(this.tagList));
    },
    user() {
      this.selectedTags = JSON.parse(JSON.stringify(this.user.favoriteSports));
    },
  },

  mounted() {
    this.getTags();
    this.userId = this.getUserId();
    this.getMemberData(this.userId);
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
          @complete="searchTag"
          @keyup.enter="addTag"
          optionLabel="label"
          loadingIcon="false"
          placeholder="輸入適合您的標籤 ( 例如: 攀岩 )"
          :disabled="selectedTags.length === 5 || isDisabled === true"
        />
        <a
          v-if="isDisabled === true"
          href="#"
          @click.prevent="enableEdit"
          class="hover:text-primary-01"
        >
          <i class="pi pi-pencil ml-4 mr-1"></i>
          編輯標籤
        </a>
        <a
          v-else
          href="#"
          @click.prevent="addTag"
          class="btn btn-primary ml-1 px-2 py-3"
        >
          新增
        </a>
      </div>
    </section>
    <section class="mb-10">
      <ul class="flex flex-wrap items-center gap-3">
        <li
          class="flex items-center rounded-full bg-secondary-yellow py-2 pl-8 pr-4"
          v-for="(tag, i) in selectedTags"
          :key="tag + i"
        >
          <span class="mr-4 text-sm">{{ tag }}</span>
          <button
            v-if="!isDisabled"
            type="button"
            class="flex h-5 w-5 items-center justify-center rounded-full bg-primary-03"
            @click="removeTag(i)"
          >
            <i class="pi pi-times text-xs"></i>
          </button>
        </li>
      </ul>
      <div v-if="!isDisabled" class="mt-10 ml-auto flex gap-4">
        <button
          type="button"
          @click="handleSubmit"
          class="btn btn-primary px-3"
        >
          儲存變更
        </button>
        <button type="button" @click="cancelEdit" class="btn btn-primary px-3">
          取消
        </button>
      </div>
    </section>
    <section v-if="!isDisabled">
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
              @click="addTag"
            >
              {{ tag }}
            </button>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
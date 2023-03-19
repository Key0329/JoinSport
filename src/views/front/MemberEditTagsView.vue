<script>
import { mapState, mapActions } from 'pinia';
import searchStore from '@/stores/searchStore';

const { VITE_URL } = import.meta.env;

export default {
  name: 'MemberEditTagsView',

  data() {
    return {
      tempSelectedTag: null,
      selectedTags: [],
      filteredTags: null,
      isDisabled: true,
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
      /* 頁面下面區塊可點選 tags 做篩選 */
      if (event.target.tagName === 'BUTTON') {
        const newTag = event.target.textContent;
        this.selectedTags.push(newTag);
        this.tempSelectedTag = '';
        return;
      }

      const newTag = event.target.value; // Enter 輸入

      /* 判斷是否有重複標籤或沒有內容 */
      const tagExists = this.selectedTags.some((item) => item === newTag);
      if (tagExists) {
        this.$toast.add({
          severity: 'warn',
          detail: '已有相同標籤',
          life: 3000,
        });
        return;
      }
      if (newTag === '') {
        this.$toast.add({
          severity: 'info',
          detail: '請輸入標籤內容',
          life: 3000,
        });
        return;
      }

      this.selectedTags.push(newTag);
      this.tempSelectedTag = '';
    },
    removeTag(i) {
      this.selectedTags.splice(i, 1);
    },
    getActivity() {
      const { id } = this.$route.params;
      const path = `${VITE_URL}/activities/${id}`;

      this.$http
        .get(path)
        .then((res) => {
          this.selectedTags = res.data.tags;
        })
        .catch((err) => {
          const errMessage = err.response.statusText;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage} 未能取得活動資訊`,
            life: 3000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
    updateActivityTags() {
      const { id } = this.$route.params;
      const path = `${VITE_URL}/activities/${id}`;
      const data = { tags: this.selectedTags };

      this.$http
        .patch(path, data)
        .then(() => {
          this.$toast.add({
            severity: 'success',
            detail: '修改成功',
            life: 3000,
          });
          this.isDisabled = true;
        })
        .catch((err) => {
          const errMessage = err.response.statusText;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage} 修改失敗`,
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
  },
  mounted() {
    this.getActivity();
    this.getTags();
  },
};
</script>

<template>
  <section class="py-10">
    <h2 class="mb-12 text-center text-xl">
      請盡量詳細地選擇，將會幫助您的揪團找到最適合的團員<br />可以新增
      <strong class="text-primary-01">{{ 5 - selectedTags.length }}</strong>
      個標籤
    </h2>
    <div class="mb-10 flex flex-col items-center justify-center">
      <!-- search -->
      <div class="mb-10 flex w-full items-center">
        <AutoComplete
          v-model="tempSelectedTag"
          :suggestions="filteredTags"
          @complete="searchTag($event)"
          @keyup.enter="addTag($event)"
          optionLabel="label"
          loadingIcon="false"
          placeholder="輸入適合揪團的標籤 ( 例如: 攀岩、潛水、戶外運動 )"
          :disabled="selectedTags.length === 5"
          class="w-3/4"
        />
        <button
          v-if="isDisabled === true"
          @click.prevent="enableEdit"
          class="hover:text-primary-01"
        >
          <i class="pi pi-pencil ml-4 mr-1"></i>
          編輯標籤
        </button>
      </div>
      <!-- selected tags -->
      <ul class="flex flex-wrap gap-3">
        <li
          class="flex items-center rounded-full bg-secondary-yellow py-2 pl-8 pr-4"
          v-for="(tag, i) in selectedTags"
          :key="tag + i"
        >
          <span class="mr-8 text-lg"
            ><i class="pi pi-tag mr-2"></i>{{ tag }}</span
          >
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
          class="btn btn-primary"
          @click="updateActivityTags"
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
    </div>
    <!-- tags -->
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
</template>

<style scoped>
:deep(.p-autocomplete-input) {
  width: 100%;
}
</style>

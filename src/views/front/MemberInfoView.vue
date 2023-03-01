<script>
import { mapState } from 'pinia';
import { useVuelidate } from '@vuelidate/core';
import required from '@/utils/i18n-validators';
import createSteps from '@/stores/front/createSteps';

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      name: 'Jack',
      submitted: false,
      isDisabled: true,
      tempSelectedTag: null,
      selectedTags: [],
      filteredTags: null,
    };
  },
  computed: {
    ...mapState(createSteps, ['tags', 'tagList']),
  },
  validations() {
    return {
      name: {
        required,
      },
    };
  },
  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        console.log(456);
        return;
      }

      console.log(123);
      // localStorage.setItem(
      //   'createTempFormData',
      //   JSON.stringify(this.tempFormData)
      // );
      this.isDisabled = true;
    },
    editName() {
      this.isDisabled = false;
    },
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
  },
};
</script>
<template>
  <section class="mb-10 border-b pb-10">
    <h1 class="mb-10 text-4xl">編輯個人資訊</h1>
    <div class="mb-10 flex items-center">
      <PAvatar
        image="/src/assets/images/avatar/avatar01.png"
        size="xlarge"
        class="info-avatar mr-10 w-20"
        shape="circle"
      />
      <button type="button" class="btn btn-primary">設定頭像</button>
    </div>
    <form>
      <div class="flex flex-col">
        <label
          for="name"
          class="mb-4 mr-4 whitespace-nowrap px-2"
          :class="{ 'p-error': v$.name.$invalid && submitted }"
          >姓名 (必填)</label
        >
        <div class="flex items-center">
          <InputText
            ref="nameInput"
            id="name"
            type="text"
            v-model="v$.name.$model"
            placeholder="請輸入姓名"
            class="mr-2 w-1/2"
            :class="{ 'p-invalid': v$.name.$invalid && submitted }"
            :disabled="isDisabled"
          />
          <a
            v-if="isDisabled === true"
            href="#"
            @click.prevent="editName"
            class="hover:text-primary-01"
          >
            <i class="pi pi-pencil mr-1"></i>
            變更
          </a>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.prevent="handleSubmit(!v$.$invalid)"
          >
            儲存變更
          </button>
        </div>
      </div>

      <small
        v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response"
        class="p-error"
        >{{ v$.name.required.$message.replace('Value', '姓名') }}</small
      >
    </form>
  </section>

  <section>
    <h2 class="mb-8 text-xl">設定個人標籤</h2>
    <h3 class="mb-4 text-lg">
      可以新增
      <strong class="text-primary-01">{{ 5 - selectedTags.length }}</strong>
      個標籤
    </h3>
    <AutoComplete
      v-model="tempSelectedTag"
      :suggestions="filteredTags"
      @complete="searchTag($event)"
      @keyup.enter="addTag($event)"
      optionLabel="label"
      loadingIcon="false"
      placeholder="輸入想要的標籤 ( 例如: 攀岩 )"
      :disabled="selectedTags.length === 5"
      class="w- mb-10"
    />
    <ul class="mb-10 flex flex-wrap gap-3">
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
:deep(.p-avatar.p-avatar-xl) {
  width: 100px;
  height: 100px;
}
</style>

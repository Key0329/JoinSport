<script>
import StepPagination from '@/components/front/StepPagination.vue';
import JoinDetailAside from '@/components/front/JoinDetailAside.vue';

export default {
  components: {
    StepPagination,
    JoinDetailAside,
  },
  data() {
    return {
      tempForm: {},
      editorContent: '',
      tempTags: [],
    };
  },
  computed: {
    tempActivity() {
      const tempActivity = {
        ...this.tempForm,
        tags: this.tempTags,
      };

      return tempActivity;
    },
  },
  methods: {
    getLocalData() {
      if (localStorage.getItem('createTempFormData')) {
        const tempForm = JSON.parse(localStorage.getItem('createTempFormData'));
        const datePart = tempForm.date.split('-');
        const date = `${datePart[1]}/${datePart[2]}`;
        const dayOfWeek = new Date(tempForm.date).getDay();
        const dayOfWeekText = [
          '星期日',
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六',
        ][dayOfWeek];

        this.tempForm = { ...tempForm, date, dayOfWeekText };
      }

      if (localStorage.getItem('editorValue')) {
        const tempArticle = localStorage.getItem('editorValue');
        this.editorContent = tempArticle;
      }

      if (localStorage.getItem('selectedTags')) {
        const tempTags = JSON.parse(localStorage.getItem('selectedTags'));
        this.tempTags = tempTags;
      }
    },
  },
  mounted() {
    this.getLocalData();
  },
};
</script>

<template>
  <section class="px-4 pt-20 pb-5">
    <div class="container">
      <h2 class="mb-4 text-xl font-bold md:text-3xl">
        {{ tempForm.title }}
      </h2>
      <div class="flex items-center gap-4">
        <PAvatar
          image="/src/assets/images/avatar/avatar01.png"
          size="xlarge"
          shape="circle"
        />
        <div>
          <p>主辦者</p>
          <p>Jack</p>
        </div>
      </div>
    </div>
  </section>

  <main class="bg-primary-03 px-4 py-10 md:py-20">
    <div class="container">
      <div
        class="grid h-full grid-cols-12 border-b border-[#3d3d3d] pb-10 md:pb-20"
      >
        <div class="col-span-12 md:col-span-8">
          <img
            src="../../assets/images/group/group06.png"
            alt="JoinDetailImage"
            class="rounded md:mb-10"
          />
          <!-- mobile -->
          <section
            class="mb-4 flex items-center justify-between border-b md:mb-0 md:hidden md:border-0"
          >
            <h3
              class="whitespace-nowrap text-lg font-medium md:mb-8 md:text-xl"
            >
              揪團詳情
            </h3>
            <div class="p-4">
              <p
                class="flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"
              >
                <span class="material-icons mr-1 text-primary-01">
                  schedule </span
                >{{ tempForm.date }} {{ tempForm.startTime?.time }}
              </p>
              <p
                class="flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"
              >
                <span class="material-icons mr-1 text-primary-01"> room </span
                >{{ tempForm.address }}
              </p>
            </div>
          </section>
          <article class="mb-10 md:mb-20">
            <QuillEditor
              v-model:content="editorContent"
              contentType="html"
              readOnly
              theme="bubble"
            />
          </article>
          <section
            class="mb-10 flex justify-evenly border-y border-[#3d3d3d] py-10 md:mb-20"
          >
            <div class="text-center">
              <span class="material-symbols-outlined text-4xl">
                credit_card
              </span>
              <p>{{ tempForm.paymentMethod?.method }}</p>
            </div>
            <div class="text-center">
              <span class="material-symbols-outlined text-4xl">
                monetization_on
              </span>
              <p>$ {{ tempForm.costPerPerson }}</p>
            </div>
            <div class="text-center">
              <span class="material-symbols-outlined text-4xl"> group </span>
              <p>{{ tempForm.joinNum?.number }} 人</p>
            </div>
          </section>
          <TabView>
            <TabPanel header="參與者"></TabPanel>
            <TabPanel header="更多照片">
              <div class="flex flex-col justify-evenly gap-2 md:flex-row">
                <div class="w-full">
                  <img
                    src="../../assets/images/group/group07.png"
                    alt="JoinDetailImg"
                    class="h-full"
                  />
                </div>
                <div class="w-full">
                  <img
                    src="../../assets/images/group/group01.png"
                    alt="JoinDetailImg"
                    class="h-full"
                  />
                </div>
                <div class="w-full">
                  <img
                    src="../../assets/images/group/group09.png"
                    alt="JoinDetailImg"
                    class="h-full"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel header="留言">
              <div>
                <p class="mb-4">留言</p>
                <form>
                  <PTextarea
                    rows="5"
                    class="mb-2 w-full"
                    placeholder="留下您的想法"
                  />
                  <div class="flex justify-end gap-4">
                    <button
                      type="button"
                      class="btn bg-white transition-colors hover:bg-primary-02"
                    >
                      取消
                    </button>
                    <button
                      type="button"
                      class="btn bg-primary-04 transition-colors hover:bg-primary-02"
                    >
                      確認
                    </button>
                  </div>
                </form>
              </div>
            </TabPanel>
          </TabView>
        </div>
        <!-- sidebar -->
        <JoinDetailAside :activity="tempActivity"></JoinDetailAside>
      </div>
    </div>
  </main>

  <!-- bottom area -->
  <section class="bg-white py-5">
    <div class="container">
      <div class="flex flex-col items-center md:flex-row md:justify-between">
        <div class="mb-2 md:mb-0">
          <p class="mb-2 md:mb-0">
            {{ tempForm.date }} {{ tempForm.dayOfWeekText }}
            {{ tempForm.startTime?.time }}
          </p>
          <h2 class="text-lg font-semibold sm:text-xl">
            {{ tempForm.title }}
          </h2>
        </div>
        <div class="flex items-center gap-6">
          <p>{{ tempForm.joinNum?.number }} 個空位</p>
          <a href="#">
            <i class="pi pi-star text-lg"></i>
          </a>
          <button
            type="button"
            class="btn btn-primary py-4 disabled:opacity-70"
            disabled
          >
            我要參加
          </button>
        </div>
      </div>
    </div>
  </section>

  <StepPagination class="mt-20"></StepPagination>
</template>

<style scoped>
:deep(.p-tabview-nav) {
  background-color: #faede2;
}
:deep(.p-tabview-nav li) {
  background-color: #faede2;
}
:deep(.p-tabview-nav li .p-tabview-nav-link) {
  background-color: #faede2;
}
:deep(.p-tabview-nav li.p-highlight .p-tabview-nav-link) {
  background-color: #faede2;
  color: #ef5230;
  border-color: #ef5230;
}
:deep(.p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus) {
  box-shadow: inset 0 0 0 0;
}
:deep(.p-tabview-panels) {
  background-color: #faede2;
}
</style>

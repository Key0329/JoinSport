<script>
import { mapActions } from 'pinia';
import authStore from '@/stores/authStore';
import StepPagination from '@/components/front/StepPagination.vue';
import JoinDetailAside from '@/components/front/JoinDetailAside.vue';
import CreateJoinTabView from '@/components/front/CreateJoinTabView.vue';
import CreateJoinBottomArea from '@/components/front/CreateJoinBottomArea.vue';

const { VITE_URL, VITE_MAP_KEY, VITE_MAP_URL } = import.meta.env;

export default {
  name: 'CreateJoinPreviewView',

  components: {
    StepPagination,
    JoinDetailAside,
    CreateJoinTabView,
    CreateJoinBottomArea,
  },
  data() {
    return {
      user: {},
      userId: null,
      tempForm: {},
      tempTags: [],
      editorContent: '',
      location: [],
    };
  },
  computed: {
    tempActivity() {
      const tempActivity = {
        ...this.tempForm,
        userId: this.userId,
        city: this.tempForm.city?.name,
        district: this.tempForm.district?.name,
        tags: this.tempTags,
        mainImg:
          'https://github.com/Key0329/JoinSport/blob/main/src/assets/images/activities/activity15.jpg?raw=true',
        imgs: [
          'https://github.com/Key0329/JoinSport/blob/main/src/assets/images/activities/activity1501.jpg?raw=true',
          'https://github.com/Key0329/JoinSport/blob/main/src/assets/images/activities/activity1502.jpg?raw=true',
          'https://github.com/Key0329/JoinSport/blob/main/src/assets/images/activities/activity1503.jpg?raw=true',
        ],
        content: this.editorContent,
        maxJoinNum: this.tempForm.maxJoinNum?.number,
        cost: this.tempForm.costPerPerson,
        paymentMethod: this.tempForm.paymentMethod?.method,
        groupId: '',
        updateDate: new Date().getTime(),
        isCancelled: false,
        location: this.location,
      };

      return tempActivity;
    },
  },
  methods: {
    ...mapActions(authStore, ['getUserId']),

    getLocalData() {
      if (localStorage.getItem('createTempFormData')) {
        const tempForm = JSON.parse(localStorage.getItem('createTempFormData'));
        const datePart = tempForm.date.split('-');
        const newDate = `${datePart[1]}/${datePart[2]}`;
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

        this.tempForm = { ...tempForm, newDate, dayOfWeekText };
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
    getUser() {
      const id = this.userId;
      const path = `${VITE_URL}/users/${id}`;

      this.$http
        .get(path)
        .then((res) => {
          this.user = res.data;
        })
        .catch((err) => {
          const errMessage = err.response.statusText;
          this.$toast.add({
            severity: 'error',
            detail: `${errMessage} 使用者資訊獲取失敗`,
            life: 3000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
    async handleSubmit() {
      try {
        // 設定地址格式
        const address = `${this.tempForm.city.name}${this.tempForm.district.name}${this.tempForm.address}`;

        const mapPath = `${VITE_MAP_URL}?address=${address}&key=${VITE_MAP_KEY}`;
        const path = `${VITE_URL}/activities`;

        // google geocoding api 轉換成座標
        const response = await this.$http.get(mapPath);
        const tempLocation = response.data.results[0].geometry.location;
        this.location = [tempLocation.lat, tempLocation.lng];
        const data = this.tempActivity;

        // 送出表單
        await this.$http.post(path, data);

        this.$router.push('/CreateJoin/step5');

        // 清除 LocalStorage
        const keysToRemove = [
          'createTempFormData',
          'editorValue',
          'selectedTags',
        ];
        keysToRemove.forEach((key) => localStorage.removeItem(key));
      } catch (err) {
        this.$toast.add({
          severity: 'error',
          detail: `開團失敗，因定位需求，請檢查地址格式是否正確`,
          life: 3000,
          contentStyleClass: 'custom-toast-danger',
        });
      }
    },
  },

  mounted() {
    this.getLocalData();
    this.userId = this.getUserId();
    this.getUser();
  },
};
</script>

<template>
  <PToast></PToast>
  <section class="px-4 pt-6 pb-5 md:pt-20">
    <div class="container">
      <div class="flex items-center">
        <h2 class="mb-4 mr-4 text-xl font-bold md:text-3xl">
          {{ tempForm.title }}
        </h2>
        <p class="items-end">
          {{ tempForm.city?.name }} {{ tempForm.district?.name }}
        </p>
      </div>
      <div class="flex items-center gap-4">
        <PAvatar :image="user.img" size="xlarge" shape="circle" />
        <div>
          <p>主辦者</p>
          <p>{{ user.name }}</p>
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
            src="../../assets/images/activities/activity15.jpg"
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
                >{{ tempForm.newDate }} {{ tempForm.startTime?.time }}
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
            class="mb-10 flex justify-evenly border-y border-[#3d3d3d] py-6 md:mb-20 md:py-10"
          >
            <div class="text-center">
              <span class="material-symbols-outlined md:text-4xl">
                credit_card
              </span>
              <p>{{ tempForm.paymentMethod?.method }}</p>
            </div>
            <div class="text-center">
              <span class="material-symbols-outlined md:text-4xl">
                monetization_on
              </span>
              <p>$ {{ tempForm.costPerPerson }}</p>
            </div>
            <div class="text-center">
              <span class="material-symbols-outlined md:text-4xl"> group </span>
              <p>{{ tempForm.maxJoinNum?.number }} 人</p>
            </div>
          </section>
          <CreateJoinTabView></CreateJoinTabView>
        </div>
        <!-- sidebar -->
        <JoinDetailAside :activity="tempActivity"></JoinDetailAside>
      </div>
    </div>
  </main>

  <!-- bottom area -->
  <section class="bg-white py-5">
    <div class="container">
      <CreateJoinBottomArea :temp-form="tempForm"></CreateJoinBottomArea>
    </div>
  </section>

  <StepPagination
    @handleSubmit="handleSubmit"
    class="mt-10 md:mt-20"
  ></StepPagination>
</template>

<style scoped>
:deep(.p-tabview-nav),
:deep(.p-tabview-nav li),
:deep(.p-tabview-nav li .p-tabview-nav-link),
:deep(.p-tabview-panels) {
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
</style>

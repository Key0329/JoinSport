<script>
import { mapActions } from 'pinia';
import authStore from '@/stores/authStore';
import StepPagination from '@/components/front/StepPagination.vue';
import JoinDetailAside from '@/components/front/JoinDetailAside.vue';
import JoinAttendees from '@/components/front/JoinAttendees.vue';

const { VITE_URL, VITE_MAP_KEY, VITE_MAP_URL } = import.meta.env;

export default {
  name: 'CreateJoinPreviewView',

  components: {
    StepPagination,
    JoinDetailAside,
    JoinAttendees,
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
          '?????????',
          '?????????',
          '?????????',
          '?????????',
          '?????????',
          '?????????',
          '?????????',
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
            detail: `${errMessage} ???????????????????????????`,
            life: 1000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
    async handleSubmit() {
      try {
        // ??????????????????
        const address = `${this.tempForm.city.name}${this.tempForm.district.name}${this.tempForm.address}`;

        const mapPath = `${VITE_MAP_URL}?address=${address}&key=${VITE_MAP_KEY}`;
        const path = `${VITE_URL}/activities`;

        // google geocoding api ???????????????
        const response = await this.$http.get(mapPath);
        const tempLocation = response.data.results[0].geometry.location;
        this.location = [tempLocation.lat, tempLocation.lng];
        const data = this.tempActivity;

        // ????????????
        await this.$http.post(path, data);

        this.$router.push('/CreateJoin/step5');

        // ?????? LocalStorage
        const keysToRemove = [
          'createTempFormData',
          'editorValue',
          'selectedTags',
        ];
        keysToRemove.forEach((key) => localStorage.removeItem(key));
      } catch (err) {
        this.$toast.add({
          severity: 'error',
          detail: `??????????????????????????????????????????????????????????????????`,
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
  <section class="px-4 pt-20 pb-5">
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
          <p>?????????</p>
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
              ????????????
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
              <p>{{ tempForm.maxJoinNum?.number }} ???</p>
            </div>
          </section>
          <TabView>
            <TabPanel header="?????????">
              <ul class="flex flex-wrap gap-4">
                <li>
                  <JoinAttendees></JoinAttendees>
                </li>
                <li>
                  <JoinAttendees></JoinAttendees>
                </li>
                <li>
                  <JoinAttendees></JoinAttendees>
                </li>
              </ul>
            </TabPanel>
            <TabPanel header="????????????">
              <div class="flex flex-col justify-evenly gap-2 md:flex-row">
                <div class="w-full">
                  <img
                    src="../../assets/images/activities/activity1501.jpg"
                    alt="JoinDetailImg"
                    class="h-full"
                  />
                </div>
                <div class="w-full">
                  <img
                    src="../../assets/images/activities/activity1502.jpg"
                    alt="JoinDetailImg"
                    class="h-full"
                  />
                </div>
                <div class="w-full">
                  <img
                    src="../../assets/images/activities/activity1503.jpg"
                    alt="JoinDetailImg"
                    class="h-full"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel header="??????">
              <div>
                <p class="mb-4">??????</p>
                <form>
                  <PTextarea
                    rows="5"
                    class="mb-2 w-full"
                    placeholder="??????????????????"
                    disabled
                  />
                  <div class="flex justify-end gap-4">
                    <button
                      type="button"
                      class="btn transition-color bg-white disabled:opacity-50"
                      disabled
                    >
                      ??????
                    </button>
                    <button
                      type="button"
                      class="btn transition-color bg-primary-04 disabled:opacity-50"
                      disabled
                    >
                      ??????
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
            {{ tempForm.newDate }} {{ tempForm.dayOfWeekText }}
            {{ tempForm.startTime?.time }}
          </p>
          <h2 class="text-lg font-semibold sm:text-xl">
            {{ tempForm.title }}
          </h2>
        </div>
        <div class="flex items-center gap-6">
          <p>{{ tempForm.maxJoinNum?.number }} ?????????</p>
          <p>
            <i class="pi pi-star text-lg"></i>
          </p>
          <button
            type="button"
            class="btn btn-primary py-4 hover:bg-primary-01 hover:text-white disabled:opacity-70"
            disabled
          >
            ????????????
          </button>
        </div>
      </div>
    </div>
  </section>

  <StepPagination @handleSubmit="handleSubmit" class="mt-20"></StepPagination>
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

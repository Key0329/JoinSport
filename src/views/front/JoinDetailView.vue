<script>
import FrontHeader from '@/components/front/FrontHeader.vue';
import JoinAttendees from '@/components/front/JoinAttendees.vue';
import JoinCardRow from '@/components/front/JoinCardRow.vue';
import JoinDetailAside from '@/components/front/JoinDetailAside.vue';

export default {
  components: {
    FrontHeader,
    JoinAttendees,
    JoinCardRow,
    JoinDetailAside,
  },
  data() {
    return {
      textareaValue: '',
    };
  },
};
</script>
<template>
  <front-header></front-header>
  <section class="pt-[120px] pb-5 md:pt-[92px]">
    <div class="container">
      <h2 class="mb-4 text-xl font-bold md:text-3xl">
        周末 # 羽球 # 新店運動中心
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

  <main class="bg-primary-03 py-10 md:py-20">
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
                >3/25 10:00
              </p>
              <p
                class="flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"
              >
                <span class="material-icons text-primary-01"> room </span
                >捷運新店區公所
              </p>
              <span class="pl-8 text-sm text-[#b7b7b7]"
                >231新北市新店區北新路一段88巷12號</span
              >
            </div>
          </section>
          <article class="mb-10 md:mb-20">
            平常上班上課讓身心勞累，想要假日舒展筋骨運動一下順便認識新朋友，一起來
            2 小時羽球歡樂團吧! <br /><br />
            不管是新手、中手、老手通通都歡迎，不用怕程度高低，開心打球最重要!
            <br /><br />
            請自備球拍或向加入的球友商借，或者向三樓櫃檯租借，羽毛球團主會提供<br /><br />
            為了防止被放鴿子，審核加入後在聊天室無回應將會請出，開打前會再次確認，無故缺席絕對給一星負評<br /><br />
            地點: 新店國民運動中心 ( 捷運新店區公所 2 號出口 ) <br />
            球場: 7樓羽球場單面場 D 、E 場地依序換場<br />
            費用: 1 人 150 元<br />
            時間: 3/25 (六) 下午 6 - 8 點<br />
          </article>
          <section
            class="mb-10 flex justify-evenly border-y border-[#3d3d3d] py-10 md:mb-20"
          >
            <div class="text-center">
              <span class="material-symbols-outlined text-4xl">
                credit_card
              </span>
              <p>各付各的</p>
            </div>
            <div class="text-center">
              <span class="material-symbols-outlined text-4xl">
                monetization_on
              </span>
              <p>$ 150</p>
            </div>
            <div class="text-center">
              <span class="material-symbols-outlined text-4xl"> group </span>
              <p>8 人</p>
            </div>
          </section>
          <TabView>
            <TabPanel header="參與者">
              <ul class="flex flex-wrap gap-4">
                <li><JoinAttendees></JoinAttendees></li>
                <li><JoinAttendees></JoinAttendees></li>
                <li><JoinAttendees></JoinAttendees></li>
                <li><JoinAttendees></JoinAttendees></li>
                <li><JoinAttendees></JoinAttendees></li>
                <li><JoinAttendees></JoinAttendees></li>
                <li><JoinAttendees></JoinAttendees></li>
                <li><JoinAttendees></JoinAttendees></li>
              </ul>
            </TabPanel>
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
              <ul class="mb-10 flex flex-col gap-8 md:mb-20">
                <li class="flex gap-4">
                  <div>
                    <PAvatar
                      image="/src/assets/images/avatar/avatar01.png"
                      size="xlarge"
                      shape="circle"
                      class="mb-2"
                    />
                  </div>
                  <div class="w-full rounded-lg bg-white p-4">
                    <p class="mb-2 text-sm">Annie</p>
                    <p class="mb-4">請問租借球拍的費用是多少呢?</p>
                    <div class="mb-2 flex text-sm">
                      <span class="mr-2">B1</span>
                      <span class="mr-2">4 小時前</span>
                      <a href="#" class="text-[#b7b7b7]">回覆</a>
                    </div>
                    <a href="#" class="text-sm text-[#b1b1b1]"
                      >— 查看其他 1 則留言</a
                    >
                  </div>
                </li>
                <li class="flex gap-4">
                  <div>
                    <PAvatar
                      image="/src/assets/images/avatar/avatar01.png"
                      size="xlarge"
                      shape="circle"
                      class="mb-2"
                    />
                  </div>
                  <div class="w-full rounded-lg bg-white p-4">
                    <p class="mb-2 text-sm">Annie</p>
                    <p class="mb-4">請問租借球拍的費用是多少呢?</p>
                    <div class="mb-2 flex text-sm">
                      <span class="mr-2">B1</span>
                      <span class="mr-2">4 小時前</span>
                      <a href="#" class="text-[#b7b7b7]">回覆</a>
                    </div>
                    <a href="#" class="text-sm text-[#b1b1b1]"
                      >— 查看其他 1 則留言</a
                    >
                  </div>
                </li>
              </ul>
              <div>
                <p class="mb-4">留言</p>
                <form>
                  <PTextarea
                    v-model="textareaValue"
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
        <JoinDetailAside></JoinDetailAside>
      </div>
      <section class="pt-10">
        <h3 class="mb-8 text-xl font-medium">相似的揪團活動</h3>
        <ul class="flex flex-col justify-between gap-6 md:flex-row">
          <li><JoinCardRow></JoinCardRow></li>
          <li><JoinCardRow></JoinCardRow></li>
        </ul>
      </section>
    </div>
  </main>

  <section class="sticky bottom-0 z-30 bg-white py-5">
    <div class="container">
      <div class="flex flex-col items-center md:flex-row md:justify-between">
        <div class="mb-2 md:mb-0">
          <p class="mb-2 md:mb-0">三月 25 日 星期六 10:00</p>
          <h2 class="text-lg font-semibold sm:text-xl">
            周末 # 羽球 # 新店運動中心
          </h2>
        </div>
        <div class="flex items-center gap-6">
          <p>3 個空位</p>
          <a href="#">
            <i class="pi pi-star text-lg"></i>
          </a>
          <button type="button" class="btn btn-primary py-4">我要參加</button>
        </div>
      </div>
    </div>
  </section>
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

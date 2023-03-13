<script>
import JoinAttendees from '@/components/front/JoinAttendees.vue';

export default {
  props: {
    orders: {
      type: Array,
    },
    activity: {
      type: Object,
    },
  },
  components: {
    JoinAttendees,
  },
  data() {
    return {
      textareaValue: '',
    };
  },
};
</script>

<template>
  <TabView>
    <TabPanel header="參與者">
      <ul class="flex flex-wrap gap-4">
        <li v-for="user in orders" :key="user.userId">
          <JoinAttendees :user="user"></JoinAttendees>
        </li>
      </ul>
    </TabPanel>
    <TabPanel header="更多照片">
      <div class="flex flex-col justify-evenly gap-2 md:flex-row">
        <div class="w-full" v-for="(img, i) in activity.imgs" :key="img + i">
          <img :src="img" alt="JoinDetailImg" class="h-full" />
        </div>
      </div>
    </TabPanel>
    <TabPanel header="留言">
      <ul class="mb-10 flex flex-col gap-8 md:mb-20">
        <li class="flex gap-4">
          <div>
            <img
              class="inline-block h-20 w-20 rounded-full ring-2 ring-white"
              src="../../assets/images/avatar/avatar01.png"
              alt="avatar01"
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
            <a href="#" class="text-sm text-[#b1b1b1]">— 查看其他 1 則留言</a>
          </div>
        </li>
        <li class="flex gap-4">
          <div>
            <img
              class="inline-block h-20 w-20 rounded-full ring-2 ring-white"
              src="../../assets/images/avatar/avatar01.png"
              alt="avatar01"
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
            <a href="#" class="text-sm text-[#b1b1b1]">— 查看其他 1 則留言</a>
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
</template>

<script>
import JoinAttendees from '@/components/front/JoinAttendees.vue';

const { VITE_URL } = import.meta.env;

export default {
  props: {
    userId: {
      type: String,
    },
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
      userMessages: [],
      hostReplyMessages: [],
      isOpened: false,
      openedTextarea: '',
      userTimeDiff: '',
    };
  },
  methods: {
    getMessages(id) {
      const path = `${VITE_URL}/messages?activityId=${id}&_expand=user`;

      this.$http
        .get(path)
        .then((res) => {
          this.userMessages = res.data;
        })
        .catch((err) => {
          this.$toast.add({
            severity: 'error',
            detail: `${err} 找不到資料`,
            life: 3000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
    getReplyMessage(id) {
      const path = `${VITE_URL}/messageReply?userId=${id}&_expand=user`;

      this.$http
        .get(path)
        .then((res) => {
          this.hostReplyMessages = res.data;
        })
        .catch((err) => {
          this.$toast.add({
            severity: 'err',
            detail: `${err} 找不到資料`,
            life: 3000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
    sendMessageHandler(e, id) {
      const content = this.textareaValue;
      const replyTime = new Date().getTime();
      let path = '';
      let data = {};
      let detail = '';
      let errDetail = '';

      if (id) {
        path = `${VITE_URL}/messageReply`;

        data = {
          userId: this.userId,
          messageId: id,
          content,
          updateTime: replyTime,
          isCancelled: false,
        };
        detail = '回覆成功';
        errDetail = '回覆失敗';
      }

      if (!id) {
        path = `${VITE_URL}/messages`;

        data = {
          userId: this.userId,
          activityId: this.activity.id,
          content,
          updateTime: replyTime,
          isCancelled: false,
        };
        detail = '留言成功';
        errDetail = '留言失敗';
      }

      this.$http
        .post(path, data)
        .then(() => {
          this.$emit('getActivity', this.$route.params.id);
          this.$toast.add({
            severity: 'success',
            detail,
            life: 3000,
          });
          this.textareaValue = '';
        })
        .catch(() => {
          this.$toast.add({
            severity: 'error',
            detail: errDetail,
            life: 3000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
    textareaHandler(id) {
      this.isOpened = !this.isOpened;
      this.openedTextarea = id;
      this.textareaValue = '';
    },
    isHost() {
      return this.activity.userId === this.userId;
    },
  },
  watch: {
    activity(to) {
      this.getMessages(to.id);
      this.getReplyMessage(to.userId);
    },
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
          <img
            :src="img"
            alt="JoinDetailImg"
            class="h-[200px] w-full sm:h-[400px] md:h-full"
          />
        </div>
      </div>
    </TabPanel>
    <TabPanel header="留言">
      <ul class="mb-2 flex flex-col gap-4 sm:mb-10 sm:gap-8 md:mb-20">
        <li v-for="(message, i) in userMessages" :key="message.id" class="flex">
          <div class="mr-1 flex-shrink-0 xs:mr-4">
            <img
              class="h-10 w-10 rounded-full ring-2 ring-white sm:h-20 sm:w-20"
              :src="message.user.img"
              alt="avatar01"
            />
          </div>
          <div class="w-full">
            <div class="mb-6 w-3/4 rounded-lg bg-white p-4">
              <p class="mb-2 text-sm font-bold xs:text-base">
                {{ message.user.name }}
              </p>
              <p class="mb-4 text-sm xs:text-base">{{ message.content }}</p>
              <div class="flex text-sm">
                <span class="mr-2">B{{ i + 1 }}</span>
                <span
                  v-if="
                    isHost() &&
                    hostReplyMessages.find(
                      (hostMsg) =>
                        parseInt(hostMsg.messageId, 10) === message.id
                    )
                  "
                  class="text-[#b7b7b7]"
                  >已回覆</span
                >
                <button
                  v-else-if="isHost()"
                  @click="textareaHandler(message.id)"
                  type="button"
                  class="hover:text-primary-01"
                >
                  回覆
                </button>
              </div>
            </div>
            <div
              v-if="
                hostReplyMessages.find(
                  (hostMsg) => parseInt(hostMsg.messageId, 10) === message.id
                )
              "
              class="ml-auto flex items-center gap-6 pl-2 xs:pl-10"
            >
              <i
                class="pi pi-reply rotate-180 scale-x-[-1] transform text-base sm:text-2xl"
              ></i>
              <div
                class="flex w-full items-center justify-between rounded-lg bg-white p-4"
              >
                <div>
                  <p class="mb-2 text-sm xs:text-base">
                    主辦者回覆 B{{ i + 1 }}
                  </p>
                  <p class="text-sm xs:text-base">
                    {{
                      hostReplyMessages.filter(
                        (hostMsg) =>
                          parseInt(hostMsg.messageId, 10) === message.id
                      )[0].content
                    }}
                  </p>
                </div>
                <div>
                  <img
                    class="inline-block h-10 w-10 rounded-full ring-2 ring-white sm:h-20 sm:w-20"
                    :src="
                      hostReplyMessages.filter(
                        (hostMsg) =>
                          parseInt(hostMsg.messageId, 10) === message.id
                      )[0].user.img
                    "
                    alt="avatar01"
                  />
                </div>
              </div>
            </div>
            <div v-else>
              <form
                v-if="isOpened && openedTextarea === message.id"
                @submit.prevent="sendMessageHandler($event, message.id)"
              >
                <PTextarea
                  v-model="textareaValue"
                  rows="3"
                  class="mb-2 w-full"
                  placeholder="回覆"
                />
                <div class="flex justify-end gap-4">
                  <button
                    @click="textareaHandler"
                    type="button"
                    class="btn bg-white px-2 transition-colors hover:bg-primary-02"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    class="btn bg-primary-04 px-2 transition-colors hover:bg-primary-02"
                  >
                    確認
                  </button>
                </div>
              </form>
            </div>
          </div>
        </li>
      </ul>
      <div v-if="!isHost()" class="border-t pt-4">
        <p class="mb-4">留言</p>
        <form @submit.prevent="sendMessageHandler($event)">
          <PTextarea
            v-model="textareaValue"
            rows="5"
            class="mb-2 w-full"
            placeholder="留下您的想法"
          />
          <div class="flex justify-end gap-4">
            <button
              @click="textareaHandler"
              type="button"
              class="btn bg-white !px-2 transition-colors hover:bg-primary-02"
            >
              取消
            </button>
            <button
              type="submit"
              class="btn bg-primary-04 !px-2 transition-colors hover:bg-primary-02"
            >
              確認
            </button>
          </div>
        </form>
      </div>
    </TabPanel>
  </TabView>
</template>

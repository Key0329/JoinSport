<script>
const { VITE_URL } = import.meta.env;

export default {
  props: {
    userId: {
      type: String,
    },
    activity: {
      type: Object,
    },
  },
  data() {
    return {
      bookmarkId: null,
      isBookmarked: false,
    };
  },
  methods: {
    getActivityBookmark(id) {
      const path = `${VITE_URL}/users/${this.userId}/bookmarks?activityId=${id}`;

      this.$http
        .get(path)
        .then((res) => {
          if (res.data[0]) {
            if (res.data[0].isCancelled === false) {
              this.isBookmarked = true;
            }
            this.bookmarkId = res.data[0].id;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleBookmark() {
      if (!this.bookmarkId && this.isBookmarked === false) {
        const path = `${VITE_URL}/bookmarks/`;
        const data = {
          userId: parseInt(this.userId, 10),
          activityId: this.activity.id,
          isCancelled: false,
        };

        this.$http
          .post(path, data)
          .then((res) => {
            this.isBookmarked = true;
            this.bookmarkId = res.data.id;
          })
          .catch((err) => {
            const errMessage = err.response.statusText;
            this.$toast.add({
              severity: 'error',
              detail: errMessage,
              life: 3000,
              contentStyleClass: 'custom-toast-danger',
            });
          });

        return;
      }

      const id = this.bookmarkId;
      const path = `${VITE_URL}/bookmarks/${id}`;
      const data = {
        isCancelled: false,
      };
      if (this.isBookmarked === true) {
        data.isCancelled = true;
      }

      this.$http
        .patch(path, data)
        .then(() => {
          this.isBookmarked = !this.isBookmarked;
          if (this.isBookmarked === true) {
            this.$toast.add({
              severity: 'success',
              detail: '加入我的收藏',
              life: 3000,
            });
          }
          if (this.isBookmarked === false) {
            this.$toast.add({
              severity: 'info',
              detail: '移除我的收藏',
              life: 3000,
            });
          }
        })
        .catch((err) => {
          const errMessage = err.response.statusText;
          this.$toast.add({
            severity: 'error',
            detail: errMessage,
            life: 3000,
            contentStyleClass: 'custom-toast-danger',
          });
        });
    },
  },
  watch: {
    activity(to) {
      this.getActivityBookmark(to.id);
    },
  },
  mounted() {
    this.getActivityBookmark(this.activity.id);
  },
};
</script>

<template>
  <button type="button" @click="handleBookmark">
    <i
      v-if="!isBookmarked"
      class="pi pi-bookmark text-lg hover:text-primary-01"
    ></i>
    <i
      v-else
      class="pi pi-bookmark-fill text-lg text-yellow-300 hover:text-primary-01"
    ></i>
  </button>
</template>

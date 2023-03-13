<script>
import { mapState, mapActions } from 'pinia';
import authStore from '@/stores/front/authStore';
import memberStore from '@/stores/front/memberStore';

export default {
  name: 'MemberPanel',

  data() {
    return {
      userId: null,
    };
  },
  computed: {
    ...mapState(memberStore, ['user']),
  },
  methods: {
    ...mapActions(authStore, ['getUserId']),
    ...mapActions(memberStore, ['getMemberData']),
  },
  mounted() {
    this.userId = this.getUserId();
    this.getMemberData(this.userId);
  },
};
</script>

<template>
  <div class="rounded-lg bg-primary-03 px-10 py-6">
    <div class="mb-8 flex items-center gap-6">
      <PAvatar
        :image="user.img"
        size="xlarge"
        shape="circle"
        class="ring-2 ring-white"
      />
      <div>
        <h3 class="text-xl">
          {{ user.name }}
        </h3>
        <span class="text-sm">{{ user.email }}</span>
      </div>
    </div>
    <ul class="flex flex-wrap gap-2">
      <li v-for="tag in user.favoriteSports" :key="'tag' + tag">
        <RouterLink
          :to="`/joinList/search/text=${tag}&area=0&date=0&page=1`"
          class="tag flex items-center"
        >
          <i class="pi pi-tag mr-1"></i> {{ tag }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

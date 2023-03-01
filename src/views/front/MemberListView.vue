<script>
import JoinCardRow from '../../components/front/JoinCardRow.vue';

export default {
  components: { JoinCardRow },
  beforeRouteEnter(to, from, next) {
    // 當路由進入時，讓頁面滾動到最上方
    window.scrollTo(0, 0);
    next();
  },
};
</script>

<template>
  <section>
    <h1 class="mb-20 text-3xl">已參與的揪團</h1>
    <ul>
      <li class="mb-10">
        <h3 class="border-b pb-4 text-xl">今天</h3>
        <RouterLink
          to="/JoinList/JoinListHot"
          class="group flex flex-col items-center justify-center py-10"
        >
          <p class="mb-4 flex items-center text-lg">
            <i class="pi pi-calendar-plus mr-2 text-lg"></i
            >今天沒有符合條件的活動 2023 年 3 月 18 日
          </p>
          <p class="group-hover:text-primary-01">探索更多揪團活動</p>
        </RouterLink>
      </li>
      <li class="mb-20">
        <h3 class="mb-6 border-b pb-4 text-xl">星期三 3 月 22 日</h3>
        <ul>
          <li class="mb-6">
            <JoinCardRow></JoinCardRow>
          </li>
        </ul>
      </li>
      <li class="mb-20">
        <h3 class="mb-6 border-b pb-4 text-xl">星期六 3 月 25 日</h3>
        <ul>
          <li class="mb-6">
            <JoinCardRow></JoinCardRow>
          </li>
          <li class="mb-6">
            <JoinCardRow></JoinCardRow>
          </li>
        </ul>
      </li>
    </ul>
  </section>
  <section class="py-10">
    <h2 class="mb-6 border-b pb-4 text-xl">您可能有興趣</h2>
    <ul>
      <li class="mb-6">
        <JoinCardRow></JoinCardRow>
      </li>
      <li class="mb-6">
        <JoinCardRow></JoinCardRow>
      </li>
    </ul>
  </section>
</template>

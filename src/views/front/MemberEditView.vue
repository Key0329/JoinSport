<script>
export default {
  name: 'MemberEditView',

  data() {
    return {
      items: [
        {
          label: '詳細資訊',
          icon: 'pi pi-fw pi-calendar',
          to: `/Member/Edit/EditInfo=${this.$route.params.id}&title=${this.$route.params.title}`,
        },
        {
          label: '標籤',
          icon: 'pi pi-fw pi-tags',
          to: `/Member/Edit/EditTags=${this.$route.params.id}&title=${this.$route.params.title}`,
        },
        {
          label: '內文',
          icon: 'pi pi-fw pi-pencil',
          to: `/Member/Edit/EditContent=${this.$route.params.id}&title=${this.$route.params.title}`,
        },
      ],
    };
  },
};
</script>

<template>
  <main>
    <section class="mb-12 flex items-center">
      <h1 class="mr-10 text-3xl">編輯</h1>
      <RouterLink to="/Member/Host" class="text-xl hover:text-primary-01"
        >返回上一頁</RouterLink
      >
    </section>
    <TabMenu :model="items" />
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
:deep(
    .p-tabmenu
      .p-tabmenu-nav
      .p-tabmenuitem
      .p-menuitem-link:not(.p-disabled):focus
  ) {
  box-shadow: inset 0 0 0 1px #fe5230;
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: '必要資訊',
          to: '/CreateJoin/step1',
        },
        {
          label: '設定標籤',
          to: '/CreateJoin/step2',
        },
        {
          label: '詳細描述與照片',
          to: '/CreateJoin/step3',
        },
        {
          label: '開團成功',
          to: '/CreateJoin/step1',
        },
      ],
    };
  },
};
</script>

<template>
  <PSteps :model="items" :readonly="false" />
</template>

<style scoped>
:deep(.p-steps-item.p-highlight .p-steps-number) {
  color: #ef5230;
}
:deep(.p-steps-item .p-menuitem-link:not(.p-disabled):focus) {
  box-shadow: 0 0 5px 1px #ef5230;
}
:deep(.p-steps-item.p-highlight .p-steps-number) {
  background-color: #faede2;
}
</style>

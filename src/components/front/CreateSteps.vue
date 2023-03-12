<script>
export default {
  name: 'CreateSteps',

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
          label: '活動簡介',
          to: '/CreateJoin/step3',
        },
        {
          label: '頁面預覽',
          to: '/CreateJoin/step4',
        },
        {
          label: '開團完成',
          to: '/CreateJoin/step5',
        },
      ],
    };
  },
};
</script>

<template>
  <PSteps :model="items" />
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

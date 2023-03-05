<script>
export default {
  data() {
    return {
      items: [
        {
          label: '我的揪團',
          icon: 'pi pi-fw pi-calendar',
          items: [
            {
              label: '我參加的揪團',
              icon: 'pi pi-fw pi-users',
              to: '/Member/List',
            },
            {
              label: '我主持的揪團',
              icon: 'pi pi-fw pi-key',
              to: '/Member/Host',
            },
            {
              label: '已收藏的揪團',
              icon: 'pi pi-fw pi-heart',
              to: '/Member/Collection',
            },
          ],
        },
        {
          label: '我的資訊',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: '個人資訊',
              icon: 'pi pi-fw pi-align-left',
              to: '/Member/Info',
            },
            {
              label: '個人標籤',
              icon: 'pi pi-fw pi-id-card',
              to: '/Member/Tags',
            },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <PanelMenu :model="items" />
</template>

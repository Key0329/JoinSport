<script>
import { mapState, mapActions } from 'pinia';
import joinActivitiesStore from '@/stores/front/joinActivitiesStore';
import { latLng } from 'leaflet';

export default {
  name: 'LeafletMap',

  props: {
    mapActivities: {
      type: Array,
    },
    mapActivity: {
      type: Object,
    },
  },
  data() {
    return {
      // 模擬資料
      data: [
        { name: '宜蘭外澳衝浪', local: [24.878043, 121.8415] },
        { name: '週末橋下籃球小聚', local: [25.051434, 121.552293] },
        { name: '台灣室內抱石之旅', local: [25.034027, 121.497107] },
        { name: '單車日行千里', local: [24.94545, 121.373392] },
      ],

      zoom: 8,
      center: latLng(23.854929, 121.052),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: `©<a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
      options: {
        zoomControl: true,
      },
      icon: {
        type: {
          grey: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
          gold: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
        },
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      },
    };
  },
  computed: {
    ...mapState(joinActivitiesStore, ['activitiesList']),

    filterActivities() {
      if (this.mapActivities) {
        return this.mapActivities.filter(
          (activity) => activity.isCancelled !== true
        );
      }
      return null;
    },
    locationData() {
      if (this.filterActivities) {
        return this.filterActivities.map((activity) => {
          return {
            id: activity.id,
            name: activity.title,
            local: activity.location,
            img: activity.mainImg,
          };
        });
      }
      return [
        {
          id: this.mapActivity.id,
          name: this.mapActivity.title,
          local: this.mapActivity.location,
          img: this.mapActivity.mainImg,
        },
      ];
    },
  },
  methods: {
    ...mapActions(joinActivitiesStore, ['getActivities']),

    // 獲得目前位置
    getCurrentLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        const p = position.coords;
        // 將中心點設為目前的位置
        this.center = latLng(p.latitude, p.longitude);

        // 將目前的位置的標記點彈跳視窗打開;
        this.$refs.location?.leafletObject?.openPopup();
        this.zoom = 13;
      });
    },
  },
  watch: {
    locationData(to) {
      this.data = to;
    },
  },
  mounted() {
    // 等地圖創建後執行
    this.$nextTick(() => {
      this.getCurrentLocation();
    });
  },
};
</script>

<template>
  <div class="h-[400px] w-full">
    <!-- 初始化地圖設定 -->
    <l-map ref="myMap" :zoom="zoom" :center="center" :options="options">
      <!-- 載入圖資 -->
      <l-tile-layer :url="url" :attribution="attribution" />

      <!-- 自己所在位置 -->
      <l-marker ref="location" :lat-lng="center">
        <l-popup>你的位置</l-popup>
      </l-marker>
      <!-- 創建標記點 -->
      <l-marker
        :lat-lng="activity.local"
        v-for="activity in data"
        :key="activity.id"
      >
        <!-- 標記點樣式判斷 -->
        <l-icon
          :icon-url="icon.type.gold"
          :shadow-url="icon.shadowUrl"
          :icon-size="icon.iconSize"
          :icon-anchor="icon.iconAnchor"
          :popup-anchor="icon.popupAnchor"
          :shadow-size="icon.shadowSize"
        />
        <!-- 彈出視窗 -->
        <l-popup>
          <RouterLink class="group" :to="`/joinDetail/id=${activity.id}`">
            <img :src="activity.img" alt="activity-photo" />
            <p class="flex items-center text-black group-hover:text-primary-01">
              {{ activity.name }}
              <i class="pi pi-external-link ml-1 text-xs"></i>
            </p>
          </RouterLink>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

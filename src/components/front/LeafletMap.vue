<script>
import { latLng } from 'leaflet';

export default {
  data() {
    return {
      // 模擬資料
      data: [
        { id: 1, name: '夢時代購物中心', local: [22.595153, 120.306923] },
        { id: 2, name: '漢神百貨', local: [22.61942, 120.296386] },
        { id: 3, name: '漢神巨蛋', local: [22.669603, 120.302288] },
        { id: 4, name: '大統百貨', local: [22.630748, 120.318033] },
      ],

      zoom: 8,
      center: latLng(23.854929, 121.052003),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: `©<a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
      options: {
        zoomControl: true,
      },
      icon: {
        type: {
          black:
            'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
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
  methods: {
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
  mounted() {
    // 等地圖創建後執行
    this.$nextTick(() => {
      this.getCurrentLocation();
    });
  },
};
</script>

<template>
  <div class="h-[300px] w-full">
    <!-- 初始化地圖設定 -->
    <l-map ref="myMap" :zoom="zoom" :center="center" :options="options">
      <!-- 載入圖資 -->
      <l-tile-layer :url="url" :attribution="attribution" />

      <!-- 自己所在位置 -->
      <l-marker ref="location" :lat-lng="center">
        <l-popup> 你的位置 <a href="#">123</a> </l-popup>
      </l-marker>
      <!-- 創建標記點 -->
      <l-marker :lat-lng="item.local" v-for="item in data" :key="item.id">
        <!-- 標記點樣式判斷 -->
        <l-icon
          :icon-url="
            item.name === '夢時代購物中心' ? icon.type.gold : icon.type.black
          "
          :shadow-url="icon.shadowUrl"
          :icon-size="icon.iconSize"
          :icon-anchor="icon.iconAnchor"
          :popup-anchor="icon.popupAnchor"
          :shadow-size="icon.shadowSize"
        />
        <!-- 彈出視窗 -->
        <l-popup>
          {{ item.name }}
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>
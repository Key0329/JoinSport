import { createApp } from 'vue';
import { createPinia } from 'pinia';

import axios from 'axios';
import VueAxios from 'vue-axios';

import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Ripple from 'primevue/ripple';
import AutoComplete from 'primevue/autocomplete';
import Dropdown from 'primevue/dropdown';
import TabMenu from 'primevue/tabmenu';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Textarea from 'primevue/textarea';
import Steps from 'primevue/steps';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Calendar from 'primevue/calendar';
import Divider from 'primevue/divider';
import Toast from 'primevue/toast';
import InputNumber from 'primevue/inputnumber';

// 載入 vue2-leaflet，依照自己需要載入組件
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LIcon,
} from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
// import { Icon } from 'leaflet';

import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import router from './router';
import App from './App.vue';

import './assets/PrimeVueTheme/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import './assets/style.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(PrimeVue, { ripple: true });
app.use(LoadingPlugin);

// PrimeVue
app.component('PDialog', Dialog);
app.component('PButton', Button);
app.component('AutoComplete', AutoComplete);
app.component('PDropdown', Dropdown);
app.component('TabMenu', TabMenu);
app.component('PAvatar', Avatar);
app.component('AvatarGroup', AvatarGroup);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('PTextarea', Textarea);
app.component('PSteps', Steps);
app.component('InputText', InputText);
app.component('PPassword', Password);
app.component('PCalendar', Calendar);
app.component('PDivider', Divider);
app.component('PToast', Toast);
app.component('InputNumber', InputNumber);

// Map
app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);
app.component('l-popup', LPopup);
app.component('l-icon', LIcon);

app.config.productionTip = false;

app.directive('ripple', Ripple);

app.mount('#app');

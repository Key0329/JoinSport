import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';

import axios from 'axios';
import VueAxios from 'vue-axios';

import Steps from 'primevue/steps';
import Toast from 'primevue/toast';
import Editor from 'primevue/editor';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Ripple from 'primevue/ripple';
import PrimeVue from 'primevue/config';
import TabMenu from 'primevue/tabmenu';
import TabView from 'primevue/tabview';
import Dropdown from 'primevue/dropdown';
import TabPanel from 'primevue/tabpanel';
import Textarea from 'primevue/textarea';
import Password from 'primevue/password';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import PanelMenu from 'primevue/panelmenu';
import InputNumber from 'primevue/inputnumber';
import AvatarGroup from 'primevue/avatargroup';
import AutoComplete from 'primevue/autocomplete';

// 載入 vue2-leaflet，依照自己需要載入組件
import {
  LMap,
  LIcon,
  LPopup,
  LMarker,
  LTileLayer,
} from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
// import { Icon } from 'leaflet';

import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import router from './router';
import App from './App.vue';

import 'primevue/resources/themes/tailwind-light/theme.css';
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
app.component('PSteps', Steps);
app.component('PToast', Toast);
app.component('PAvatar', Avatar);
app.component('PButton', Button);
app.component('PEditor', Editor);
app.component('TabMenu', TabMenu);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('PDropdown', Dropdown);
app.component('PTextarea', Textarea);
app.component('PPassword', Password);
app.component('PCheckbox', Checkbox);
app.component('PCalendar', Calendar);
app.component('InputText', InputText);
app.component('PanelMenu', PanelMenu);
app.component('InputNumber', InputNumber);
app.component('AvatarGroup', AvatarGroup);
app.component('AutoComplete', AutoComplete);

// Map
app.component('l-map', LMap);
app.component('l-icon', LIcon);
app.component('l-popup', LPopup);
app.component('l-marker', LMarker);
app.component('l-tile-layer', LTileLayer);

app.component('QuillEditor', QuillEditor);

app.config.productionTip = false;

app.directive('ripple', Ripple);

app.mount('#app');

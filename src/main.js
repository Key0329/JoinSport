import { createApp } from 'vue';
import { createPinia } from 'pinia';

import axios from 'axios';
import VueAxios from 'vue-axios';

import { defineRule, Form, Field, ErrorMessage, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, loadLocaleFromURL } from '@vee-validate/i18n';

import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import router from './router';
import App from './App.vue';

import './assets/style.css';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

loadLocaleFromURL('./zh_TW.json');

configure({
  generateMessage: localize('zh_TW'),
  validateOnInput: true,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(LoadingPlugin);

app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');

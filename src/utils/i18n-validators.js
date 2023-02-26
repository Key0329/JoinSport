import * as validators from '@vuelidate/validators';
import { createI18n } from 'vue-i18n';
import zhTW from './locale/zh_TW.json';

const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW', // 預設語言為中文
  messages: {
    'zh-TW': zhTW,
  },
});

const { createI18nMessage } = validators;
const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) });

const required = withI18nMessage(validators.required);

export default required;

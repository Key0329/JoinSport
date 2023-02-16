/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb-base',
    '@vue/eslint-config-prettier',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue'],
      },
    },
    'import/core-modules': [
      'vite',
      '@vitejs/plugin-vue',
      '@rushstack/eslint-patch/modern-module-resolution',
      'vue-loading-overlay',
    ],
  },
};

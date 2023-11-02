import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Vue3Mq } from 'vue3-mq';

import './assets/css/fonts.css';
import './assets/css/reset.css';
import './assets/css/normalize.css';
import './style.css';

import App from './App.vue';

createApp(App)
  .use(createPinia())
  .use(Vue3Mq, {
    breakpoints: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  })
  .mount('#app');

import './assets/main.css';

import { createApp } from 'vue';
// definisikan app
import App from './App.vue';
// definisikan route
import router from './router';

// buat App yang akan menggunakan router dan tampilkan didalam id app
createApp(App).use(router).mount('#app');

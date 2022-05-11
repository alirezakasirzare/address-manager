import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// bootstrap
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap';

// custom
import './assets/style/main.scss';

// app
createApp(App).use(router).mount('#app');

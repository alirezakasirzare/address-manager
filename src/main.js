import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// bootstrap
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';

// custom
import './assets/style/main.scss';

// app
createApp(App).use(store).use(router).mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// bootstrap
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap';

// custom scc
import './assets/style/main.scss';

// app
const app = createApp(App);
app.use(router);

app.mount('#app');

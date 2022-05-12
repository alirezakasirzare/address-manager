import { createRouter, createWebHashHistory } from 'vue-router';

// views
import HomeView from '../views/HomeView.vue';
import AddAddress from '../views/AddAddress.vue';

// routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/add',
    name: 'add',
    component: AddAddress,
  },
];

// init
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

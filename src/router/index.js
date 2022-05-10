import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddAddress from '../views/AddAddress.vue';

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

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

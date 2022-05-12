import { createRouter, createWebHashHistory } from 'vue-router';

// views
import HomePage from '../views/HomePage.vue';
import AddAddress from '../views/AddAddress.vue';

// routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
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

import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Portfolio from '../components/Portfolio.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

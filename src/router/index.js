import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/main_components/Home.vue';
import About from '../components/main_components/About.vue';
import Portfolio from '../components/main_components/Portfolio.vue';
import Contact from '../components/main_components/Contact.vue';

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
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import HomePage from './pages/home.vue';
import NotFoundPage from './pages/not-found.vue';

export default [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '(.*)',
    component: NotFoundPage
  }
];

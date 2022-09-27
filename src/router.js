import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [{
  path: '/',
  component: () => import('./pages/PageIndex.vue'),
}];
export default createRouter({
  history: createWebHistory(), routes,
});

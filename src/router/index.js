import { createRouter, createWebHistory } from 'vue-router';
import home from '../pages/index.vue';
import quiz from '../pages/Quiz.vue';

const router = createRouter({
  // createWebHistory berguna untuk mengupdate URL pada browser
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quizes',
      component: home,
    },
    {
      path: '/quiz/:id',
      name: 'quiz',
      component: quiz,
    },
  ],
});

export default router;

<script setup>
  import { useRouter, useRoute } from 'vue-router';

  const router = useRouter();
  const route = useRoute();
  console.log(router);
  console.log(route);
  // data :quiz="questions" akan ditangkap di sini
  const { quiz } = defineProps(['quiz']);
  console.log(quiz);

  // sesuai nama function mana harus saya jelasin
  function showQuiz(id) {
    // push ke URL dengan nama quiz dan parameter id
    router.push({
      name: 'quiz',
      params: { id: id },
    });
  }
</script>

<template>
  <!-- *kedua cara bisa cuman nang tutor gawe @click dan id jangan lupa -->
  <div @click="showQuiz(q.id)" v-for="q in quiz" :key="q.id" class="">
    <!-- <router-link :to="`/quiz/${q.id}`" class=""> -->
    <img class="w-72" :src="`${q.img}`" :alt="`${q.title}`" />
    <div class="mt-2">
      <h2 class="font-semibold">{{ q.title }}</h2>
      <p>{{ q.questions.length }} Questions</p>
    </div>
    <!-- </router-link> -->
  </div>
  <!-- <router-view /> -->
</template>

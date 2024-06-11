<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
  // data :quiz="quiz" akan ditangkap di sini
  const { quiz } = defineProps(['quiz']);
  console.log(quiz);

  function showQuiz(id) {
    router.push({
      name: 'quiz',
      params: { id: id },
    });
  }
</script>

<template>
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

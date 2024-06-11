<script setup>
  import { ref, watch } from 'vue';
  import quiz from '../data/quizes.json';
  import quizCard from '../components/quizcard.vue';

  const questions = ref(quiz);
  const input = ref('');

  // input berguna sebagai trigger, jika data input berubah maka hasil pencarian akan berubah
  watch(input, () => {
    // filter quiz
    questions.value = quiz.filter((quiz) => {
      // kembalikan data yang telah difilter
      return quiz.title.toLowerCase().includes(input.value.toLocaleLowerCase());
    });
  });
</script>

<template>
  <header class="flex justify-around">
    <h1 class="text-xl">Quiz</h1>
    <input v-model.trim="input" class="px-2 py-1 border-none rounded-md outline-none bg-slate-200" type="text" name="" id="" />
  </header>
  <section class="flex flex-wrap justify-center mt-10 gap-x-3">
    <!-- <div class="" v-for="question in questions" :key="question.id">
        <img class="w-72" :src="`${question.img}`" :alt="`${question.title}`" />
        <div class="mt-2">
          <h2 class="font-semibold">{{ question.title }}</h2>
          <p>{{ question.questions.length }} Questions</p>
        </div>
      </div> -->
    <!-- :quiz="quiz" berguna untuk melempar data dari sini -->
    <quizCard :quiz="questions" />
  </section>
</template>

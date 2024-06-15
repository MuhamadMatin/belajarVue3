<script setup>
  import { ref, watch } from 'vue';
  import quiz from '../data/quizes.json';
  import quizCard from '../components/quizcard.vue';

  // ref pahamlah
  const questions = ref(quiz);
  const input = ref('');

  // input berguna sebagai trigger, jika data input berubah maka hasil pencarian akan berubah
  watch(input, () => {
    // filter quiz
    // questions.value akan berubah ketika input berubah juga
    questions.value = quiz.filter((quiz) => {
      // kembalikan data yang telah difilter dengan terlebih dahulu merubah ke lowercase
      return quiz.title.toLowerCase().includes(input.value.toLocaleLowerCase());
    });
  });
</script>

<template>
  <header class="flex justify-around">
    <h1 class="text-xl">Quiz</h1>
    <!-- *trim berguna untuk mengecek apakah ada spasi atau input kosong -->
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

    <!-- :quiz="questions" berguna untuk melempar data dari sini -->
    <!-- *:quiz adalah nama variabel yang akan digunakan ketika melempar -->
    <!-- *"questions" adalah data yang akan dilempar -->
    <quizCard :quiz="questions" />
  </section>
</template>

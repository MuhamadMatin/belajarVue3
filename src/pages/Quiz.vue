<script setup>
  import { computed, ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import quizcontent from '../components/quizcontent.vue';
  import quizheader from '../components/quizheader.vue';
  import quizResult from '../components/quizresult.vue';
  import quizes from '../data/quizes.json';

  const numberCorrect = ref(0);
  const showResult = ref(false);
  const route = useRoute();
  const id = parseInt(route.params.id);
  const quizIndex = ref(0);

  const quiz = quizes.find((quiz) => {
    return quiz.id === id;
  });
  // computed disarankan untuk menyimpan nilai hasil computed yang akan digunakan kembali
  const questionsPage = computed(() => {
    return `${quizIndex.value + 1} / ${quiz.questions.length}`;
  });
  const barPercentage = computed(() => {
    return `${((quizIndex.value + 1) / quiz.questions.length) * 100}%`;
  });
  function onSelectOption(option) {
    if (option.correct) {
      numberCorrect.value++;
    }
    if (quizIndex.value === quiz.questions.length - 1) {
      showResult.value = true;
      return;
    }
    quizIndex.value++;
  }
  // const questionsPage = ref(`${quizIndex.value + 1} / ${quiz.questions.length}`);

  // watch hanya melihat dan jika ada trigger
  // watch(
  //   () => quizIndex.value,
  //   () => {
  //     questionsPage.value = `${quizIndex.value + 1} / ${quiz.questions.length}`;
  //   }
  // );
</script>

<template>
  <div class="max-w-xl mx-auto">
    <quizheader :questionsPage="questionsPage" :barPercentage="barPercentage" />
    <quizcontent v-if="!showResult" :questions="quiz.questions[quizIndex]" @selectOption="onSelectOption" />
    <quizResult v-else :quizLength="quiz.questions.length" :correctAnswer="numberCorrect" />
    <!-- <button @click="quizIndex++" :disabled="quizIndex == quiz.questions.length - 1" class="block px-10 py-2 mx-auto mt-4 text-white rounded-md bg-slate-600">Next</button> -->
  </div>
</template>

<style scoped></style>

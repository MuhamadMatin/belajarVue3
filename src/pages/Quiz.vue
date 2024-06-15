<script setup>
  import { computed, ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import quizcontent from '../components/quizcontent.vue';
  import quizheader from '../components/quizheader.vue';
  import quizResult from '../components/quizresult.vue';
  import quizes from '../data/quizes.json';

  // definisikan route
  const route = useRoute();
  // id berasal dari URL
  const id = parseInt(route.params.id);
  const numberCorrect = ref(0);
  const showResult = ref(false);
  const quizIndex = ref(0);

  // mencari quiz
  const quiz = quizes.find((quiz) => {
    return quiz.id === id;
  });
  // computed disarankan untuk menyimpan nilai hasil computed yang akan digunakan kembali
  const questionsPage = computed(() => {
    // mengembalikan total dari quiz contoh 2/10 soal
    return `${quizIndex.value + 1} / ${quiz.questions.length}`;
  });

  // bar persentase
  const barPercentage = computed(() => {
    // menhembalikan total % untuk total bar
    return `${((quizIndex.value + 1) / quiz.questions.length) * 100}%`;
  });

  // fungsi ketika jawaban dipilih
  function onSelectOption(option) {
    // jika jawaban benar
    if (option.correct) {
      // number correct akan bertambah
      numberCorrect.value++;
    }

    // meencari total soal
    if (quizIndex.value === quiz.questions.length - 1) {
      showResult.value = true;
      return;
    }

    // jika salah maka soal akan berlanjut
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
    <!-- *:questionsPage= adalah nama variabel yang akan digunakan ketika melempar -->
    <!-- *"questionsPage" adalah data yang akan dilempar -->
    <quizheader :questionsPage="questionsPage" :barPercentage="barPercentage" />
    <!-- *:questions="quiz.questions[quizIndex] index questions digunakan untuk menampilkan pilihan ABS dan konten -->
    <quizcontent v-if="!showResult" :questions="quiz.questions[quizIndex]" @selectOption="onSelectOption" />
    <!-- *ketika soal udah habis maka akan menampilkan v-else -->
    <quizResult v-else :quizLength="quiz.questions.length" :correctAnswer="numberCorrect" />
    <!-- <button @click="quizIndex++" :disabled="quizIndex == quiz.questions.length - 1" class="block px-10 py-2 mx-auto mt-4 text-white rounded-md bg-slate-600">Next</button> -->
  </div>
</template>

<style scoped></style>

<script setup>
  import { useRouter } from 'vue-router';

  // emit berfungsi untuk mendefinisikan event yang bisa disalurkan ke komponen lain
  const emit = defineEmits(['selectOption']);
  const router = useRouter();
  // cara import ketika berhasil dilempar dari quiz pages
  const { questions } = defineProps(['questions']);
  // fungsi dari emit yang akan disalurkan ke induknya kembali
  function selectedQuestion(option) {
    emit('selectOption', option);
  }
</script>

<template>
  <section class="mt-6">
    <h1 class="text-3xl font-bold">{{ questions.text }}</h1>
  </section>
  <section class="grid mt-3 gap-y-7">
    <!-- *pengulangan jawaban yang akan disalurkan ke induknya -->
    <div v-for="question in questions.answers" :key="question.id" @click="selectedQuestion(question)" class="flex items-center cursor-pointer">
      <p class="px-2 py-2 text-xl font-bold bg-red-400">{{ question.label }}.</p>
      <div class="w-full py-2 text-lg bg-slate-400">{{ question.text }}</div>
    </div>
  </section>
</template>

<style scoped></style>

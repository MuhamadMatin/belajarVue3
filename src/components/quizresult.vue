<script setup>
  const { quizLength, correctAnswer } = defineProps(['quizLength', 'correctAnswer']);
</script>

<template>
  <section class="flex flex-col items-center justify-center">
    <h1 class="mt-3 text-xl">Score:</h1>
    <h2 class="my-5 text-3xl">{{ correctAnswer }} / {{ quizLength }}</h2>
    <router-link class="block px-10 py-2 mx-auto mt-4 text-white rounded-md w-fit bg-slate-600" to="/">Home</router-link>
  </section>
</template>

<style scoped></style>

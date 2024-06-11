<script setup>
  const { questionsPage, barPercentage } = defineProps(['questionsPage', 'barPercentage']);
</script>

<template>
  <header class="mt-5">
    <h4 class="">Question {{ questionsPage }}</h4>
    <div class="w-full h-10 mt-1.5 border border-slate-500">
      <div class="h-full bg-green-500 bar" :style="{ width: barPercentage }"></div>
    </div>
  </header>
</template>

<style scoped>
  .bar {
    width: 0%;
  }
</style>

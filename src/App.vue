<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import RetroColumn from './components/RetroColumn.vue'
</script>

<template>
  <div class="grid grid-cols-3 h-full">
    <RetroColumn heading="Happy" class="bg-green-200" />
    <RetroColumn heading="Meh / Wondering" class="bg-yellow-200" />
    <RetroColumn heading="Sad" class="bg-red-200" />
  </div>
</template>

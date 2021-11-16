<script setup>
import { computed } from '@vue/reactivity'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import RetroColumn from './components/RetroColumn.vue'
</script>

<script>

export default {
  data() {
    return {
      items: [
        {
          title: 'First item',
          id: 1,
          column: 1,
        },
        {
          title: 'Second item',
          id: 2,
          column: 1,
        },
        {
          title: 'Third item',
          id: 3,
          column: 2,
        },
        {
          title: 'Fourth item',
          id: 4,
          column: 2,
        },
      ]
    }
  },

  computed: {
    listOne() {
      return this.items.filter(item => item.column === 1)
    },
    listTwo() {
      return this.items.filter(item => item.column === 2)
    }
  }
}

</script>

<template>
  <div class="grid grid-cols-3 h-full">
    <RetroColumn heading="Happy" :items=listOne class="bg-green-200" />
    <RetroColumn heading="Meh / Wondering" :items=listTwo class="bg-yellow-200" />
    <RetroColumn heading="Sad" class="bg-red-200" />
  </div>
</template>

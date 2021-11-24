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
  methods: {
      addItem (title, column) {
        if (title.length == 0) {
          return
        }
        
        this.items.push({
          title: title,
          id: this.items.length + 1,
          column: column,
        })
      },
  },
  computed: {
    listOne() {
      return this.items.filter(item => item.column === 1)
    },
    listTwo() {
      return this.items.filter(item => item.column === 2)
    },
    listThree() {
      return this.items.filter(item => item.column === 3)
    },
  }
}

</script>

<template>
  <div class="grid grid-cols-3 h-full">
    <RetroColumn heading="Happy" :items=listOne color="green" hint="I'm glad that..." v-bind:column=1 @submit-form="addItem" />
    <RetroColumn heading="Meh / Wondering" :items=listTwo color="yellow" hint="I'm wondering..." v-bind:column=2 @submit-form="addItem" />
    <RetroColumn heading="Sad" :items=listThree color="red" hint="I'm sad that..." v-bind:column=3 @submit-form="addItem" />
  </div>
</template>

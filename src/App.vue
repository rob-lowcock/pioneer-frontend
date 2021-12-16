<script setup>
import { computed } from '@vue/reactivity'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import RetroColumn from './components/RetroColumn.vue'
</script>

<script>

export default {
  created() {
    fetch('http://localhost:8080/retrocards')
      .then(res => res.json())
      .then(data => {
        this.items = data
      })
  },
  data() {
    return {
      items: [
        {}
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
  <h1 class="text-3xl text-gray-500 px-4 py-6">Retro</h1>
  <div class="grid grid-cols-3 h-full">
    <RetroColumn heading="We're happy about" :items=listOne color="green" hint="I'm glad that..." v-bind:column=1 @submit-form="addItem" />
    <RetroColumn heading="We're wondering about" :items=listTwo color="yellow" hint="I'm wondering..." v-bind:column=2 @submit-form="addItem" />
    <RetroColumn heading="We're sad about" :items=listThree color="red" hint="I'm sad that..." v-bind:column=3 @submit-form="addItem" />
  </div>
</template>

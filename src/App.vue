<script setup>
import { computed } from '@vue/reactivity'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import RetroColumn from './components/RetroColumn.vue'
</script>

<script>

export default {
  created() {
    fetch(import.meta.env.VITE_API_URL + '/retrocards')
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
  sockets: {
    newCard(card) {
      this.items.push(card)
    },
    updateCard(card) {
      this.items = this.items.map(item => {
        if (item.id === card.id) {
          return {
            ...item,
            ...card
          }
        }
        return item
      })
    }
  },
  methods: {
      addItem (title, column) {
        fetch(import.meta.env.VITE_API_URL + '/retrocards', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title,
            column
          })
        })
        .then(res => res.json())
      },
      focus (id) {
        this.items = this.items.map(item => {
          if (item.id === id) {
            return {
              ...item,
              focused: true
            }
          }
          return {
            ...item,
            focused: false
          }
        })
      },
      isCard (evt) {
        // Worst hack I've done in a long time
        if (evt.target.tagName == 'path') {
          return true
        }

        if (evt.target.classList.contains('retro-item')) {
          return true
        }

        if (evt.target.parentNode.classList.contains('retro-item')) {
          return true
        }

        if (evt.target.parentNode.parentNode.classList.contains('retro-item')) {
          return true
        }

        if (evt.target.parentNode.parentNode.parentNode.classList.contains('retro-item')) {
          return true
        }

        return false
      },

      unfocus (evt) {
        var iscard = this.isCard(evt)

        if (iscard) {
          return
        }

        this.items = this.items.map(item => {
            return {
              ...item,
              focused: false
            }
          }
        )
      },
  },
  computed: {
    listOne() {
      return this.items.filter(item => item.column === 1 && item.archived === false)
    },
    listTwo() {
      return this.items.filter(item => item.column === 2 && item.archived === false)
    },
    listThree() {
      return this.items.filter(item => item.column === 3 && item.archived === false)
    },
    focusedItem() {
      return this.items.find(item => item.focused === true) !== undefined
    },
  }
}

</script>

<template>
  <div class="h-screen" @click="unfocus($event)">
  <h1 class="text-3xl text-gray-500 px-4 py-6">Retro</h1>
  <div class="grid grid-cols-3 h-full">
    <RetroColumn heading="We're happy about" :items=listOne color="green" hint="I'm glad that..." v-bind:column=1 @submit-form="addItem" @focus-item="focus" :focused=focusedItem />
    <RetroColumn heading="We're wondering about" :items=listTwo color="yellow" hint="I'm wondering..." v-bind:column=2 @submit-form="addItem" @focus-item="focus" :focused=focusedItem />
    <RetroColumn heading="We're sad about" :items=listThree color="red" hint="I'm sad that..." v-bind:column=3 @submit-form="addItem" @focus-item="focus" :focused=focusedItem />
  </div>
  </div>
</template>

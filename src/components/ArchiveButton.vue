<script>
export default {
  data: function () {
    return {
      hideConfirm: true,
    }
  },
  methods: {
    archive () {
      fetch(import.meta.env.VITE_API_URL + '/retrocards', {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          operation: "archive"
        })
      })
      this.hideConfirm = true
    },
  }
}
</script>

<template>
  <div class="flex flex-row text-center text-white">
    <button class="bg-blue basis-full block w-100 px-4 py-2" @click="hideConfirm = !hideConfirm">Clear Board</button>
  </div>
  <div class="flex flex-row text-center text-white" v-bind:class="{'hidden':hideConfirm}">
    <button class="basis-1/2 bg-green" @click="archive">Yes</button>
    <button class="basis-1/2 bg-red" @click="hideConfirm = true">Cancel</button>
  </div>
</template>
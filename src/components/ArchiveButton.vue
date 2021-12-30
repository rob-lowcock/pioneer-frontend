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
    <button class="bg-blue basis-full block w-100 px-8 py-2 hover:bg-navy" @click="hideConfirm = !hideConfirm">Clear Board</button>
  </div>
  <div class="flex flex-row text-center text-white" v-bind:class="{'hidden':hideConfirm}">
    <button class="basis-1/2 bg-green hover:bg-emerald-900 px-2" @click="archive">Confirm</button>
    <button class="basis-1/2 bg-red hover:bg-rose-900 px-2" @click="hideConfirm = true">Cancel</button>
  </div>
</template>
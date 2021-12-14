<script setup>
defineProps({
    heading: String,
    color: String,
    items: Array,
    column: Number,
    method: Function,
    hint: String,
})

import RetroCard from './RetroCard.vue';
</script>

<script>
export default {
    methods: {
        startDrag (evt, item) {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemID', item.id)
        },
        onDrop (evt, list) {
            const itemID = evt.dataTransfer.getData('itemID')
            const items = this.items.filter(item => item.id == itemID)
            item.list = list
        },
        submit (evt) {
            evt.preventDefault()
            const form = evt.target
            this.$emit("submit-form", form.title.value, this.column)
            form.reset()
        },
    },
    computed: {
        headingColor() {
            return "bg-"+this.color+"" || 'bg-white'
        },
        borderColor() {
            return "focus:border-"+this.color+"" || "focus:border-blue"
        },
        icon() {
            return new URL('../assets/retro/'+this.color+'.svg', import.meta.url).href
        },
    },
}
</script>

<template>
    <div class="drop-zone p-4">
        <h1 class="py-2 text-l font-bold text-gray-500"><img :src="icon" alt="" class="float-left pr-2">{{heading}}</h1>
        <form @submit="submit($event)" :class="headingColor" class="rounded-md my-2 p-2">
            <div class="flex">
            <input type="text" name="title" :placeholder="hint" :class="borderColor" class="flex-1 p-2">
            <input type="submit" value="Add" class="ml-2 flex-none p-2 bg-white text-gray-600 justify-self-end">
            </div>
        </form>
        <div v-for='item in items' :key='item.title' draggable="true" @dragstart="startDrag($event, item)" class="my-2 p-2 shadow-md bg-white">
            <RetroCard :item='item' />
        </div>
    </div>
</template>